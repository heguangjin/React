/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//  导入 创建 React 组件，以及提供组件生命周期的模块
import React, { Component } from 'react';
// 导入 react-native 模块，主要提供 RN 相关的组件，注意：在RN开发中，不能使用网页中的 div, p, span, img 等所有的标签，只能使用 RN 提供的 这些 View 组件、Text组件；【这一点是初学者最常犯的错误】
import {
  AppRegistry, // 专门用来注册应用的首屏页面的
  StyleSheet, // 专门用来创建RN中样式的一个组件
  Text, // 表示 一个 文本组件,相当于是span标签，注意：所有的文本节点，必须放到 Text 组件中，这一点一定要注意，因为也是初学者最容易犯的错误
  View // 这个View组件，相当于 网页中的 div，主要是为了布局使用的，看不见这个View组件
} from 'react-native';

export default class rn0809 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!祝大家找工作顺利，早日实现迎娶白富美的人生理想
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>)

  }
}

// 通过 StyleSheet.create 来创建一个 RN 的样式对象
// 注意;这里的样式，和网页中样式的定义方式不同，因为这里是用对象的形式来表示样式的；
// 注意：1. 每个样式之间，使用 逗号 分割，在网页中使用的是分号
// 注意：2. 属性名使用驼峰命名
// 注意：3. 非数字类型的属性值，必须使用引号包裹；
// 注意：4. 数字类型的属性值，必须不能加单位，必须是数字，不能是字符串，而且不能带单位
// 注意：5. 在RN中，默认就是使用 flex 布局的；同时，默认的 flexDirection是 column；
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// 创建一个自己的组件
class MyComponent extends React.Component {
  // 根据React的语法， 我们知道，在有状态组件中，必须有一个render函数
  render() {
    // 在render函数中，必须return一个合法的元素
    return <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'darkcyan', flex: 1 }}>
      <Text>今天竟然下雨了~~</Text>
      <Text>今天竟然下雨了~~</Text>
      <Text>今天竟然下雨了~~</Text>
      <Text>今天竟然下雨了~~</Text>
    </View>
  }
}

// 在使用 AppRegistry 注册首屏页面的时候，需要提供两个参数，其中，
// 第一个参数，是初始化项目的时候，已经默认提供的，千万不要修改，否则项目无法正确运行；
// 第二个参数，是一个 function， 在这个function，返回一个 页面组件，就表示，把这个返回的页面组件，当作 首屏页面展示；
// 我们可以自定义一下自己的首屏页面
AppRegistry.registerComponent('rn0809', () => MyComponent);