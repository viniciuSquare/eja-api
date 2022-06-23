let MOCK_blockData = [
    { 
      id: 1,
      letraReferencia:"A",
      aula: {
        id:1,
        audio:"Está é uma palavra que começa com a letra \"A\"",
        urlImagem:"A/asas.png",
        palavra: "asas",
        // letraReferencia:"A",
      },
      atividadeCompletar: {
        id: 1,
        palavraIncompleta: "AVI__",
        palavra: "Avião",
        urlImagem:"A/aviao.png",
        audio: "Agora complete a palavra AVIÃO",
        alternativas: [
          {
            id: 1,
            correta: true,
            textoAlternativa: "ÃO"
          }, 
          {
            id:2,
            correta: false,
            textoAlternativa: "SO"
          },
          {
            id:3,
            correta: false,
            textoAlternativa: "LÃ"
          }
        ]
      },
      atividadeDigitar: {
        id:1,
        respostaCorreta:"ARANHA",
        urlImagem:"A/aranha.png",
        audio:"Agora digite ARANHA"
      }
    }, { 
      id: 2,
      letraReferencia:"B",
      aula: {
        id: 2,
        audio:"Está é uma palavra que começa com a letra \"B\"",
        urlImagem:"B/bicicleta.png",
        palavra: "bicicleta",
      },
      atividadeCompletar: {
        id: 2,
        palavraIncompleta: "BANA__",
        palavra: "Banana",
        urlImagem:"B/banana.png",
        audio: "Agora complete a palavra BANANA",
        alternativas: [
          {
            id: 1,
            correta: true,
            textoAlternativa: "NA"
          }, 
          {
            id:2,
            correta: false,
            textoAlternativa: "TA"
          },
          {
            id:3,
            correta: false,
            textoAlternativa: "CA"
          }
        ]
      },
      atividadeDigitar: {
        id:1,
        respostaCorreta:"BICICLETA",
        urlImagem:"B/bicicleta.png",
        audio:"Agora digite BICICLETA"
      }
    }, { 
      id: 3,
      letraReferencia:"C",
      aula: {
        id: 1,
        audio:"Está é uma palavra que começa com a letra \"C\"",
        urlImagem:"C/casa.png",
        palavra: "casa",
      },
      atividadeCompletar: {
        id: 2,
        palavraIncompleta: "CA__",
        palavra: "Casa",
        urlImagem:"C/casa.png",
        audio: "Agora complete a palavra CASA",
        alternativas: [
          {
            id: 1,
            correta: true,
            textoAlternativa: "SA"
          }, 
          {
            id:2,
            correta: false,
            textoAlternativa: "TA"
          },
          {
            id:3,
            correta: false,
            textoAlternativa: "CA"
          }
        ]
      },
      atividadeDigitar: {
        id:3,
        respostaCorreta:"CASA",
        urlImagem:"C/casa.png",
        audio:"Agora digite CASA"
      }
    },
]

let MOCK_blockHead = [
  {
    id: 1,
    letraReferencia: "A"
  },
  {
    id: 2,
    letraReferencia: "B"
  },
  {
    id: 3,
    letraReferencia: "C"
  },
  {
    id: 26,
    letraReferencia: "Z"
  }
]


module.exports = [MOCK_blockData, MOCK_blockHead]
