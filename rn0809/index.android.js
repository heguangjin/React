// 1. 导入 react 相关的组件
import React from 'react'

// 2. 导入 RN 相关的组件
import { AppRegistry } from 'react-native'

// 3. 导入项目的根组件
import App from './components/App.js'

class TestListView extends React.Component {
  render() {
    return <App></App>
  }
}

// 注册首屏页面
AppRegistry.registerComponent('rn0809', () => { return TestListView });