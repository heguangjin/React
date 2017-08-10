// 项目的根组件
import React from 'react'

import { View, Text } from 'react-native'

// 1. 导入路由相关的组件
//  Router:是路由跟容器组件，整个应用程序，只需要有一个即可
//  Scene： 表示每一个App页面【场景】，在 Scene 身上，由几个属性：
//    key: 表示页面的名称或标识符；
//    component: 表示当前页面要展示哪个组件
//    title： 表示页面头部展示名称
import { Router, Scene } from 'react-native-router-flux'

// 导入首页组件
import HomeContainer from './home/HomeContainer.js'
// 导入电影列表页面
import MovieList from './movie/MovieList.js'
// 导入电影详情页面
import MovieDetail from './movie/MovieDetail.js'

export default class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        {/* 默认，会把第一个 Scene 当作首屏场景去展示 */}
        <Scene key="home" component={HomeContainer} hideNavBar={true}></Scene>
        <Scene key="movielist" component={MovieList} title="电影列表"></Scene>
        <Scene key="moviedetail" component={MovieDetail} title="电影详情"></Scene>
      </Scene>
    </Router>
  }
}
// this.props.history.push('/movie/in_theaters/1')