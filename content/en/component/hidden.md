---
title: Hidden
description: 'Badaso CRUD generator hidden field details'
position: 15
category: 'Components'
version: 1
---

Badaso provides a hidden input component, namely BadasoHidden. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6", // 1-12 default 12
    "value": "" // must be filled when generating CRUD if the column in the table cannot be null
}
```

## View: BadasoHidden

The code below is a sample for using BadasoHidden in the Vue Template.

```vue
<badaso-hidden
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    :alert="error">
</badaso-hidden>
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
    default: "Text",
},
placeholder: {
    type: String,
    default: "Text",
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