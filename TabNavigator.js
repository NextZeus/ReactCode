import React from 'react';
import Home from '../Home';

class AppMain extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'AppMain';
    }
    render() {
        return (
        	<TableNavigator>
        		<TableNavigator.item 
        			title="主页"
        			selected={this.state.selectedTab === "home"}
        			selectedTitleStyle={styles.selectedTitleStyle}
        			titleStyle={styles.textStyle}
        			renderIcon={()=><Image source={require("../imgs/ic_tab_home.png")}  style={styles.iconStyle} />}
        			renderSelectedIcon={()=><Image source={require("../imgs/ic_tab_home_press.png")}  style={styles.iconStyle} />}
        			onPress={()=>this.setState({selectedTab:'home'})}
        			<Home ...this.props /> 
        		/>
			</TableNavigator>
        )
    }
}

const styles=StyleSheet.create({
   iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'black',
   }
});

export default AppMain;


