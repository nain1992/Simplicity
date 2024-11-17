import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
  Alert,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Shelterpage/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import Languagedropdown from "../../globalComponents/Languagedropdown";

const Shelterpage = ({ route }) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const navigation = useNavigation();
  const { shelter } = route?.params;

  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const getAvailabilityColor = (status) => {
    switch (status) {
      case "Available":
        return "green";
      case "Limited":
        return "yellow";
      case "Unavailable":
        return "red";
      default:
        return "gray";
    }
  };

  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`;
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", t("shelterDetails.errorGoogleMaps"))
    );
  };

  // Animation state
  const [fadeAnim] = useState(new Animated.Value(0)); //

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={
          i18n.language === "en" ? t("language.english") : t("language.french")
        }
      />
      <View style={styles.container}>
        <View style={styles.infoSection}>
          <Text style={styles.shelterName}>{shelter.name}</Text>
          <Text style={styles.shelterContact}>
            {t("shelterDetails.contact")}: {shelter.contact}
          </Text>
          <Text style={styles.shelterAddress}>
            {t("shelterDetails.address")}: {shelter.address}
          </Text>
          <Text style={styles.shelterDescription}>
            {t("shelterDetails.description")}: {shelter.description}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.directionsButton}
          onPress={handleGetDirections}
        >
          <Text style={styles.directionsText}>
            {t("shelterDetails.getDirections")}
          </Text>
        </TouchableOpacity>

        <View style={styles.availabilitySection}>
          <Text style={styles.availabilityTitle}>
            {t("shelterDetails.availabilityStatus")}
          </Text>
          <View style={styles.availabilityMarkers}>
            <Text
              style={[
                styles.marker,
                { color: getAvailabilityColor(shelter.bedAvailability) },
              ]}
            >
              {t("shelterDetails.beds")}: {shelter.bedAvailability}
            </Text>
            <Text
              style={[
                styles.marker,
                { color: getAvailabilityColor(shelter.foodAvailability) },
              ]}
            >
              {t("shelterDetails.food")}: {shelter.foodAvailability}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            navigation?.navigate("Booking", { shelterId: shelter.id })
          }
        >
          <Text style={styles.bookButtonText}>
            {t("shelterDetails.bookNow")}
          </Text>
        </TouchableOpacity>
      </View>
      {isDropdownOpen && (
        <Languagedropdown
          onEngpress={() => changeLanguage("en")}
          onFrenchpress={() => changeLanguage("fr")}
        />
      )}
    </Animated.View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Shelterpage);
