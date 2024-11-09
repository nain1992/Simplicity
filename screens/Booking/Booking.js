import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { styles as _styles } from "../../styles/Booking/main";
import { connect } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Simpleheader from "../../globalComponents/Simpleheader";
import Languagedropdown from "../../globalComponents/Languagedropdown";

const Booking = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });

  const [time, setTime] = useState("");
  const [bedsRequired, setBedsRequired] = useState("");
  const [userName, setUserName] = useState("");
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleBooking = () => {
    if (time && bedsRequired && userName) {
      const bookingDetails = {
        name: userName,
        beds: bedsRequired,
        time: time,
        confirmationNumber: Math.floor(Math.random() * 1000000), // example confirmation number
        shelterId: props?.shelterId || "", // pass shelterId if available
      };

      props?.navigation?.navigate("BookingConfirmation", { bookingDetails });
    } else {
      alert("Please fill all the fields.");
    }
  };
  return (
    <View style={styles.container}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={language === "en" ? "English" : "Français"}
      />
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.header}>Booking Details</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Time:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter time"
            value={time}
            onChangeText={setTime}
            keyboardType="default"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Beds Required:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter number of beds"
            value={bedsRequired}
            onChangeText={setBedsRequired}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Your Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={userName}
            onChangeText={setUserName}
            keyboardType="default"
          />
        </View>

        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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

export default connect(mapStateToProps, {})(Booking);
