import { terminal } from 'terminal-kit';

export class TerminalUtil {
  static title(title: string): void {
    terminal.clear();
    terminal.magenta.bold.underline(`${title}\n`);
    terminal.magenta.bold.underline(`-`.repeat(title.length) + `\n`);
  }
}
