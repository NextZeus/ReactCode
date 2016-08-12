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