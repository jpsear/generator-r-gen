# r-gen
> Generate React goodies with ease

## Installation

First, install [Yeoman](http://yeoman.io) and generator-r-gen using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-r-gen
yo r-gen
```

Then start generating React goodies!

### Components
Currently, r-gen will generate React components with a MobX flavour. To create a component:

```bash
yo r-gen:component
```

#### Command line options
To speed things up, you can pass options when first calling the generator. Example:

```bash
yo r-gen:component --scss
```

The above will create the .scss file without prompting, but will prompt you for other options.

#### Available options

* `--folder` - Sets the creation of a folder to `true`
* `--scss` - Sets the creation of an associated scss file to `true`
* `--cssModules` - Sets the creation of a @CSSModules decorator to `true`
* `--propTypes` - Sets the generation of propTypes and defaultProps to `true`
* `--observer` - Sets the creation of an @observer decorator to `true`
* `--all` - Sets all of the above to `true`

### Stores
Currently, r-gen will generate stores with very MobX-y flavour. To create a store:

```bash
yo r-gen:store
```

## License

MIT © [James Sear]()
