import { StyleSheet, View, Image, Text } from "react-native";

const PopularMovieSuggest = ({ title, rating, image }) => {
  return (
    <View style={styles.popularMovie}>
      <Image style={styles.popularImages} source={{ uri: image }} />
      <View style={[styles.containerDataMovie, styles.blurContainer]}>
        <View style={styles.columnPopularData}>
          <Text style={styles.titlePopularMovie}>{title}</Text>
          <View style={styles.containerRatingPopularMovie}>
            <Image source={require("../assets/Vector(2).png")} />
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
    width: 170,
    height: 170,
    borderRadius: 20,
  },
  containerDataMovie: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    top: 130,
    left: 25,
    paddingHorizontal: 30,
    borderRadius: 18,
    display: "flex",
    height: 45,
    width: 160,
  },
  titlePopularMovie: {
    color: "#fff",
    fontSize: 10,
  },
  blurContainer: {
    backgroundColor: "rgba(125, 125, 125, 0.75)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  ratingPopularMovie: {
    color: "#fff",
    fontSize: 10,
    marginLeft: 2,
  },
  containerRatingPopularMovie: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleWhite: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 4,
    top: 7.5,
  },
  iconPlay: {
    width: 12.12,
    height: 13.5,
    marginLeft: 4,
  },
  columnPopularData: {
    position: "absolute",
    width: "125%",
    right: 25,
    top: 2.5,
  },
});

export default PopularMovieSuggest;
