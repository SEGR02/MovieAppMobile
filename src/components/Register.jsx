import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link, useNavigate } from "react-router-native";
import Constants from "expo-constants";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/slices/isLoading.slice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    try {
      const credentials = {
        email: email,
        password: password,
      };
      axios
        .post(
          `https://ecommerce-academlo-sebas.onrender.com/api/v1/auth/register`,
          credentials,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // dispatch(setAuth(res.data));
          navigate("/login");
          alert("User created");
        })
        .finally(() => dispatch(setIsLoading(false)))
        .catch((error) =>
          error.response.state == 400
            ? alert("Something wrong")
            : alert(error.response.data.message)
        );
      // dispatch(loginUser(credentials));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.section1}>
        <Link to="/login">
          <View style={styles.backArrow}>
            <Image
              style={styles.arrow}
              source={require("../assets/Arrow.png")}
            />
            <Text style={styles.titleSection}>Sign up</Text>
          </View>
        </Link>
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.containerDescription}>
          <Text style={styles.description}>
            Sing up with one of following options
          </Text>
        </View>
        <View style={styles.containerInputs}>
          <InputSignIn image={require("../assets/apple.png")} />
          <InputSignIn image={require("../assets/google.png")} />
        </View>
      </View>
      <View style={styles.containerInputsText}>
        <InputText field={"name"} />
        <InputText
          field={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <InputText
          field={"password"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => submit()}>
          <LinearGradient
            style={styles.button}
            colors={[
              // "#a47160",
              // "#ad7660",
              // "#FF722A",
              // "#ba7a60",
              // "#cd8260",
              "#f3915f",
              "#fe955f",
            ]}
          >
            <Text style={styles.textButton}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.containerHaveAcc}>
        <Text style={styles.dark}>Already have an account? </Text>
        <Link to="/login">
          <Text style={styles.white}>Login</Text>
        </Link>
      </View>
    </View>
  );
};

const InputSignIn = ({ image }) => {
  return (
    <TouchableOpacity style={styles.containerInput}>
      <View style={styles.containerIconAndText}>
        <Image source={image} />
      </View>
    </TouchableOpacity>
  );
};

const InputText = ({ field, ...props }) => {
  if (field == "password")
    return (
      <View>
        <Text style={styles.titleInput}>{field}</Text>
        <TextInput
          secureTextEntry
          placeholderTextColor={"#9C9C9C"}
          style={styles.inputText}
          placeholder={`Enter your ${field}`}
          {...props}
        />
      </View>
    );
  return (
    <View style={styles.containerButton}>
      <Text style={styles.titleInput}>{field}</Text>
      <TextInput
        placeholderTextColor={"#9C9C9C"}
        style={styles.inputText}
        placeholder={`Enter your ${field}`}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Constants.statusBarHeight + 5,
    height: "100%",
    width: "100%",
    backgroundColor: "#1F1C2C",
  },
  section1: {
    width: "90%",
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
  titleSection: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 10,
  },
  backArrow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  containerInputs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerInput: {
    height: 55,
    width: 175,
    backgroundColor: "#353241",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  containerDescription: {
    justifyContent: "flex-start",
  },
  description: {
    color: "#9C9C9C",
    marginLeft: 10,
    marginVertical: 30,
  },
  inputText: {
    height: 50,
    width: "98%",
    backgroundColor: "#353241",
    borderRadius: 14,
    paddingLeft: 18,
    color: "#9C9C9C",
  },
  titleInput: {
    color: "#fff",
    textTransform: "capitalize",
    fontSize: 19,
    marginBottom: 10,
    fontWeight: "700",
  },
  containerInputsText: {
    marginLeft: 10,
    height: 400,
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
    marginTop: 50,
  },
  textButton: {
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "700",
  },
  containerHaveAcc: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  dark: {
    color: "#9C9C9C",
  },
  white: {
    color: "#fff",
  },
});

export default Register;
