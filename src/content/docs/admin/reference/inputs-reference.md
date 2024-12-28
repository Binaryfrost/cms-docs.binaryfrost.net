---
title: Inputs Reference
---

For instructions on how to register custom Inputs, see [Input Plugins](/admin/plugins/input-plugins/).

In the types below, `T` refers to the Input type and `S` refers to the Input Settings type.

## Base Input

### id

**Type**: `string`

Input ID, must be unique and should include your plugin name for namespacing purposes. Shown in the Collection settings.

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

Called before sending data to server (client-side only)
  
### deserialize

**Type**: `(data: string) => T`

Called before rendering input and HTML (client and server side)

### renderInput

**Type**: `() => ForwardRefExoticComponent<InputProps<T, S> & RefAttributes<InputRef<T>>> | FunctionComponent<InputProps<T, S>> | undefined`

Called client-side to render input in CMS; remember to call useImperativeHandle with InputRef object if the Input has a value. The Collection Input name and description will be passed as props.

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

### renderSettings

**Type**: `() => ForwardRefExoticComponent<SettingsProps<S> & RefAttributes<InputRef<S>>>`

Called client-side to render settings in Collection settings.

### serializeSettings

**Type**: `(data: S) => string`

Serializes settings to a string

### deserializeSettings

**Type**: `(data: string) => S`

Deserializes settings from a string.

### validateSettings

**Type**: `(serializedSettings: string, deserialize: InputWithSettings<T, S>['deserializeSettings'], req: Request) => void | Promise<void>`

Called server-side to ensure that the input value is valid. You should throw an error if it is invalid. Optional.