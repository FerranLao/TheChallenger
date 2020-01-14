import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { userLoged, primerToken } from "./../../axios/auth";
import LottieView from "lottie-react-native";

export default ({ navigation }) => {
  useEffect(() => {
    const apiCall = async () => {
      const id = await AsyncStorage.getItem("key");
      if (id) {
        try {
          const user = await userLoged(id);
          console.log(user);
          navigation.navigate({ routeName: "User" });
        } catch {
          navigation.navigate({ routeName: "Login" });
        }
      } else {
        navigation.navigate({ routeName: "Login" });
      }
    };
    apiCall();
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        style={{
          width: 400,
          height: 400,
          backgroundColor: "white"
        }}
        source={require("./../../assets/LottieAnimations/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  lottie: {
    width: 100,
    height: 100
  }
});
