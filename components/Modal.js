import { StyleSheet,Text,View,Pressable,Modal as NewModal, Image } from "react-native";
import React from "react";



const Modal = (props) => {
  
    const {isVisible} = props;
    const {borrarItem} = props;
    
   
    return(
        <NewModal animationType='slide' transparent={true} visible={isVisible} >
            <View style={styles.modal}>
              <View >
                <Text style={{backgroundColor:'black', color:'white',width:300, height:60}}>Desea eliminar este elemento?</Text>
                <Pressable onPress={() => borrarItem()} style={{backgroundColor:'red',justifyContent:'center', alignItems:'center'}}>
                  <Text style={{borderBottomEndRadius:15, height:40, fontSize:25}}>Eliminar</Text>
                </Pressable>
              </View>
            </View>
          </NewModal>
    
    )
}

export default Modal

const styles = StyleSheet.create({
    modal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'cyan'
        
        
      }
})