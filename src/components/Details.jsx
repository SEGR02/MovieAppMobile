import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import HomeMainImageDetails from "../components/HomeMainImageDetails";
import YMLMovieSuggest from "./YMLMovieSuggest";
import { Link, useParams } from "react-router-native";
import { useSelector } from "react-redux";

const Details = () => {
  const movies = useSelector((state) => state.movies);
  console.log(movies);
  const isLoading = useSelector((state) => state.isLoading);
  const urlImages = "https://image.tmdb.org/t/p/original";
  const { id } = useParams();
  const Actualmovie = movies.filter((movies) => movies.id == id);

  const randomNum = () => {
    return Math.floor(Math.random() * 79) + 1;
  };

  const i = [randomNum(), randomNum(), randomNum()];
  console.log(i, id, Actualmovie);

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Link to="/home">
          <View style={styles.backArrow}>
            <Image
              style={styles.arrow}
              source={require("../assets/Arrow.png")}
            />
          </View>
        </Link>
        <View style={styles.saveButton}>
          <Image style={styles.save} source={require("../assets/saved.png")} />
        </View>
      </View>
      <View style={styles.section2}>
        <HomeMainImageDetails
          image={urlImages + Actualmovie?.[0]?.backdrop_path}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle}>{Actualmovie.original_title}</Text>
          <Text style={styles.movieCategoriesInfo}>Eng | Action | 2h 10m</Text>
          <View style={styles.line}></View>
        </View>
      </View>
      <View style={styles.section3}>
        <Text style={styles.storyLine}>Story Line</Text>
        <Text style={styles.storyLineText}>{Actualmovie?.[0]?.overview}</Text>
      </View>
      <View style={styles.section4}>
        <View style={styles.titleSection}>
          <Text style={styles.storyLine}>Star cast</Text>
        </View>
        <View style={styles.containerCards}>
          <View style={styles.containerActors}>
            {/* <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <Text></Text>}
              horizontal
              renderItem={({ item }) => (
                <>
                  <Card role={item.role} name={item.name} />
                </>
              )}
            ></FlatList> */}
            <Card
              role={"Actor"}
              name={"Chris Evans"}
              image={require(`../assets/CE.png`)}
            />
            <Card
              role={"Actor"}
              name={"Samuel L. Jackson"}
              image={require(`../assets/SJ.png`)}
            />
            <Card
              role={"Actor"}
              name={"Sebastian Gomez"}
              image={require(`../assets/SG.png`)}
            />
          </View>
        </View>
      </View>
      <View style={styles.section5}>
        <Text style={styles.storyLine}>Recommended</Text>
      </View>
      <View style={styles.section6}>
        <ScrollView horizontal>
          <Link to={`/detail/${movies[i[0]]?.id}`}>
            <YMLMovieSuggest
              title={movies[i[0]]?.original_title}
              rating={"5.0"}
              image={urlImages + movies[i[0]]?.poster_path}
            />
          </Link>
          <Link to={`/detail/${movies[i[1]]?.id}`}>
            <YMLMovieSuggest
              title={movies[i[1]]?.original_title}
              rating={"5.0"}
              image={urlImages + movies[i[1]]?.poster_path}
            />
          </Link>
          <Link to={`/detail/${movies[i[2]]?.id}`}>
            <YMLMovieSuggest
              title={movies[i[2]]?.original_title}
              rating={"5.0"}
              image={urlImages + movies[i[2]]?.poster_path}
            />
          </Link>
        </ScrollView>
      </View>
    </View>
  );
};

const Card = ({ role, name, image }) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
        <View style={styles.dataActor}>
          <Text style={styles.role}>{role}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 5,
    height: "100%",
    width: "100%",
    backgroundColor: "#1F1C2C",
    alignItems: "center",
  },
  section1: {
    width: "90%",
    height: "7%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section2: {
    width: "90%",
    height: "37%",
  },
  section3: {
    width: "92%",
    height: "18%",
    marginLeft: "2.5%",
  },
  section4: {
    width: "100%",
    height: "13%",
    marginLeft: "10.5%",
  },
  section5: {
    width: "92%",
    height: "3%",
    marginLeft: "2.5%",
  },
  section6: {
    width: "92%",
    height: "20%",
    marginLeft: "-5%",
    flexDirection: "row",
  },
  arrow: {
    width: 23.67,
    height: 19,
  },
  save: {
    width: 25.94,
    height: 21.84,
  },
  movieInfo: {
    height: "14%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -9,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 20,
  },
  movieCategoriesInfo: {
    color: "#A5A5A5",
  },
  line: {
    height: 0.5,
    width: "80%",
    backgroundColor: "#A5A5A5",
    marginTop: 8,
  },
  storyLine: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
  },
  storyLineText: {
    color: "#A5A5A5",
    marginTop: 4,
    fontSize: 13,
  },
  containerActors: {
    flexDirection: "row",
    height: "100%",
    width: "40%",
  },
  card: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    height: "100%",
    width: "40%",
  },
  dataActor: {
    height: "100%",
    width: "60%",
  },
  containerCards: {
    flexDirection: "row",
    height: "70%",
    width: "100%",
  },
  titleSection: {
    height: "30%",
    width: "100%",
  },
  role: {
    color: "#A5A5A5",
  },
  name: {
    color: "#fff",
  },
});

export default Details;
