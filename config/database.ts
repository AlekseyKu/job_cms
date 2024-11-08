// config/database.ts

export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '62.84.182.126'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'cms_strapi'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'TkDmf84-'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: { min: 2, max: 10 },
    acquireConnectionTimeout: 60000,
  },
});
