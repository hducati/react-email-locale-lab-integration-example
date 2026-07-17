import { browserTranslatorProvider, defineEmailLab } from 'react-email-locale-lab';
import { OrderConfirmedEmail } from './emails/order-confirmed';
import { PasswordResetEmail } from './emails/password-reset';
import { ProductDigestEmail } from './emails/product-digest';
import { LayoutStressTestEmail } from './emails/layout-stress-test';

export default defineEmailLab({
  routeBasePath: '/preview',
  sourceLocale: { code: 'en', label: 'English' },
  locales: [
    { code: 'ar', label: 'العربية' },
    { code: 'bg', label: 'Български' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'cs', label: 'Čeština' },
    { code: 'da', label: 'Dansk' },
    { code: 'de', label: 'Deutsch' },
    { code: 'el', label: 'Ελληνικά' },
    { code: 'es', label: 'Español' },
    { code: 'fi', label: 'Suomi' },
    { code: 'fr', label: 'Français' },
    { code: 'he', label: 'עברית' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'hr', label: 'Hrvatski' },
    { code: 'hu', label: 'Magyar' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'it', label: 'Italiano' },
    { code: 'ja', label: '日本語' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ko', label: '한국어' },
    { code: 'lt', label: 'Lietuvių' },
    { code: 'mr', label: 'मराठी' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'no', label: 'Norsk' },
    { code: 'pl', label: 'Polski' },
    { code: 'pt-BR', translationCode: 'pt', label: 'Português (Brasil)' },
    { code: 'ro', label: 'Română' },
    { code: 'ru', label: 'Русский' },
    { code: 'sk', label: 'Slovenčina' },
    { code: 'sl', label: 'Slovenščina' },
    { code: 'sv', label: 'Svenska' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'te', label: 'తెలుగు' },
    { code: 'th', label: 'ไทย' },
    { code: 'tr', label: 'Türkçe' },
    { code: 'uk', label: 'Українська' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'zh', label: '中文（简体）' },
    { code: 'zh-Hant', label: '中文（繁體）' },
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
