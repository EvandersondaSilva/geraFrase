import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'



function App() {
  const [textofrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.',
        'Deixe de lado as preocupações e seja feliz',
        'Realize o óbvio, pense no improvável e conquiste o impossivel.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Bom dia! Que a luz do sol ilumine seu caminho e traga muita inspiração para o seu dia.',
        'A vida te dá uma nova página em branco. Escreva hoje uma história incrível! Bom dia!',
        'Que este dia comece com um sorriso e termine com um coração cheio de gratidão e paz. Bom dia!',
        'Acorde com fé, siga com coragem e tenha a certeza de que hoje será um dia de grandes conquistas. Bom dia!',
        'Levante-se e brilhe! Você é capaz de fazer coisas maravilhosas. Tenha um bom dia!',
        'Que a alegria seja abundante e a energia positiva te acompanhe em cada momento. Bom dia!',
        'Cada novo amanhecer é uma chance de ser mais feliz. Aproveite o presente do dia de hoje! Bom dia!'
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite durma bem',
        'Teste frase boa noite'
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrase() {
    let NumRamdom = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[NumRamdom]}"`)


  }

  return (

    <div className='container'>
      <img src={logoImg} alt="logo frases" className='logo' />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db"
            }}

            onClick={() => handleSwitchCategory(index)}>

            {item.nome}</button>
        ))}
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>

      {textofrase !== '' && <p className='texto-frase'>{textofrase}</p>}

    </div>


  )
}

export default App
