import React from 'react'
// 通过 TouchableHighlight 响应点击事件
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class MovieBox extends React.Component {
  render() {
    var info = this.props;
    return <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="#ccc"
      onPress={() => { this.goDetail(info.id, info.title) }}>
      <View style={{ flexDirection: 'row', padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
        {/* 注意：引用网络上的图片，一定要给 Image 设置宽高 */}
        <Image source={{ uri: info.images.medium }} style={{ width: 100, height: 140, marginRight: 10 }}></Image>
        <View style={{ justifyContent: 'space-around' }}>
          <Text><Text style={{ fontWeight: 'bold' }}>电影名称：</Text>{info.title}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>电影类型：</Text>{info.genres.join(', ')}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>上映年份：</Text>{info.year + '年'}</Text>
          <Text><Text style={{ fontWeight: 'bold' }}>豆瓣评分：</Text>{info.rating.average + '分'}</Text>
        </View>
      </View>
    </TouchableHighlight>
  }

  // 跳转到详细页面
  goDetail = (id, title) => {
    // Actions
    Actions.moviedetail({ id, title });
  }
}