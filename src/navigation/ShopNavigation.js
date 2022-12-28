
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryHelados from '../screens/CategoryHelados' 
import CategoriesProducts from "../screens/CategoriesProducts";
import DetailProducts from '../screens/DetailProducts'
import Indexscreen from '../screens/Indexscreen'
import { COLORS } from "../constants/Colors";
import { useFonts } from "expo-font";
import OrdersScreen from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigation = () => {

    const [fontLoad] = useFonts({
        'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf')
      });
    
      if(!fontLoad){
        return null
      }
    
    return(
        
            <Stack.Navigator initialRouteName="Categories" screenOptions={{
                headerStyle:{ backgroundColor: COLORS.primary}
            }}>
                <Stack.Screen name="Inicio" component={Indexscreen}/>
                <Stack.Screen name="Categories"component={CategoriesProducts}/>
                <Stack.Screen name="Helados" component={CategoryHelados}  options={({route})=> ({
                    title:route.params.name,
                })}/>
                <Stack.Screen name="Detalle" component={DetailProducts}/>
                <Stack.Screen name="Orders" component={OrdersScreen}/>
            </Stack.Navigator>
       
    )
}