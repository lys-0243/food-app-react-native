import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

export default function SplashScreen() {
    return (
      <ImageBackground style={styles.splashscreen} source={require('../assets/splash_image.jpeg')}>

      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    splashscreen: {
      flex: 1,
      
    },
  });
  
