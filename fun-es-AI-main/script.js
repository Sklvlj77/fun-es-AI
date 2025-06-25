const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a unidade de medida da força no Sistema Internacional?",
        alternativas: [
            {
                texto: "Newton",
                afirmacao: "Isso é incrivel!"
            },
            {
                texto: "Joule",
                afirmacao: "Isso esta errado!"
            }
        ]
    },
    {
        enunciado: "A velocidade é definida como:",
        alternativas: [
            {
                texto: "A distância percorrida dividida pelo tempo",
                afirmacao: "Isso é incrivel!"
            },
            {
                texto: " A força aplicada dividida pela massa",
                afirmacao: "Isso esta errado!"
            }
        ]
    },
    {
        enunciado: "Qual dessas grandezas é um vetor?",
        alternativas: [
            {
                texto: "Temperatura",
                afirmacao: "Isso esta errado!"
            },
            {
                texto: "Deslocamento",
                afirmacao: "Isso é incrivel!"
            }
        ]
    },
    {
        enunciado: "A aceleração da gravidade na Terra é aproximadamente:",
        alternativas: [
            {
                texto: "9,8 m/s²",
                afirmacao: "Isso é incrivel"
            },
            {
                texto: "98 m/s²",
                afirmacao: "Isso esta errado!"
            }
        ]
    },
    {
        enunciado: "A energia cinética de um objeto depende de:",
        alternativas: [
            {
                texto: " Sua massa e velocidade",
                afirmacao: "Isso é incrivel"
            },
            {
                texto: " Sua massa e temperatura",
                afirmacao: "Isso esta errado!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();