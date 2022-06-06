import { PermissionsAndroid, Platform } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

/**
 * 안드로이드 핸드폰에 CAMERA Permission을 요청하는 함수입니다.
 * @returns <요청 성공 여부: boolean>
 * @author 원제
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
 * 사용자 핸드폰에서 사진 한 장을 가져오는 함수입니다.
 * TODO: 사진 장수 등을 설정할 수 있도록 설정해야 합니다.
 * @returns Promise<ImagePickerResponse> | undefined
 * @author 원제
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
          selectionLimit: 1,
        });
        return result;
      }
    }
  } catch (err) {
    console.warn(err);
  }
}
