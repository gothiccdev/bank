import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header/index.js'
import Balance from '../../components/Balance/index.js';
import Moviments from '../../components/Moviments/index.js';
import Actions from '../../components/Actions/index.js';

const list = [
  {
    id: 1,
    label: `Boleto conta luz`,
    value: '300,00',
    date: '11/09/2024',
    type: 0 // Despesas
  },
  {
    id: 2,
    label: `Pix Cliente X`,
    value: '2.500,00',
    date: '17/08/2024',
    type: 1 // Receita
  },
  {
    id: 3,
    label: `Salário`,
    value: '7.200,00',
    date: '07/09/2024',
    type: 1 // Receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Victor Prado"/>
      
      <Balance saldo="9.250,90" gastos="-527,00"/>

      <Actions/>

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem={ ({ item }) => <Moviments data={item}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
})