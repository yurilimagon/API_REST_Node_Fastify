import type { Knex } from 'knex'

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite',
    connection: {
      filename: './db/app.db',
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
    },
  },

  test: {
    client: 'sqlite',
    connection: {
      filename: './db/test.db',
    },
    useNullAsDefault: true,
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

module.exports = config
