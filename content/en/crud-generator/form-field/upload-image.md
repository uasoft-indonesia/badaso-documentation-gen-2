---
title: Upload Image
description: 'Badaso CRUD generator upload image field details'
position: 24
category: 'Form Field'
version: 1
---

Badaso provides a component for uploading image files, namely BadasoUploadImage. The uploaded file will be generated as base64 to be sent to the backend. Unlike BadasoUploadFile, BadasoUploadImage and BadasoUploadImageMultiple will display images immediately after uploading. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUploadImage

The code below is a sample for using BadasoUploadImage on the Vue Template.

```vue
<badaso-upload-image
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-upload-image>
```
<!--DOCUSAURUS_CODE_TABS-->

## `props`

Below is a list of props that this component provides.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Upload Image",
},
placeholder: {
    type: String,
    default: "Upload Image",
},
value: {
    type: Object|String,
    default: () => {
    return null;
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