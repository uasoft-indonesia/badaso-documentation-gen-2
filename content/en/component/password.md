---
title: Password
description: 'Badaso CRUD generator password field details'
position: 17
category: 'Components'
version: 1
---

Badaso provides a component for password input, namely BadasoPassword. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoPassword

The code below is a sample for using BadasoPassword in the Vue Template.

```vue
<badaso-password
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-password>
```

## `props`

Below is a list of props that this component provides.

```js
size: {
    type: String,
    default: "12"
},
label: {
    type: String,
    default: "Password"
},
placeholder: {
    type: String,
    default: "Password"
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