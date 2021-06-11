---
title: Text
description: 'Badaso CRUD generator text field details'
position: 18
category: 'Form Field'
version: 1
---

Badaso provides an input component in the form of short text, namely BadasoText. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoText

The code below is a sample for using BadasoText in the Vue Template.

```vue
<badaso-text
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-text>
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
additionalInfo: {
    type: String,
    default: "",
},
alert: {
    type: String|Array,
    default: "",
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
readonly: {
    type: Boolean,
    default: false,
},
disabled: {
    type: Boolean,
    default: false,
},
autofocus: {
    type: Boolean,
    default: false,
},
required: {
    type: Boolean,
    default: false,
},

```