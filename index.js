document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    // Array das perguntas/respostas
const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentar no JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes métodos é usado para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "declare",
        "variable"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de escrever um array em JavaScript?",
      respostas: [
        "var colors = 'red', 'green', 'blue'",
        "var colors = ['red', 'green', 'blue']",
        "var colors = {'red', 'green', 'blue'}"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'getElementById()' faz no JavaScript?",
      respostas: [
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento pelo ID",
        "Seleciona um elemento pelo nome da tag"
      ],
      correta: 1
    },
    {
      pergunta: "Qual destas declarações é usada para criar uma função em JavaScript?",
      respostas: [
        "function: myFunction()",
        "function = myFunction()",
        "function myFunction()"
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita (valor e tipo)",
        "Comparação solta (apenas valor)"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console do navegador?",
      respostas: [
        "console.print()",
        "console.log()",
        "print()"
      ],
      correta: 1
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()"
      ],
      correta: 0
    },
    {
      pergunta: "Qual destes operadores é usado para concatenar strings em JavaScript?",
      respostas: [
        "&",
        "+",
        "|"
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()"
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
