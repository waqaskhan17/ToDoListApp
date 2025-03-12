import { useState } from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
export default function App() {
  const [todosList, setTodosList] = useState([]);

  
  function addTodoTextToList(enteredTodoText) {
    if(enteredTodoText != '') {
      setTodosList([...todosList, {text: enteredTodoText, id: Math.random().toString()}]);
    }
  }

  function deleteHandler(id){
      console.log('Delete!');
      setTodosList(todosList.filter((todo) => todo.id != id));
  }
  
  return (
    <View style={styles.container}>

      <Text style={styles.headingTxt}> Todo App </Text>
     
      <TodoInput onTodoAdded={addTodoTextToList}  />


      <FlatList style={styles.todoFlatlist} data={todosList} renderItem={(todoItem)=>{
        return (
          <TodoItem onDelete={deleteHandler} id={todoItem.item.id} text={todoItem.item.text} />
        );
      }} keyExtractor={(item, index) =>
        {
          return item.id;
        }
      } />
       
    
      
      {/* <View style={styles.bottomNav}>
      <View style={{flex:1, width: 100,  backgroundColor: 'powderblue', alignItems:'center', justifyContent:'center'}} >
        <Text> Home </Text>
      </View>
      <View style={{flex:1, width: 100,  backgroundColor: 'red', alignItems:'center', justifyContent:'center'}} >
        <Text> Todo List </Text>
      </View>
      <View style={{flex:1, width: 100,  backgroundColor: 'green', alignItems:'center', justifyContent:'center'}} >
        <Text> Rate US</Text>
      </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 50,
    paddingHorizontal: 20
    },
    todoFlatlist: {
      width: '100%',
      height: '80%'

    },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todoContainer: {
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30  
  }
});
