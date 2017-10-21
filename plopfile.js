module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'creates a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.vue',
        templateFile: '.templates/component/component.vue.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/{{name}}.stories.js',
        templateFile: '.templates/component/stories.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{name}}/index.js',
        templateFile: '.templates/component/index.js.hbs',
      },
    ], // array of actions
  });
};
