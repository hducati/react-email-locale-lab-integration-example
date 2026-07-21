import { browserTranslatorProvider, defineEmailLab } from 'react-email-locale-lab';
import { viteSourceUpdates } from 'react-email-locale-lab/vite';
import { OrderConfirmedEmail } from './emails/order-confirmed';
import { PasswordResetEmail } from './emails/password-reset';
import { ProductDigestEmail } from './emails/product-digest';
import { LayoutStressTestEmail } from './emails/layout-stress-test';
import localePolicy from '../locale-lab.config';

export default defineEmailLab({
  ...localePolicy,
  routeBasePath: '/preview',
  sourceUpdates: viteSourceUpdates(import.meta.hot, { watchPaths: ['src/emails'] }),
  provider: browserTranslatorProvider(),
  templates: {
    order: {
      name: 'Order confirmed',
      component: OrderConfirmedEmail,
    },
    passwordReset: {
      name: 'Password reset',
      component: PasswordResetEmail,
    },
    productDigest: {
      name: 'Product digest · rich content',
      component: ProductDigestEmail,
    },
    layoutStressTest: {
      name: 'Layout stress test · intentionally fragile',
      component: LayoutStressTestEmail,
    },
  },
});
