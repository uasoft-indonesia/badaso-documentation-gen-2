---
title: Custom Utilities
description: 'Detail about customization utilities'
position: 55
category: 'Customization'
version: 1
---

Badaso also supports for customization utilities. The block below is a directory structure for adding a new utilities.

## Add Utilities

- To add a utilities, add it to the `utils` directory.

```
📦 Your Project
┣ 📂 resources
┃ ┣ 📂 js
┃ ┃ ┣ 📂 badaso
┃ ┃ ┃ ┣ 📂 utils /** you can add a utility here **/
┃ ┃ ┃ ┃ ┣ 📜 example-utils.js /** example one **/
┃ ┃ ┃ ┃ ┗ 📜 exampleutils.js /** example two **/
```

- To use the utility that was just added, you can try using syntax below.

<alert type="warning">
The naming utils in Badaso uses the camel case. For example example-utils will become exampleUtils.
</alert>

<code-group>
  <code-block label="Template" active>

  ```vue
  $exampleUtils.method();
  $exampleutils.method();
  ```

  </code-block>
  
  <code-block label="Script">

  ```vue
  this.$exampleUtils.method();
  this.$exampleutils.method();
  ```

  </code-block>
</code-group>