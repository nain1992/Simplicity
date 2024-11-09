import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { styles as _styles } from "../../styles/Shelterlocator/main";
import Simpleheader from "../../globalComponents/Simpleheader";
import Languagedropdown from "../../globalComponents/Languagedropdown";

const shelters = [
  {
    id: "1",
    name: "Shelter One",
    latitude: 45.3521,
    longitude: -75.754,
    availability: "Available beds: 5",
    contact: "123-456-7890",
  },
  {
    id: "2",
    name: "Shelter Two",
    latitude: 45.3521,
    longitude: -75.754,
    availability: "Available beds: 2",
    contact: "123-456-7891",
  },
  {
    id: "3",
    name: "Shelter Three",
    latitude: 45.3521,
    longitude: -75.754,
    availability: "Full",
    contact: "123-456-7892",
  },
];

const Shelterlocator = (props) => {
  const { width, height } = useWindowDimensions();
  const styles = _styles({ width, height });
  const [location, setLocation] = useState({
    latitude: 45.3521,
    longitude: -75.754,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShelters, setFilteredShelters] = useState(shelters);
  const [language, setLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      setLocation({
        latitude: 45.3521,
        longitude: -75.754,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
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
    <View style={styles.container}>
      <Simpleheader
        isDropdownOpen={isDropdownOpen}
        onPickrPress={toggleDropdown}
        title={language === "en" ? "English" : "Français"}
      />
      {/* Map View */}
      <View style={styles.mapwrappr}>
        <MapView style={styles.map} region={location}>
          {location && (
            <Marker
              coordinate={location}
              title="Your Location"
              description="You are here"
              pinColor="red"
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

      {/* Search and Filter Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search shelters..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
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
            <Text style={styles.shelterInfo}>{item?.availability}</Text>
            <Text style={styles.shelterInfo}>{item?.contact}</Text>
          </TouchableOpacity>
        )}
      />
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

export default connect(mapStateToProps, {})(Shelterlocator);
