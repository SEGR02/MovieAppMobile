import React from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import Constants from "expo-constants";
import FoundMovie from "./FoundMovie";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Search = () => {
  const user = "Hoang";

  return (
    // <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.textName}>{`Hi, ${user}`}</Text>
      </View>
      <View style={styles.containerSearchBar}>
        <TextInput
          placeholderTextColor={"#DDDDDD"}
          placeholder="Harry Potter 7"
          style={styles.inputText}
        />
        <View style={styles.circleOrange}>
          <Image
            style={styles.search}
            source={require("../assets/searchWhite.png")}
          />
        </View>
      </View>
      <View style={styles.containerFoundMovies}>
        <FoundMovie />
      </View>
    </View>
    // {/* </KeyboardAwareScrollView> */}
  );
};

const styles = StyleSheet.create({
  containerName: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  textName: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  container: {
    width: "100%",
    height: "100%",
    minHeight: 891,
    backgroundColor: "#1F1C2C",
  },
  containerSearchBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputText: {
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: "#7e7c84",
    width: "80%",
  },
  search: {
    width: 20,
    height: 20,
  },
  circleOrange: {
    width: 37,
    height: 37,
    backgroundColor: "#FF722A",
    borderRadius: 38,
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  containerFoundMovies: {
    marginTop: 15,
  },
});

export default Search;
