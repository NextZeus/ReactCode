/*
 属性方法(这边只关注通用以及Android平台的)

 3.1.View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)

 3.2.contentContainerStyle  样式风格属性(传入StyleSheet创建的Style文件)。该样式会作用于被ScrollView包裹的所有的子视图。实例如下:

 return (
 <ScrollView contentContainerStyle={styles.contentContainer}> </ScrollView>
 );
 …
 var styles = StyleSheet.create({
 contentContainer: {
 paddingVertical: 20
 }
 });
 3.3.horizontal   表示ScrollView是横向滑动还是纵向滑动。该默认为false表示纵向滑动

 3.4.keyboardDismissMode   枚举类型表示键盘隐藏类型，可选值('none', "interactive", 'on-drag')  三个值的意义分别如下:

 none  默认值，表示在进行拖拽滑动的时候不隐藏键盘
 on-drag   表示在进行拖拽滑动开始的时候隐藏键盘
 interactive  表示当拖拽触摸移动的同时隐藏键盘，向上拖拽的时候取消隐藏。不过在Android平台上面该选项不支持，所以会和'none'一样的效果。
 3.5.keyboardShouldPersistTaps  该属性默认为false，表示如果当前是textinput控件，并且键盘是弹出状态的话，点击textinput之外地方，会进行隐藏键盘。反之不会有效果，键盘还是成打开状态。

 3.6.onContentSizeChange  function  该当滚动视图的内容尺寸大小发生变化的时候进行调用

 3.7.onScroll  function  该方法在滚动的时候每frame(帧)调用一次。该方法事件调用的频率可以使用scrollEventThrottle属性进行设置。

 3.8.refreshControl   element 设置元素控件，该可以进行指定RefreshControl组件。这样可以为ScrollView添加下拉刷新的功能.

 3.9.removeClippedSubviews  测试属性 当该值为true的时候。在ScrollView视图之外的视图(该视图的overflow属性值必须要为hidden)会从被暂时移除，该设置可以提高滚动的性能。

 3.10.showsHorizontalScrollIndicator   该值设置是否需要显示横向滚动指示条

 3.11.showsVerticalScrollIndicator 该值设置是否需要显示纵向滚动指示条

 3.12.sendMomentumEvents   当ScrollView有onMomentumScrollBegin或者onMomentumScrollEnd方法设置，该sendMomentumEvents值设置为true的时候。变化的事件信息会通过该Android框架自动发送出来，然后之前设置的方法进行捕捉。

 接下来的其他属性方法都只适合于iOS平台，这边暂时不做相关讲解。具体请点击查看官方文档

 (四)风格样式

 对于风格样式这块，其实和View视图中差不多的，大家可以点击进行查看View组件的介绍和详解文章

 Flexbox...
 ShadowPropTypesIOS#style…
 Transforms...
 backfaceVisibility enum('visible', 'hidden')
 backgroundColor color
 borderBottomColor color
 borderBottomLeftRadius number
 borderBottomRightRadius number
 borderBottomWidth number
 borderColor color
 borderLeftColor color
 borderLeftWidth number
 borderRadius number
 borderRightColor color
 borderRightWidth number
 borderStyle enum('solid', 'dotted', 'dashed')
 borderTopColor color
 borderTopLeftRadius number
 borderTopRightRadius number
 borderTopWidth number
 borderWidth number
 opacity number
 overflow enum('visible', 'hidden')
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

class ScrollViewDemo extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{margin:10, fontSize:15, color:'$fff'}}>测试ScrollView控件</Text>
                <ScrollView showVshowsVerticalScrollIndicator={true}>
                    <Text style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        margin:10,
        backgroundColor:"#ff0000",
    }
});

AppRegistry.registerComponent('ScrollViewDemo',()=>ScrollViewDemo);