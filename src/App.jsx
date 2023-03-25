import React from 'react';
import Card from './components/Card/index';
import ComFilhos from './components/ComFilhos/index';
import ComParametro from './components/ComParametro/index';
import Direta from './components/Comunicacao/Direta';
import Indireta from './components/Comunicacao/Indireta';
import CondicionalComIf from './components/Condicional/CondicionalComIf';
import CondicionalSimples from './components/Condicional/CondicionalSimples';
import Input from './components/Input/index';
import Primeiro from './components/Primeiro/index';
import Repeticao from './components/Repeticao/index';
import Title from './components/Title';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Title title='Fundamentos React' />

      <div className="Cards">
        <Card titulo="#01 - Primeiro Componente" color="#92B06A">
          <Primeiro />
        </Card>
        <Card titulo="#02 - Componente Com Parametro" color="#FF85CB">
          <ComParametro titulo="Esse é o títlo" subtitulo="Esse é o subtítulo" />
          <ComParametro titulo="Opa" subtitulo="Epa" />
        </Card>
        <Card titulo="#03 - Componente Com Filhos" color="#D96459">
          <ComFilhos>
            <ul>
              <li>Ana</li>
              <li>Bia</li>
              <li>Carlos</li>
              <li>Daniel</li>
            </ul>
          </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição" color="#008BBA">
          <Repeticao />
        </Card>
        <Card titulo="#05 - Condicional com If" color="#E94C6F">
          <CondicionalComIf numero={20} />
        </Card>
        <Card titulo="#06 - Condicional Simples" color="#FA6900">
          <CondicionalSimples numero={10} />
        </Card>
        <Card titulo="#07 - Comunicação Direta" color="#4298B5">
          <Direta sobrenome="Freitas" />
        </Card>
        <Card titulo="#08 - Comunicação Indireta" color="#000">
          <Indireta />
        </Card>
        <Card titulo="#09 - Input" color="#9C0F5F">
          <Input />
        </Card>
        <Card titulo="#10 - Contador" color="#293E6A">
          <Contador passo={10} valor={100} />
        </Card>
        <Card titulo="#11 - Mega" color="#73503C">
          <Mega qtdNumero={8} />
        </Card>
      </div>
    </div>
  )
}
export default App