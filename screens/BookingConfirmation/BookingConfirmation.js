import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/BookingConfirmation/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import Languagedropdown from "../../globalComponents/Languagedropdown";

const BookingConfirmation = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Extract booking details from route params
  const bookingDetails = route.params?.bookingDetails || {}; // Ensure this line to avoid undefined errors

  const handlePrint = () => {
    Alert.alert("Print Details", "Printing functionality is not implemented.");
  };

  const handleReturnToInfoPage = () => {
    // Pass a fallback value if shelterId is undefined
    navigation.navigate("Shelterpage", {
      shelterId: bookingDetails.shelterId || "",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Simpleheader
          isDropdownOpen={isDropdownOpen}
          onPickrPress={toggleDropdown}
          title={language === "en" ? "English" : "Français"}
        />

        <View style={styles.summaryContainer}>
          <Text style={styles.confirmationHeader}>Booking Summary</Text>

          {/* Safely display booking details */}
          <Text style={styles.detailText}>Name: {bookingDetails?.name}</Text>
          <Text style={styles.detailText}>
            Number of Beds: {bookingDetails?.beds}
          </Text>
          <Text style={styles.detailText}>Time: {bookingDetails?.time}</Text>
          <Text style={styles.detailText}>
            Confirmation Number: {bookingDetails?.confirmationNumber}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
            <Text style={styles.buttonText}>Print Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.returnButton}
            onPress={handleReturnToInfoPage}
          >
            <Text style={styles.buttonText}>Return to Info Page</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default connect(mapStateToProps, {})(BookingConfirmation);
