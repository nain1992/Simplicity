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
    infoSection: {
      backgroundColor: "#fff",
      minHeight: getPercent(25, height),
      width: getPercent(90, width),
      borderRadius: 10,
      alignSelf: "center",
      padding: 10,
      justifyContent: "center",
      marginVertical: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    shelterName: {
      fontSize: rf(20),
      fontFamily: "Bold",
      color: "hsl(3, 85%, 37%)",
      lineHeight: 40,
    },
    shelterContact: {
      fontSize: rf(14),
      color: "#000000",
      fontFamily: "Regular",
      lineHeight: 30,
    },
    shelterAddress: {
      fontSize: rf(12),
      color: "#000000",
      fontFamily: "Regular",
      lineHeight: 18,
    },
    shelterDescription: {
      fontSize: rf(11),
      color: "#000000",
      fontFamily: "Regular",
      lineHeight: 18,
    },
    directionsButton: {
      height: getPercent(8, height),
      width: getPercent(90, width),
      justifyContent: "center",
      borderRadius: 10,
      alignItems: "center",
      alignSelf: "center",
      marginVertical: 5,
      overflow: "hidden",
      backgroundColor: "hsl(3, 85%, 37%)",
    },
    directionsText: {
      color: "#fff",
      fontSize: rf(16),
      fontFamily: "SemiBold",
    },
    availabilitySection: {
      paddingHorizontal: getPercent(5, width),
      marginVertical: 10,
    },
    availabilityTitle: {
      fontSize: rf(16),
      fontFamily: "Bold",
      color: "hsl(3, 85%, 37%)",
      lineHeight: 40,
    },
    availabilityMarkers: {
      flexDirection: "row",
      marginTop: 10,
      height: getPercent(25, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#fff",
      alignSelf: "center",
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginVertical: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    marker: {
      fontSize: rf(13),
      marginLeft: 10,
      fontFamily: "SemiBold",
    },
    bookButton: {
      height: getPercent(8, height),
      width: getPercent(90, width),
      justifyContent: "center",
      borderRadius: 10,
      alignItems: "center",
      alignSelf: "center",
      marginVertical: 5,
      overflow: "hidden",
      backgroundColor: "hsl(3, 85%, 37%)",
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
