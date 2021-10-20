import { StyleSheet } from "react-native";

const HomeHeaderCss = StyleSheet.create({
   container1:{
        //height:'100%',
        width:'100%',
        //flex:1
   },
   container2:{
       width:'100%',
       height:50,
       backgroundColor:'darkred',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between'
          
    },
       bookicone:{
           marginLeft:7,
           flexDirection:'row'
       },
   bookstortxt:{
      color:'white',
      marginLeft:4
   },
   searchView:{
       width:"50%",
       height:30,
       backgroundColor:'white',
       borderRadius:5,
      // marginLeft:10,
       flexDirection:'row',
       alignItems:'center'
   },
   searchIcon:{
    marginLeft:10
   },
   searchtxt:{
    marginLeft:5
   },
   carttxt:{
       color:'white',
       marginRight:2

       
   },
   cartView:{
    flexDirection:'row'
   },
   cartIcone:{
     //  width:100,
      marginRight:7
   }

})

export default HomeHeaderCss