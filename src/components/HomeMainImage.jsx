import { StyleSheet, View, Image, Text } from "react-native";
import { useSelector } from "react-redux";

const HomeMainImage = ({ image }) => {
  const urlImages = "https://image.tmdb.org/t/p/original";
  const movies = useSelector((state) => state?.movies?.results?.[0]);
  console.log(image);
  if (!image) image = state?.movies?.results?.[0]?.backdrop_path;

  return (
    <View style={styles.containerMainImage}>
      <Image
        style={styles.mainImage}
        source={{
          uri: image,
        }}
      />
      <View style={styles.circleWhite}>
        <Image
          style={styles.iconPlay}
          source={require("../assets/Vector(1).png")}
        />
      </View>
      <Text style={styles.textMainImage}>{movies?.original_title}</Text>
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
    marginVertical: 17,
    marginHorizontal: 10,
    marginBottom: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    // width: 340 + 40,
    width: "100%",
    height: 244,
    // height: "53%",
    borderRadius: 39,
  },
  circleWhite: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 22,
    top: 175,
  },
  iconPlay: {
    width: 17.12,
    height: 18.5,
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
    bottom: 16,
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
});

export default HomeMainImage;
