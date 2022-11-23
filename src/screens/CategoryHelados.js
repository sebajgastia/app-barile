import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const CategoryHelados = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.helados}>CategoryHelados</Text>
      <Button title='Ir a detalle' onPress={() => navigation.navigate('Detalle')}/>

    </View>
  )
}

export default CategoryHelados

const styles = StyleSheet.create({
  helados:{
    backgroundColor:'green',
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