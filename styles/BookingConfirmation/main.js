import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    summaryContainer: {
      width: getPercent(90, width),
      marginVertical: getPercent(5, height),
      padding: 15,
      minHeight: getPercent(40, height),
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    confirmationHeader: {
      fontSize: rf(24),
      fontFamily: "Bold",
      color: "hsl(3, 85%, 37%)",
      marginBottom: 15,
      textAlign: "center",
    },
    detailText: {
      fontSize: rf(13),
      fontFamily: "Medium",
      color: "#000000",
      lineHeight: 40,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: getPercent(100, width),
      paddingHorizontal: getPercent(5, width),
      marginTop: getPercent(5, height),
    },
    printButton: {
      height: getPercent(8, height),
      width: getPercent(44, width),
      backgroundColor: "hsl(3, 85%, 40%)",

      justifyContent: "center",
      borderRadius: 10,
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
    returnButton: {
      height: getPercent(8, height),
      width: getPercent(44, width),
      backgroundColor: "hsl(3, 85%, 40%)",

      justifyContent: "center",
      borderRadius: 10,
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
    buttonText: {
      color: "#fff",
      fontSize: rf(12),
      fontFamily: "SemiBold",
      textAlign: "center",
    },
  });
