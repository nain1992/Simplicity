import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import { connect } from "react-redux";
import { Headerstyles } from "../styles/Global/main";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
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

const Header = (props) => {
  let { title, onPickrPress, onEngpress, onFrenchpress, onSpanishpress } =
    props;
  let { width, height } = useWindowDimensions();
  let styles = Headerstyles({ width, height });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
      {isDropdownOpen && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity onPress={onEngpress} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>English</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onFrenchpress} style={styles.dropdownItem}>
            <Text style={styles.dropdownText}>Français</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onSpanishpress}
            style={styles.dropdownItem}
          >
            <Text style={styles.dropdownText}>Español</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Header);
