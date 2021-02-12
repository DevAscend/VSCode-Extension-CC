const vscode = require("vscode");

function activate(context) {
  console.log('Congratulations, your extension "basiccommands" is now active!');

  let helloWorldCommand = vscode.commands.registerCommand(
    "basiccommands.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello World from basiccommands!");
    }
  );

  let copyTextCommand = vscode.commands.registerCommand(
    "basiccommands.copyText",
    function () {
      const clipboardy = require("clipboardy");

      const editor = vscode.window.activeTextEditor;

      clipboardy.write(editor.document.getText());

      vscode.window.showInformationMessage("Succesfully copied text!");
    }
  );

  context.subscriptions.push(helloWorldCommand, copyTextCommand);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
