import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";

export default function SplashScreen() {
  return (
    <ImageBackground
      style={styles.splashscreen}
      source={require("../assets/splash_image.jpeg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View style={styles.textContainer}>
        <View>
          <Text
            style={{
              color: colors.white,
              fontWeight: "800",
              fontSize: 45,
              textTransform: "capitalize",
            }}
          >
            Let your favorite food find you
          </Text>
          <Text
            style={{ color: colors.white, fontWeight: "600", fontSize: 17 }}
          >
            Dolore reprehenderit id ea eu voluptate desert occaecat occaecat.
          </Text>
          <TouchableOpacity style={{
            padding : 20,
            backgroundColor : colors.white,
            borderRadius : 20,
            alignItems : "center",
            marginTop: 30

          }}>
            <Text style={{
              color : colors.black,
              fontSize : 20,
              fontWeight : "700"
            }}>Explore Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashscreen: {
    flex: 1,
  },
  textContainer: {
    position: "absolute",
    height: "100%",
    zIndex: 2,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
});
