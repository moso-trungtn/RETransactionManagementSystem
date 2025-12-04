'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { type Locale } from '@/config/i18n';

export function useLocaleSwitch() {
    const currentLocale = useLocale()   ;
    const router = useRouter();
    const pathname = usePathname();

    const setLocale = (newLocale: Locale) => {
        router.replace(pathname, { locale: newLocale });
    };

    return {
        locale: currentLocale,
        setLocale
    };
}