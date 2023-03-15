import { useEffect, useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react-native';
import { Image, View, TextInput, TouchableOpacity, FlatList, Alert, Button, Modal, Text } from 'react-native';


// import logo from '../../assets/logo.png'

import { styles } from './styles';


type Task = {
  task: string;
  completed: boolean;
};

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  const [todoList, setToDoList] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = (): void => {
    if (newTask) {
      setToDoList([...todoList, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const markTaskComplete = (index: number): void => {
    const updatedToDoList = [...todoList];
    updatedToDoList[index].completed = !updatedToDoList[index].completed;
    setToDoList(updatedToDoList);
  };

  

  const deleteTask = (index: number): void => {
    const updatedToDoList = [...todoList];
    updatedToDoList.splice(index, 1);
    setToDoList(updatedToDoList);
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <Image source={require('../../assets/logo.png')} />
      </View >
      
      <View style={styles.containerBody}>

        <View style={styles.containerForm}>
          <TextInput
            style={[styles.input, isFocused && styles.onFocusInput]}
            placeholderTextColor="#808080"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={(text) => setNewTask(text)}
            placeholder='Adicione uma nova tarefa'
          />

          <TouchableOpacity style={styles.button} onPress={addTask}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View >

        <View style={styles.containerListHeader}>

          <View style={styles.boxHeaderList}>
            <Text style={[styles.textHeaderList, { color: "#4EA8DE" }]}>
              Criadas
            </Text>
            <Text style={styles.textCountList}>0</Text>
          </View>

          <View style={styles.boxHeaderList}>
            <Text style={[styles.textHeaderList, { color: "#8284FA" }]}>
              Concluídas
            </Text>
            <Text style={styles.textCountList}>0</Text>
          </View>

        </View>

        {todoList.map((task, index) => (
          <View style={styles.containerList} key={index} >

            <TouchableOpacity style={{}} onPress={() => markTaskComplete(index)}>
              {
                task.completed
                  ?
                  <CheckCircle color='#5E60CE' weight='fill' />
                  :
                  <Circle color='#4EA8DE' />
              }

              <View style={{ backgroundColor: "#fff", borderRadius: 999, width: "50%" }} />

            </TouchableOpacity>

            <Text style={{ flex: 1, color: "#fff" }}>
              {task.task}
            </Text>

            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Trash color='#808080' />
            </TouchableOpacity>
          </View>
        ))}


        <TouchableOpacity style={styles.clearButton} onPress={clearCompletedTasks}>
          <Text style={styles.buttonText}>Clear Completed</Text>
        </TouchableOpacity>


      </View >
    </>
  )
}