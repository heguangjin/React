import React from 'react'

import { View, Text, ActivityIndicator, ListView } from 'react-native'

// 导入moviebox 组件
import MovieBox from './MovieBox.js'

export default class MovieList extends React.Component {
  // 数据从哪儿来？？？
  // 正在热映：https://api.douban.com/v2/movie/in_theaters
  // 即将上映：https://api.douban.com/v2/movie/coming_soon
  // Top250 ：https://api.douban.com/v2/movie/top250

  constructor(props) {
    super();
    // 创建一个 空的数据源对象，将来给 ListView 去使用
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      movieType: props.movieType, // 电影类型
      nowPage: 1, // 当前页码
      totalPage: 1, // 总页码
      pageSize: 10, // 每页显示的记录条数
      movies: [], // 当前所有要展示的电影数据
      isLoading: true, // true表示正在加载数据，需要展示 loading 效果
      ds // 数据源对象
    }
  }

  // 组件将要挂载的时候，去请求电影数据
  componentWillMount() {
    this.loadMovieList();
  }

  // 根据 页码 和 电影类型，加载电影数据
  loadMovieList = () => {
    var start = (this.state.nowPage - 1) * this.state.pageSize;
    var url = `https://api.douban.com/v2/movie/${this.state.movieType}?count=${this.state.pageSize}&start=${start}`;

    // 使用 fetch API 请求 电影数据
    fetch(url)
      .then(res => { return res.json() })
      .then(data => {
        // console.warn(data.subjects.length);
        this.setState({
          movies: this.state.movies.concat(data.subjects), // 将最新的电影和之前已经展示出来的电影，拼接起来
          isLoading: false,
          totalPage: Math.ceil(data.total / this.state.pageSize)
        }, () => {
          this.setState({
            ds: this.state.ds.cloneWithRows(this.state.movies) // 当数据获取完毕之后，把最新的数据添加到数据源中存储
          });
        });
      });
  }

  // 模拟数据加载完成
  componentDidMount() {
    /*setTimeout(() => {
         this.setState({
           isLoading: false
         });
       }, 2000); */
  }

  render() {
    return <View>
      {this.createMovieList()}
    </View>
  }

  // 加载电影列表
  createMovieList = () => {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large"></ActivityIndicator>
    } else {
      // 渲染电影列表
      return <ListView
        dataSource={this.state.ds}
        renderRow={(row) => {
          return <MovieBox {...row}></MovieBox>
        }}
        onEndReachedThreshold={50}
        onEndReached={this.loadNewPage}
      ></ListView>
    }
  }

  // 加载下一页的数据
  loadNewPage = () => {
    // console.warn('OK');
    // 要加载下一页的数据了：
    //  1. 要把 this.state.nowPage +1
    // 如果当前页码 +1 之后，得到的下一页的页码值，比 总页数 大，则表示没有这一页数据，直接return；
    if (this.state.nowPage + 1 > this.state.totalPage) {
      return;
    }

    this.setState({
      nowPage: ++this.state.nowPage // 让页码 +1
    }, function () {
      // 当最新的页码值保存到 this.state 中以后，需要重新调用 this.loadMovieList() 方法加载下一页数据
      this.loadMovieList();
    });
  }
}

// this.porps.match.params.type