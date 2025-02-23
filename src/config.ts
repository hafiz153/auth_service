import 'dotenv/config';
export interface IAppConfig {
  port: number;
  redisURL: string;
  redisPassword: string;
  mongoURL: string;
  mongoUsername: string;
  mongoPassword: string;
  jwtSecret: string;
  jwtRefreshSecret: string;
}
const config = (): IAppConfig => {
  const env = process.env;
  // Validate required environment variables
  const requiredEnv = ['MONGO_URL', 'REDIS_URL', 'PORT','JWT_SECRET','JWT_REFRESHTOKEN_SECRET'];
  requiredEnv.forEach((key) => {
    if (!env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });

  // Parse and validate port
  const tmpPort = env.PORT || '3000';
  const port = parseInt(tmpPort, 10);
  if (isNaN(port)) {
    throw new Error(`Invalid PORT value: ${env.PORT}`);
  }

  return {
    port,
    redisURL: env.REDIS_URL || '',
    redisPassword: env.REDIS_PASSWORD || '',
    mongoURL: env.MONGO_URL || '',  
    mongoUsername:env.MONGO_USERNAME || '',
    mongoPassword: env.MONGO_PASSWORD || '',
    jwtSecret: env.JWT_SECRET || '',
    jwtRefreshSecret: env.JWT_REFRESHTOKEN_SECRET || '',
  };
};

export default config();
