import { FlatList } from 'react-native'
import React from 'react'
import Griditem from '../components/Griditem';
import { useSelector, useDispatch, connect } from 'react-redux';
import { selectedCategory } from '../store/actions/Category.action';


const CategoriesProducts = ({navigation}) => {
 
 
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();

  const handleselectedCategory = (item) =>{
    dispatch (selectedCategory(item.id))
    navigation.navigate('Helados', {
      name: item.title

    })
  }
  
  
  const renderItem = ({item}) => (
    <Griditem item={item} onSelected={handleselectedCategory}/>
  )

  
  return (
    <FlatList
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    numColumns={2}/>

  )
  
}

export default connect () (CategoriesProducts);


