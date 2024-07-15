import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const natureMeditate = () => {
  return (
    <View className='flex-1'>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
          <Text>natureMeditate</Text>
      </AppGradient>
    </View>
  )
}

export default natureMeditate