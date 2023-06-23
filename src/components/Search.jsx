import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import FoundMovie from "./FoundMovie";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-native";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Search = () => {
  const user = "Hoang";
  const [searchText, setSearchText] = useState(null);
  const movies = useSelector((state) => state.movies);

  const moviesFilter = movies.filter((movie) =>
    movie?.original_title.toLowerCase().includes(searchText)
  );

  const urlImages = "https://image.tmdb.org/t/p/original";

  return (
    // <KeyboardAwareScrollView>
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.textName}>{`Hi, ${user}`}</Text>
      </View>
      <View style={styles.containerSearchBar}>
        <TextInput
          placeholderTextColor={"#DDDDDD"}
          placeholder="Harry Potter 7"
          style={styles.inputText}
          value={searchText}
          onChangeText={(text) => setSearchText(text.toLocaleLowerCase())}
        />
        <TouchableOpacity onPress={() => alert("buscar")}>
          <View style={styles.circleOrange}>
            <Image
              style={styles.search}
              source={require("../assets/searchWhite.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerFoundMovies}>
        <ScrollView>
          {moviesFilter.map((movie) => (
            <Link to={`/detail/${movie?.id}`}>
              <View style={styles.movieFound} key={movie.id}>
                <FoundMovie
                  title={movie?.original_title}
                  image={urlImages + movie?.poster_path}
                />
              </View>
            </Link>
          ))}
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </ScrollView>
      </View>
    </View>
    // {/* </KeyboardAwareScrollView> */}
  );
};

const styles = StyleSheet.create({
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
  container: {
    width: "100%",
    height: "100%",
    minHeight: 891,
    backgroundColor: "#1F1C2C",
  },
  containerSearchBar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputText: {
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: "#7e7c84",
    width: "80%",
    color: "#DDDDDD",
  },
  search: {
    width: 20,
    height: 20,
  },
  circleOrange: {
    width: 37,
    height: 37,
    backgroundColor: "#FF722A",
    borderRadius: 38,
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  containerFoundMovies: {
    marginTop: 15,
  },
  movieFound: {
    marginTop: 15,
  },
});

export default Search;
