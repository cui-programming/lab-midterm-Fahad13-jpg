import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';

/**
 * Custom/SearchAndAdd
 * Implements search functionality to filter azkaar
 * and add new phrases to the list
 * Now receives items and setItems as props from parent (App.js)
 */
export default function SearchAndAdd({ items, setItems }) {
  const [searchText, setSearchText] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredItems = items.filter(item =>
    item.phrase.toLowerCase().includes(searchText.toLowerCase())
  );
  const addPhrase = () => {
    if (newPhrase.trim() === '') {
      return;
    }
    const exists = items.some(
      item => item.phrase.toLowerCase() === newPhrase.trim().toLowerCase()
    );

    if (exists) {
      alert('This phrase already exists!');
      return;
    }
    const newId = (Math.max(...items.map(item => parseInt(item.id))) + 1).toString();
    const newItem = {
      id: newId,
      phrase: newPhrase.trim(),
      count: 0
    };

    setItems([...items, newItem]);
    setNewPhrase('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.searchItemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search and Add</Text>
      
      {/* Search Box */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Search:</Text>
        <TextInput
          style={styles.input}
          placeholder="Search phrases..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Add Box */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Add New Phrase:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button onPress={addPhrase} style={styles.addButton}>
          Add
        </Button>
      </View>

      {/* Display filtered results */}
      <Text style={styles.label}>Total Tasbeehat: ({filteredItems.length})</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}