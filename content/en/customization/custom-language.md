---
title: Custom Language
description: 'Detail about custom language'
position: 54
category: 'Customization'
version: 1
---

Badaso also supports for customization your language. Badaso uses the [Vue-i18n by Kazupon](https://kazupon.github.io/vue-i18n/) plugin for internationalization. The block below is a directory structure for adding a new language or for overridding current language translation.

## Add New Language

To add new languages, you can create file js in lang directory inside badaso directory like below.
```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┣ 📜 lang.js /** Your lang here **/
```

The file must be containt 2 exported variable. Example: fr.js
```
export const label = 'France'
export default {
};

```

Default variable is the object of languages and label is used for language select at dashboard.
Your language will be registered into language select at dashboard panel automatically.

## Override Existing Language
Badaso provide English and Indonesia language. You can override this lang by create id.js and en.jd in lang directory. You dont need to specify const `label` here. 
You can see default lang Badaso at
```
📦 Your Project
┣ 📂 vendor
┃ ┣ 📂 uasoft-indonesia
┃ ┃ ┣  📂 badaso
┃ ┃ ┃ ┣ 📂 src
┃ ┃ ┃ ┃ ┣ 📂 resources
┃ ┃ ┃ ┃ ┃ ┣ 📂 js
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂 modules
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜 id.js
┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜 en.js
```
Follow the object structure or create new property to add new label.