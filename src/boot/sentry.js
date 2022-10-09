import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';
import { version } from 'app/package.json';

export default ({ app, router }) => {
  if (process.env.PROD) {
    Sentry.init({
      app,
      dsn: process.env.SENTRY_DSN,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.vueRouterInstrumentation(router),
          tracingOrigins: ['localhost', /^\//],
        }),
      ],
      release: `v${version}`,
      environment: process.env.ENVIRONMENT,
      ignoreErrors: ['ResizeObserver loop limit exceeded'],
      tracesSampleRate: 1.0,
    });
  }
};
