import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 26,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    marginRight: 5,
    textAlign: 'center',
  },
  cart: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 10,
  },
  cartMainText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 16,
    textAlign: 'right',
    color: '#FFFFFF',
  },
  cartSubText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 14,
    color: '#FFFFFF',
    opacity: 0.6,
  },
});

export default styles;
