'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
var path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument('appname', {
      type: String,
      required: true
    });

    // And you can then access it later; e.g.
    this.log(this.options.appname);
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the posh ' + chalk.red('generator-rncomponent') + ' generator!'
    ));
    // this.name = path.basename(process.cwd());
    this.name = '';

    const prompts = [{
      name: 'name',
      message: 'Your folder name?',
      default: this.options.appname
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.name = props.name;
    });
  }

  writing() {
    if (this.name) {
      mkdirp(this.name);
    }

    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath(path.join(this.name, 'index.js'))
    );
    this.fs.copy(
      this.templatePath('style.scss'),
      this.destinationPath(path.join(this.name, 'style.scss'))
    );
    this.fs.copy(
      this.templatePath('style.js'),
      this.destinationPath(path.join(this.name, 'style.js'))
    );
  }
};
