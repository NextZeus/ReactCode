/**
 * Created by lixiaodong on 16/8/15.
 */
/*
注意：
导航图标以及功能列表的图标支持加载远程的图片(网络图片等)，不过该功能只是在开发模式下支持，发布模式并不支持，只能用本地的资源进行渲染，
即require('./aa.png');

 这边我们大家看一下官方提供的一个ToolBar使用的很简单的例子:


 render: function() {
     return (
         <ToolbarAndroid
             logo={require('./app_logo.png')}
             title="AwesomeApp"
             actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}
             onActionSelected={this.onActionSelected} />
     );
 },
 onActionSelected: function(position) {
     if (position === 0) { // index of 'Settings'
        showSettings();
     }
 }
 该代码添加了一个ToolBarAndroid组件，其中加入Logo图标，标题信息，以及功能列表信息，当功能被点击的时候进行响应相关方法

 属性方法(只介绍通用以及Android平台)

 3.1.View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)

 3.2.actions 设置功能列表信息属性 传入的参数信息为: [{title: string, icon: optionalImageSource, show: enum('always', 'ifRoom', 'never'), showWithText: bool}]   进行设置功能菜单中的可用的相关功能。该会在显示在组件的右侧(显示方式为图标或者文字)，如果界面上面区域已经放不下了，该会加入到隐藏的菜单中(弹出进行显示)。该属性的值是一组对象数组，每一个对象包括以下以下一些参数:

 title: 必须的，该功能的标题
 icon: 功能的图标  采用该代码进行获取 require('./some_icon.png')
 show: 该设置图标直接显示，还是隐藏或者显示在弹出菜单中。always代表总是显示,ifRoom代表如果Bar中控件够进行显示，或者never代表使用直接不显示
 showWithText  boolean 进行设置图标旁边是否要显示标题信息
 3.3.contentInSetEnd  number 该用于设置ToolBar的右边和屏幕的右边缘的间距。

 3.4.contentInsetStart number 该用于设置ToolBar的左边和屏幕的左边缘的间距。

 3.5.logo  optionalImageSource  可选图片资源  用于设置Toolbar的Logo图标

 3.6.navIcon optionalImageSource 可选图片资源 用于设置导航图标

 3.7.onActionSelected function方法 当我们的功能被选中的时候回调方法。该方法只会传入唯一一个参数:点击功能在功能列表中的索引信息

 3.8.onIconClicked function 当图标被选中的时候回调方法

 3.9.overflowIcon  optionalImageSource 可选图片资源 设置功能列表中弹出菜单中的图标

 3.10. rtl   设置toolbar中的功能顺序是从右到左(RTL:Right To Left)。为了让该效果生效，你必须在Android应用中的AndroidMainifest.xml中的application节点中添加android:supportsRtl="true"，然后在你的主Activity(例如:MainActivity)的onCreate方法中调用如下代码:setLayoutDirection(LayoutDirection.RTL)。

 3.11.subtitle  string 设置toolbar的副标题

 3.12.subtitleColor  color  设置设置toolbar的副标题颜色

 3.13.title string  设置toolbar标题

 3.14.titleColor color 设置toolbar的标题颜色

 */

'use strict'
import React,{
    AppRegistery,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

var ToolBarAndroid = require('ToolbarAndroid');
class ToolBarAndroidDemo extends Component{
    render(){
        return (
            <ToolbarAndroid
                actions = {toolActions}
                navIcon={require('./icon_menu_black.png')}
                logo={require('./icon_logo.png')}
                style = {styles.toolBar}
                <SwitchAndroid value={true}/>
                subtitle="副标题"
                title="主标题"
                >
            </ToolbarAndroid>
        );
    }
}

var toolActions = [
    {title : 'Create',  icon:   require('./ic_create_black.png'),   show:   'always'},
    {title : 'Filter'},
    {title : 'Settings',  icon:   require('./ic_settings_black.png'),   show:   'always'}
];
const styles = StyleSheet.create({
    toolBar:{
        backgroundColor:'#e9eaed',
        height:36
    }
});

AppRegistery.registerComponent('ToolBarAndroidDemo',()=>ToolBarAndroidDemo);




































