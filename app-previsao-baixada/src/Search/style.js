import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#304D63',
  },
  input: {
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    marginBottom: 20,
  },
  button: {
    width: '50%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#304D63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',    
    color: '#fff',
  },
  card:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex:1,
    paddingHorizontal:20
  }
});


export default styles;