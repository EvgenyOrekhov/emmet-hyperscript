# emmet-hyperscript

[![Travis CI build status](https://img.shields.io/travis/EvgenyOrekhov/emmet-hyperscript/master.svg?style=flat-square)](https://travis-ci.org/EvgenyOrekhov/emmet-hyperscript)
[![Codacy grade](https://img.shields.io/codacy/grade/2bdd57c66a014adf89148f7f83bb3b51/master.svg?style=flat-square)](https://www.codacy.com/app/EvgenyOrekhov/emmet-hyperscript)

[Emmet](https://emmet.io/)-style syntactic sugar for
[HyperScript](https://github.com/hyperhype/hyperscript)
and
[virtual-hyperscript](https://github.com/Raynos/virtual-hyperscript)

## Examples

Plain [HyperScript](https://github.com/hyperhype/hyperscript):

```js
const h = require("hyperscript");

h(
    "div#page",
    h(
        "div#header",
        h("h1.classy", "Example", {style: {"background-color": "#22f"}})
    )
);
```

emmet-hyperscript:

```js
const h = require("hyperscript");
const eh = require("emmet-hyperscript")(h);

eh(
    "div#page > div#header > h1.classy",
    "Example",
    {style: {"background-color": "#22f"}}
);
```

It works with
[hyperscript-helpers](https://github.com/ohanhi/hyperscript-helpers) too:

```js
const h = require("hyperscript");
const eh = require("emmet-hyperscript")(h);
const {div} = require("hyperscript-helpers")(eh);

div(
    "#page > div#header > h1.classy",
    "Example",
    {style: {"background-color": "#22f"}}
);
```

## [Changelog](https://github.com/EvgenyOrekhov/emmet-hyperscript/releases)

## License

[MIT](LICENSE)
