import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-service-backend';

const service = 'https://dev.cali.conplement.cloud/api/v1/projects/reactNativeTest/versions/latest';

const backendOptions = {
    loadPath: service + '/languages/{{lng}}/labels',
    getLanguagesPath: service + '/languages'
}

i18n
    .use(initReactI18next)
    .use(Backend)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        backend: backendOptions,
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });

export default i18n;