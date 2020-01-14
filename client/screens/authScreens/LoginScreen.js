import React from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";

export default () => {
  const algo = async () => {
    try {
      // const pepe = await axios.get("/token");
      // console.log("antes");
      // await AsyncStorage.setItem("key", pepe.data);

      const response = await AsyncStorage.getItem("key");

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
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
