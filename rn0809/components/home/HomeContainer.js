import React from 'react'
// 导入 RN 的组件
import { View, Text, StyleSheet, Image } from 'react-native'

// 导入轮播图组件
import Swiper from 'react-native-swiper'

// 导入路由组件
// react-native-router-flux 里面的 Actions 组件，存放了所有的页面；
// 因此，可以直接通过 Actions 跳转到任何你想去的页面；
// Actions.key()  其中的 key， 表示在定义 Scene 时候，提供的key
import { Actions } from 'react-native-router-flux'

// 首页组件
export default class HomeContainer extends React.Component {
  render() {
    return <View style={{ flex: 1 }}>
      <Swiper style={styles.wrapper} showsButtons={true} height={200} autoplay={true}>
        <View style={styles.slide1}>
          <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017410109413000.jpg' }} style={{ width: '100%', height: '100%' }}></Image>
        </View>
        <View style={styles.slide2}>
          <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg' }} style={{ width: '100%', height: '100%' }}></Image>
        </View>
        <View style={styles.slide3}>
          <Image source={{ uri: 'http://www.itcast.cn/images/slidead/BEIJING/2017441409442800.jpg' }} style={{ width: '100%', height: '100%' }}></Image>
        </View>
      </Swiper>

      <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Text style={styles.btn} onPress={() => { this.goToMovieList('in_theaters', '正在热映') }}>正在热映</Text>
        <Text style={styles.btn} onPress={() => { this.goToMovieList('coming_soon', '即将上映') }}>即将上映</Text>
        <Text style={styles.btn} onPress={() => { this.goToMovieList('top250', 'Top250') }}>Top250</Text>
      </View>
    </View>
  }

  // 点击电影分类，跳转到分类对应的电影页面
  goToMovieList = (movieType, title) => {
    // console.warn(movieType);
    // 可以使用 Actions.key() 跳转到 指定的页面；
    // 同时，在跳转的时候，可以通过 Actions.key({k:v, k2:v2})
    // 注意：传递参数的时候，如果想要修改页面的 title 属性，必须传递一个 title 的参数，参数名必须为 title
    Actions.movielist({ movieType, title });
  }
}



var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: { backgroundColor: '#ccc', height: 60, textAlignVertical: 'center', fontSize: 22, textAlign: 'center', marginTop: 15 }
})