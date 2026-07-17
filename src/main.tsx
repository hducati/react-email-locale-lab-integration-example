import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { EmailLabApp } from 'react-email-locale-lab';
import 'react-email-locale-lab/styles.css';
import './app-shell.css';
import config from './locale-lab-config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmailLabApp config={config} />
    <Analytics />
  </StrictMode>,
);
