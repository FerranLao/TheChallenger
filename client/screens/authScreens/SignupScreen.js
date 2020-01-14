import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import { goSignup, userLogged } from "./../../axios/auth";
import { dispatcher } from "../../redux/actions/dispatchers.js";
import { connect } from "react-redux";
import Colors from "./../../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const SignupScreen = ({ navigation, addInfo }) => {
  const [nameTyped, setNameTyped] = useState();
  const [emailTyped, setEmailTyped] = useState();
  const [imgSelected, setImgSelected] = useState();
  const [passwordTyped, setPasswordTyped] = useState();

  const signup = async () => {
    try {
      const data = {
        name: nameTyped,
        email: emailTyped,
        password: passwordTyped,
        img: imgSelected
      };

      const id = await goSignup(data);
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
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      enableAutomaticScroll={true}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.space}>
              <Text style={styles.text}>User</Text>
              <TextInput
                style={styles.input}
                placeholder="Please type your name"
                onChangeText={text => setNameTyped(text)}
              ></TextInput>
            </View>
            <View style={styles.space}>
              <Text style={styles.text}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Please type your email"
                onChangeText={text => setEmailTyped(text)}
              ></TextInput>
            </View>
            <View style={styles.space}>
              <Text style={styles.text}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Please type your password"
                onChangeText={text => setPasswordTyped(text)}
              ></TextInput>
            </View>
            <View>
              <Button title="Submit" onPress={() => signup()}></Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = () => ({});

const mapDispatch = dispatcher(["addInfo"]);

export default connect(mapStateToProps, mapDispatch)(SignupScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: "20%"
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 25,
    marginTop: 3
  }
});
