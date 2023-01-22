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
  IconRegistry
} from '@ui-kitten/components'
import * as eva from '@eva-design/eva'
import Navigator from './src/navigations/Navigator';
import { StatusBar } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider
        {...eva}
        theme={eva.dark}
        >
        <Navigator />
      </ApplicationProvider>
    </>
  )
}

export default App;