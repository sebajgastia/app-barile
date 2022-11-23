import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryHelados from '../screens/CategoryHelados' 
import CategoriesProducts from "../screens/CategoriesProducts";
import DetailProducts from '../screens/DetailProducts'
import Indexscreen from '../screens/Indexscreen'

const Stack = createNativeStackNavigator();

export default ShopNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={Indexscreen}/>
                <Stack.Screen name="Categories"component={CategoriesProducts}/>
                <Stack.Screen name="Helados" component={CategoryHelados}/>
                <Stack.Screen name="Detalle" component={DetailProducts}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}