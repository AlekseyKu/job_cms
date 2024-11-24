// src/middlewares/siteResolver/index.js

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    const host = ctx.request.header.host;

    try {
      // Найти сайт по домену
      const site = await strapi.entityService.findMany('api::all-site.all-site', {
        filters: { siteDomain: host },
        limit: 1,
      });

      if (site && site.length > 0) {
        ctx.state.site = site[0]; // Сохранение данных сайта в контексте запроса
      } else {
        ctx.throw(404, 'Сайт не найден');
      }
    } catch (error) {
      console.error("Ошибка в middleware siteResolver:", error);
      ctx.throw(500, 'Ошибка сервера');
    }

    await next();
  };
};
