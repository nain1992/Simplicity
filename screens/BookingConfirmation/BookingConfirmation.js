import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/BookingConfirmation/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import Languagedropdown from "../../globalComponents/Languagedropdown";
import { useTranslation } from "react-i18next";

const BookingConfirmation = ({ route, navigation }) => {
  const { t, i18n } = useTranslation();
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const bookingDetails = route.params?.bookingDetails || {};

  const handlePrint = () => {
    Alert.alert(t("printDetails"), t("printingNotImplemented"));
  };

  // Animation state
  const [fadeAnim] = useState(new Animated.Value(0));

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
        title={i18n.language === "en" ? "English" : "Français"}
      />

      <View style={styles.summaryContainer}>
        <Text style={styles.confirmationHeader}>
          {t("bookingConfirmation.bookingSummary")}
        </Text>

        <Text style={styles.detailText}>
          {t("bookingConfirmation.name")}: {bookingDetails?.name}
        </Text>
        <Text style={styles.detailText}>
          {t("bookingConfirmation.numberOfBeds")}: {bookingDetails?.beds}
        </Text>
        <Text style={styles.detailText}>
          {t("bookingConfirmation.time")}: {bookingDetails?.time}
        </Text>
        <Text style={styles.detailText}>
          {t("bookingConfirmation.confirmationNumber")}
          {bookingDetails?.confirmationNumber}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
          <Text style={styles.buttonText}>
            {t("bookingConfirmation.printDetails")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => navigation?.navigate("Mainservices")}
        >
          <Text style={styles.buttonText}>
            {t("bookingConfirmation.returnToInfoPage")}
          </Text>
        </TouchableOpacity>
      </View>

      {isDropdownOpen && (
        <Languagedropdown
          onEngpress={() => {
            i18n.changeLanguage("en"); // Change language to English
            setIsDropdownOpen(false);
          }}
          onFrenchpress={() => {
            i18n.changeLanguage("fr"); // Change language to French
            setIsDropdownOpen(false);
          }}
        />
      )}
    </Animated.View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(BookingConfirmation);
