---
title: Additional CSS and JS
description: 'Detail about adding new css or js file'
position: 3
category: 'Customization'
version: 1
---

## CSS

Badaso uses SCSS for styling. You can add custom css in the `scss` directory as in the shown below. You can directly create css in `custom.scss` or create new scss file and import it in `custom.scss`. Badaso only read `custom.scss`

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┃ ┣ 📂 scss
┃ ┃ ┃ ┃ ┃ ┗ 📜 custom.scss
```

## JS

To add custom JS such as vanilla JS or other libraries, you can do it like installing a regular javascript library on laravel.
- To add a library, install the library as usual in the laravel project root.
- For the addition of other JS scripts, it can be installed on all JS badaso as needed.