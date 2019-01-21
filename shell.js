const inquirer = require("inquirer");

module.exports = cb => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "env",
        message: "请选择车抵贷系统环境?",
        choices: ["测试环境", "生产环境"]
      },
      {
        type: 'input',
        name: 'JSESSIONID',
        message: "先登录系统，输入 JSESSIONID value"
      },
    ])
    .then(answers => {
    //   console.log(JSON.stringify(answers, null, "  "));
      cb && cb(answers);
    });
};
