//import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PokedexMain from "./components/aula-03/PokedexMain";
import PokedexPokebola from "./components/aula-03/PokedexPokebola";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pokedex"
      >

        <Tab.Screen name="Pokedex" component={PokedexMain}/>

        <Tab.Screen name="Pokebola" component={PokedexPokebola}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};
