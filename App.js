import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddBook from './components/AddBook';
import ShowBooks from './components/ShowBooks';

const Stack = createStackNavigator();

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AddBook">
        <Stack.Screen name="AddBook">
          {props => <AddBook {...props} addBook={addBook} />}
        </Stack.Screen>
        <Stack.Screen name="ShowBooks">
          {props => <ShowBooks {...props} books={books} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;