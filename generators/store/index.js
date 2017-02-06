const Generator = require('yeoman-generator');

module.exports = Generator.extend({
  data: {
    name: '',
    folder: true,
    path: '',
  },

  prompting: function () {
    this.log(` \n\n\n 👌  Welcome to the React Goodies Generator 👌 \n\n\n`)

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to call your store?',
      },
      {
        type: 'confirm',
        name: 'folder',
        message: 'Do you want to put the store in its own folder',
        default: false
      },
      {
        type: 'input',
        name: 'path',
        message: 'Where do you want to put your store?',
        default: 'src/stores'
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
      this.templatePath('Store.js'),
      this.destinationPath(path),
      { store: this.data }
    )
  },
});
