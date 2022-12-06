import { FlatList } from 'react-native'
import React from 'react'
import Itemhelados from '../components/Itemhelados'
import { HELADOS } from '../data/Helados'

const CategoryHelados = ({navigation, route}) => {

  const icecream = HELADOS.filter( ( icecream ) => icecream.category === route.params.CategoryID)



  const handleselectedCategory = (item) =>{
    navigation.navigate('Detalle', {
      productID:item.id,
      name: item.name,

    })
  }
  
  
  const renderHeladositem = ({item}) => (
    <Itemhelados item={item} onSelected={handleselectedCategory}/>
  )

  
  return (
    <FlatList
    data={icecream}
    keyExtractor={(item) => item.id}
    renderItem={renderHeladositem}
    
    />

  )
}

export default CategoryHelados;



