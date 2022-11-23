import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const DetailProducts = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.detalle}>DetalleProducto</Text>
      <Button title='Volver a inicio' onPress={() => navigation.navigate('Inicio')}/>

    </View>
  )
}

export default DetailProducts

const styles = StyleSheet.create({
  detalle:{
    backgroundColor:'blue',
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