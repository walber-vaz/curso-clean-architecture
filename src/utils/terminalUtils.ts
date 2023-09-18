import { terminal } from 'terminal-kit';

export class TerminalUtil {
  static title(title: string): void {
    terminal.clear();
    terminal.magenta(`${title}\n`);
    terminal.magenta(`-`.repeat(title.length) + `\n`);
  }
}
