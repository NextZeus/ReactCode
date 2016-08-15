/**
 * Created by lixiaodong on 16/8/15.
 */
/*
* Switch选择开关控件

 2.1.该为Android/iOS两个平台通用的两种状态的选择开关组件

 2.2.Switch属性方法介绍(这边只介绍平台通用属性以及只适合Android平台上面的属性方法)

 View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)
 disabled bool 如果该值为true,用户就无法点击switch开关控件，默认为false
 onValueChange function 方法，当该组件的状态值发生变化的时候回调方法
 value bool 该开关的值，如果该值为true的时候，开关呈打开状态，默认为false
* */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Switch,
} from 'react-native';

var SwitchDemo = React.createClass({
    getInitialState(){
        return {
            trueSwitchIsOn:true,
            falseSwitchIsOn:false
        }
    },

    render(){
        return (
            <View style={styles.container}>
                <Text>Switch实例</Text>
                <Switch
                    disabled={true}
                    onValueChange={(value)=>this.setState({falseSwitchIsOn:value})}
                    style={{marginBottom: 10,marginTop: 10}}
                    value={this.state.falseSwitchIsOn}
                    />
                <Switch
                    onValueChange={(value)=>this.setState({trueSwitchIsOn:value})}
                    value={this.state.trueSwitchIsOn}
                    />
            </View>
        );
    }
});

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FcFF'
    }
});
AppRegistry.registerComponent('SwitchDemo',()=>SwitchDemo);