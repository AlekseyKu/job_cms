/**
 * all-site router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::all-site.all-site');

// import { factories } from '@strapi/strapi';

// export default {
//   routes: [
//     {
//       method: 'GET',
//       path: '/',
//       handler: 'all-site.find',
//       config: {
//         middlewares: ['global::siteResolver'], // Применяем кастомный middleware
//       },
//     },
//     {
//       method: 'GET',
//       path: '/:id',
//       handler: 'all-site.findOne',
//       config: {
//         middlewares: ['global::siteResolver'],
//       },
//     },
//   ],
// };
