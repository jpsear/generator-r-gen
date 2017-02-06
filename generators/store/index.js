const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('folder')
    this.data = {}
    this.prompts = []
  }

  promptName() {
    const prompt = {
      type: 'input',
      name: 'name',
      message: 'What do you want to call your store?',
    }
    this.prompts.push(prompt)
  }

  promptFolder() {
    if (this.options.folder !== undefined) {
      this.data.folder = this.options.folder
      return
    }

    const prompt = {
      type: 'confirm',
      name: 'folder',
      message: 'Do you want to put the store in its own folder',
      default: false
    }
    this.prompts.push(prompt)
  }

  promptPath() {
    const prompt = {
      type: 'input',
      name: 'path',
      message: 'Where do you want to put your store?',
      default: 'src/stores'
    }
    this.prompts.push(prompt)
  }


  prompting() {
    this.log(` \n\n\n 👌  Welcome to the React Goodies Generator 👌 \n\n\n`)
    
    this.promptName()
    this.promptFolder()
    this.promptPath()

    return this.prompt(this.prompts).then(props => {
      this.data = Object.assign({}, props);
    });
  }

  writing() {
    let path;

    if (this.data.folder) {
      path = `${this.data.path}/${this.data.name}/${this.data.name}.js`
    }

    if (!this.data.folder) {
      path = `${this.data.path}/${this.data.name}.js`
    }

    this.fs.copyTpl(
      this.templatePath('Store.js'),
      this.destinationPath(path),
      { store: this.data }
    )
  }
}
