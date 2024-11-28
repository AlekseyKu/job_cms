/**
 * all-site controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::all-site.all-site');



// src/api/all-sites/controllers/all-sites.ts
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::all-site.all-site', ({ strapi }) => ({
  async find(ctx) {
    // Используем сервис Strapi для получения данных с популяцией всех необходимых компонентов
    const allSites = await strapi.entityService.findMany('api::all-site.all-site', {
      populate: {
        home_page: {
          populate: ['pageImg', 'pageBg'],
          // populate: ['pageBg'],
        },
        header: true,
        footer: true,
        faq: {
          populate: ['faqRow'],
        },
        editor_info: true,
        favicon: true,
        siteLogo: true,
        page_sections: true,
        promoImg: true,
      },
    });
    
    // Оборачиваем результат в объект, чтобы соответствовать стандартному формату Strapi
    ctx.body = { data: allSites };
  },
}));


