import { FlatList } from 'react-native'
import React from 'react'
import Griditem from '../components/Griditem';
import { CATEGORIES } from '../data/Categories';


const CategoriesProducts = ({navigation}) => {
 
  const handleselectedCategory = (item) =>{
    navigation.navigate('Helados', {
      CategoryID:item.id,
      name: item.title 

    })
  }
  
  
  const renderItem = ({item}) => (
    <Griditem item={item} onSelected={handleselectedCategory}/>
  )

  
  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    numColumns={2}/>

  )
  
}

export default CategoriesProducts


