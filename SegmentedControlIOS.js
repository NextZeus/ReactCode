/**
 * Created by lixiaodong on 16/8/22.
 */
'use strict'

import React,{
    AppRegistery,
    Component,
    StyleSheet,
    Text,
    View,
    SegmentedControlIOS
} from 'react-native';
const styles = StyleSheet.create({
    welcome:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    segmentedControl1:{
        margin:10,
        height:30,
        width:200,
        alignSelf:'center'
    },
    segmentedControl2:{
        marginTop:20,
        margin:10,
        height:30,
        width:300,
        alignSelf:'center'
    }
});

const segmentedControl1 = ['全国', '南通'];
const segmentedControl2 = ['Android', 'iOS','Java','React'];



class SegmentedControlIOSDemo extends Component{
    render(){
        return (
            <View>
                <Text style={styles.welcome}>
                    SegmentedControlIOS使用实例
                </Text>
                <SegmentedControlIOS
                    values={["全国","南通"]}
                    tintColor="red"
                    style={styles.segmentedControl1}
                    />
                    <SegmentedControlIOS
                        values={segmentedControl2}
                        tintColor="green"
                        selectedIndex={1}
                        onValueChange={(value)=>console.log('选中了'+value)}
                        style={styles.segmentedControl2}
                        />
            </View>
        );
    }
}

AppRegistery.registerComponent('SegmentedControlIOSDemo',()=>SegmentedControlIOSDemo);