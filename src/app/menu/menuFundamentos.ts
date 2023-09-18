import { terminal } from 'terminal-kit';

import { TerminalUtil } from '@/utils/terminalUtils';

export async function menuFundamentos(): Promise<void> {
  TerminalUtil.title('Fundamentos');

  const response = await terminal.singleColumnMenu([
    '1. Polimorfismo',
    'Voltar',
  ]).promise;

  switch (response.selectedIndex) {
    case 1:
      process.exit(0);
      break;
    default:
      break;
  }

  await menuFundamentos();
}
