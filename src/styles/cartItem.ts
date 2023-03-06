import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.6)',
    margin: 5,
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  info: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#333333',
    height: 40,
    width: 250,
  },
  price: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 25,
    color: '#000000',
  },
  image: {
    width: 100,
    height: 60,
    resizeMode: 'center',
  },
});

export default styles;
