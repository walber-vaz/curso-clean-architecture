import { terminal } from 'terminal-kit';

import { TerminalUtil } from '@/utils/terminalUtils';

export async function menuPrincipal(): Promise<void> {
  TerminalUtil.title('Menu Principal');

  const response = await terminal.singleColumnMenu(['1. Fundamentos', 'Sair'])
    .promise;

  switch (response.selectedIndex) {
    case 0:
      console.log('Fundamentos');
      break;
    case 1:
      console.log('Saindo...');
      process.exit(0);
      break;
    default:
      console.log('Opção inválida');
      break;
  }
}
