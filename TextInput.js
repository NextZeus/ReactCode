/*
属性方法(这边讲解平台公用以及Android生效的属性方法)
3.1.View 支持View的相关属性
3.2.autoCapitalize  控制TextInput输入的字符进行切换成大写(可选择参数:'none', 'sentences', 'words', 'characters')

none:不自动切换任何字符成大写
sentences:默认每个句子的首字母变成大写
words:每个单词的首字母变成大写
characters:每个字母全部变成大写
3.3.autoCorrect  bool  设置拼写自动修正功能 默认为开启(true)
3.4.autoFocus bool  设置是否默认获取到焦点默认为关闭(false)。该需要componentDidMount方法被调用之后才会获取焦点哦(componentDidMount是React组件被渲染之后React主动回调的方法)
3.5.defaultValue  string 给文本输入设置一个默认初始值。
3.6.editable bool  设置文本框是否可以编辑 默认值为true,可以进行编辑
3.7.keyboardType  键盘类型(可选参数:"default", 'email-address', 'numeric', 'phone-pad', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search') 该用来选择默认弹出键盘的类型例如我们甚至numeric就是弹出数字键盘。鉴于平台的原因如下的值是所有平台都可以进行通用的

default
numeric            数字键盘
email-address  邮箱地址
3.8.maxLength  number  可以限制文本输入框最大的输入字符长度
3.9.multiline bool  设置可以输入多行文字，默认为false(表示无论文本输入多少，都是单行显示)
3.10.onBlur  function 监听方法，文本框失去焦点回调方法
3.11.onChange function 监听方法,文本框内容发生改变回调方法
3.12.onChangeText  function监听方法，文本框内容发生改变回调方法，该方法会进行传递文本内容
3.13.onEndEditing  function监听方法，当文本结束文本输入回调方法
3.14.onFocus  function 监听方法  文本框获取到焦点回调方法
3.15.onLayout  function监听方法  组价布局发生变化的时候调用，调用方法参数为 {x,y,width,height}
3.16.onSubmitEditing function监听方法，当编辑提交的时候回调方法。不过如果multiline={true}的时候，该属性就不生效
3.17.placeholder string 当文本输入框还没有任何输入的时候，默认显示信息，当有输入的时候该值会被清除
3.18.placeholderText Color  string 设置默认信息颜色(placeholder)
3.19.secureTextEntry  bool 设置是否为密码安全输入框 ，默认为false
3.20.style 风格属性  可以参考Text组件风格
3.21.value  string 输入框中的内容值
以上是一些Android，iOS平台通用的属性，下面根据官网的文档，我这边组要讲解一下适用于Android平台的属性方法
3.22.numberOfLines number设置文本输入框行数，该需要首先设置multiline为true,设置TextInput为多行文本。
3.23.textAlign 设置文本横向布局方式 可选参数('start', 'center', 'end')
3.24.textAlignVertical 设置文本垂直方向布局方式 可选参数('top', 'center', 'bottom')
3.25.underlineColorAndroid  设置文本输入框下划线的颜色
*/

//仿照QQ登录界面

import React, {
	AppRegistery,
	Component,
	StyleSheet,
	Text,
	View,
	Image,
	TextInput
} from 'react-native';

class TestInput extends Component {
	render(){
		return (
			<View style={{backgroundColor:'#f4f4f4', flex:1}}>
				<Image style={styles.style_image} source={require('./img/app_icon.png')} />
				<TextInput
					style={styles.style_user_input}
					placeholder="QQ号/手机号/邮箱"
					numberOfLines={1}
					autoFocus={true}
					underlineColorAndroid={'transparent'}
					textAlign='center' 
				/>
				<View style={{height:1,backgroundColor:'#f4f4f4'}} >
					<TextInput
						 style={styles.style_pwd_input}
						 placeholder="密码"
						 numberOfLines={1}
						 underlineColorAndroid={'transparent'}
						 secureTextEntry={true}
						 textAlign='center'
					/>
					<View style={styles.style_view_commit}>
						<Text style={{color:'#fff'}}>登录</Text>
					</View>

					<View style={{flex:1,flexDirection:'row',alignItems: 'flex-end',bottom:10}}>
						<Text style={styles.style_view_unlogin}>
							无法登录?
						</Text>
						<Text style={styles.style_view_register}>
							新用户
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	style_image:{
		borderRadius:35,
		height:70,
		width:70,
		marginTop:40,
		alignSelf:'center'
	},
	style_user_input:{
		backgroundColor:'#fff',
		marginTop:10,
		height:35,
	},
	style_pwd_input:{
		backgroundColor:'#fff',
		height:35,
	},
	style_view_commit:{
		marginTop:15,
		marginLeft:10,
		marginRight:10,
		backgroundColor:'#63B8FF',
		height:35,
		borderRadius:5,
		justifyContent:'center',
		alignItems:'center'
	},
	style_view_unlogin:{
		fontSize:12,
		color:'#63B8FF',
		marginLeft:10,
	},
	style_view_register:{
		fontSize:12,
		color:'#63B8FF',
		marginRight:10,
		alignItems:'fixed-end',
		flex:1,
		flexDirection:'row',
		textAlign:'right'
	}
});

AppRegistery.registerComponent('TestInput',()=>TestInput);













