import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class StatScreen extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
        >
          <Text>Stat</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default StatScreen;