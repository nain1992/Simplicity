import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    dropdownMenu: {
      height: getPercent(20, height),
      width: getPercent(32, width),
      position: "absolute",
      borderRadius: 10,
      top: getPercent(-73, height),
      right: 15,
      backgroundColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      elevation: 3,
      zIndex: 1,
    },
    dropdownItem: {
      padding: 10,
    },
    dropdownText: {
      fontSize: rf(15),
      fontFamily: "Medium",
      color: "#000000",
      marginVertical: 5,
    },
  });
