---
title: User
---

A link to your account settings can be found at the bottom of the sidebar.

Here you can change your email address or password, and create API keys.

![User Settings](../../../assets/docs/user/user.png)

While you can see your role and websites, only admins can change these.

## API Keys

API keys are used for websites and other code to interact with SnowCMS.

![API Keys](../../../assets/docs/user/api-key-list.png)

:::caution
Be careful when deleting API keys. Any code using that API key will stop working.
:::

### Creating API Keys

You can create API keys to allow your website to fetch content from the CMS, or to write code that automates actions (such as creating a post at a specific time).

These API keys can be scoped to a specific website and set it's role to your own role or lower.

Be sure to copy the API key after creating it. The full API key will only be shown once.

:::tip
For security purposes, it is recommended to use the lowest role that achieves your goal. For example, if you just need to access content but not change anything, then using the `VIEWER` role is recommended.
:::

![Create API Key](../../../assets/docs/user/api-key-create.png)

### Using API Keys

See [API Routes](/user/api/).
