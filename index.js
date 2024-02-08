document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // Array das perguntas/respostas
    const perguntas = [
      {
        pergunta: "Qual grupo é conhecido como 'Reis do Kpop'?",
        respostas: [
          "EXO",
          "BTS",
          "BIGBANG"
        ],
        correta: 2
      },
      {
        pergunta: "Qual grupo debutou com a música 'Boy With Luv'?",
        respostas: [
          "BLACKPINK",
          "TWICE",
          "BTS"
        ],
        correta: 2
      },
      {
        pergunta: "Qual é o fandom de BTS?",
        respostas: [
          "ARMY",
          "BLINK",
          "ONCE"
        ],
        correta: 0
      },
      {
        pergunta: "Quem é conhecido como 'Rei do Kpop'?",
        respostas: [
          "G-Dragon",
          "Jungkook",
          "Kai"
        ],
        correta: 0
      },
      {
        pergunta: "Qual grupo debutou com a música 'DDU-DU DDU-DU'?",
        respostas: [
          "BTS",
          "BLACKPINK",
          "EXO"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é o nome do líder do grupo EXO?",
        respostas: [
          "Suho",
          "Baekhyun",
          "Chanyeol"
        ],
        correta: 0
      },
      {
        pergunta: "Qual é o grupo de Kpop com mais inscritos no YouTube?",
        respostas: [
          "BLACKPINK",
          "BTS",
          "TWICE"
        ],
        correta: 1
      },
      {
        pergunta: "Qual grupo é conhecido como 'Rainhas do Kpop'?",
        respostas: [
          "TWICE",
          "BLACKPINK",
          "Red Velvet"
        ],
        correta: 1
      },
      {
        pergunta: "Qual é o nome do fandom de BLACKPINK?",
        respostas: [
          "BLINK",
          "ARMY",
          "ONCE"
        ],
        correta: 0
      },
      {
        pergunta: "Qual grupo é conhecido como 'Princesas do Kpop'?",
        respostas: [
          "TWICE",
          "Red Velvet",
          "GFRIEND"
        ],
        correta: 0
      }
    ];
    
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // Pegar o código em HTMl
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  // loop ou laço de repetição
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
   const dt = quizItem.querySelector('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
  
   const estaCorreta = event.target.value == item.correta
   corretas.delete(item)
   if(estaCorreta) {
   corretas.add(item)
  
   }
  }
  
   
   quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  
   // coloca o item na tela
   quiz.appendChild(quizItem)
  
   //let == pode alterar o valor de assinatura
   
   //const == não pode ser alterado
  }
  });
