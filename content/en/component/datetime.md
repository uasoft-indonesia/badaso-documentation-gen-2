---
title: Date Time
description: 'Badaso CRUD generator date time field details'
position: 12
category: 'Components'
version: 1
---

Badaso provides an input component for date and time, that is BadasoDatetime. When generating CRUD, the width of this component can be set in Optional Details with the following format.

```JSON
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoDatetime

The code below is a sample for using BadasoDatetime on the Vue Template.

```vue
<badaso-datetime
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-datetime>
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
    default: "Date Time",
},
placeholder: {
    type: String,
    default: "Date Time",
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