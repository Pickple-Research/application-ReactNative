import { PermissionsAndroid, Platform } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

/**
 * requestGalleryPermissionFromAndroid는 안드로이드 핸드폰에
 * CAMERA Permission을 요청하는 함수입니다.
 * @returns <요청 성공 여부: boolean>
 */
export async function requestCameraPermissionFromAndroid() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Camera Permission",
        message: "App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission given");
      return true;
    } else {
      console.log("Camera permission denied");
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}

/**
 * getGalleryPhotoFromAndroid는 gallery를 통해 사진 한 장을 가져오도록 하는 api입니다.
 * !TODO: options에 따라 사진 장수 등을 설정할 수 있도록 업데이트 하십시오.
 * @returns Promise<ImagePickerResponse> | undefined
 */
export async function getGalleryPhotoFromAndroid() {
  try {
    if (Platform.OS === "android") {
      const permissionAndroid = await PermissionsAndroid.check(
        "android.permission.CAMERA",
      );
      if (permissionAndroid || requestCameraPermissionFromAndroid()) {
        const result = await launchImageLibrary({
          mediaType: "photo",
        });
        return result;
      }
    }
  } catch (err) {
    console.warn(err);
  }
}
