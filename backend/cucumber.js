module.exports = {
  default: {
    require: ["step-definitions/**/*.ts"],
    requireModule: ["ts-node/register"],
    format: ["progress", "html:reports/report.html"],
    paths: ["features/**/*.feature"],
  }
};
