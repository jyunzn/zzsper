# ZZSPER

[![NPM version](https://img.shields.io/npm/v/@jyunzn/zzsper?color=red&style=plastic)](https://www.npmjs.com/package/@jyunzn/zzsper) 
[![GITHUB LICENSE](https://img.shields.io/github/license/jyunzn/zzsper?color=orange&style=plastic)](https://github.com/jyunzn/zzsper/blob/master/LICENSE)
[![NPM size](https://img.shields.io/bundlephobia/min/@jyunzn/zzsper?color=yellow&style=plastic)](https://www.npmjs.com/package/@jyunzn/zzsper)
[![GITHUB issues](https://img.shields.io/github/issues/jyunzn/zzsper?color=green&style=plastic)](https://github.com/jyunzn/zzsper/issues)
[![GITHUB TOP LAN](https://img.shields.io/github/languages/top/jyunzn/zzsper?color=blue&style=plastic)](https://github.com/jyunzn/zzsper)

<p>
  <code>ZZSPER is a plugin of <a href="https://www.npmjs.com/package/@jyunzn/zz">@jyunzn/zz calendar library</a>, its full name is <strong>ZZ Single Picker</strong>, which provides the function of <strong>selecting a single day</strong>.</code>
</p>


## Installation

This plugin depends on **[@jyunzn/zz](https://www.npmjs.com/package/@jyunzn/zz)**, so **@jyunzn/zz** must also be imported

### npm

```bash
npm install @jyunzn/zz @jyunzn/zzsper
```

- **commonJS**

  ```javascript
  const zz = require('@jyunzn/zz')
  const zzsper = require('@jyunzn/zzsper')
  ```

- **ES module**

  ```javascript
  import zz from '@jyunzn/zz'
  import zzsper from '@jyunzn/zzsper'
  ```

### CDN
- **unpkg**

  ```html
  <script src="https://unpkg.com/@jyunzn/zz"></script>
  <script src="https://unpkg.com/@jyunzn/zzsper"></script>
  ```

- **jsdelivr**

  ```html
  <script src="https://cdn.jsdelivr.net/npm/@jyunzn/zz"></script>
  <script src="https://cdn.jsdelivr.net/npm/@jyunzn/zzsper"></script>
  ```

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- set some style -->
  <link href="https://cdn.jsdelivr.net/gh/jyunzn/zz@0.0.0-alpha.3/examples/default.min.css" rel="stylesheet"/>
  <style>
    .calendar {
      position: relative;
      padding: 50px 30px;
    }

    .zzsp-selected {
      background: black;
    }
  </style>

  <!-- step1. import the module -->
  <script src="https://unpkg.com/@jyunzn/zz"></script>
  <script src="https://unpkg.com/@jyunzn/zzsper"></script>
</head>
<body>
  <div class="calendar"></div>
  <script>
    // step2. Install plugin
    zz.use(zzsper)

    // step3. Use plugin (zzsp: true)
    zz({ 
      zzsp: true, /*

      // - other options

      zzsp_cls_selected: 'zzsp-selected apple',
      zzsp_cmz_initSelectDate: '2020-11-11',

      // - set event

      zzsp_onSelected(date) {
        console.log(date)
      }
    */}).mount('.calendar')
  </script>
</body>
</html>
```


## Options

option                  | default         | description
------------------------|-----------------|---------------------
zzsp                    | `undefined`     | **If your calendar needs to use the zzsper plugin, must set this option to `true`**
zzsp_cls_selected       | `zzsp-selected` |  <ul><li>Customize the class name of the selected date.</li><li>If more than two class names  are required, separate them with spaces</li></ul>
zzsp_cmz_initSelectDate | `null`          | <ul><li>Initial date setting</li><li>**Format:** `yyyy-mm-dd`</li></ul>
zzsp_onSelected         | `undefined`     | <ul><li><strong>Timing:</strong> When the user clicks on the date</li><li><p><strong>Parameter:</strong> <code>{ selectedDate, selectingDate }</code></p><ul><li><strong>selectedDate:</strong> Last selected date</li><li><strong>selectingDate:</strong> The date selected this time</li></ul></li></ul>

## License

[MIT](LICENSE)