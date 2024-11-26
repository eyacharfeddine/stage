import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import PhoneInput from "react-native-phone-input";

const SignUpPage = ({ navigation }) => {
  const phoneRef = useRef(null);

  const handleRegister = () => {
    console.log("Phone Number:", phoneRef.current.getValue());
    navigation.navigate("ActivationCode");
  };

  return (
    <View style={styles.container}>
      <View style={styles.partone}></View>
      <View style={styles.parttwo}>
        <Text>hello</Text>
      </View>
      <View style={styles.partthree}>
        <Image source={"./../assets/background.png"} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: "100%", width: "100vw", backgroundColor: "pink" },
  partone: { height: "30%", widh: "100%", backgroundColor: "blue" },
  parttwo: { height: "40%", widh: "100%", backgroundColor: "#15f001" },
  partthree: { height: "30%", widh: "100%", backgroundColor: "pink" },
  image: { height: "100%", widh: "100%" },
});

export default SignUpPage;
