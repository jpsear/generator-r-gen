const Generator = require('yeoman-generator');

module.exports = Generator.extend({
  data: {
    action: '',
    name: '',
    folder: true,
    path: '',
    cssModules: true,
    propTypes: true,
    observer: true
  },

  prompting: function () {
    this.log(` \n\n\n 👌  Welcome to the React Goodies Generator 👌 \n\n\n`)

    var prompts = [
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to create?',
        choices: ['Component'],
        default: 'Component'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to call your component?',
      },
      {
        type: 'confirm',
        name: 'folder',
        message: 'Do you want to put the component in its own folder',
        default: true
      },
      {
        type: 'confirm',
        name: 'observer',
        message: 'Do you want to put the component to be an observer?',
        default: true
      },
      {
        type: 'confirm',
        name: 'propTypes',
        message: 'Include propTypes and defaultProps?',
        default: true
      },
      {
        type: 'confirm',
        name: 'cssModules',
        message: 'Would you like an associated .SCSS file, loaded with @CSSModules?',
        default: true
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where do you want to put your component?',
        default: 'src/components'
      },
    ];

    return this.prompt(prompts).then(props => {
      this.data = props
    });
  },

  writing: function () {
    let path;

    if (this.data.folder) {
      path = `${this.data.path}/${this.data.name}/${this.data.name}.js`
    }

    if (!this.data.folder) {
      path = `${this.data.path}/${this.data.name}.js`
    }

    this.fs.copyTpl(
      this.templatePath('Component.js'),
      this.destinationPath(path),
      { component: this.data }
    )
  },
});
