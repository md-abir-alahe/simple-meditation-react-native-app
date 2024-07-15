import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

import beachImage from '@/assets/meditation-images/beach.webp'

const App = () => {
  return (
    <View className='flex-1'>
        <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'/>
      <Text className=''>App</Text>
    </View>
  )
}

export default App