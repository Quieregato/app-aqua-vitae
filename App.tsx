import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';

import * as SplashScreen from 'expo-splash-screen';
import { Store } from './src/app/store';
import Themes from './src/themes';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={Store}>
      <ThemeProvider theme={Themes}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
