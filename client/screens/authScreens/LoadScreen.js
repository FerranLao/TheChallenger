import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, AsyncStorage } from "react-native";
import { userLogged, firstToken } from "./../../axios/auth";
import LottieView from "lottie-react-native";
import { dispatcher } from "../../redux/actions/dispatchers.js";
import { connect } from "react-redux";

const loadScreen = ({ navigation, addInfo }) => {
  useEffect(() => {
    const GetUserWithKey = async () => {
      const id = await AsyncStorage.getItem("key");
      if (id) {
        try {
          const user = await userLogged(id);
          await addInfo(user);
          navigation.navigate({ routeName: "Signup" });

          // navigation.navigate({ routeName: "User" });
        } catch {
          // navigation.navigate({ routeName: "Login" });
          navigation.navigate({ routeName: "Signup" });
        }
      } else {
        // navigation.navigate({ routeName: "Login" });
        navigation.navigate({ routeName: "Signup" });
      }
    };
    GetUserWithKey();
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
const mapStateToProps = () => ({});

const mapDispatch = dispatcher(["addInfo"]);

export default connect(mapStateToProps, mapDispatch)(loadScreen);

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
