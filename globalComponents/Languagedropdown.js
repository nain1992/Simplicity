import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../styles/Languagedropdown/main";

const translations = {
  en: {
    welcome: "Welcome\nto\nSimplicity",
    description:
      "We aim to improve resource and service accessibility for our unhoused neighbors. We hope to unify the city and its individuals through sustainable innovation and social impact.",
    continue: "Continue",
  },
  es: {
    welcome: "Bienvenue\ndans la\nsimplicité",
    description:
      "Nous visons à améliorer l’accessibilité aux ressources et aux services pour nos voisins sans logement. Nous espérons unifier la ville et ses individus grâce à l’innovation durable et à l’impact social",
    continue: "Continuer",
  },
};

const Languagedropsown = (props) => {
  let { onEngpress, onFrenchpress, onSpanishpress } = props;
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <View style={styles.dropdownMenu}>
        <TouchableOpacity onPress={onEngpress} style={styles.dropdownItem}>
          <Text style={styles.dropdownText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onFrenchpress} style={styles.dropdownItem}>
          <Text style={styles.dropdownText}>Français</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSpanishpress} style={styles.dropdownItem}>
          <Text style={styles.dropdownText}>Español</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Languagedropsown);
