# Manual MVP notes

## Create a new partner manually

1. Create a new auth email/password user via Firebase Console.
2. Create a new profile in `/partners` collection with the same UID.
3. Put the partner places' IDs to the profile for connection.

## Share code between Firebase Functions and React app

- Keep the code inside `functions/src/frontback-shared`.
- For the Functions import as usual.
- For the React do `yarn add -D ./functions/src/frontback-shared` and then `import {MyModule} from 'frontback-shared'`.
