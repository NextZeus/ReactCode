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
        		<Text style={styles.text}></Text>
        	</View>
        	,,,,,,
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
