/**
 * Created by lixiaodong on 16/8/16.
 */

import React,{
    AppRegistry,
    Component,
    StyleSheet,
    View,
    ListView
} from 'react-native';

var ListViewDemo = React.createClass({
    getInitialState:function () {
        var ds = new ListView.DataSource({
            rowHasChanged:(r1,r2)=> r1 !== r2
        });
        return {
            dataSource :ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8'])
        }
    },
    render:function(){
        <ListView dataSource={this.state.dataSource} renderRow={(rowData)=> <Text>{rowData}</Text> } />
    }
});

AppRegistry.registerComponent('ListViewDemo',()=>ListViewDemo);