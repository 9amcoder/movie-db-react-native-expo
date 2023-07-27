import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import MovieListScreen from './src/screens/MovieListScreen';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MoviesList"
          component={MovieListScreen}
          options={{
            headerTitle: 'Popular Movies',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Entypo name="menu" size={24} color="white" />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} 
          
          options={{
            headerTitle: 'Movie Details',
            headerStyle: {
              backgroundColor: '#212121',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerBackTitleVisible: false,
            headerRight: () => (
              <View style={{ marginRight: 10 }}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
