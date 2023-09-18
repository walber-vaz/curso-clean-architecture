import { terminal } from 'terminal-kit';

import { TerminalUtil } from '@/utils/terminalUtils';

import { menuFundamentos } from './menuFundamentos';

export async function menuPrincipal(): Promise<void> {
  TerminalUtil.title('Menu Principal');

  const response = await terminal.singleColumnMenu(['1. Fundamentos', 'Sair'])
    .promise;

  switch (response.selectedIndex) {
    case 0:
      await menuFundamentos();
      break;
    case 1:
      console.log('Saindo...');
      process.exit(0);
      break;
    default:
      console.log('Opção inválida');
      break;
  }

  await menuPrincipal();
}
