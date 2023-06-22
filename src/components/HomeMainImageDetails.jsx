import { StyleSheet, View, Image, Text } from "react-native";

const HomeMainImage = ({ image }) => {
  return (
    <View style={styles.containerMainImage}>
      <Image style={styles.mainImage} source={{ uri: image }} />
      <View style={[styles.watchNow, styles.blurContainer]}>
        <View style={styles.circleWhite}>
          <Image
            style={styles.iconPlay}
            source={require("../assets/Vector(1).png")}
          />
        </View>
        <Text style={styles.watchNowText}>Watch now</Text>
      </View>
      <View style={styles.containerRating}>
        <Image
          style={styles.iconStar}
          source={require("../assets/Vector(2).png")}
        />
        <Text style={styles.textRating}>5.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMainImage: {
    width: "100%",
    height: "86%",
    marginTop: -5,
  },
  mainImage: {
    width: "100%",
    height: "91.5%",
    borderRadius: 25,
  },
  circleWhite: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  iconPlay: {
    width: 14.12,
    height: 15.5,
    marginLeft: 4,
  },
  textMainImage: {
    color: "#fff",
    position: "absolute",
    fontWeight: "700",
    fontSize: 20,
    left: 27,
    bottom: 54,
  },
  containerRating: {
    flexDirection: "row",
    position: "absolute",
    bottom: "28.5%",
    left: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  textRating: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 2,
    fontWeight: 300,
  },
  watchNow: {
    position: "absolute",
    height: 40,
    width: 150,
    backgroundColor: "#c1c1c1",
    right: 0,
    top: 145,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  blurContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  watchNowText: {
    color: "#fff",
    marginLeft: 12,
    fontSize: 18,
  },
});

export default HomeMainImage;
