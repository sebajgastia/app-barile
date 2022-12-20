import { StyleSheet } from 'react-native'
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
    

  return( 
  <Provider store={store}>
  <BottomTabNavigator/>
  </Provider>
 )
    

}



const styles = StyleSheet.create({
  
});

