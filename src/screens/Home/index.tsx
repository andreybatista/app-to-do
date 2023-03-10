import { useEffect, useState } from 'react';
import { CheckCircle, Circle, Trash } from 'phosphor-react-native';
import { Image, View, TextInput, TouchableOpacity, FlatList, Alert, Button, Modal, Text } from 'react-native';


// import logo from '../../assets/logo.png'

import { styles } from './styles';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);

  // const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;


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
            placeholder='Adicione uma nova tarefa'
          />

          <TouchableOpacity style={styles.button}>
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

        <View>
          <Circle />
          <CheckCircle />
          <Trash />
        </View>

      </View >
    </>
  )
}