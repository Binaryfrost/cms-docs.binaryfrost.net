---
title: Configuration Reference
---

For instructions on how to configure SnowCMS, see [Configuration](/admin/configuration/).

:::note
It is recommended to use environmental variables for sensitive information instead of hard-coding strings into the config.
:::

All configuration options are required unless otherwise stated.

## port

**Type**: `number`

The port SnowCMS runs on

## secret

**Type**: `string`

Secret used for signing HMACs and encrypting SSO cookie

## sso

**Type**: `object`

SSO configuration, optional

### clientId

**Type**: `string`

OpenID Connect client ID

### clientSecret

**Type**: `string`

OpenID Connect client secret

### issuer

**Type**: `string`

OpenID Connect issuer

### callbackUrl

**Type**: `string`

The URL the SSO server should redirect to after a successful login. It should be `https://{snowcms_domain}/api/login/sso/callback`, and this must be added as a callback URL on the SSO provider.

### forceSso

**Type**: `boolean`

If enabled, the login form will be disabled and all logins will be handled using SSO. Optional.

### defaultRole

**Type**: `Role`

If no account exists in SnowCMS with the user's email, a new one will be created with this role. Optional, defaults to `USER`.

## media

**Type**: `object`

Media configuration

### maxSize

**Type**: `number`

The maximum size for uploaded files. Optional, defaults to 52428800 (50MB).

### maxStorage

**Type**: `number`

The maximum storage per website. Optional, defaults to 5368709120 (5GB).

### s3

**Type**: `object`

S3 configuration. You can use any S3-compatible storage.

:::note
As Media uploads use pre-signed PUT URLs, you will need to ensure that your bucket has the appropriate CORS configuration. If you're using Backblaze B2, [this CORS policy](/b2-cms-cors.json) can be applied using the B2 CLI.
:::

#### endpoint

**Type**: `string`

S3 endpoint

#### region

**Type**: `string`

S3 region

#### bucket

**Type**: `string`

S3 bucket

#### accessKeyId

**Type**: `string`

S3 access key ID

#### secretAccessKey

**Type**: `string`

S3 secret access key

#### publicUrl

**Type**: `string`

The URL that media assets will be accessed through. Ensure that this is publicly accessible without authorization.

:::note
Changes to the `publicUrl` will reflect in the [Media Input](/admin/inputs/media-input/), but not any other Inputs.
:::

## database

**Type**: `object`

MySQL configuration

### host

**Type**: `string`

IP address/domain name of MySQL server

### port

**Type**: `number`

MySQL server port. Optional, defaults to 3306

### database

**Type**: `string`

MySQL database name

### username

**Type**: `string`

MySQL username

### password

**Type**: `string`

MySQL password

## redis

**Type**: `RedisClientOptions`

Redis configuration