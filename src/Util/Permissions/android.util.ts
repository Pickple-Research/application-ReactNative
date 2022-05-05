import { PermissionsAndroid, Platform } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export async function requestGalleryPermissionFromAndroid() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
            title: "App Camera Permission",
            message:"App needs access to your camera ",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
            }
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

export async function getGalleryPhotoFromAndroid() {
    if (Platform.OS === 'android') {
        const permissionAndroid = await PermissionsAndroid.check('android.permission.CAMERA');
        if (permissionAndroid || requestGalleryPermissionFromAndroid()) {
            const result = await launchImageLibrary({
                mediaType: 'photo'
            })
            console.log(result);
        }
    }
}