import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Cartitem = ({item, onDelete}) => {
  return (
    <View style={styles.item}>
     <View>
        <Text style={styles.encabezado}>{item.name}</Text>
     </View>
     <View>
        <View style={styles.detalle}>
            <Text>Cantidad:{item.quantity} </Text>
            <Text>Precio: {item.price}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name='trash' size={25} color={'red'}/>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Cartitem

const styles = StyleSheet.create({
    item:{
        flex:1,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:'black'
    },
    encabezado:{
        fontSize:18,
    },
    detalle:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between'
    },
})