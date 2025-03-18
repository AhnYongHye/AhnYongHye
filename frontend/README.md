# WEB_PACK REACT BOILERPLATE

1. `webpack.common.js` 를 변경합니다.

```ts
  sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'matthew',
      project: 'matthew',
      sourcemaps: {
        filesToDeleteAfterUpload: '**/*.js.map',
      },
    }),
```
