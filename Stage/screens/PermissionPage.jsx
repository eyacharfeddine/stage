import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";

const PermissionPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleSave = () => {
    console.log("Email:", email);
    console.log("Username:", username);
  };

  return (
    <View style={styles.screen}>
      {/* <TouchableOpacity>
        activeOpacity={1}
        onPress={Keyboard.dismiss}
        style={styles.touchableArea}
      >
        <Image source={require("./../assets/gotogo.png")} style={styles.logo} />

        <Text style={styles.title}>Complete Your Profile</Text>

        <TextInput
          style={[styles.input, styles.emailInput]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}   

        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#ED1C24" }]}
          onPress={handleSave}
          accessibilityLabel="Save Button"
        >
          <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>Register</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <ImageBackground
        source={require("./../assets/background.png")}
        style={styles.background}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  touchableArea: {
    width: "80%",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: "#000",
    marginBottom: 25,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    width: "100%",
    paddingHorizontal: 10,
  },
  emailInput: {
    position: "absolute",
    width: 35,
    height: 20,
    left: 50,
    top: 453,
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#A8A8A8",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  background: {
    width: "100%",
    height: 100,
    position: "absolute",
    bottom: 0,
  },
});

export default PermissionPage;
