# ExitPop

A web component (written with LitElement) to pop a model on mousing out of the browser window.

## html settings

```html
<exit-pop
  h1=""
  h2=""
  p1=""
  p2=""
  btnText1=""
  btnLink1=""
  btnText2=""
  btnLink2=""
  imgUrl=""
  imgLink=""
  imgOnly=""
  delayPop="10"
/>
```

## css settings

These will override the defaults in exitPop.js

```css
exit-pop {
  --container-bg: #fff;
  --container-border: 10px solid yellow;
  --close-x-color: #0e0e0e;
  --close-bg-color: yellow;
}
```

### Browser support

Modern browsers. If you need Edge support include `webcomponents-bundle.js` in the `<head>` above the `exitPop.js` file.
