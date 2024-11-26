import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const SignUpPage = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate("ActivationCode");
  };

  return (
    <ImageBackground
      source={require("./../assets/background.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require("./../assets/gotogo.png")} style={styles.logo} />
        <Text style={styles.title}>Connexion</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#000"
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#3498DB" }]}
          onPress={handleRegister}
        >
          <Text style={[styles.buttonText, { color: "#FFFFFF" }]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SignUpPage;
