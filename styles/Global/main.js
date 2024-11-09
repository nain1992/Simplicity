import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//standardButton Styles starts here
export const standardButtonStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(8, height),
      width: getPercent(50, width),
      backgroundColor: "hsl(3, 85%, 37%)",
      borderRadius: 100,
      shadowColor: "#000",
      flexDirection: "row",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: rf(16),
      fontFamily: "SemiBold",
      color: "#fff",
      marginRight: 10,
    },
  });

//loader Styles starts here
export const loaderStyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      position: "absolute",
      left: 0,
      zIndex: 9999999,
      top: getPercent(20, height),
    },
  });

//  Header starts here

export const Headerstyles = ({ width, height }) =>
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
    container: {
      width: getPercent(100, width),
      height: getPercent(12, height),
      backgroundColor: "#fff",
      position: "absolute",
      flexDirection: "row",
      zIndex: 1,
      justifyContent: "space-between",
      paddingRight: getPercent(5, width),

      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },

    criclebody: {
      height: 30,
      width: 30,
      backgroundColor: "#e5e5e5",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
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
    logowrappr: {
      height: getPercent(12, height),
      width: getPercent(30, width),
      overflow: "hidden",
      alignItems: "center",
    },
    languagePicker: {
      height: getPercent(7, height),
      width: getPercent(30, width),
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });

export const SimpleHeaderstyles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(100, width),
      height: getPercent(12, height),
      backgroundColor: "#fff",
      flexDirection: "row",
      zIndex: 1,
      justifyContent: "space-between",
      paddingRight: getPercent(5, width),

      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },

    criclebody: {
      height: 30,
      width: 30,
      backgroundColor: "#e5e5e5",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
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
    logowrappr: {
      height: getPercent(12, height),
      width: getPercent(30, width),
      overflow: "hidden",
      alignItems: "center",
    },
    languagePicker: {
      height: getPercent(7, height),
      width: getPercent(30, width),
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "space-around",
    },
  });
