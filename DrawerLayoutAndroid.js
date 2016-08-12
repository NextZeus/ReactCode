/*
使用基本介绍

3.1.View的属性使用  继承了View控件的属性信息(例如:宽和高,背景颜色,边距等相关属性样式)

3.2.drawerPosition   参数为枚举类型(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)

进行指定导航菜单用那一侧进行滑动出来，根据官方实例最终传入的两个枚举值分别    为:DrawerLayoutAndroid.positions.Left和DrawerLayoutAndroid.positions.Right

3.3.drawerWidth  进行指定导航菜单视图的宽度，也就是说该侧面导航视图可以从屏幕边缘拖拽到屏幕的宽度距离

3.4.keyboardDismissMode    参数为枚举类型('none','on-drag') 进行指定在导航视图拖拽的过程中是否要隐藏键盘

none   (默认值),默认不会隐藏键盘
on-drag  当拖拽开始的时候进行隐藏键盘
3.5.onDrawerClose   function 方法 当导航视图被关闭后进行回调该方法

3.6.onDrawerOpen   function 方法 当导航视图被打开后进行回调该方法

3.7.onDrawerSlide  function  方法  当导航视图和用户进行交互的时候调用该方法

3.8.onDrawerStateChanged function方法，该当导航视图的状态发生变化的时候调用该方法。该状态会有以下三种状态

idle (空闲) 表示导航视图上面没有任何交互状态
dragging (正在拖拽中)   表示用户正在和导航视图产生交互动作
settling (暂停-刚刚结束)  表示用户 刚刚结束和导航视图的交互动作，当前导航视图正在打开或者关闭拖拽滑动动画效果
3.9.renderNavigationView  function 方法，该方法进行渲染一个导航抽屉的视图(用于用户从屏幕边缘拖拽出来)
*/

import React,{
    AppRegistery,
    Component,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';

class DrawerLayoutDemo extends Component {
    render(){

        var navigationView = (
            <View style={{flex:1,backgroundColor:'blue'}} >
                <Text style={styles.title} >我是导航栏标题</Text>
                <Text style={styles.li} >功能1</Text>
                <Text style={styles.li} >功能2</Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={()=>navigationView} 
            >
                <View style={{flex:1,alignItems:'center'}} >
                    <Text style={styles.mainPage}>我是主页内容</Text>
                </View>
            </DrawerLayoutAndroid >
        );
    }
}

const styles = StyleSheet.create({
    title:{
        margin:10,
        color:'#fff',
        fontSize:15,
        textAlign:'center'
    },
    li:{
        marginLeft:20,
        color:'#fff',
        fontSize:15,
        textAlign:'left'
    },
    mainPage:{
        margin:10, 
        fontSize:15, 
        textAlign:'right'
    }
});

AppRegistery.registerComponent('DrawerLayoutDemo',()=>DrawerLayoutDemo);