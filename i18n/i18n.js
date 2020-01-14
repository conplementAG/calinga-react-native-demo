import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { CalingaBackend } from 'i18next-calinga-backend';

import backendConfig from './config';

i18n.use(initReactI18next)
    .use(CalingaBackend)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        ns: ['app'],
        backend: backendConfig,
        keySeparator: false,
        fallbackLng: 'en',
        lng: 'en',
        debug: false,
        interpolation: { escapeValue: false },
        defaultNS: 'app',
        react: {
            bindI18n: 'loaded'
        }
    })
    .then((translationFunc) => {
        i18next = {
            i18n,
            t: translationFunc
        };
    });

export default i18n;
