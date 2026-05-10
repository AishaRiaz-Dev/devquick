import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('devquick.testAPI', async () => {
        
        vscode.window.showInformationMessage('DevQuick: Connecting to API...');

        try {
            // This pulls real data from a public test API
            const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
const apiData = response.data.text;
           

            // This creates the popup in VS Code with the data we found!
            vscode.window.showInformationMessage(`Success! API Data: ${apiData}`);
            
        } catch (error) {
            vscode.window.showErrorMessage('API Call Failed. Check your internet!');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
