/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Picker,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [t, i18n] = useTranslation("", { useSuspense: false });
  [language, setLanguage] = useState("de");
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={ styles.scrollView }>
          <View style={ styles.body }>
            <View style={ styles.sectionContainer }>
              <View style={ styles.sectionTitle }>
                <Text>{ t("Login.Title") }</Text>
              </View>
            </View>
            <Picker selectedValue={ language } onValueChange={ value => setLanguage(value) }>
              <Picker.Item label="Deutsch" value="de" />
              <Picker.Item label="English" value="en" />
            </Picker>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  }
});

export default App;
