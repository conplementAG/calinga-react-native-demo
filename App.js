/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Picker, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTranslation } from 'react-i18next';

const clearStore = async () => {
    await AsyncStorage.clear();
};

const App = () => {
    const [t, i18n, ready] = useTranslation(undefined, { useSuspense: false });
    [language, setLanguage] = useState(i18n.lng);
    [loaded, setLoaded] = useState('unknown');
    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    useEffect(() => {
        i18n.on('loaded', (loaded) => loaded ? setLoaded('success'): setLoaded('failed'))
        i18n.on('failedLoading', (lng, ns, msg) => setLoaded(`FAILED; language: ${lng}, ns: ${ns}, msg: ${msg}`))
    }, []);

    if (!ready) {
        return <Text>Loading...</Text>;
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <View style={styles.sectionTitle}>
                                <Text>{'text 1: ' + t('Components.UserAvatar.openCamera')}</Text>
                                <Text>{'text 2: ' + t('OnlyInResource')}</Text>
                            </View>
                        </View>
                        <Picker selectedValue={language} onValueChange={value => setLanguage(value)}>
                            <Picker.Item label="English" value="en" />
                            <Picker.Item label="Deutsch" value="de" />
                        </Picker>
                        <View style={styles.sectionTitle}>
                            <Text>{'loading state: ' + loaded}</Text>
                        </View>
                    </View>
                    <Button title="Clear translations" onPress={() => clearStore()} />
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter
    },
    body: {
        backgroundColor: Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    }
});

export default App;
