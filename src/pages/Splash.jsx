import { useEffect } from "react";
import { Image, View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

const Splash = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation("/home");
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={require("../assets/movie-logos_white1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F1C2C",
    width: "100%",
    height: "100%",
  },
  img: {
    width: 222,
    height: 222,
  },
  containerImg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Splash;
