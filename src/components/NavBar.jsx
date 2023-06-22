import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Link } from "react-router-native";
import { useLocation } from "react-router-native";

const NavBar = () => {
  const location = useLocation();
  if (
    location.pathname == "/" ||
    location.pathname == "/register" ||
    location.pathname == "/login"
  )
    return null;
  return (
    <View style={styles.containerNavBar}>
      <View style={styles.navBar}>
        <Link to="/home">
          <Image
            style={styles.iconNavBar}
            source={require("../assets/House.png")}
          />
        </Link>
        <Link to="/search">
          <Image
            style={styles.iconNavBar}
            source={require("../assets/search.png")}
          />
        </Link>
        <Link to="/saved">
          <Image
            style={styles.iconNavBar}
            source={require("../assets/saved.png")}
          />
        </Link>
        <Link to="/profile">
          <Image
            style={[styles.iconNavBar, styles.custom]}
            source={require("../assets/person.png")}
          />
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerNavBar: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    zIndex: 999,
  },
  navBar: {
    backgroundColor: "#302d3c",
    width: 330,
    height: 65,
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconNavBar: {
    height: 20.33,
    width: 20,
  },
  custom: {
    height: 21.5,
    width: 17,
  },
});

export default NavBar;
