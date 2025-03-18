declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    SERVER_URL: string;
    // SENTRY
    SENTRY_AUTH_TOKEN: string;
    SENTRY_ORG: string;
    SENTRY_PROJECT: string;
    SENTRY_RELEASE: string;
  }
}
