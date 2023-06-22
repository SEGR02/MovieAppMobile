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
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const movies = useSelector((state) => state?.movies);
  const urlImages = "https://image.tmdb.org/t/p/original";
  console.log(movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  const user = "Hoang";
  const id = {
    title: "hola",
    sapo: "hpta,",
  };

  if (!isLoading)
    return (
      <View style={styles.container}>
        <ScrollView vertical style={styles.scroll}>
          <View style={styles.containerName}>
            <Text style={styles.textName}>{`Hi, ${user}`}</Text>
          </View>
          <View style={styles.containerCategories}>
            <TouchableOpacity style={styles.buttonCategories}>
              <Text style={styles.textCategories}>All</Text>
            </TouchableOpacity>
            <Link to="/register">
              <Text style={styles.textCategories}>Action</Text>
            </Link>
            <TouchableOpacity>
              <Text style={styles.textCategories}>Comedy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textCategories}>Horror</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconCategorie}
                source={require("../assets/option.png")}
              />
            </TouchableOpacity>
          </View>
          <Link to={`/detail/${movies?.results?.[0]?.id}`}>
            <HomeMainImage
              image={urlImages + movies?.results?.[0]?.backdrop_path}
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
              <Link to={`/detail/${movies?.results?.[1]?.id}`}>
                <PopularMovieSuggest
                  title={movies?.results?.[1]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[1]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.results?.[2]?.id}`}>
                <PopularMovieSuggest
                  title={movies?.results?.[2]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[2]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.results?.[3]?.id}`}>
                <PopularMovieSuggest
                  title={movies?.results?.[3]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[3]?.poster_path}
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
              <Link to={`/detail/${movies?.results?.[4]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.results?.[4]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[4]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.results?.[5]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.results?.[5]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[5]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.results?.[6]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.results?.[6]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[6]?.poster_path}
                />
              </Link>
              <Link to={`/detail/${movies?.results?.[7]?.id}`}>
                <YMLMovieSuggest
                  title={movies?.results?.[7]?.original_title}
                  rating={4.5}
                  image={urlImages + movies?.results?.[7]?.poster_path}
                />
              </Link>
            </ScrollView>
          </View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
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
  buttonCategories: {
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
