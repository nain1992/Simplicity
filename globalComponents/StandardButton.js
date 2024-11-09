import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { connect } from "react-redux";
import { standardButtonStyles } from "../styles/Global/main";
import Ionicons from "@expo/vector-icons/Ionicons";
const StandardButton = (props) => {
  let { customStyles, textStyles, onPress, title } = props;
  let { width, height } = useWindowDimensions();
  let styles = standardButtonStyles({ width, height });

  return (
    <TouchableOpacity
      style={[styles.container, customStyles]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyles]}>{title}</Text>
      <Ionicons name="arrow-forward" size={18} color="#fff" />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(StandardButton);
