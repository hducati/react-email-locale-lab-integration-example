# React Email Locale Lab integration

This repository is a working example of adding [`react-email-locale-lab`](https://www.npmjs.com/package/react-email-locale-lab) to an existing React Email project.

It contains regular React Email templates and demonstrates the convention-based setup introduced in Locale Lab 0.6: the CLI owns the development host and discovers templates automatically, so the consuming project does not need a second Vite bootstrap or a manually maintained template registry.

## Requirements

- Node.js 20.19 or newer, or Node.js 22.12 or newer
- pnpm 10 or a compatible package manager

## Setup

```bash
pnpm install
```

Locale policy lives in [`locale-lab.config.ts`](./locale-lab.config.ts). It contains only the source locale and the target locales available for comparison:

```ts
import { defineEmailLabConfig } from 'react-email-locale-lab/config';

export default defineEmailLabConfig({
  sourceLocale: { code: 'en', label: 'English' },
  locales: [{ code: 'de', label: 'Deutsch' }],
});
```

The templates in this example live under `src/emails`, so the development script supplies that directory explicitly:

```json
{
  "scripts": {
    "dev": "locale-lab dev --dir src/emails"
  }
}
```

React Email's default convention is `./emails`. Projects using that location can run `locale-lab dev` without `--dir`.

## Run the Locale Lab

```bash
pnpm dev
```

Open [http://localhost:4174/preview/order-confirmed](http://localhost:4174/preview/order-confirmed), select up to three target languages, and edit a template under `src/emails`. Locale Lab automatically discovers template modules, reuses their React Email `PreviewProps`, and refreshes the comparison when source files change.

The browser's built-in Translator API is used by default, so no translation provider configuration is required for this example.

## React Email preview

The regular React Email preview remains available independently:

```bash
pnpm email:dev
```

It runs at [http://localhost:3000](http://localhost:3000).

## Production demo

The repository retains an advanced embedded host for its deployable demo. It reuses the same locale policy from `locale-lab.config.ts`; the extra files under `src/` are deployment infrastructure and are not required by projects using the CLI-only development workflow.

Locale Lab translations are stress-test fixtures for visual inspection. They do not replace reviewed application translations or email-client compatibility testing.
