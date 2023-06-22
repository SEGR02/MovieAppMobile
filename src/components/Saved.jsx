import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import FoundMovie from "./FoundMovie";

const Saved = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{"All"}</Text>
      </View>
      <View style={styles.containerFoundMovies}>
        <FoundMovie />
        <View style={styles.container}>
          <FoundMovie />
        </View>
        <View style={styles.container}>
          <FoundMovie />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#1F1C2C",
  },
  containerTitle: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  containerFoundMovies: {
    marginTop: 10,
  },
  container: {
    marginTop: 15,
  },
});

export default Saved;
