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
  SafeAreaView
} from "react-native";
import { firstToken, userLogged } from "./../../axios/auth";
import { dispatcher } from "../../redux/actions/dispatchers.js";
import { connect } from "react-redux";
import Colors from "./../../constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Container } from "native-base";
import Header from "./../../components/Header";

export const LoginScreen = ({ navigation, addInfo }) => {
  const [userTyped, setUserTyped] = useState();
  const [passwordTyped, setPasswordTyped] = useState();

  const login = async () => {
    try {
      const data = {
        user: userTyped,
        password: passwordTyped
      };

      const { id } = await firstToken(data);

      if (id) {
        await AsyncStorage.setItem("key", id);
        console.log(id);

        try {
          const { token } = await userLogged(id);
          await addInfo(token);
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
    <Container>
      <Header info="Login"></Header>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        enableAutomaticScroll={true}
        style={{ marginTop: 70 }}
      >
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={styles.space}>
                <Text style={styles.text}>User</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Please type your name or email"
                  onChangeText={text => setUserTyped(text)}
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
                <Button title="Submit" onPress={() => login()}></Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </Container>
  );
};

const mapStateToProps = () => ({});

const mapDispatch = dispatcher(["addInfo"]);

export default connect(mapStateToProps, mapDispatch)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end"
  },
  input: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  }
});
