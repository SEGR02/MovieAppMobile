import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <View>
          <View style={styles.containerUserImage}>
            <Image
              style={styles.userImage}
              source={require("../assets/user.png")}
            />
          </View>
          <Text style={styles.userName}>Hoang Toddy</Text>
          <Text style={styles.lowText}>Trinh Huu</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.dateJoin}>
          <Text style={styles.textJoined}>Joined</Text>
          <Text style={styles.time}>2 mon ago</Text>
        </View>
      </View>
      <View style={styles.section2}>
        <Input image={require("../assets/miinfo.png")} text={"My Info"} />
        <Input image={require("../assets/settings.png")} text={"Settings"} />
        <Input image={require("../assets/policy.png")} text={"Policy"} />
        <TouchableOpacity style={styles.customInput}>
          <Image source={require("../assets/logout.png")} />
          <Text style={styles.textCustomInput}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Input = ({ image, text }) => {
  return (
    <TouchableOpacity style={styles.containerInput}>
      <View style={styles.containerIconAndText}>
        <Image source={image} />
        <Text style={styles.textInput}>{text}</Text>
      </View>
      <View>
        <Image
          style={styles.enterArrow}
          source={require("../assets/enter.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1C2C",
  },
  section1: {
    height: 275,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 50,
  },
  section2: {
    height: 300,
    justifyContent: "space-around",
    alignItems: "center",
  },
  userName: {
    paddingTop: 10,
    color: "#fff",
    fontSize: 18,
  },
  lowText: {
    color: "#9C9C9C",
    fontSize: 14.5,
  },
  line: {
    width: 1,
    height: 100,
    backgroundColor: "#9C9C9C",
    marginBottom: 50,
  },
  dateJoin: {
    marginBottom: 60,
  },
  textJoined: {
    color: "#9C9C9C",
    fontSize: 17,
  },
  time: {
    color: "#fff",
    fontSize: 17,
  },
  containerInput: {
    height: 50,
    width: 330,
    backgroundColor: "#4c4956",
    borderRadius: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 130,
  },
  containerIconAndText: {
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    color: "#fff",
    marginLeft: 30,
    fontSize: 18,
  },
  enterArrow: {
    marginRight: 18,
  },
  customInput: {
    backgroundColor: "#4c4956",
    height: 50,
    width: 130,
    borderRadius: 26,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 200,
  },
  textCustomInput: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Profile;
