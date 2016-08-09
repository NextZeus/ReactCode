/*
Image属性方法

1.onLayout   (function) 当Image布局发生改变的，会进行调用该方法，调用的代码为:

{nativeEvent: {layout: {x, y, width, height}}}.

2.onLoad (function):当图片加载成功之后，回调该方法

3.onLoadEnd (function):当图片加载失败回调该方法，该不会管图片加载成功还是失败

4.onLoadStart (fcuntion):当图片开始加载的时候调用该方法

5.resizeMode  缩放比例,可选参数('cover', 'contain', 'stretch') 该当图片的尺寸超过布局的尺寸的时候，会根据设置Mode进行缩放或者裁剪图片

6.source {uri:string} 进行标记图片的引用，该参数可以为一个网络url地址或者一个本地的路径

(四)Image样式风格

1.FlexBox  支持弹性盒子风格

2.Transforms  支持属性动画                3.resizeMode  设置缩放模式

4.backgroundColor 背景颜色

5.borderColor     边框颜色              6.borderWidth 边框宽度

7.borderRadius  边框圆角

8.overflow 设置图片尺寸超过容器可以设置显示或者隐藏('visible','hidden')

9.tintColor  颜色设置         10.opacity 设置不透明度0.0(透明)-1.0(完全不透明)
*/

'use strict'
import React,{
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

class TestImage extends React.Component {
    
    render() {
        return (
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/one.png')} style = { styles.img } />
        		<Text style={styles.text}>美食</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/two.png')} style = { styles.img } />
        		<Text style={styles.text}>电影</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/three.png')} style = { styles.img } />
        		<Text style={styles.text}>酒店</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/four.png')} style = { styles.img } />
        		<Text style={styles.text}>KTV</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/five.png')} style = { styles.img } />
        		<Text style={styles.text}>外卖</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/six.png')} style = { styles.img } />
        		<Text style={styles.text}>优惠买单</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/seven.png')} style = { styles.img } />
        		<Text style={styles.text}>周边游</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/eight.png')} style = { styles.img } />
        		<Text style={styles.text}>休闲娱乐</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/nine.png')} style = { styles.img } />
        		<Text style={styles.text}>今日新单</Text>
        	</View>
        	<View style={ styles.ViewWidth }>
        		<Image  source={require('./img/ten.png')} style = { styles.img } />
        		<Text style={styles.text}>丽人</Text>
        	</View>
        );
    }
}


const styles = StyleSheet.create({
	ViewWidth	:{
		width: 70, 
	},
	img:{
		alignSelf:"center",
		width:45,
		height:45
	},
	text:{
		marginTop:5,
		alignSelf:'center',
		fontSize:11,
		color:'#555555',
		textAlign:'center'
	}
});

AppRegistry.registerComponent('TestImage',()=>TestImage);

/*
<Image source={require('./img/my_icon.png')} >
           <Text style={{color:'red'}}>下面是背景图 </Text>
</Image>

网络图片 加载时 一定要写width ,height
<Image source={{uri:'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg'}}  style={{width:100,height:100}}/>

[注意].这边使用Image组件，require中的图片名称必须为一个静态的字符串信息。不能在require中进行拼接
<Image source={require('./img/my_icon'+'.png')} />
*/








