import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { SimpleHeaderstyles } from "../styles/Global/main";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const translations = {
  en: {
    welcome: "Welcome to Simplicity",
    description:
      "We aim to improve resource accessibility for our unhoused neighbors.",
    continue: "Continue",
  },
  es: {
    welcome: "Bienvenido a Simplicity",
    description:
      "Nuestro objetivo es mejorar el acceso a recursos para nuestros vecinos sin hogar.",
    continue: "Continuar",
  },
};

const Simpleheader = (props) => {
  let { title, onPress, onEngPress, onPickrPress } = props;
  let { width, height } = useWindowDimensions();
  let styles = SimpleHeaderstyles({ width, height });

  const [language, setLanguage] = useState("en"); // Default to English

  return (
    <View style={styles.container}>
      <View style={styles.logowrappr}>
        <Image
          source={require("../assets/logo.png")}
          style={{ height: "100%", width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={onPickrPress} style={styles.languagePicker}>
        <Text style={styles.btntext}>{title}</Text>
        <View style={styles.criclebody}>
          <AntDesign name="caretdown" size={15} color="#222" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Simpleheader);
