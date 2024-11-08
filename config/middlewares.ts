  export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // Разрешить загрузку скриптов и данных для CKEditor
          'script-src': ["'self'", 'cdn.ckeditor.com', 'https:'],
          'connect-src': ["'self'", 'cdn.ckeditor.com', 'blob:', 'data:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'cdn.ckeditor.com',
            'dl.airtable.com',
            's3.amazonaws.com',
            'strapi.io',
          ],
          'style-src': [
            "'self'",
            "'unsafe-inline'",
            'cdn.ckeditor.com',
          ],
          'font-src': ["'self'", 'cdn.ckeditor.com'],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://bison-casino.com.pl', 'https://bison-casino.com.pl', 'http://localhost:3000', 
      'http://localhost:1337', 'http://62.84.182.126:1337', 'http://62.84.182.126', 'http://62.84.182.126:3000'], // Разреши свои домены
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
