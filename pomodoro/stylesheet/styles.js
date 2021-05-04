import { StyleSheet } from 'react-native'; 

export  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 30,
      paddingTop: 30,
    },
    logo:{
      alignItems: 'center',
      justifyContent: 'center',
      width:100,
      height: 100,
    },
    label: {
      fontSize: 50,
      textAlign: 'center',
      color: '#000000',
      fontWeight: 'bold',
    },
    timer: {
      fontSize: 90,
      padding: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      marginBottom: 15,
    },
    inputLabel: {
      fontSize: 18,
      color: '#000000',
      paddingRight: 5,
      paddingTop: 5,
      fontWeight: 'bold',
    },
    inputTime: {
      color: '#0004ff',
      borderWidth: 1,
      borderRadius: 8,
      fontSize: 20,
      padding: 6,
      textAlign: 'center',
      marginLeft: 5,
      minWidth: 70
    },
    buttonContainer:{
      flexDirection: 'row',
      marginBottom: 15,
    },
    buttonStart:{
      padding: 15,
      margin: 5,
      backgroundColor: '#4acc6a',
      borderRadius:10,
      shadowRadius:10,
      shadowOpacity:0.6,
      shadowColor:'#4acc6a',
      shadowOffset:{width:5,height:5},
      elevation: 6, 
    },
    buttonStop:{
      padding: 15,
      margin: 5,
      backgroundColor: '#ffcc6c',
      borderRadius:10,
      shadowRadius:10,
      shadowOpacity:0.6,
      shadowColor:'#ffcc6c',
      shadowOffset:{width:5,height:5},
      elevation: 6, 
    },
    buttonReset:{
      padding: 15,
      margin: 5,
      backgroundColor: '#ff5f5f',
      borderRadius:10,
      shadowRadius:10,
      shadowOpacity:0.6,
      shadowColor:'#ff5f5f',
      shadowOffset:{width:5,height:5},
      elevation: 6, 
    },
    buttonLabel:{
      color:'#ffffff',
      fontSize: 25,
      fontWeight: 'bold'
    }
  });
  