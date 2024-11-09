import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    title: {
      fontSize: rf(28),
      fontFamily: "SemiBold",
      color: "hsl(3, 85%, 37%)",
      textAlign: "center",
      marginVertical: getPercent(5, height),
    },

    btnWrapper: {
      height: getPercent(45, height),
      justifyContent: "space-around",
    },
    serviceButton: {
      height: getPercent(12, height),
      width: getPercent(90, width),
      justifyContent: "center",
      alignSelf: "center",
      borderRadius: 10,
      alignItems: "center",
      marginVertical: 5,
      backgroundColor: "#fff",
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },

    buttonText: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#000000",
    },
    chooseText: {
      fontFamily: "Medium",
      fontSize: rf(12),
      color: "#000000",
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
      textAlign: "center",
    },
    backBtnWrapper: {
      marginTop: getPercent(5, height),
    },
    backbtn: {
      height: getPercent(8, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "hsl(3, 85%, 37%)",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginTop: getPercent(3, height),
    },
    backtext: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#fff",
    },
  });
