---
title: Custom API Helper
description: 'Detail about custom API helper'
position: 9
category: 'Customization'
version: 1
---

Badaso provides a [axios](https://github.com/axios/axios) based utility for calling an API. The difference is that resource have inserted headers such as authorization and content-type. Here is an example of calling the API.

```js
import Vue from 'vue'

Vue.prototype.$resource.get(url); /** equal axios.get(url) **/
```

Badaso also supports for customization API helper. The block below is a directory structure for adding a new API  helper.

## Add an API Helper

- To add an API helper, add it to the `modules` directory in `api` directory.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 api
┃ ┃ ┃ ┃ ┗ 📜 example-api.js
```

- Below is an example of HTTP request method that you can use.

```js
example(data = {}) {
  let ep = '/example';
  let qs = QueryString(data);
  let url = ep + qs;
  return Vue.prototype.$resource.get(url);
},
```

```js
example(data) {
  return Vue.prototype.$resource.post('/example', data);
},
```

```js
example(data) {
  return Vue.prototype.$resource.put('/example', data);
},
```

```js
example(data) {
  return Vue.prototype.$resource.patch('/example', data);
},
```

```js
example(data) {
  let paramData = {
    data: data,
  };
  return Vue.prototype.$resource.delete('/example', paramData);
},
```

- Here is the example of using the custom API helper.

```js
$api.exampleApi.example(data)
```

```js
this.$api.exampleApi.example(data)
```
