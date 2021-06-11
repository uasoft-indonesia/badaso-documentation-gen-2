---
title: Color Picker
description: 'Badaso CRUD generator color picker field details'
position: 3
category: 'Form Field'
version: 1
---

Badaso provides a component for the color picker, namely BadasoColorPicker, which can be adjusted in width by adding a `size` property to the Optional Details when generating the CRUD.

```JSON
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoColorPicker

The following is a sample code for using the BadasoColorPicker in the Vue template.

```vue
<badaso-color-picker
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-color-picker>
```

## `props`

The following is a list of props provided by this component.

```js
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Color picker",
},
placeholder: {
    type: String,
    default: "Color picker",
},
value: {
    type: String,
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

<alert>
For reference: <a href="https://github.com/xiaokaike/vue-color" target="_blank">vue-color</a>
</alert>
