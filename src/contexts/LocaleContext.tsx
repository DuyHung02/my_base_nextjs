'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from 'react';
import { getTranslations } from '@/utils/i18n';
import { LocaleContextProps } from '@/types/context';

const LocaleContext = createContext<LocaleContextProps>({
  locale: 'vi',
  setLocale: () => {},
  t: (key: string) => key,
});

export const useLocale = () => useContext(LocaleContext);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState('vi');
  const [translations, setTranslations] = useState(getTranslations(locale));

  useEffect(() => {
    setTranslations(getTranslations(locale));
  }, [locale]);

  const t = useCallback(
    (key: string) => translations[key] || key,
    [translations],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}
