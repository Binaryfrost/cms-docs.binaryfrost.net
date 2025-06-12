---
title: Inputs Reference
---

For instructions on how to register custom Inputs, see [Input Plugins](/admin/plugins/input-plugins/).

In the types below, `T` refers to the Input type and `S` refers to the Input Settings type.

## Base Input

### id

**Type**: `string`

Input ID, must be unique and should include your plugin name for namespacing purposes. Shown in the Collection settings.

Can be up to 255 bytes.

:::caution
You should not change this after using the Input as doing so will result in null being returned anywhere where this Input is used.
:::

### name

**Type**: `string`

Name shown for this input in the Collection settings.

### description

**Type**: `string`

Description shown for this input in the Collection settings. Optional.

### serialize

**Type**: `(data: T) => string`

Called before sending data to server (client-side only).

Can be up to 16,777,215 bytes.
  
### deserialize

**Type**: `(data: string) => T`

Called before rendering input and HTML (client and server side)

### renderInput

**Type**: `FunctionComponent<InputProps<T, S>>`

Called client-side to render input in CMS. The following props are passed:
- name
- fieldName
- description
- settings
- value
- values
- onChange
- registerValidator
- unregisterValidator

:::tip
The `useInputValidator` hook makes error handling easy. This hook automatically registers a
validator function with the CMS, ensuring that the Input's value is validated prior to
saving a Collection Entry.

```ts
// Example, taken from the Text Input
const { maxLength, required } = settings;
const error = useInputValidator((v) => {
  if (required && !v) return `${name} is required`;
  if (maxLength && maxLength !== 0 && v.length > maxLength) {
    return `${name} has a maximum length of ${maxLength}`;
  }
  return null;
}, registerValidator, unregisterValidator);
```
:::

### isAllowed

**Type**: `(website: Website, collection: Collection) => boolean`

Called client-side to determine whether to show in input library and server-side to validate that the request does not contain input. Optional, defaults to true.

### validate

**Type**: `(serializedValue: string, deserialize: BaseInput<T, S>['deserialize'], settings: S | null, req: Request) => void | Promise<void>`

Called server-side to ensure that the input value is valid. You should throw an error if it is invalid. Optional.

### renderHtml

**Type**: `(value: T, settings: S | null, req: Request) => RenderHtmlType<T> | Promise<RenderHtmlType<T>>`

Called server-side when page is requested through API with the query parameter `?render=true`. If you don't want the input to be rendered as HTML, return a JSON object. You can also return a non-HTML string.

## Input With Settings

An input can optionally have settings.

### defaultSettings

**Type**: `S`

Default settings that will be merged with the configured settings before being
passed to `renderInput` and `renderSettings`. Other methods will continue to
receive only the configured settings to ensure proper setting validation.

### renderSettings

**Type**: `FunctionComponent<SettingsProps<S>>`

Called client-side to render settings in Collection settings. The following props are passed:
- settings
- onChange
- registerValidator
- unregisterValidator

:::tip
It is recommended to use the `useInputValidator` hook (see [renderInput](#renderinput)
for an example). You should also use the `useSettingsHandler` as this simplifies
setting handling by exposing a helper function for updating a setting.

```ts
const changeSetting = useSettingsHandler(settings, onChange);
```
:::

### validateSettings

**Type**: `(settings: S, req: Request) => void | Promise<void>`

Called server-side to ensure that the input value is valid. You should throw an error if it is invalid. Optional.