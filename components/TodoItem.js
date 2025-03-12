import { StyleSheet, Text, Pressable } from "react-native";

const todoItem = (props) => {
    function deleteHandler(){
        props.onDelete(props.id);
    }
    return ( 
        <Pressable onPress={deleteHandler}>
        <Text style={styles.todoStyle}>{props.text}</Text>
        </Pressable>
     );
}
 
export default todoItem;
const styles = StyleSheet.create({
  
    todoStyle:{
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        backgroundColor: '#FF0079FF',
        borderRadius: 50      
      }
});