'use client';

import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { Locale, localeNames } from '@/config/i18n';
import { usePathname, useRouter } from '@/i18n/routing';

export function LanguageSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const currentLocale = params.locale as Locale;

  function onSelectChange(nextLocale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex gap-2">
      {Object.entries(localeNames).map(([locale, name]) => (
        <button
          key={locale}
          onClick={() => onSelectChange(locale as Locale)}
          disabled={isPending || currentLocale === locale}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            currentLocale === locale
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black'
              : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}