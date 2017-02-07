const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    this.option('folder')
    this.option('scss')
    this.option('cssModules')
    this.option('propTypes')
    this.option('observer')
    this.option('all')

    this.data = {}
    this.prompts = []
  }

  _promptName() {
    const prompt = {
      type: 'input',
      name: 'name',
      message: 'What shall I call your component?',
    }
    this.prompts.push(prompt)
  }

  _promptFolder() {
    if (this.options.all !== undefined) {
      this.data.folder = true
      return
    }

    if (this.options.folder !== undefined) {
      this.data.folder = this.options.folder
      return
    }

    const prompt = {
      type: 'confirm',
      name: 'folder',
      message: 'Shall I place the component in its own folder',
      default: true
    }
    this.prompts.push(prompt)
  }

  _promptScss() {
    if (this.options.all !== undefined) {
      this.data.scss = true
      return
    }
    
    if (this.options.scss !== undefined) {
      this.data.scss = this.options.scss
      return
    }

    const prompt = {
      type: 'confirm',
      name: 'scss',
      message: 'Shall I generate a .scss file?',
      default: true
    }
    this.prompts.push(prompt)
  }

  _promptCssModules() {
    if (this.options.all !== undefined) {
      this.data.cssModules = true
      return
    }
    
    if (this.options.cssModules !== undefined) {
      this.data.cssModules = this.options.cssModules
      return
    }

    const prompt = {
      type: 'confirm',
      name: 'cssModules',
      message: 'Shall I include the @CSSModules decorator?',
      default: true
    }
    this.prompts.push(prompt)
  }

  _promptPropTypes() {
    if (this.options.all !== undefined) {
      this.data.propTypes = true
      return
    }
    
    if (this.options.propTypes !== undefined) {
      this.data.propTypes = this.options.propTypes
      return
    }

    const prompt = {
      type: 'confirm',
      name: 'propTypes',
      message: 'Shall I include propTypes and defaultProps?',
      default: true
    }
    this.prompts.push(prompt)
  }

  _promptObserver() {
    if (this.options.all !== undefined) {
      this.data.observer = true
      return
    }
    
    if (this.options.observer !== undefined) {
      this.data.observer = this.options.observer
      return
    }

    const prompt = {
      type: 'confirm',
      name: 'observer',
      message: 'Shall I include make the component an observer?',
      default: true
    }
    this.prompts.push(prompt)
  }

  _promptPath() {
    const prompt = {
      type: 'input',
      name: 'path',
      message: 'Where do you want to put your component?',
      default: 'src/components'
    }
    this.prompts.push(prompt)
  }

  prompting() {
    this.log(` \n\n\n 👌  Welcome to the React Goodies Generator 👌 \n\n\n`)

    this._promptName()
    this._promptFolder()
    this._promptScss()
    this._promptCssModules()
    this._promptPropTypes()
    this._promptObserver()
    this._promptPath()

    return this.prompt(this.prompts).then(props => {
      console.log(props);
      this.data = Object.assign({}, props)
      console.log(this.data);
    });
  }

  writing() {
    let path;

    if (this.data.folder) {
      path = `${this.data.path}/${this.data.name}/${this.data.name}`
    }

    if (!this.data.folder) {
      path = `${this.data.path}/${this.data.name}`
    }

    if (this.data.scss) {
      this._copyTemplate('Component', path, 'scss')
    }

    this._copyTemplate('Component', path, 'js', this.data)

    this.log(`\n\n\n 🙌  ${this.data.name} created -> ${path} 🙌 \n\n\n`)
  }

  _copyTemplate(template, path, extension, data = {}) {
    return this.fs.copyTpl(
      this.templatePath(`${template}.${extension}`),
      this.destinationPath(`${path}.${extension}`),
      { data }
    )
  }
};
