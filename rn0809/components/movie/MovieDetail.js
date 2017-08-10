import React from 'react'

import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native'

export default class MovieDetail extends React.Component {

  constructor(props) {
    super();
    this.state = {
      isLoading: true,
      movieInfo: {}
    }
  }

  // 组件将要挂载的时候，请求电影详情
  componentWillMount() {
    var url = `https://api.douban.com/v2/movie/subject/${this.props.id}`;

    fetch(url)
      .then(res => { return res.json() })
      .then(data => {
        this.setState({
          isLoading: false,
          movieInfo: data
        });
      })
  }

  render() {
    return <View style={{ flex: 1 }}>
      {this.createMovieInfo()}
    </View>
  }

  createMovieInfo = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    } else {
      return <ScrollView>
        <View style={{ alignItems: 'center', margin: 15 }}>
          <Image source={{ uri: this.state.movieInfo.images.large }} style={{ width: 200, height: 250 }}></Image>
        </View>

        <Text style={{ lineHeight: 28 }}>{this.state.movieInfo.summary}</Text>
      </ScrollView>
    }
  }
}