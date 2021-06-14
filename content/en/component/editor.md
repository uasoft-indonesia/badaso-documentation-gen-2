---
title: Editor
description: 'Badaso CRUD generator editor field details'
position: 6
category: 'Components'
version: 1
---

Badaso provides an input component for text in HTML format, namely BadasoEditor. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoEditor

The code below is a sample for using BadasoEditor in the Vue Template.

```vue
<badaso-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-editor>
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
    default: "Editor",
},
placeholder: {
    type: String,
    default: "Editor",
},
value: {
    type: String,
    required: true,
    default: "",
},
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
},
```