import React,{
    AppRegistery,
    Component,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid
} from 'react-native';

class DrawerLayoutDemo extends Component {
    render(){

        var navigationView = (
            <View style={{flex:1,backgroundColor:'blue'}} >
                <Text style={styles.title} >我是导航栏标题</Text>
                <Text style={styles.li} >功能1</Text>
                <Text style={styles.li} >功能2</Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={150}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={()=>navigationView} 
            >
                <View style={{flex:1,alignItems:'center'}} >
                    <Text style={styles.mainPage}>我是主页内容</Text>
                </View>
            </DrawerLayoutAndroid >
        );
    }
}

const styles = StyleSheet.create({
    title:{
        margin:10,
        color:'#fff',
        fontSize:15,
        textAlign:'center'
    },
    li:{
        marginLeft:20,
        color:'#fff',
        fontSize:15,
        textAlign:'left'
    },
    mainPage:{
        margin:10, 
        fontSize:15, 
        textAlign:'right'
    }
});

AppRegistery.registerComponent('DrawerLayoutDemo',()=>DrawerLayoutDemo);