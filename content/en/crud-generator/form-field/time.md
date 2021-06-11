---
title: Time
description: 'Badaso CRUD generator time field details'
position: 20
category: 'Form Field'
version: 1
---

Badaso provides an input component in the form of time (hour, minute, second), namely BadasoTime. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoTime

The code below is a sample for using BadasoTime on the Vue Template.

```vue
<badaso-time
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-time>
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
    default: "Time",
},
placeholder: {
    type: String,
    default: "Time",
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