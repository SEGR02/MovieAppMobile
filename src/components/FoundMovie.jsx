import { View, Image, Text, StyleSheet } from "react-native";
import { useLocation } from "react-router-native";

const FoundMovie = () => {
  const location = useLocation();
  const source =
    location.pathname == "/saved"
      ? require("../assets/delete.png")
      : require("../assets/saved.png");

  return (
    <View style={styles.cardFoundMovie}>
      <View style={styles.containerImage}>
        <Image
          style={styles.cardImage}
          source={require("../assets/HPFound.png")}
        />
      </View>
      <View style={styles.containerCardData}>
        <View style={styles.cardData}>
          <Text style={styles.cardTitle}>Harry Potter 7</Text>
          <Text style={styles.cardInfo}>Eng | Fiction | 2h 10m</Text>
          <View style={styles.cardRating}>
            <Image
              style={styles.star}
              source={require("../assets/Vector(2).png")}
            />
            <Text style={styles.ratingNumber}>4.5</Text>
          </View>
        </View>
        <View style={styles.cardButtons}>
          <View style={styles.saveButton}>
            <Image style={styles.saveIcon} source={source} />
          </View>
          <View style={styles.playButton}>
            <View style={styles.playButtonBackground}>
              <Image
                style={styles.startIcon}
                source={require("../assets/Vector(1).png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardFoundMovie: {
    flexDirection: "row",
    backgroundColor: "#62606b",
    width: "92%",
    // width: 380,
    // height: "41%",
    height: 146.5,
    borderRadius: 30,
    marginHorizontal: 15,
  },
  containerImage: {
    height: "100%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "84%",
    height: "84%",
    borderRadius: 15,
  },
  containerCardData: {
    height: "100%",
    width: "60%",
    flexDirection: "row",
  },
  cardData: {
    height: "100%",
    width: "75%",
    justifyContent: "space-around",
  },
  star: {
    height: 16,
    width: 16,
    marginRight: 1,
  },
  cardRating: {
    flexDirection: "row",
    height: "24%",
    width: "29%",
    backgroundColor: "#818089",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
  },
  cardInfo: {
    color: "#A5A5A5",
  },
  ratingNumber: {
    color: "#fff",
  },
  cardButtons: {
    width: "25%",
    height: "100%",
    justifyContent: "space-between",
    marginLeft: 7,
  },
  saveButton: {
    width: 33,
    height: 33,
    backgroundColor: "#818089",
    borderRadius: 16,
    marginTop: 10,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 33,
    height: 33,
    backgroundColor: "#818089",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 5,
  },
  playButtonBackground: {
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  startIcon: {
    width: 11,
    height: 13.5,
  },
  saveIcon: {
    width: 18.42,
    height: 13.08,
  },
});

export default FoundMovie;
