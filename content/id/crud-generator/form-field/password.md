---
title: Password
description: 'Badaso CRUD generator password field details'
position: 9
category: 'Form Field'
version: 1
---

Badaso menyediakan sebuah komponen untuk input password, yaitu BadasoPassword. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoPassword

Kode di bawah merupakan sampel untuk penggunaan BadasoPassword pada Vue Template.


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

Berikut merupakan daftar props yang disediakan komponen ini.

```
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