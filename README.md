# CRM v1 notes

## Create new partner manually

1. Create new auth email/password user via Firebase Console.
2. Create new profile in `/partners` collection with the same ID.
3. Put the partner places' IDs to the profile for connection.
4. Put the partnerId to place for connection.

## Share code between Firebase Functions and React app

- Keep the code inside `functions/src/octoshared-ts`.
- For the Functions import as usual.
- For the React do `yarn add -D ./functions/src/octoshared-ts` and then `import { name } from 'octoshared-ts'`.
