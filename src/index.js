import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import './config/StatusBarConfig'
import './config/ReactrotronConfig'

import store from './store'
import { Provider } from 'react-redux'

import { colors } from './styles'

import createRoutes from './routes'
import { setNavigator } from './services/NavigationService'

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@___edit____:username')

    this.setState({
      userChecked: true,
      userLogged: !!username
    })
  }

  render() {
    const { userChecked, userLogged } = this.state

    if (!userChecked)
      return <ActivityIndicator color={colors.black} size='small' />

    const Routes = createRoutes(userLogged)

    return (
      <Provider store={store}>
        <Routes ref={setNavigator} />
      </Provider>
    )
  }
}
