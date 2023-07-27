import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { getPopularMovies, posterUrl } from "../api/movieApi";
import { MovieItem } from "../api/movieApi";

function MovieListScreen({ navigation }: { navigation: any }) {
  const [movies, setMovies] = useState<MovieItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
      setLoading(false);
    };
    fetchMovies();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    const data = await getPopularMovies();
    setMovies(data);
    setRefreshing(false);
  };

  const renderItem = ({ item }: { item: MovieItem }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { movie: item })}
    >
      <View style={{ flex: 1, marginHorizontal: 2 }}>
        <Image
          source={{ uri: `${posterUrl}${item.poster_path}` }}
          style={{ width: 188.31, height: 279.46 }}
        />
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator />; // Render loading indicator
  }

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentInset={{ right: 0, top: 100, left: 0, bottom: 0 }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}
export default MovieListScreen;
