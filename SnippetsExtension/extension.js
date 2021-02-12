const vscode = require("vscode");

function activate({ subscriptions }) {
  let disposable = vscode.commands.registerCommand(
    "basicsnippets.helloWorld",
    async function () {
      const editor = vscode.window.activeTextEditor;

      clipboardy.write("test");
    }
  );
  subscriptions.push(disposable);
}
exports.activate = activate;
exports.deactivate = deactivate;
function deactivate() {}
