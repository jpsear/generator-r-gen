const Generator = require('yeoman-generator');

module.exports = Generator.extend({
  prompting: function () {
    this.log(
    `
    👌  Welcome to the React Goodies Generator 👌

    Try running one of the following:
      yo r-gen:component
      yo r-gen:store
    `
    )
  }
});
