import * as dotenv from 'dotenv';
dotenv.config();
const { HTTP_PORT, DB_HOST, MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, DB_DATABASE, DB_AUTH_SOURCE } =
  process.env;
export default (): any =>
  ({
    API_PREFIX: '/api',
    API_VERSION: '/v1',
    HTTP_PORT: Number(HTTP_PORT) || 8000,
    MONGO_DB_SETTINGS: {
      host: DB_HOST,
      username: MONGO_INITDB_ROOT_USERNAME,
      password: MONGO_INITDB_ROOT_PASSWORD,
      database: DB_DATABASE,
      authSource: DB_AUTH_SOURCE,
    },
  }) as const;
