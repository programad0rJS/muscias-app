
import { StatusBar, View } from 'react-native';
import HomeMusic from './src/pages/HomeMusic';


export default function App() {
  return (
    
    <View>
      {/* View: Contenedor  */}
      <StatusBar barStyle='light-content' />

      {/* StatusBar: para controlar la barra de estado de la aplicación. La barra de estado es la zona, generalmente en la parte superior de la pantalla, que muestra la hora actual, la información de la red Wi-Fi y celular, el nivel de la batería y/u otros íconos de estado.  */}

            <HomeMusic />
            {/* HomeMusic: Es Un  Componente Creado Por Nosotros */}
      

    </View>
  );
}