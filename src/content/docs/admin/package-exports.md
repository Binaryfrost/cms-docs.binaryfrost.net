---
title: Package Exports
---

The NPM module has some exports to enable customizing the CMS.

## @binaryfrost/snowcms

This module exports code shared between the client and the server. Not all exports can be used on both sides.

### defineConfig

Helper function to provide types to the main config file.

### defineInputPluginConfig

Helper function to provide types to the Input plugin config file.

### defineInputPlugin

Helper function to provide types to Input plugins.

### Plugin (type)

The plugin type.

### serverInputFetch

As Inputs are shared between the server and client, attempting to access the database
directly breaks the build. To get around that, use this function to send an HTTP request to server
from itself with the user's auth token to get information from the server.

Can only be used on server-side functions on Inputs.

### Input (type)

The Input type.

### ExpressError

A simple error class that allows you to set the HTTP status code (defaults to 400).

### useInputValidator

A hook that registers your validator function, runs it as needed, and returns any errors
either as a string or object, depending on your validation function's return type.

The error returned will be null if there are no errors.

### useSettingsHandler

A hook that handles settings changes and merges the
initial and current settings.

Returns the merged settings and a change function.

## @binaryfrost/snowcms/server

This module exports server-side code.

:::danger
Do not attempt to use this module client-side or in Inputs. Doing so may leak sensitive config to the client.
:::

### defineHookPluginConfig

Helper function to provide types to the hook plugin config file.

### defineHookPlugin

Helper function to provide types to hook plugins.

### defineRoutePluginConfig

Helper function to provide types to the route plugin config file.

### defineRoutePlugin

Helper function to provide types to route plugins.

### asyncRouteFix

Helper function that catches errors thrown in async routes to prevent the server from crashing.

### getConfig

Returns the config.

### handleAccessControl

Function type: `(user: UserWithWebsites, requiredRole: Role, websiteId?: string) => void`

This function handles access control, taking into account role weights and `ADMIN` users having full access.

### db

Calling this function returns a Knex object with access to the database.

### dbUtil

Returns database utility functions.

### redis

Calling this function returns a Redis client.

### WebsiteHookCallReasons

The reason a website's HTTP hook is being called.

### WebsiteHookCallTargets

The target that triggered the website's HTTP hook is being called.
