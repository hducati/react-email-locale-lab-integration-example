import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { EmailLabApp } from 'react-email-locale-lab';
import 'react-email-locale-lab/styles.css';
import config from './locale-lab-config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmailLabApp config={config} />
  </StrictMode>,
);
