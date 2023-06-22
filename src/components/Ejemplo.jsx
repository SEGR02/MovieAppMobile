import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FixedNavigationBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barra de Navegación Fija</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FixedNavigationBar;
