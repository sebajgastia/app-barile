import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { additem } from '../store/actions/Cart.action'

const DetailProducts = ({navigation}) => {

  const dispatch = useDispatch()

  const helado = useSelector ((state) => state.Helados.selected);

  const handleAddItemCart = () => {
    dispatch (additem(helado));
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.detalle}>DetalleProducto</Text>
      <View>
            <Text>{helado.name}</Text>
            <Text>{helado.description}</Text>
            <Text>{helado.price}</Text>
            <Button title='Agregar producto' onPress={handleAddItemCart}/>
      </View>
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