import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Welcome/main";
import StandardButton from "../../globalComponents/StandardButton";
import { Video } from "expo-av";
import Header from "../../globalComponents/Header";
import { LinearGradient } from "expo-linear-gradient";
import { getPercent } from "../../middleware";
import Languagedropdown from "../../globalComponents/Languagedropdown";

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

const Welcome = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const welcomeSlide = useRef(new Animated.Value(-width)).current;
  const descriptionSlide = useRef(new Animated.Value(-width)).current;
  const Buttonslide = useRef(new Animated.Value(-width)).current;

  useEffect(
    () => {
      // Start the slide-in animations
      Animated.sequence([
        Animated.timing(welcomeSlide, {
          toValue: 10,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(descriptionSlide, {
          toValue: 10,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(Buttonslide, {
          toValue: 10,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]).start();
    },
    [welcomeSlide, descriptionSlide],
    Buttonslide
  );

  const changeLanguage = (languageCode) => {
    setLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Background Video */}
      <View style={styles.videowrapper}>
        <Video
          source={require("../../assets/intro.mp4")}
          style={styles.background}
          resizeMode="cover"
          shouldPlay={isVideoPlaying}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0.7, y: 0 }}
          colors={["#fff", "transparent"]}
          style={styles.linearbackground}
        />
      </View>
      <Header
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={language === "en" ? "English" : "Français"}
      />
      <View style={styles.down}></View>

      {/* Slide-In Welcome Text */}
      <Animated.View
        style={{
          transform: [{ translateX: welcomeSlide }],
        }}
      >
        <Text style={styles.header}>{translations[language].welcome}</Text>
      </Animated.View>

      {/* Slide-In Description Text */}
      <Animated.View
        style={{
          transform: [{ translateX: descriptionSlide }],
          width: getPercent(80, width),
          height: getPercent(30, height),
          justifyContent: "center",
        }}
      >
        <Text style={styles.subText}>{translations[language].description}</Text>
      </Animated.View>

      {/* Continue Button */}

      <Animated.View
        style={{
          transform: [{ translateX: Buttonslide }],
          height: getPercent(15, height),
          justifyContent: "flex-end",
        }}
      >
        <StandardButton
          title={translations[language].continue}
          onPress={() => {
            props?.navigation?.navigate("Mainservices");
            setIsVideoPlaying(false);
          }}
        />
      </Animated.View>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <Languagedropdown
          onEngpress={() => {
            setLanguage("en");
            setIsDropdownOpen(false);
          }}
          onFrenchpress={() => {
            setLanguage("es");
            setIsDropdownOpen(false);
          }}
          onSpanishpress={() => {
            setLanguage("es");
            setIsDropdownOpen(false);
          }}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Welcome);
