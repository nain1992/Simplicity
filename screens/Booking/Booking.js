import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  KeyboardAvoidingView,
  Alert,
  Animated,
} from "react-native";
import { styles as _styles } from "../../styles/Booking/main";
import { connect } from "react-redux";
import Simpleheader from "../../globalComponents/Simpleheader";
import Languagedropdown from "../../globalComponents/Languagedropdown";
import { useTranslation } from "react-i18next";
import { saveBookings } from "../../middleware";

const Booking = (props) => {
  const { t, i18n } = useTranslation();
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  const [time, setTime] = useState("");
  const [bedsRequired, setBedsRequired] = useState("");
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleBooking = async () => {
    if (time && bedsRequired && userName) {
      const bookingDetails = {
        name: userName,
        beds: bedsRequired,
        time: time,
        confirmationNumber: Math.floor(Math.random() * 1000000),

        shelterId: props?.shelterId || "",
      };
      await saveBookings(bookingDetails);
      props?.navigation?.navigate("BookingConfirmation", { bookingDetails });
    } else {
      Alert.alert(t("errorFillFields"));
    }
  };

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
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.header}>{t("booking.header")}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("booking.time")}</Text>
          <TextInput
            style={styles.input}
            placeholder={t("booking.timePlaceholder")}
            value={time}
            onChangeText={setTime}
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("booking.bedsRequired")}</Text>
          <TextInput
            style={styles.input}
            placeholder={t("booking.bedsPlaceholder")}
            value={bedsRequired}
            onChangeText={setBedsRequired}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t("booking.yourName")}</Text>
          <TextInput
            style={styles.input}
            placeholder={t("booking.namePlaceholder")}
            value={userName}
            onChangeText={setUserName}
            keyboardType="default"
          />
        </View>

        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>{t("booking.book")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backbtn}
          onPress={() => props?.navigation?.goBack()}
        >
          <Text style={styles.backtext}>{t("goBack")}</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

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
    </Animated.View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

export default connect(mapStateToProps, {})(Booking);
