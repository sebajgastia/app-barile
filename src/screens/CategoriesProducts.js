import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesProducts = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      
      <Text style={styles.categorias} >Categorias</Text>
   
      <Button title='Ir a Helados' onPress={() => navigation.navigate('Helados')}/>

    </View>
  )
}

export default CategoriesProducts

const styles = StyleSheet.create({
  categorias:{
    backgroundColor:'red',
    fontSize:30,
    fontFamily:'BebasNeue',
    color:'white'

  },

  contenedor:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }

});