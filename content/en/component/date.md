---
title: Date
description: 'Badaso CRUD generator date field details'
position: 11
category: 'Components'
version: 1
---

Badaso provides an input component for dates, namely BadasoDate. At the time of generating the CRUD, this component can be set to Optional Details with the following format.

```JSON
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoDate

The code below is a sample for using BadasoDate in the Vue Template.

```vue
<badaso-date
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-date>
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
    default: "Date",
},
placeholder: {
    type: String,
    default: "Date",
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