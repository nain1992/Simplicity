import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Shelterpage/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import { useNavigation } from "@react-navigation/native";
import Languagedropdown from "../../globalComponents/Languagedropdown";

const Shelterpage = ({ route }) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const navigation = useNavigation();
  const { shelter } = route?.params;
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Availability status logic
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

  // Open Google Maps for directions
  const handleGetDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`;
    Linking.openURL(url).catch(() =>
      Alert.alert("Error", "Failed to open Google Maps.")
    );
  };

  return (
    <View style={styles.container}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={language === "en" ? "English" : "Français"}
      />
      <View style={styles.container}>
        {/* Shelter Information */}
        <View style={styles.infoSection}>
          <Text style={styles.shelterName}>{shelter.name}</Text>
          <Text style={styles.shelterContact}>Contact: {shelter.contact}</Text>
          <Text style={styles.shelterAddress}>Address: {shelter.address}</Text>
          <Text style={styles.shelterDescription}>{shelter.description}</Text>
        </View>

        <TouchableOpacity
          style={styles.directionsButton}
          onPress={handleGetDirections}
        >
          {/* <LinearGradient
            // Background Linear Gradient
            colors={["hsl(10, 92%, 85%)", "hsl(10, 92%, 65%)"]}
            style={styles.background}
          /> */}
          <Text style={styles.directionsText}>Get Directions</Text>
        </TouchableOpacity>

        {/* Availability Status */}
        <View style={styles.availabilitySection}>
          <Text style={styles.availabilityTitle}>Availability Status:</Text>
          <View style={styles.availabilityMarkers}>
            <Text
              style={[
                styles.marker,
                { color: getAvailabilityColor(shelter.bedAvailability) },
              ]}
            >
              Beds: {shelter.bedAvailability}
            </Text>
            <Text
              style={[
                styles.marker,
                { color: getAvailabilityColor(shelter.foodAvailability) },
              ]}
            >
              Food: {shelter.foodAvailability}
            </Text>
          </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() =>
            navigation?.navigate("Booking", { shelterId: shelter.id })
          }
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, {})(Shelterpage);
