---
title: Switch
description: 'Badaso CRUD generator switch field details'
position: 24
category: 'Components'
version: 1
---

Badaso provides a boolean input component with a switch, namely BadasoSwitch. When generating CRUD, the container width for this component can be set in Optional Details with the format shown in the code below. To use switch when creating a CRUD, the `items` property in Optional Details is required.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoSwitch

The code below is a sample for using BadasoSwitch in the Vue Template.

```vue
<badaso-switch
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-switch>
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
    default: "Switch"
},
placeholder: {
    type: String,
    default: "Switch"
},
onLabel: {
    type: String,
    default: "On"
},
offLabel: {
    type: String,
    default: "Off"
},
value:  {
    type: Boolean,
    required: true,
    default: false
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