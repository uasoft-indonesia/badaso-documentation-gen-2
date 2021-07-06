---
title: Upload File
description: 'Badaso CRUD generator upload file field details'
position: 30
category: 'Components'
version: 1
---

Badaso provides a component for uploading files, namely BadasoUploadFile. The uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFile

The code below is a sample for using BadasoUploadFile in the Vue Template.

```vue
<badaso-upload-file
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file>
```

## `props`

Below is a list of props that this component provides.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload File",
},
placeholder: {
    type: String,
    default: "Upload File",
},
value: {
    type: Object | String,
    default: () => {
    return {};
    },
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
type: {
    type: String,
},
```

<alert>
For <code>type</code> props, you can choose <code>private-only</code> or <code>shares-only</code>.
</alert>