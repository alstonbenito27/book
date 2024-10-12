import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddBook = ({ navigation, addBook }) => {
  const [name, setName] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleAddBook = () => {
    if (name.trim() === '' || isbn.trim() === '') {
      Alert.alert('Validation Error', 'Both fields are required');
      return;
    }

    addBook({ name, isbn });
    setName('');
    setIsbn('');
    navigation.navigate('ShowBooks');
  };

  const handleShowBooks = () => {
    navigation.navigate('ShowBooks');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Book</Text>
      <TextInput
        style={styles.input}
        placeholder="Book Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ISBN"
        value={isbn}
        onChangeText={setIsbn}
      />
      <Button title="Add Book" onPress={handleAddBook} />
      <br/><br/>
      <Button title="Show Books" onPress={handleShowBooks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: '100%',
    paddingHorizontal: 8,
  },
});

export default AddBook;