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








