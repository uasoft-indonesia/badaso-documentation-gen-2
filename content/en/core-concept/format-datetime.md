---
title: Format Datetime
description: 'Badaso format datetime section'
position: 11
category: 'Core Concept'
version: 1
---

Badaso provide some config to format display of time. You can add the keys below to your env and fill it with format you want.

<alert>
Badaso use <a href="https://momentjs.com/docs/#/displaying/format/" target="_blank">MomentJS</a> to format display time
</alert>

```
#OPTIONAL. Format to display date in UI
MIX_DATE_FORMAT=

#OPTIONAL. Format to display time in UI
MIX_TIME_FORMAT=

#OPTIONAL. Format to display datetime in UI
MIX_DATETIME_FORMAT=
```