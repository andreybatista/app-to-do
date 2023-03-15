import { useEffect, useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react-native';
import { Image, View, TextInput, TouchableOpacity, FlatList, Alert, Button, Modal, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import logo from '../../assets/logo.png'

import { styles } from './styles';


type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    async function loadTasks() {
      const tasksString = await AsyncStorage.getItem('@tasks');
      if (tasksString) {
        const loadedTasks = JSON.parse(tasksString) as Task[];
        setTasks(loadedTasks);
        setCompletedCount(loadedTasks.filter(task => task.completed).length);
      }
    }
    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
    }
    saveTasks();
  }, [tasks]);

  function handleAddTask() {
    if (taskTitle.trim()) {
      const newTask: Task = {
        id: String(new Date().getTime()),
        title: taskTitle,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
    }
  }

  function handleToggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    setCompletedCount(updatedTasks.filter(task => task.completed).length);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setCompletedCount(updatedTasks.filter(task => task.completed).length);
  }

  function handleDeleteCompletedTasks() {
    Alert.alert(
      'Delete completed tasks',
      'Are you sure you want to delete all completed tasks?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: () => {
            const updatedTasks = tasks.filter(task => !task.completed);
            setTasks(updatedTasks);
            setCompletedCount(0);
          },
          style: 'destructive',
        },
      ],
    );
  }

  return (
    <>
      <View style={styles.containerHeader}>
        <Image style={{width: 75, height: 75}} source={require('../../assets/logo.png')} />
      </View >

      <View style={styles.containerBody}>

        <View style={styles.containerForm}>
          <TextInput
            style={[styles.input, isFocused && styles.onFocusInput]}
            placeholderTextColor="#808080"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChangeText={setTaskTitle}
            value={taskTitle}
            placeholder='Adicione uma nova tarefa'
          />

          <TouchableOpacity
            style={[styles.button, !taskTitle && styles.buttonDisabled]}
            disabled={!taskTitle}
            onPress={handleAddTask}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View >

        <View style={styles.containerListHeader}>

          <View style={styles.boxHeaderList}>
            <Text style={[styles.textHeaderList, { color: "#2cb67d" }]}>
              Criadas
            </Text>
            <Text style={styles.textCountList}>
              {tasks.length}
            </Text>
          </View>

          <View style={styles.boxHeaderList}>
            {!!completedCount && (
              <TouchableOpacity onPress={handleDeleteCompletedTasks}>
                <Trash color='#BE5E5D' size={19} />
              </TouchableOpacity>
            )}
            <Text style={[styles.textHeaderList, { color: "#8284FA" }]}>
              Concluídas
            </Text>
            <Text style={styles.textCountList}>
              {completedCount}
            </Text>

          </View>

        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={[styles.containerList, item.completed && styles.containerListCompleted]}>

              <TouchableOpacity onPress={() => handleToggleTaskCompleted(item.id)}>
                {
                  item.completed
                    ?
                    <CheckCircle size={20} color='#8284FA' weight='fill' />
                    :
                    <Circle size={20} color='#2cb67d' />
                }

                <View style={{ backgroundColor: "#fff", borderRadius: 999, width: "50%" }} />

              </TouchableOpacity>

              <Text style={styles.taskTitle}>
                {item.title}
              </Text>

              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <Trash color='#808080' size={20} />
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />

      </View >
    </>
  )
}