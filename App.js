import { StyleSheet } from 'react-native'
import Indexnavigator from './src/navigation'
import { Provider } from 'react-redux';
import store from './src/store';


export default function App() {
    

  return( 
  <Provider store={store}>
 <Indexnavigator/>
  </Provider>
 )
    

}



const styles = StyleSheet.create({
  
});

