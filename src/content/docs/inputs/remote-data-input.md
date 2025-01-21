---
title: Remote Data Input
---

The Remote Data input fetches data from a URL and includes it in the API response.

:::caution
This Input shouldn't be used unless fetching the data directly from your website would be too difficult.
:::

## Settings

### URL

The URL to fetch from. If blank, a field is shown in the Collection Entry form to let the user set it.

The following placeholder variables are available:
- `{website}`: Website ID
- `{collection}`: Collection ID
- `{entry}`: Entry ID

### Required

If true, the URL must be set.


## API Response

The returned type depends on the `Content-Type` header of the requested URL:
- `application/json`: returned as JSON
- `text/*`: returned as text
- Otherwise, the requested URL is returned