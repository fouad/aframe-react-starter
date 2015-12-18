## aframe-react-starter

An [aframe-react](https://github.com/ngokevin/aframe-react) starter kit with BrowserSync for auto-reloading.

![](https://rawgit.com/fouad/aframe-react-starter/master/public/assets/images/screen.png)

### Getting Started

To get started:

```bash
npm install
npm run dev
```

BrowserSync should open http://localhost:4200. To test on your phone, check your local network IP (http://192.168.x.x:4200).

### Using Components

A-Frame uses attributes to render [components](https://aframe.io/docs/core/) so if you want to use the [sky component](https://github.com/aframevr/aframe/blob/master/elements/templates/a-sky/index.html):

```html
<a-sky src="sky.png"></a-sky>
```

translate to:

```html
<Entity
  geometry="primitive: sphere;
            radius: ${radius};
            segmentsWidth: ${segments-width};
            segmentsHeight: ${segments-height}"
  material="shader: flat;
            src: url(${src});
            color: ${color};
            fog: false"
  scale="-1 1 1">
</Entity>
```
