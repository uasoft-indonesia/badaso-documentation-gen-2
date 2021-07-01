---
title: Upload File Multiple
description: 'Badaso CRUD generator upload multiple file field details'
position: 29
category: 'Components'
version: 1
---

Badaso provides a component that uploads multiple files at once, namely BadasoUploadFileMultiple. Each uploaded file will be generated as base64 to be sent to the backend. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadFileMultiple

The code below is a sample for using BadasoUploadFileMultiple on the Vue Template.

```vue
<badaso-upload-file-multiple
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-file-multiple>
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
    default: "Upload File Multiple",
},
placeholder: {
    type: String,
    default: "Upload File Multiple",
},
value: {
    type: Array,
    default: () => {
    return [];
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