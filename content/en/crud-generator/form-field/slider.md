---
title: Slider
description: 'Badaso CRUD generator slider field details'
position: 15
category: 'Form Field'
version: 1
---

Badaso provides an input component in the form of a slider, namely BadasoSlider. When generating CRUD, the width of this component can be set in Optional Details in the format shown below.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoSlider

The code below is a sample for using BadasoSlider on the Vue Template.

```vue
<badaso-slider
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-slider>
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
    default: "Slider",
},
placeholder: {
    type: String,
    default: "Slider",
},
min: {
    type: Number,
    default: 0,
},
max: {
    type: Number,
    default: 100,
},
value: {
    type: Number,
    required: true,
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