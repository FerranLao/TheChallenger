import React from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Text>SIGNUP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
