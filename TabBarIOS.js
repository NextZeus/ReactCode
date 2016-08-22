/**
 * Created by lixiaodong on 16/8/22.
 */
import React,{
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

class TabBarIOSDemo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          selectedTab : '历史',
          notifCount  : 0,
          press       : 0
      };
  }

  _renderContent(color, pageText,num){
      return (
        <View style={[styles.tabContent,{backgroundColor:color}]}>
            <Text style={styles.tabText}>
              {pageText}
            </Text>
            <Text style={styles.tabText}>
              第{number}次重复渲染{pageText}
            </Text>
        </View>
      );
  }
  render(){
      return (
          <View style={{flex:1}}>
              <Text style={styles.welcome}>
                  TabBarIOS使用实例
              </Text>
              <TabBarIOS
                style={{flex:1,alignItems:'center'}}
                tintColor="white"
                barTintColor="darkslateblue"
              >
                  <TabBarIOS.item
                      title="自定义"
                      icon={require('./images/flux.png')}
                      selected={this.state.selectedTab==='自定义'}
                      onPress={()=>{
                          this.setState({
                              selectedTab:'自定义'
                          });
                      }} 
                  >
                      {this._renderContent('#414ABC','自定义界面')}
                  </TabBarIOS.item>
                  <TabBarIOS.item
                      systemIcon="history"
                      selected={this.state.selectedTab==='历史'}
                      badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                      onPress={()=>{
                          this.setState({
                              selectedTab:'历史',
                              notifCount:this.state.notifCount + 1
                          });
                      }} 
                  >
                      {this._renderContent('#783E33','历史纪录',this.state.notifCount)}
                  </TabBarIOS.item>
                  <TabBarIOS.item
                      systemIcon="downloads"
                      selected={this.state.selectedTab==='下载'}
                      onPress={()=>{
                          this.setState({
                              selectedTab:'下载',
                              presses:this.state.presses+1
                          });
                      }}
                  >
                      {this._renderContent('#21551C','下载页面',this.state.presses)}
                  </TabBarIOS.item>
              </TabBarIOS>
          </View>
      );
  }
}
AppRegistry.registerComponent('TabBarIOSDemo', () => TabBarIOSDemo);