import en from './en.json';
import th from './th.json';
import zh from './zh.json';

export function getTranslation(lang: string) {
  switch (lang) {
    case 'th':
      return th;
    case 'zh':
      return zh;
    case 'en':
    default:
      return en;
  }
}