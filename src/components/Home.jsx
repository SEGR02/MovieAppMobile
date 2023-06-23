import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";
import HomeMainImage from "./HomeMainImage";
import PopularMovieSuggest from "./PopularMovieSuggest";
import YMLMovieSuggest from "./YMLMovieSuggest";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../store/slices/movies.slice";

const Home = () => {
  const [i, setI] = useState(0);
  const [category, setCategory] = useState("All");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const movies = useSelector((state) => state?.movies);
  const urlImages = "https://image.tmdb.org/t/p/original";
  console.log(movies);
  const user2 = useSelector((state) => state.auth);
  console.log(user2);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const user = "Hoang";

  if (!isLoading)
    return (
      <View style={styles.container}>
        <ScrollView vertical style={styles.scroll}>
          <View style={styles.containerName}>
            <Text style={styles.textName}>{`Hi, ${user}`}</Text>
          </View>
          <View style={styles.containerCategories}>
            <TouchableItemsCustom
              text={"All"}
              style={
                category == "All"
                  ? styles.buttonCategoriesActive
                  : styles.buttonCategories
              }
              onPress={() => {
                setCategory("All");
                setI(0);
              }}
            />
            <TouchableItemsCustom
              text={"Action"}
              style={
                category == "Action"
                  ? styles.buttonCategoriesActive
                  : styles.buttonCategories
              }
              onPress={() => {
                setCategory("Action");
                setI(8);
              }}
            />
            <TouchableItemsCustom
              text={"Comedy"}
              style={
                category == "Comedy"
                  ? styles.buttonCategoriesActive
                  : styles.buttonCategories
              }
              onPress={() => {
                setCategory("Comedy");
                setI(16);
              }}
            />
            <TouchableItemsCustom
              text={"Horror"}
              style={
                category == "Horror"
                  ? styles.buttonCategoriesActive
                  : styles.buttonCategories
              }
              onPress={() => {
                setCategory("Horror");
                setI(24);
              }}
            />
            <TouchableOpacity>
              <Image
                style={styles.iconCategorie}
                source={require("../assets/Vector.png")}
              />
            </TouchableOpacity>
          </View>
          <Link to={`/detail/${movies?.[i]?.id}`}>
            <HomeMainImage
              image={urlImages + movies?.[i]?.backdrop_path}
              title={movies?.[i]?.original_title}
            />
          </Link>
          <View style={styles.containerTitleSection}>
            <Text style={styles.titleSection}>Popular</Text>
            <Image
              style={styles.iconOptions}
              source={require("../assets/option.png")}
            />
          </View>
          <View style={styles.containerPopular}>
            <ScrollView horizontal style={styles.scroll}>
              <Link to={`/detail/${movies?.[i + 1]?.id}`}>
                <PopularMovieSuggest
                  title={movies?.[i + 1]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 1]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.[i + 2]?.id}`}>
                <PopularMovieSuggest
                  title={movies?.[i + 2]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 2]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.[i + 3]?.id}`}>
                <PopularMovieSuggest
                  title={movies?.[i + 3]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 3]?.poster_path}
                />
              </Link>
            </ScrollView>
          </View>
          <View style={styles.uMayLike}>
            <Text style={[styles.titleSection, styles.textUMayLike]}>
              You may like
            </Text>
            <Image
              style={styles.iconUMayLike}
              source={require("../assets/option.png")}
            />
          </View>
          <View style={styles.containerPopular}>
            <ScrollView horizontal style={styles.scroll}>
              <Link to={`/detail/${movies?.[i + 4]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.[i + 4]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 4]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.[i + 5]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.[i + 5]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 5]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.[i + 6]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.[i + 6]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 6]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.[i + 7]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.[i + 7]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.[i + 7]?.poster_path}
                />
              </Link>
            </ScrollView>
          </View>
        </ScrollView>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
    );
};

const TouchableItemsCustom = ({ text, ...props }) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.textCategories}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1F1C2C",
  },
  containerName: {
    paddingTop: Constants.statusBarHeight + 10,
  },
  textName: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  containerCategories: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 16,
    alignItems: "center",
  },
  buttonCategoriesActive: {
    backgroundColor: "#793b2b",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 35,
  },
  textCategories: {
    color: "#fff",
  },
  iconCategorie: {
    width: 15.5,
    height: 15.5,
  },
  containerTitleSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  titleSection: {
    color: "#fff",
    fontSize: 21,
    fontWeight: 700,
  },
  iconOptions: {
    width: 27,
    marginTop: 4,
  },
  uMayLike: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  iconUMayLike: {
    width: 27,
    marginTop: 2,
  },
});

export default Home;
