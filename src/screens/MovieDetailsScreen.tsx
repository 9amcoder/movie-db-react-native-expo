import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { ParamListBase } from "@react-navigation/routers";
import { posterUrl } from "../api/movieApi";
import { EvilIcons } from "@expo/vector-icons";

type MovieDetailsScreenRouteProp = RouteProp<ParamListBase, "MovieDetails"> & {
  params: {
    movie: {
      title: string;
      vote_average: number;
      poster_path: string;
      release_date: string;
      overview: string;
    };
  };
};

function MovieDetailsScreen() {
  const route = useRoute<MovieDetailsScreenRouteProp>();
  const { movie } = route.params;
  const Separator = () => <View style={styles.separator} />;

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={{ color: "#fff", fontSize: 20, marginLeft: 15 }}>
          {movie.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 15 }}>
          <Image
            source={{ uri: `${posterUrl}${movie.poster_path}` }}
            style={{ width: 115, height: 170 }}
          />
        </View>
        <View style={{ margin: 15 }}>
          <Text style={styles.releaseDateText}>
            {movie.release_date.slice(0, 4)}
          </Text>
          <Text style={styles.voteAverage}>{movie.vote_average}/10</Text>
          <View>
            <Button
              onPress={() => {
                alert("You tapped the button!");
              }}
              title="Add to Favorite"
              color="#746A64"
              accessibilityLabel="Add to Favorite button"
            />
          </View>
        </View>
      </View>
      <View style={styles.overview}>
        <Text>{movie.overview}</Text>
      </View>
      <View style={styles.trailerWrapper}>
        <Text>TRAILERS</Text>
      </View>
      <Separator />
      <View style={styles.trailerArea}>
        <TouchableOpacity onPress={() => alert("You pressed the trailer!")}>
          <View style={styles.trailerBackground}>
            <View style={styles.trailerContainer}>
              <EvilIcons name="play" size={24} color="black" />
              <Text style={{ marginLeft: 5 }}>Play trailer 1</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("You pressed the trailer!")}>
          <View style={styles.trailerBackground}>
            <View style={styles.trailerContainer}>
              <EvilIcons name="play" size={24} color="black" />

              <Text style={{ marginLeft: 5 }}>Play trailer 2</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  releaseDateText: {
    color: "black",
    fontSize: 20,
  },
  titleContainer: {
    backgroundColor: "#746A64",
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  voteAverage: {
    color: "black",
    fontSize: 14,
    marginTop: 45,
    marginBottom: 20,
  },
  // buttonContainer: {
  //   backgroundColor: "#746A64",
  //   width: "100%",
  //   height: 56,
  //   justifyContent: "center",
  //   alignItems: "flex-start",
  //   marginVertical: 0,
  // },
  overview: {
    marginHorizontal: 15,
  },
  trailerArea: {
    marginHorizontal: 15,
  },
  trailerWrapper: {
    marginTop: 15,
    marginHorizontal: 15,
  },
  trailerBackground: {
    backgroundColor: "#FAFAFA",
    width: "100%",
    height: 56,
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 15,
  },
  trailerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  separator: {
    marginVertical: 8,
    marginHorizontal: 15,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default MovieDetailsScreen;
