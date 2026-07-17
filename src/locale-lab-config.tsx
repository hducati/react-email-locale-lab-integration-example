import { browserTranslatorProvider, defineEmailLab } from 'react-email-locale-lab';
import { OrderConfirmedEmail } from './emails/order-confirmed';
import { PasswordResetEmail } from './emails/password-reset';
import { ProductDigestEmail } from './emails/product-digest';
import { LayoutStressTestEmail } from './emails/layout-stress-test';

export default defineEmailLab({
  routeBasePath: '/preview',
  sourceLocale: { code: 'en', label: 'English' },
  locales: [
    { code: 'pt-BR', translationCode: 'pt', label: 'Português (Brasil)' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
  ],
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
