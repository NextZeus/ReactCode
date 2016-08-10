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

属性方法

3.1.支持View控件的属性方法 (这些属性是从View控件中继承下来)  例如:大小,布局,边距啊

3.2.color  设置进度的颜色属性值

3.3.indeterminate 设置是否要显示一个默认的进度信息，该如果styleAttr的风格设置成Horizontal的时候该值必须设置成false

3.4.progress  number  设置当前的加载进度值(该值在0-1之间)

3.5.styleAttr    进度条框的风格 ，可以取的值如下:

Horizontal
Small
Large
Inverse
SmallInverse
LargeInverse
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
