import React, { useState } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { firstToken, userLogged } from "./../../axios/auth";
import { dispatcher } from "../../redux/actions/dispatchers.js";
import { connect } from "react-redux";

export const LoginScreen = () => {
  const [userTyped, setUserTyped] = useState();
  const [passwordTyped, setPasswordTyped] = useState();

  const login = async () => {
    try {
      const data = {
        user: userTyped,
        password: passwordTyped
      };

      const id = await firstToken(data);
      if (id) {
        await AsyncStorage.setItem("key", id);
        try {
          const user = await userLogged(id);
          await addInfo(user);
          navigation.navigate({ routeName: "User" });
        } catch {
          navigation.navigate({ routeName: "Login" });
        }
      } else {
        navigation.navigate({ routeName: "Login" });
      }
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

const mapStateToProps = () => ({});

const mapDispatch = dispatcher(["addInfo"]);

export default connect(mapStateToProps, mapDispatch)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
