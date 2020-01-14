import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { connect } from "react-redux";
import Colors from "./../../constants/Colors";

const UserScreen = props => {
  // console.log(props.info);
  return (
    <View style={styles.container}>
      <Text>USER</Text>
    </View>
  );
};
UserScreen.navigationOptions = {
  headerTitle: "User Info",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "White"
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
};
const mapStateToProps = store => {
  return {
    info: store.info
  };
};

export default connect(mapStateToProps)(UserScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
