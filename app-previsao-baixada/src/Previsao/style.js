import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    marginTop: '10%',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  weatherIcon: {
    width: 150,
    height: 150,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 24,
  },
  location: {
    fontSize: 18,
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    backgroundColor: '#357599',
    padding: '5.4%',
  },
  footerText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: '1%',
  },
  headerTime: {
    fontFamily: 'Verdana',
    fontSize: 40,
    fontWeight: 'bold', 
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
});

export default styles;
