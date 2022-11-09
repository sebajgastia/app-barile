import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text,FlatList, TouchableOpacity } from 'react-native';
import Modal from "./components/Modal"

export default function App() {
  
  const [textItem, setTextItem]=useState('')
  const [itemList, setItemList]=useState([])

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChangeItem = (i) =>{
    setTextItem(i)
  }

  const onPressButton = () =>{
    setItemList(currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value: textItem}
    ])
    setTextItem('')
  }

  const selectedItem = (id) => {
    console.log(id);
    setItemSelected(itemList.filter((item) => item.id === id) [0]);
    setModalVisible(true);
  };
 

  const deleteitem = () =>{
    setItemList(currentItems => currentItems.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }




  const RenderItem = ({item}) =>(
    <View style={styles.Items}>
      <TouchableOpacity onPress={() => selectedItem(item.id)}>
      <Text>{item.value}</Text> 
      </TouchableOpacity>
  </View>
  )

  
  
  
  return (
  
    <View style={styles.contenedor}>
      <Text style={styles.title}>FABRICA BARILE</Text>
      
      <View style={styles.contenedorHijo} >
        <TextInput  value={textItem} placeholder='Añade un item a tu lista' style={styles.imputText} onChangeText={onHandleChangeItem}/>
        <View style={styles.button}>
          <Button title="Añadir" color={'black'} onPress={onPressButton} />
        </View>
      </View>
        <View>
          <FlatList data={itemList} renderItem={RenderItem} keyExtractor={(item) => item.id}/>
        </View>
      <Modal isVisible={modalVisible} borrarItem={deleteitem} />

    </View>

 
 
    
  );
}

const styles = StyleSheet.create({
  contenedor:{
    padding:20, 
    margin: 50,
    
  },

  title:{
    fontSize:26,
    margin:20,
    backgroundColor:'pink',
    fontFamily: "Cochin"
  },

  imputText:{
    borderBottomColor:'red', 
    borderBottomWidth: 1, 
    width:200,
  },

  contenedorHijo:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },


  Items:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
    height:30
  },

  button: {
    backgroundColor: "red",
    height: 45,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    
  },
 

});

