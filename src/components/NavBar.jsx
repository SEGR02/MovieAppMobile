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
          <View>
            <Image
              style={styles.iconNavBar}
              source={
                location.pathname == "/home"
                  ? require("../assets/House.png")
                  : require("../assets/home_normal.png")
              }
            />
            <View
              style={location.pathname == "/home" ? styles.point : ""}
            ></View>
          </View>
        </Link>
        <Link to="/search">
          <View>
            <Image
              style={styles.iconNavBar}
              source={
                location.pathname == "/search"
                  ? require("../assets/search_white.png")
                  : require("../assets/search.png")
              }
            />
            <View
              style={location.pathname == "/search" ? styles.point : ""}
            ></View>
          </View>
        </Link>
        <Link to="/saved">
          <View>
            <Image
              style={styles.iconNavBar}
              source={
                location.pathname == "/saved"
                  ? require("../assets/saved_white.png")
                  : require("../assets/saved.png")
              }
            />
            <View
              style={location.pathname == "/saved" ? styles.point : ""}
            ></View>
          </View>
        </Link>
        <Link to="/profile">
          <View>
            <Image
              style={[styles.iconNavBar, styles.custom]}
              source={
                location.pathname == "/profile"
                  ? require("../assets/user_white.png")
                  : require("../assets/person.png")
              }
            />
            <View
              style={location.pathname == "/profile" ? styles.point : ""}
            ></View>
          </View>
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
  point: {
    width: 3,
    height: 3,
    backgroundColor: "#fff",
    marginLeft: 8,
    marginTop: 5,
    borderRadius: 20,
  },
});

export default NavBar;
