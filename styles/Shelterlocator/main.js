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
    backbtn: {
      height: getPercent(8, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "hsl(3, 85%, 37%)",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      marginBottom: getPercent(8, height),
    },
    backtext: {
      fontSize: rf(15),
      fontFamily: "SemiBold",
      color: "#fff",
    },
    mapwrappr: {
      height: getPercent(30, height),
      width: getPercent(90, width),
      borderRadius: 10,
      overflow: "hidden",
      alignSelf: "center",
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
    map: {
      height: getPercent(30, height),
      width: getPercent(90, width),
    },
    searchBar: {
      height: getPercent(7, height),
      width: getPercent(90, width),
      borderRadius: 10,
      backgroundColor: "#fff",
      marginVertical: 5,
      justifyContent: "center",
      alignSelf: "center",
      paddingLeft: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    input: {
      fontSize: rf(13),
      fontFamily: "Regular",
      color: "#000000",
    },
    list: {
      flex: 1,
      paddingHorizontal: 10,
    },
    shelterCard: {
      backgroundColor: "#fff",
      borderRadius: 10,
      minHeight: getPercent(15, height),
      justifyContent: "center",
      width: getPercent(90, width),
      alignSelf: "center",
      padding: 10,
      borderWidth: 0.7,
      borderColor: "hsl(3, 85%, 37%)",
      marginVertical: 5,
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
      fontSize: rf(18),
      fontFamily: "Bold",
      color: "hsl(3, 85%, 37%)",
      lineHeight: 30,
    },
    shelterInfo: {
      fontSize: rf(10),
      fontFamily: "Medium",
      color: "#000000",
      lineHeight: 25,
    },
    shelterdes: {
      fontSize: rf(11),
      fontFamily: "Regular",
      color: "#000000",
      lineHeight: 18,
    },
  });
