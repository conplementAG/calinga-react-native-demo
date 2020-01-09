import AsyncStorage from '@react-native-community/async-storage';

import en from './resources/en.json';
import de from './resources/de.json';
//import da from './resources/da.json';
//import es from './resources/es.json';
//import fr from './resources/fr.json';
//import it from './resources/it.json';
//import nl from './resources/nl.json';
//import pl from './resources/pl.json';
//import tr from './resources/tr.json';

const backendOptions = {
    version: 'v1',
    cache: {
        read: async key => {
            try {
                return await AsyncStorage.getItem(key);
            } catch (e) {
                console.error(e); //eslint-disable-line
            }
            return key;
        },
        write: async (key, value) => {
            try {
                await AsyncStorage.setItem(key, value);
            } catch (e) {
                console.error(e); //eslint-disable-line
            }
            return key;
        }
    },
    resources: {
        en: {app: en},
        de: {app: de},
        //da: {app: da},
        //es: {app: es},
        //fr: {app: fr},
        //it: {app: it},
        //nl: {app: nl},
        //pl: {app: pl},
        //tr: {app: tr}
    }
};
export default backendOptions;