import AsyncStorage from '@react-native-community/async-storage';

import en from './resources/en.json';
import de from './resources/de.json';

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
    }
};
export default backendOptions;