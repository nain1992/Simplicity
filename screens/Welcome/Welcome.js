import React, { useState, useEffect, useRef } from "react";
import { Text, View, useWindowDimensions, Animated } from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Welcome/main";
import StandardButton from "../../globalComponents/StandardButton";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import { getPercent } from "../../middleware";
import Languagedropdown from "../../globalComponents/Languagedropdown";
import Simpleheader from "../../globalComponents/Simpleheader";
import { useTranslation } from "react-i18next";

const Welcome = (props) => {
  const { t, i18n } = useTranslation();
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const welcomeSlide = useRef(new Animated.Value(-width)).current;
  const descriptionSlide = useRef(new Animated.Value(-width)).current;
  const Buttonslide = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
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
  }, [welcomeSlide, descriptionSlide, Buttonslide]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={i18n.language === "en" ? "English" : "Français"}
      />
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
      <View style={styles.down}></View>
      <Animated.View
        style={{
          transform: [{ translateX: welcomeSlide }],
        }}
      >
        <Text style={styles.header}>{t("welcome.title")}</Text>
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
        <Text style={styles.subText}>{t("welcome.description")}</Text>
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
          title={t("welcome.continue")}
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
            i18n.changeLanguage("en");
            setIsDropdownOpen(false);
          }}
          onFrenchpress={() => {
            i18n.changeLanguage("fr");
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
