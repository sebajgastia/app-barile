
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { COLORS } from "../constants/Colors";
import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {

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
            <Stack.Screen name="Cart" component={CartScreen} options={{title:'Carrito'}} />
            </Stack.Navigator>
            
      
    )
}