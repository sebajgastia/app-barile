import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Cartitem from '../components/Cartitem'
import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from '../store/actions/Cart.action'


const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total));
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id));
  };

  const renderItem = ({ item }) => (
    <Cartitem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

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