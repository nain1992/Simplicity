import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    background: {
      height: getPercent(100, height),
      width: getPercent(100, width),
      position: "absolute",
    },

    header: {
      fontSize: rf(28),
      fontFamily: "Bold",
      color: "hsl(3, 85%, 37%)",
      lineHeight: 45,
      marginBottom: 10,
      marginTop: getPercent(5, height),
    },
    subText: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#222",
      lineHeight: 25,
      textAlign: "justify",
    },
    languageContainer: {
      height: getPercent(20, height),
      justifyContent: "center",
      alignItems: "center",
      width: getPercent(100, width),
      paddingHorizontal: getPercent(5, width),
    },
    selectlanguagetext: {
      fontSize: rf(20),
      fontFamily: "SemiBold",
      color: "#fff",
      marginBottom: 10,
    },

    btntext: {
      fontFamily: "SemiBold",
      fontSize: rf(15),
      color: "#000000",
    },
    continuebtnwrapper: {
      alignItems: "center",
      height: getPercent(35, height),
      justifyContent: "flex-end",
    },
    down: {
      height: getPercent(15, height),
    },

    dropdownMenu: {
      height: getPercent(20, height),
      width: getPercent(32, width),
      position: "absolute",
      borderRadius: 10,
      top: getPercent(12, height),
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
    continueBtnWrapper: {
      height: getPercent(15, height),
      paddingLeft: getPercent(5, width),
      justifyContent: "flex-end",
    },
    videowrapper: {
      height: getPercent(100, height),
      width: getPercent(100, width),
      // backgroundColor: "red",
      position: "absolute",
    },
    linearbackground: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
  });
