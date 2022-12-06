import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Itemhelados = ({item, onSelected}) => {
  return (
   <TouchableOpacity onPress={() => onSelected(item)}>
    <View style={styles.itemhelado}>
        <View>
            <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
            <Text style={styles.details}>{item.price} </Text>
            <Text style={styles.details}>{item.weight} </Text>
        </View>
    </View>
   </TouchableOpacity>
  )
}

export default Itemhelados

const styles = StyleSheet.create({
    itemhelado:{
        padding:20,
        margin:10,
        borderRadius:3,
        backgroundColor: 'cyan'
    },
    title:{
        fontSize:20,
        fontFamily:'BebasNeue',
    },
    details:{
        fontSize:18,
    },
})