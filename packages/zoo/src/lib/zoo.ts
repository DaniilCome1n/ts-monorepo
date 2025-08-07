import { getRandomAnimal } from '@ts-monorepo/animal';
import { formatMessage } from '@ts-monorepo/util';


export function zoo(): string {
  const result = getRandomAnimal();
  const message = `${result.name} says ${result.sound}!`;
  return formatMessage('ZOO', message);
}