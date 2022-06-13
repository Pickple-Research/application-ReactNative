import AsyncStorage from "@react-native-async-storage/async-storage";

export type storageKey = "JWT" | "EMAIL" | "PASSWORD";

/**
 * AsyncStroage에 주어진 키:값을 저장합니다.
 * @author 현웅
 */
export async function setStorage(key: storageKey, value: any) {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {}
}

/**
 * AsyncStroage에 저장된 값을 가져옵니다.
 * @author 현웅
 */
export async function getStorage(key: storageKey) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {}
}
