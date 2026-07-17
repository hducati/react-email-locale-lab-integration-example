# React Email Locale lab Integration

This project is a simple integration created to test the viability of the `react-email-locale-lab` library.

The idea for the library came from an internal need I encountered while working on a company project: previewing React Email templates in multiple languages while editing them. This repository provides a small, realistic environment for validating that workflow before the library is further refined.

It contains regular React Email templates connected to the local multi-language preview library. The current goal is only to prove that the integration works and that the proposed developer experience is feasible.

## Running locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4174/preview/order](http://localhost:4174/preview/order), select the desired languages and edit a template in `src/emails`.

This is a proof of concept. Features such as CI integration, localization workflows and production-ready translation providers are intentionally outside its current scope Will test this on an actual product with React email.
