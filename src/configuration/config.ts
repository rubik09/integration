import * as dotenv from 'dotenv';
dotenv.config();
const { HTTP_PORT, MONGO_DB } = process.env;
export default (): any =>
  ({
    API_PREFIX: '/api',
    API_VERSION: '/v1',
    HTTP_PORT: Number(HTTP_PORT) || 8000,
    MONGO_DB: MONGO_DB,
  }) as const;
