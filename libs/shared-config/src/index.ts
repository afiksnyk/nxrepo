export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}

export interface ApiConfig {
  port: number;
  host: string;
  cors: {
    origin: string[];
    credentials: boolean;
  };
  rateLimit: {
    windowMs: number;
    max: number;
  };
}

export interface AuthConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
  bcryptRounds: number;
  sessionTimeout: number;
}

export interface AppConfig {
  environment: 'development' | 'staging' | 'production';
  logLevel: 'error' | 'warn' | 'info' | 'debug';
  database: DatabaseConfig;
  api: ApiConfig;
  auth: AuthConfig;
}

export const defaultConfig: Partial<AppConfig> = {
  environment: 'development',
  logLevel: 'info',
  api: {
    port: 3000,
    host: '0.0.0.0',
    cors: {
      origin: ['http://localhost:4200', 'http://localhost:3000'],
      credentials: true,
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
  },
  auth: {
    jwtSecret: 'your-secret-key',
    jwtExpiresIn: '24h',
    bcryptRounds: 10,
    sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
  },
};

export function validateConfig(config: Partial<AppConfig>): AppConfig {
  const merged = { ...defaultConfig, ...config } as AppConfig;
  
  if (!merged.database) {
    throw new Error('Database configuration is required');
  }
  
  if (!merged.auth?.jwtSecret || merged.auth.jwtSecret === 'your-secret-key') {
    throw new Error('JWT secret must be provided and should not use default value');
  }
  
  return merged;
}
