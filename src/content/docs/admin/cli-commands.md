---
title: CLI Commands
---

```sh
npx snowcms {command}
```

If no accounts exist in the database, an account with the `ADMIN` role will be created. The login details for this account will be logged to the console.

## dev

Creates a development build and starts a server. Whenever changes are made, the frontend and/or server will be reloaded.

## build

Creates a production build at `dist`. It will also copy all dependencies required for production.

To run this build, set your working directory to `dist/server` and run `node server.mjs`. In a production setup, you should use a process manager such as PM2.

:::tip
Make sure the system running the build runs the same (or a similar) operating system to the one that runs the CMS as some dependencies make use of native modules.
:::