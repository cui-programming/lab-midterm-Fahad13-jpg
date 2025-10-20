import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';

/**
 * Custom/TasbihList
 * Renders a FlatList of azkaar with their counts.
 * Includes increment and decrement buttons for each item.
 * Now receives items and setItems as props from parent (App.js)
 */
export default function TasbihList({ items, setItems }) {
  const increment = (id) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, count: item.count + 1 } 
        : item
    ));
  };

  const decrement = (id) => {
    setItems(items.map(item => 
      item.id === id 
        ? { ...item, count: item.count > 0 ? item.count - 1 : 0 } 
        : item
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <View style={styles.counterContainer}>
        <Button 
          onPress={() => decrement(item.id)} 
          style={styles.button}
        >
          -        </Button>
        <Text style={styles.counter}>{item.count}</Text>
        <Button 
          onPress={() => increment(item.id)} 
          style={styles.button}
        >
          +
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}