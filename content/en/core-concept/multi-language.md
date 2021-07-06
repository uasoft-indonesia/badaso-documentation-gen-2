---
title: Multi Language
description: 'Badaso multi language section'
position: 40
category: 'Core Concept'
version: 1
---

## Backend

Badaso provides english by default for languages in backend. To change the language, it is necessary to make a localization configuration for laravel, this configuration can be set via ```.env```. Below is the directory structure for adding a new language.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 lang
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 en
┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┣ 📜 validation.php
┃ ┃ ┃ ┣ 📂 add your lang
┃ ┃ ┃ ┃ ┣ 📜 api_response.php
┃ ┃ ┃ ┃ ┣ 📜 validation.php
```

## Frontend

For some labels on the frontend, also use a separate language from backend. The code below is the language directory structure in frontend. The language on the frontend can be changed via the header navbar on the dashboard. The language in frontend only changes labels on frontend, not including responses from backend Badaso.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 lang
┃ ┃ ┃ ┃ ┣ 📜 en.js
┃ ┃ ┃ ┃ ┣ 📜 id.js
```