import en from '@/languages/en.json';
import vi from '@/languages/vi.json';

export const getTranslations = (locale: string): Record<string, string> => {
  switch (locale) {
    case 'en':
      return en;
    case 'vi':
      return vi;
    default:
      return en;
  }
};

export default getTranslations;
