// 1. 导入 react 相关的组件
import React from 'react'

// 2. 导入 RN 相关的组件
import {
  View,
  Text,
  AppRegistry,
  TextInput,
  Image,
  Button,
  ActivityIndicator,
  ScrollView, // 注意：ScrollView 要包裹的元素中，必须 被设置了高度
  ListView
} from 'react-native'

// 创建一个自己的组件
// export default class MyFirstPage extends React.Component {
//   render() {
//     return <ScrollView>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>OK,最后的一天，是彬哥陪大家度过的！</Text>
//         <TextInput style={{ width: '100%' }} secureTextEntry={true}></TextInput>

//         {/* 注意：当粘贴进来一张图片之后，会报错： Unexpected character， 此时，只需要重新 启动 react Packager 即可 */}
//         {/* 注意：如果要引用本地的文件，需要给 source 属性，通过 require()的形式，引用一张本地图片 */}
//         <Image source={require('./images/1.jpg')}></Image>
//         <Image source={require('./images/1.jpg')}></Image>
//         {/* 注意，如果要引用网络上的图片，一定要设置宽和高，同时 ，需要使用 {uri:''} 来引用 */}
//         <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={{ width: 200, height: 200 }}></Image>

//         <Button title="点击666" onPress={() => { console.warn('OK') }}></Button>
//         <ActivityIndicator color="red" size="large"></ActivityIndicator>

//         {/* 在网页中，默认，超出可视范围时候，默认会有滚动条；但是在RN中，超出的区域，不会显示滚动条 */}
//       </View>
//     </ScrollView>
//   }
// }



// class TestListView extends React.Component {

//   constructor() {
//     super();
//     // 使用第一步：
//     // 创建一个 空的 dataSource 数据源对象, 将来 ds 中存放的就是listView要渲染的数据
//     // { rowHasChanged: (r1, r2) => r1 !== r2 } 是固定写法，专门用来进行高效对比更新的
//     var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     this.state = {
//       // 第二步：将要渲染的数据，填充到 ds 数据源中：
//       list: ds.cloneWithRows(['张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇'])
//     }
//   }

//   render() {
//     return <View>
//       {/* 在 ListView中，由两个必须的属性： */}
//       {/* dataSource： 表示要渲染的数据源 */}
//       {/* renderRow： 表示要把数据源，渲染成什么样式给用户去看， 所以，renderRow就是为了渲染每一行数据的 */}
//       <ListView
//         dataSource={this.state.list}
//         renderRow={(row)=>{return <Text>{'zheshishuju:'+ row}</Text>}}
//       ></ListView>
//     </View>
//   }
// }


class TestListView extends React.Component {

  constructor() {
    super();
    // 第一步：创建一个空的数据源：
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds,
      list: ['张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇', '张三', '老王', '尼古拉斯凯奇', '柯南', '毛利', '小明', '彭州', '妖星宇']
    }
  }

  render() {
    return <View style={{ flex: 1 }}>
      {/* 监听 ListView将要滚动到底部的事件 */}
      <ListView
        dataSource={this.state.ds.cloneWithRows(this.state.list)}
        renderRow={(row) => { return <Text>{row}</Text> }}
        onEndReachedThreshold={20} // 当距离底部还有50像素的时候，加载下一页的内容
        onEndReached={() => {
          {/* 先为 List 追加新数据 */ }
          this.setState({
            list: this.state.list.concat(['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6'])
          }, function () {
            {/* 当this.state.list上的数据被修改之后，重新获取一下数据源 */ }
            this.state.ds.cloneWithRows(this.state.list)
          });
        }}
      ></ListView>
    </View>
  }
}


// 注册首屏页面
AppRegistry.registerComponent('rn0809', () => { return TestListView });


// ListView 和 ScrollView的区别：
// 1. Scrollview主要可以解决一些不相干的元素的滚动
// 2. ListView主要解决数据列表的滚动；