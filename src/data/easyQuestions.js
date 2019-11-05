const questions = [

    {
        question: "São músculos depressores da mandíbula",
        answers: [
            { id: '1', text: 'Pterigóideo Lateral e Milo-hióideo', correct: true },
            { id: '2', text: 'Pterigóideo Medial, Temporal e Masseter' },
            { id: '3', text: 'Pterigóideo Medial e Pterigóideo Lateral' },
            { id: '4', text: 'Pterigóideo Medial e Digástrico' }
        ]

    },
    {
        question: "São músculos elevadores da mandíbula",
        answers: [
            { id: '1', text: 'Pterigóideo Medial e Pterigóideo Lateral' },
            { id: '2', text: 'Masseter, Pterigóideo Medial, esterno-hióideo' },
            { id: '3', text: 'Masseter, Pterigóideo Medial e Temporal', correct: true },
            { id: '4', text: 'Temporal, Digástrico e Gênio-hióideo' }
        ]
    },
    {
        question: "A posição ideal de repouso da língua é aquela em que a ponta da língua toca?",
        answers: [
            { id: '1', text: 'Face inferior dos incisivos centrais' },
            { id: '2', text: 'Levemente nas rugas palatinas', correct: true },
            { id: '3', text: 'Os incisivos inferiores' },
            { id: '4', text: 'Levemente os lábios, mas não toca os dentes' }
        ]
    },
    {
        question: "Os nervos cranianos que participam da fase faríngea da deglutição são:",
        answers: [
            { id: '1', text: ' II par, IV par, VII par e IX par' },
            { id: '2', text: 'V par, IX par, X par e XI par', correct: true },
            { id: '3', text: 'V par, VII par, IX par e X par' },
            { id: '4', text: 'VI par, VII par, VIII par e IX par' },
        ]

    },
    {
        question: "O par de nervo craniano responsável pelos movimentos dos músculos, intrínsecos e extrínsecos, da língua é?",
        answers: [
            { id: '1', text: 'XII par craniano', correct: true },
            { id: '2', text: 'X par craniano' },
            { id: '3', text: 'IX par craniano' },
            { id: '4', text: 'VII par craniano' },
        ]

    },
    {
        question: 'As funções sensibilidade Gustativa, Sensibilidade Geral dos 2/3 anteriores de língua e' +
            'Sensibilidade do 1/3 posterior de língua correspondem, respectivamente, aos seguintes pares de' +
            'nervos cranianos:',
        answers: [
            { id: '1', text: 'IX par, X par e XII par.' },
            { id: '2', text: 'VII par, IX par e V par' },
            { id: '3', text: 'V par, IX par e XII par' },
            { id: '4', text: 'VII par, V par e IX par', correct: true },
        ]

    },
    {
        question: 'Os músculos mastigatórios são?',
        answers: [
            { id: '1', text: 'masseter, temporal, pterigoideo medial e pterigoideo lateral', correct: true },
            { id: '2', text: 'temporal, masseter, pterigoideo inferior e digástrico' },
            { id: '3', text: 'temporal, digástrico, arco-zigomático e pterigoideo' },
            { id: '4', text: 'masseter, temporal, digástrico e faríngeo' },
        ]

    },
    {
        question: 'A inervação da laringe é derivada através de ramos internos e externos do nervo laríngeo' +
            'superior e nervo laríngeo inferior ou recorrente. O nervo que realiza esta inervação é?',
        answers: [
            { id: '1', text: 'X par craniano', correct: true },
            { id: '2', text: 'IV par craniano' },
            { id: '3', text: 'III par craniano' },
            { id: '4', text: 'IX par craniano' },
        ]

    },
    {
        question: 'São músculos que realizam a elevação da laringe durante a deglutição:',
        answers: [
            { id: '1', text: 'Tireo-hioideo, Genio-hioideo, Esterno-hioideo' },
            { id: '2', text: 'Milo-hioideo, Digástrico e Esterno tireóideo' },
            { id: '3', text: 'Tireo-hioideo, Genio-tireoideo, Digástrico' },
            { id: '4', text: 'Milo-hioideo, Genio-hioideo e Estilo-hioideo', correct: true },
        ]

    },
    {
        question: 'A função fundamental do músculo pterigoideo medial é?',
        answers: [
            { id: '1', text: 'Abaixar a mandíbula' },
            { id: '2', text: 'Projetar a mandíbula' },
            { id: '3', text: 'Levantar a mandíbula', correct: true },
            { id: '4', text: 'Elevar a laringe' },
        ]

    },
    {
        question: 'O músculo orbicular da boca tem a função fundamental de?',
        answers: [
            { id: '1', text: 'Elevar e projetar a mandíbula' },
            { id: '2', text: 'Fechar e projetar os lábios para a frente', correct: true },
            { id: '3', text: 'Afilar a língua' },
            { id: '4', text: 'Deprimir o ângulo da boca' },
        ]

    },
    {
        question: 'A função do músculo masseter é:',
        answers: [
            { id: '1', text: 'Elevar e projetar a mandíbula', correct: true },
            { id: '2', text: 'Abaixar e retrair a mandíbula' },
            { id: '3', text: 'Abaixar o assoalho da boca' },
            { id: '4', text: 'Elevar o ângulo da boca e lateralizar a mandíbula' },
        ]

    },
    {
        question: 'São músculos relacionados ao movimento de elevação da mandíbula:',
        answers: [
            { id: '1', text: 'Digástrico, estilo-hiodeo, gênio-hiodeo e pterigoideo medial' },
            { id: '2', text: 'Temporal, masseter, pterigoideo lateral e digástrico' },
            { id: '3', text: 'Masseter, temporal e bucinador' },
            { id: '4', text: 'Temporal, masseter e pterigoideo medial', correct: true },
        ]

    },
    {
        question: 'O músculo masseter tem origem:',
        answers: [
            { id: '1', text: 'Base do osso alveolar da maxila' },
            { id: '2', text: 'Tuberosidade massétrica' },
            { id: '3', text: 'Processos alveolares da maxila' },
            { id: '4', text: 'Margem inferior do osso e do arco zigomático', correct: true },
        ]

    },
    {
        question: 'O músculo zigomático maior tem a mesma inserção de qual músculo?',
        answers: [
            { id: '1', text: 'Risório' },
            { id: '2', text: 'Masseter' },
            { id: '3', text: 'Bucinador', correct: true },
            { id: '4', text: 'Prócero' },
        ]

    },
    {
        question: 'Músculo que tem a origem na borda inferior da órbita e inserção na pele do' +
            'lábio inferior:',
        answers: [
            { id: '1', text: 'Corrugador do supercílio' },
            { id: '2', text: 'Nasal' },
            { id: '3', text: 'Levantador do lábio superior', correct: true },
            { id: '4', text: 'Levantador do ângulo da boca' },
        ]

    },
    {
        question: 'O Musculo Mentual tem origem:',
        answers: [
            { id: '1', text: 'Fossa incisiva da mandíbula', correct: true },
            { id: '2', text: 'Face externa da mandíbula' },
            { id: '3', text: 'Pele do Mentual' },
            { id: '4', text: 'Base do osso alveolar da maxila' },
        ]

    },
    {
        question: 'A Face é formada por quantos músculos?',
        answers: [
            { id: '1', text: '17', correct: true },
            { id: '2', text: '16' },
            { id: '3', text: '15' },
            { id: '4', text: '14' },
        ]

    },
    {
        question: 'Qual a origem do músculo Bucinador?',
        answers: [
            { id: '1', text: 'Processos alveolares da maxila e da mandibula', correct: true },
            { id: '2', text: 'Assoalho da fossa temporal' },
            { id: '3', text: 'Processo frontal da maxila' },
            { id: '4', text: 'Fascia do Masseter' },
        ]

    },

]

export default questions;