import { Dimensions } from "react-native";
import { ThemeSizes } from "@Object/Type";

export const vw = Dimensions.get("screen").width * 0.01;
export const vh = Dimensions.get("screen").height * 0.01;

export const themeSizes: ThemeSizes = {
  header1: "15px",
  header2: "14px",
  header3: "13px",
  header4: "12px",
  body: "11px",
  detail: "10px",
  small: "9px",
};
