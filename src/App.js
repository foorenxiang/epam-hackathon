import React from 'react';
import { registerRootComponent } from 'expo';
import { SafeAreaView } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';
import { AppContextProvider as ReactContextProvider } from './utils/AppContext';
import { safeAreaViewStyles } from './styles/appStyles';

const App = () => (
  <ReduxProvider store={store}>
    <ReactContextProvider>
      <SafeAreaView style={safeAreaViewStyles}>
        <Routes />
      </SafeAreaView>
    </ReactContextProvider>
  </ReduxProvider>
);

export default registerRootComponent(App);
