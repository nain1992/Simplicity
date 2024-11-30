import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { styles as _styles } from "../../styles/Shelterlocator/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import Languagedropdown from "../../globalComponents/Languagedropdown";
import { useTranslation } from "react-i18next";

const shelters = [
  {
    id: "1",
    name: "Operation Come Home",
    latitude: 45.3521,
    longitude: -75.754,
    address: "150 Gloucester St, Ottawa, ON, K2P 0A6",
    descriptionn:
      "Offers information and resources for homeless youth. Weekly visits from outreach workers (e.g., mental health nurses, counseling). Provides hot breakfast and dinner every day. Employment support every Thursday.",
    availability: "Available beds: 5",
    contact: "613-230-4663",
    bedAvailability: "Available",
    foodAvailability: "Available",
  },
  {
    id: "2",
    name: "United Way East Ontario / Centraide Est de l'Ontario",
    latitude: 45.3611,
    longitude: -75.751,
    address: "363 Coventry Rd, Ottawa, ON, K1K 2C5",
    descriptionn:
      "United Way East Ontario contributes to community strength by supporting programs and initiatives aimed at improving conditions for children and youth, reducing poverty, and fostering healthy communities.",
    availability: "Available beds: 2",
    contact: "123-456-7891",
    bedAvailability: "Limited",
    foodAvailability: "Unavailable",
  },
];

const Shelterlocator = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShelters, setFilteredShelters] = useState(shelters);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [distances, setDistances] = useState({});
  const [fadeAnim] = useState(new Animated.Value(0));

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error(t("locationPermissionDenied"));
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });

      const calculatedDistances = {};
      shelters.forEach((shelter) => {
        calculatedDistances[shelter.id] = calculateDistance(
          currentLocation.coords.latitude,
          currentLocation.coords.longitude,
          shelter.latitude,
          shelter.longitude
        );
      });
      setDistances(calculatedDistances);
    })();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setFilteredShelters(
      shelters.filter((shelter) =>
        shelter.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={
          i18n.language === "en" ? t("language.english") : t("language.french")
        }
      />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder={t("searchShelters")}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      {/* Map View */}
      <View style={styles.mapwrappr}>
        <MapView style={styles.map} region={location}>
          {location && (
            <Marker
              coordinate={location}
              title={t("yourLocation")}
              description={t("youAreHere")}
              pinColor="blue"
            />
          )}
          {filteredShelters.map((shelter) => (
            <Marker
              key={shelter.id}
              coordinate={{
                latitude: shelter.latitude,
                longitude: shelter.longitude,
              }}
              title={shelter.name}
              description={shelter.availability}
            />
          ))}
        </MapView>
      </View>

      {/* Shelter List View */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredShelters}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.shelterCard}
            onPress={() =>
              props?.navigation?.navigate("Shelterpage", {
                shelter: item,
              })
            }
          >
            <Text style={styles.shelterName}>{item?.name}</Text>
            <Text style={styles.shelterInfo}>Contact No: {item?.contact}</Text>
            <Text style={styles.shelterInfo}>Address: {item?.address}</Text>
            <Text
              style={[
                styles.shelterInfo,
                {
                  textAlign: "right",
                },
              ]}
            >
              {t("distance")}: {distances[item.id]} km
            </Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.backbtn}
        onPress={() => props?.navigation?.goBack()}
      >
        <Text style={styles.backtext}>{t("goBack")}</Text>
      </TouchableOpacity>
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

export default connect(mapStateToProps, {})(Shelterlocator);
