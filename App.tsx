/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/* eslint-disable */

import React from 'react';

import {
  ApplicationProvider,
  Avatar,
  IconRegistry
} from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import Navigator from './src/navigations/Navigator';
import { Alert, StatusBar, useColorScheme } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark"? eva.dark: eva.light
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider
        {...eva}
        theme={theme}
        >
        <Navigator />
      </ApplicationProvider>
    </>
  )
}

export default App;