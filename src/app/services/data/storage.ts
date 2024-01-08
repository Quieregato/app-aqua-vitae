import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e: any) {
    return;
  }
};

export const getData = async (key: string) => {
  try {
    const valueReading = await AsyncStorage.getItem(key).then((value) => value?.toString());

    if (valueReading !== null) {
      return valueReading;
    }
  } catch (e: any) {
    return;
  }
};

export default {
  setData,
  getData,
};
