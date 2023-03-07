import { StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#141419',
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#141419',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#7159C1',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
