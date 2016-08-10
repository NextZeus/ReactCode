/*
官方的写的一个例子
var ProgressBar = require('ProgressBarAndroid');
render: function() {
  var progressBar =
    <View style={styles.container}>
      <ProgressBar styleAttr="Inverse" />
    </View>;
 
  return (
    <MyLoadingComponent
      componentView={componentView}
      loadingView={progressBar}
      style={styles.loadingComponent}
    />
  );
},

<View >
        <Text>
            ProgressBarAndroid控件实例
        </Text>
        <ProgressBarAndroid styleAttr='Inverse'/>
</View>
*/

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid,
} from 'react-native';
 
class ProgressBarDemo extends Component {
  render() {
    return (
      <View >
        <Text>
            ProgressBarAndroid控件实例
        </Text>
        <ProgressBarAndroid  color="red" styleAttr='Inverse'/>
        <ProgressBarAndroid  color="green" styleAttr='Horizontal' progress={0.2} 
            indeterminate={false} style={{marginTop:10}}/>
        <ProgressBarAndroid  color="green" styleAttr='Horizontal'
            indeterminate={true} style={{marginTop:10}}/>
        <ProgressBarAndroid  color="black" styleAttr='SmallInverse'
            style={{marginTop:10}}/>
        <ProgressBarAndroid  styleAttr='LargeInverse'
            style={{marginTop:10}}/>
      </View>
    );
  }
}
AppRegistry.registerComponent('ProgressBarDemo', () => ProgressBarDemo);
