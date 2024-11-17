import { useWindowDimensions } from "react-native";
import { firestore } from "../firebase/firebase"; // Import the initialized Firestore
import { collection, addDoc } from "firebase/firestore";

export const FontsConfig = {
  Black: require("../assets/fonts/Montserrat-Black.ttf"),
  Bold: require("../assets/fonts/Montserrat-Bold.ttf"),
  ExtraBold: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  Light: require("../assets/fonts/Montserrat-Light.ttf"),
  Medium: require("../assets/fonts/Montserrat-Medium.ttf"),
  Regular: require("../assets/fonts/Montserrat-Regular.ttf"),
  SemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
};

export const get12FormatTime = (time) => {
  const timeString12hr = new Date(
    "1970-01-01T" + time + "Z"
  ).toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return timeString12hr;
};

export const MenuItems = [
  {
    icon: "addPath",
    Title: "Demo",
  },
];

export const getDimension = () => {
  let { width, height } = useWindowDimensions();
  return { width, height };
};

export const getPercent = (percent, total) => {
  return (percent / 100) * total;
};

export const Calendar = {
  months: [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};

export const toSeconds = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};

export const toHMS = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(11, 19);
};

export const toHMS_OBJ = (seconds) => {
  let time = new Date(seconds * 1000).toISOString().slice(11, 19);
  let newObj = time.split(":");
  return { hours: newObj[0], minutes: newObj[1], seconds: newObj[2] };
};

export const saveBookings = async (data, loading) => {
  try {
    const docRef = await addDoc(collection(firestore, "bookings"), data);
    console.log("Data saved with ID:", docRef.id);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};
