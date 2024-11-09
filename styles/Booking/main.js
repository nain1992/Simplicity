import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#fff",
    },
    header: {
      fontSize: rf(24),
      fontFamily: "Bold",
      color: "hsl(3, 85%, 37%)",
      textAlign: "center",
      marginVertical: getPercent(5, height),
    },
    inputContainer: {
      width: getPercent(90, width),
    },
    label: {
      fontSize: rf(14),
      fontFamily: "Medium",
      color: "#000000",
      // marginVertical: 10,
      lineHeight: 40,
    },
    input: {
      height: getPercent(7, height),
      width: "100%",
      borderColor: "hsl(3, 85%, 37%)",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      backgroundColor: "#fff",
      fontSize: rf(13),
      color: "#000000",
    },
    bookButton: {
      marginTop: getPercent(5, height),
      width: getPercent(90, width),
      height: getPercent(8, height),
      backgroundColor: "hsl(3, 85%, 37%)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      overflow: "hidden",
    },
    bookButtonText: {
      color: "#fff",
      fontSize: rf(16),
      fontFamily: "SemiBold",
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
    },
  });
