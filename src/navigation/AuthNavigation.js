import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import Authscreen from "../screens/Authscreen";

const Stack = createNativeStackNavigator();

export default CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Ingresar"
      screenOptions={{
        headerStyle: { backgroundColor: 'yellow' },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Ingresar" component={Authscreen} />
    </Stack.Navigator>
  );
};