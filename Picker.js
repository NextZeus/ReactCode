/*
* Picker属性方法通用属性
*
*/
'use strict'
import React,{
  AppRegistery,
  Component,
  StyleSheet,
  Text,
  View,
  Picker
} from 'reac-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    }
});

var PickerDemo = React.createClass({
    getInitialState(){
        return {
            language:''
        }
    },
    render(){
        return (
            <View style={styles.container}>
              <Text>Picker Demo</Text>
              <Picker
                  style={{width:20}}
                  selectedValue={this.state.language}
                  onValueChange={(value)=>this.setState({language:value})}
              >
                  <Picker.item label="java" value="java" />
                  <Picker.item label="javascript" value="javascript" />
              </Picker>
            </View>
        );
    }
});

AppRegistery.registerComponent('PickerDemo',()=>PickerDemo);


