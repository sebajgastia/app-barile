import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CART } from '../data/Cart'
import Cartitem from '../components/Cartitem'

const CartScreen = () => {
const items = CART
const total = 120

const handleConfirmCart = () =>{
    console.log('confirmar')
}
const handleDeleteItem = () =>{
    console.log('eliminar')
}
const renderItem = ({item}) =>{
    <Cartitem item={item} onDelete={handleDeleteItem}/>
}

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
        data={CART}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm}>
            <Text>CONFIRMAR </Text>
            <View style={styles.total}>
                <Text style={styles.text}>total:</Text>
                <Text style={styles.text}>{total}</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:12,
        backgroundColor:'grey',
        paddingBottom:120,
    },
    list:{
        flex:1,
    },
    footer:{
        padding:12,
        borderTopColor:'red',
        borderTopWidth:1,
        
    },
    confirm:{ 
        backgroundColor:'grey',
        borderRadius:10,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    total:{
      flexDirection:'row'
    },
    text:{
        fontSize:18,
        padding:8
    },



})