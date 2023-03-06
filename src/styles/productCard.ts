import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 240,
    height: 340,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    color: '#333333',
    textAlign: 'center',
    marginTop: 10,
    height: 70,
  },
  price: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 21,
    lineHeight: 25,
    color: '#000000',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  image: {
    width: 200,
    height: 120,
    resizeMode: 'center',
  },
});

export default styles;
