
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigation from '../navigation/ShopNavigation'
import CartNavigator from '../navigation/CartNavigator'
import { StyleSheet, View,Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons'
import IndexScreen from "../screens/Indexscreen";
import OrderNavigator from "./OrderNavigator";
    




const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    
    <BottomTab.Navigator initialRouteName="Inicio" screenOptions={{headerShown:false, tabBarShowLabel:false, tabBarStyle: styles.tabmenu}}>
      
      <BottomTab.Screen name="Inicio" component={IndexScreen}
       options={{tabBarIcon:({focus})=> (
        <View style= {styles.item}>
            <Ionicons name="home" size={30} color='red'/>
            <Text>inicio</Text>
        </View>
    )}} />
        <BottomTab.Screen name="ShopTab" component={ShopNavigation} options={{tabBarIcon:({focus})=> (
            <View style= {styles.item}>
                <Ionicons name="basket"  size={30} color='red'/>
                <Text>Tienda</Text>
            </View>
        )}} />
        <BottomTab.Screen name="CartTab" component={CartNavigator}options={{tabBarIcon:({focus})=> (
            <View style= {styles.item}>
                <Ionicons name="cart" size={30} color='red'/>
                <Text>Tu carro</Text>
            </View>
        )}} />

        <BottomTab.Screen name="OrdersTab" component={OrderNavigator}options={{tabBarIcon:({focus})=> (
            <View style= {styles.item}>
                <Ionicons name="list" size={30} color='red'/>
                <Text>Tu orden</Text>
            </View>
        )}} />
        

    </BottomTab.Navigator>

  
  );
}

const styles = StyleSheet.create({
tabmenu:{
    shadowColor:'black',
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.5,
    shadowRadius:0.5,
    elevation:5,
    position:'absolute',
    bottom:25,
    left:20,
    right:20,
    height:98,
}


})