import * as vscode from 'vscode';

let typingStartTime: number | null = null;
let typingTimer: NodeJS.Timeout | null = null;
let idleTimer: NodeJS.Timeout | null = null;
let statusBarItem: vscode.StatusBarItem;
let isActive = true;

const STORAGE_KEY = 'hydrationAlertCount';

export function activate(context: vscode.ExtensionContext) {
  console.log('✅ Hydration Reminder foi ativada.');
  vscode.window.showInformationMessage(
    '💡 Hydration Reminder: Monitorando sua saúde durante a codificação!'
  );

  createStatusBar(context);

  vscode.workspace.onDidChangeTextDocument(() => {
    if (!isActive) {
      return;
    }

    const now = Date.now();

    if (typingStartTime === null) {
      typingStartTime = now;
      alertShown = false;
      startTypingTimer(context);
    }

    resetIdleTimer(context);
  });

  const toggleCommand = vscode.commands.registerCommand(
    'hydrationReminder.toggle',
    () => {
      isActive = !isActive;
      statusBarItem.text = isActive
        ? '💧 Hydration Reminder: Ativo'
        : '💤 Hydration Reminder: Inativo';
      vscode.window.showInformationMessage(
        `Hydration Reminder ${isActive ? 'ativado' : 'desativado'}`
      );
    }
  );

  context.subscriptions.push(toggleCommand);
}

function createStatusBar(context: vscode.ExtensionContext) {
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left
  );
  statusBarItem.text = '💧 Hydration Reminder: Ativo';
  statusBarItem.tooltip = 'Clique para ativar/desativar os lembretes';
  statusBarItem.command = 'hydrationReminder.toggle';
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);
}

function getAlertTime(): number {
  const config = vscode.workspace.getConfiguration('hydradev');
  return 1000 * 60 * config.get('alertTimeInMinutes', 60);
}

function getIdleTime(): number {
  const config = vscode.workspace.getConfiguration('hydradev');
  return 1000 * 60 * config.get('idleResetTime', 10);
}

let alertShown = false;

function startTypingTimer(context: vscode.ExtensionContext) {
  if (typingTimer) {
    return;
  }

  typingTimer = setInterval(() => {
    const now = Date.now();

    if (
      typingStartTime &&
      !alertShown &&
      now - typingStartTime >= getAlertTime()
    ) {
      showHydrationAlert(context);
      alertShown = true;
    }
  }, 1000 * 30);
}

function resetIdleTimer(context: vscode.ExtensionContext) {
  if (idleTimer) {
    clearTimeout(idleTimer);
  }

  idleTimer = setTimeout(() => {
    if (typingTimer) {
      clearInterval(typingTimer);
      typingTimer = null;
    }

    typingStartTime = null;
    alertShown = false;
    console.log('⏸️ Inatividade detectada. Temporizador reiniciado.');
  }, getIdleTime());
}

function showHydrationAlert(context: vscode.ExtensionContext) {
  const message = [
    '💧 *Hora da pausa!*',
    'Você está codando há bastante tempo sem pausa.',
  ].join('\n');

  vscode.window
    .showInformationMessage(message, 'Já fiz ✅', 'Me lembra depois ⏳')
    .then((selection) => {
      if (selection === 'Já fiz ✅') {
        vscode.window.showInformationMessage(
          '🚀 Boa! Continue codando com saúde.'
        );
        incrementAlertCount(context);
      } else if (selection === 'Me lembra depois ⏳') {
        vscode.window.showInformationMessage(
          '⏳ Sem problemas, te aviso novamente mais tarde.'
        );
      }
    });
}

function incrementAlertCount(context: vscode.ExtensionContext) {
  const current = context.globalState.get<number>(STORAGE_KEY, 0);
  context.globalState.update(STORAGE_KEY, current + 1);
}

function showDailySummary(context: vscode.ExtensionContext) {
  const total = context.globalState.get<number>(STORAGE_KEY, 0);
  vscode.window.showInformationMessage(
    `📊 Hoje você recebeu ${total} lembrete(s) de hidratação. Continue se cuidando!`
  );
}

export function deactivate() {
  if (typingTimer) {
    clearInterval(typingTimer);
  }
  if (idleTimer) {
    clearTimeout(idleTimer);
  }
  showDailySummary(
    vscode.extensions.getExtension('hydradev.hydration-reminder')!.exports
      .context
  );
}
