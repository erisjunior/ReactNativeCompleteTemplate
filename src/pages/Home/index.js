import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Creators as HomeActions } from '~/store/ducks/home'

import { Container } from './styles'

class Home extends Component {
  render() {
    return <Container />
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators(HomeActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
