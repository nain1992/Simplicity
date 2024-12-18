import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Mainservices/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Languagedropdown from "../../globalComponents/Languagedropdown";
import { useTranslation } from "react-i18next";

const Mainservices = (props) => {
  const { t, i18n } = useTranslation();
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateYAnim, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  const btnsdata = [
    {
      icon: <FontAwesome6 name="person-shelter" size={20} color="#000000" />,
      title: t("shelters"),
      onPress: () => props?.navigation?.navigate("Shelterlocator"),
    },
    {
      icon: <MaterialCommunityIcons name="food" size={20} color="#000000" />,
      title: t("food"),
      onPress: () => alert(t("comingSoon")),
    },
    {
      icon: (
        <MaterialIcons name="health-and-safety" size={20} color="#000000" />
      ),
      title: t("health"),
      onPress: () => alert(t("comingSoon")),
    },
  ];

  return (
    <View style={styles.container}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={i18n.language === "en" ? "English" : "Français"}
      />

      <Animated.View
        style={[
          styles.titleWrapper,
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        <Text style={styles.title}>{t("ourServices")}</Text>
      </Animated.View>

      <Animated.View
        style={[
          styles.btnWrapper,
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        {btnsdata.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.serviceButton, styles.shelterButton]}
            onPress={item.onPress}
          >
            {item.icon}
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      <Animated.Text
        style={[
          styles.chooseText,
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        {t("chooseService")}
      </Animated.Text>

      <Animated.View
        style={[
          styles.backBtnWrapper,
          { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] },
        ]}
      >
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => props?.navigation?.navigate("Welcome")}
        >
          <Text style={styles.backtext}>{t("goBack")}</Text>
        </TouchableOpacity>
      </Animated.View>

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

export default connect(mapStateToProps, {})(Mainservices);
