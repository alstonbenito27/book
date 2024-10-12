import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

const ShowBooks = ({ books }) => {
  return (
    <ImageBackground source={require('../assets/pic2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.heading}>Books Added:</Text>
        <FlatList
          data={books}
          keyExtractor={(item) => item.isbn}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Text style={styles.bookText}>Book Name: {item.name}</Text>
              <Text style={styles.bookText}>ISBN: {item.isbn}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
  },
  bookContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 15,
    marginBottom: 15,
    width: '80%',
    borderRadius: 10,
  },
  bookText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ShowBooks;
