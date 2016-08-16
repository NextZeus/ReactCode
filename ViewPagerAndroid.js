/**
 * Created by lixiaodong on 16/8/16.
 */
/**
 * 属性方法

 View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)
 initialPage  number  ViewPagerAndroid初始索引页，不过我们可以使用setPage方法来更新页码，通过onPageSelected方法来监听页面滑动。
 keyboardDismissMode  enum('none','on-drag')  枚举类型，进行设置在拖拽滑动的过程中是否要显示键盘。
 'none'  默认值,在拖拽中不隐藏键盘

 'on-drag'   当拖拽滑动开始的时候隐藏键盘

 onPageScroll  function 方法，该方法在页面进行滑动的时候执行(不管是因为页面滑动动画原因还是由于页面之间的拖拽以及滑动原因).该会回调传入的event.nativeEvent对象会有携带如下参数:
 'position'   从左起开始第一个可见的页面的索引

 'offset'  该value值的范围为[0,1)，该用来代表当前页面的却换的状态。值x代表该索引页面(1-x)的范围可见，另外x范围代表下一个页面可见的区域

 onPageScrollStateChanged  function 该回调方法会在页面滚动状态发生变化的时候进行调用。页面的滚动状态有下面三种情况:
 'idle' 该表示当前用户和页面滚动没有任何交互

 'dragging'  拖动中，该表示当前页面正在被拖拽滑动中

 'settling'   该表示存在页面拖拽或者滑动的交互。页面滚动正在结束。并且正在关闭或者打开动画。

 onPageSelected  function 方法 该在页面进行拖拽滑动切换完成之后回调。该方法回调参数中的event.nativeEvent对象会携带如下一个属性 : 'position'  该属性代表当前选中的页面的索引.
 */

'use strict'

'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ViewPagerAndroid,
} from 'react-native';

const styles = StyleSheet.create({
    pageStyle: {
        marginTop:10,
        alignItems: 'center',
        height:150,
    },
    textStyle:{
        marginTop:5,alignSelf:'center',fontSize:11,color:'#555555',textAlign:'center'
    },
    imageStyle:{
        alignSelf:'center',width:45,height:45
    }
});

var titles_first_data=["美食","电影","酒店","KTV","外卖","优惠买单","周边游","休闲娱乐","今日新单","丽人"];
var titles_second_data=["购物","火车票","生活服务","旅游","汽车服务","足疗按摩","小吃快餐","经典门票","境外游","全部分类"];
var ViewPagerDemo = React.createClass({
    getInitialState: function() {
        return {
            page:1,
        };
    },
    onPageSelected: function(e) {
        this.setState({page: 1+e.nativeEvent.position});
    },
    render() {
        return (
            <View >
                <Text style={{textAlign:'center'}}>
                    美团首页顶部效果实例
                </Text>
                <ViewPagerAndroid style={styles.pageStyle} initialPage={0}  onPageSelected={this.onPageSelected}>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/one.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[0]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/two.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[1]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/three.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[2]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/four.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[3]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/five.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/six.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[5]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/seven.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[6]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/eight.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[7]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/nine.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[8]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/ten.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_first_data[9]}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_one.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[0]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_two.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[1]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_three.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[2]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_four.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[3]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_five.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[4]}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_six.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[5]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_seven.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[6]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_eight.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[7]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_nine.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[8]}</Text>
                            </View>
                            <View style={{width:70}}>
                                <Image source={require('./img/next_ten.png')} style={styles.imageStyle} />
                                <Text style={styles.textStyle}>{titles_second_data[9]}</Text>
                            </View>
                        </View>
                    </View>
                </ViewPagerAndroid>
                <Text style={{flex:1,alignSelf:'center'}}>当前第{this.state.page}页</Text>
            </View>
        );
    }
});

AppRegistry.registerComponent('ViewPagerDemo', () => ViewPagerDemo);
