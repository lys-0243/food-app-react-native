import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './screens/splashScreen';

export default function App() {
  
  return <SplashScreen/>;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
