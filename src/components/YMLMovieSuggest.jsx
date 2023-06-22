import { StyleSheet, View, Image, Text } from "react-native";

const YMLMovieSuggest = ({ title, rating, image }) => {
  return (
    <View style={styles.popularMovie}>
      <Image style={styles.popularImages} source={{ uri: image }} />
      <View style={[styles.containerDataMovie, styles.blurContainer]}>
        <View style={styles.columnPopularData}>
          <Text style={styles.titlePopularMovie}>{title}</Text>
          <View style={styles.containerRatingPopularMovie}>
            <Image
              style={styles.imageYML}
              source={require("../assets/Vector(2).png")}
            />
            <Text style={styles.ratingPopularMovie}>{rating}</Text>
          </View>
        </View>
        <View style={styles.circleWhite}>
          <Image
            style={styles.iconPlay}
            source={require("../assets/Vector(1).png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPopular: {
    paddingTop: 16,
    flexDirection: "row",
  },
  popularMovie: {
    flexDirection: "row",
    paddingTop: 15,
  },
  popularImages: {
    marginLeft: 20,
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  containerDataMovie: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    top: 101,
    left: 25,
    paddingHorizontal: 30,
    borderRadius: 15,
    display: "flex",
    justifyContent: "space-between",
    height: 28,
    width: 110,
  },
  titlePopularMovie: {
    color: "#fff",
    position: "absolute",
    fontSize: 8,
    top: 2,
    right: 22,
  },
  blurContainer: {
    backgroundColor: "rgba(240, 240, 240, 0.2)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  ratingPopularMovie: {
    color: "#fff",
    fontSize: 8,
    marginLeft: 2,
  },
  containerRatingPopularMovie: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 14,
    left: -21,
  },
  circleWhite: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
    top: 4,
  },
  iconPlay: {
    width: 8.12,
    height: 9.5,
    marginLeft: 1,
  },
  imageYML: {
    width: 5,
    height: 5,
  },
});

export default YMLMovieSuggest;
