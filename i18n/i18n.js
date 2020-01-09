import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { CalingaBackend } from 'i18next-calinga-backend';

import backendConfig from './config';

i18n.use(initReactI18next)
    .use(CalingaBackend)
    .init({
        ns: ['app'],
        backend: backendConfig,
        keySeparator: false,
        fallbackLng: 'en',
        lng: 'en',
        debug: false,
        interpolation: { escapeValue: false },
        defaultNS: 'app'
    })
    .then((translationFunc) => {
        i18next = {
            i18n,
            t: translationFunc
        };
        //resolve();
    });

export default i18n;
