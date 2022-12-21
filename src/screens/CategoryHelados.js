import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import Itemhelados from '../components/Itemhelados'
import { HELADOS } from '../data/Helados'
import { useSelector, useDispatch, connect } from 'react-redux'
import { filteredHelados, selectedHelados, selectHelados } from '../store/actions/Helados.action'

const CategoryHelados = ({navigation, route}) => {

  const dispatch = useDispatch()

  const category = useSelector((state => state.categories.selected));

  const categoryHelado = useSelector ((state) => state.Helados. filteredHelados);

  useEffect(() => {
    dispatch (filteredHelados (category.id))
  }, [])


  

  //const icecream = HELADOS.filter( ( icecream ) => icecream.category === route.params.CategoryID)



  const handleselectedCategory = (item) =>{
    dispatch(selectedHelados (item.id))
    navigation.navigate('Detalle', {   
      name: item.name,

    });
  };
  
  
  const renderHeladositem = ({item}) => (
    <Itemhelados item={item} onSelected={handleselectedCategory}/>
  )

  
  return (
    <FlatList
    data={categoryHelado}
    keyExtractor={(item) => item.id}
    renderItem={renderHeladositem}
    
    />

  )
}

export default  connect () (CategoryHelados);



