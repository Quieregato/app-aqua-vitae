import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/Routes';

import * as SplashScreen from 'expo-splash-screen';
import Themes from './src/Themes';

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
    <ThemeProvider theme={Themes}>
      <Routes />
    </ThemeProvider>
  );
}
