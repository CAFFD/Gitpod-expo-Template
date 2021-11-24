import React, {useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function Formulario() {
    const [cep, onChangeCep] = useState ('')
    const [cidade, onChangeCidade] = useState ('')
    
    const handleConsultar = () => {
        onChangeCidade(cep)
    }

    
    return (
      <View>
          <text>Digite um CEP (somente números):</text>
          <TextInput value={cep} onChangeText={onChangeCep}/>
          <Button title="consultar" onPress={handleConsultar}/>
            <text>{cidade}</text>
      </View>
   );
}