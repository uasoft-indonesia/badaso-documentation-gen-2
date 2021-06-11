---
title: URL
description: 'Badaso CRUD generator URL field details'
position: 25
category: 'Form Field'
version: 1
---

Badaso provides an input component in the form of a URL, namely BadasoUrl. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoUrl

The code below is a sample for using BadasoUrl in the Vue Template.

```vue
<badaso-url
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-url>
```
<!--DOCUSAURUS_CODE_TABS-->

## `props`

Below is a list of props that this component provides.

```js
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "URL"
},
placeholder: {
    type: String,
    default: "URL"
},
value:  {
    type: String,
    required: true,
    default: ''
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