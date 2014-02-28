
# isometric-convert

  Convert isometric to cartesian coordinates and back

## Installation

  Install with [component(1)](http://component.io):

    $ component install llinares/isometric-convert

## API

```js
var convert = require('isometric-convert');
```

### toIsometric(cartX, cartY)

```js
convert.toIsometric(1, 1); // x: 0, y: 1
```

### toCartesian(isoX, isoY)

```js
convert.toCartesian(1, 1); // x: 1.5, 0.5
```

## License

  MIT
