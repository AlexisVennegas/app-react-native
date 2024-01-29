import React, { useEffect, useRef, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Main = () => {
  const animationRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Configurar un temporizador para simular la carga
    const loadingTimer = setTimeout(() => {
      // Desactivar la animación después de 2 segundos
      setShowAnimation(false);
      clearTimeout(loadingTimer);
    }, 2000); // 2000 milisegundos (2 segundos) como ejemplo

    // Limpiar al desmontar el componente
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Animación de carga */}
      {showAnimation && (
        <Animatable.View ref={animationRef} animation="fadeIn" duration={800}>
          <Text>¡Tu animación aquí!</Text>
        </Animatable.View>
      )}

      {/* Indicador de actividad */}
      {showAnimation && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}
    </View>
  );
};

export default Main;
