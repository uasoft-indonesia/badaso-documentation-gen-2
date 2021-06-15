---
title: Editor
description: 'Badaso CRUD generator editor field details'
position: 6
category: 'Components'
version: 1
---

Badaso menyediakan sebuah komponen input untuk teks dengan format HTML, yaitu BadasoEditor. Pada saat generate CRUD, lebar komponen ini dapat diatur pada Optional Details dengan format seperti berikut.

```json
{
    "size": "6" // 1-12 default 12
}
```

## View: BadasoEditor

Kode di bawah merupakan sampel untuk penggunaan BadasoEditor pada Vue Template.


```vue
<badaso-editor
    :label="label"
    :placeholder="placeholder"
    v-model="model"
    size="12"
    :alert="error">
</badaso-editor>
```

## `props`

Berikut merupakan daftar props yang disediakan komponen ini.

```
size: {
    type: String,
    default: "12",
},
label: {
    type: String,
    default: "Editor",
},
placeholder: {
    type: String,
    default: "Editor",
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