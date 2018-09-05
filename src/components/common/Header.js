//Import librabries for making a component
import React from "react";
import { Text, View } from "react-native";

// { Text } Position/ Move Elements

//Make a component
// props
const Header = props => {
  const { textStyle } = styles;
  const { viewStyle } = styles;

  return (
    //   Center
    <View style={viewStyle}>
      {/* Referencing JS object inside JSX put inside curly braces */}
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    padding: 15,
    shadowColor: "#000",
    // positioning of shadow
    shadowOffset: { width: 0, height: 2 },
    // visibility
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export { Header };
