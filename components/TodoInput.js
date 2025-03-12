import {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const TodoInput = (props) => {

    const [enteredTodoText, setEnteredTodoText] = useState('');
    function enterTodoText(enteredText) {
      //console.log(enteredText);
      setEnteredTodoText(enteredText);
    }
    function onPress()
    {
        props.onTodoAdded(enteredTodoText);
        setEnteredTodoText('');
    }

    return (   
    <View style={styles.flextForTodo}>  
        <TextInput onChangeText={enterTodoText} value={enteredTodoText} placeholder='Enter Your Text Here' style={styles.txtInput} />
      <Button title='Add Task' color={'#FF0079FF'} onPress={onPress} />
      </View>
      );
}
 
export default TodoInput;

const styles = StyleSheet.create({
    flextForTodo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
      },
      txtInput: {
        padding: 10,
        width: '75%',
        marginRight: 15,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
        borderRadius: 200,
        color: '#FF0079FF',
        paddingLeft: 20
      }
});