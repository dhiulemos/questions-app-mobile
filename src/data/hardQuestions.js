const questions = [

    {
        img: require('../resources/questionsImages/nomear_musculos.png'),
        question: "Nomeie e identifique os músculos responsáveis pela mastigação:",
        answers: [
            { id: '1', text: '1 pterigoideo lateral, 2 temporal, 3 masseter e 4 pterigoideo medial' },
            { id: '2', text: '1 pterigoideo medial, 2 temporal, 3 masseter e 4 pterigoideo lateral' },
            { id: '3', text: '1 pterigoideo lateral, 2 pterigoideo lateral, 3 masseter, 4 temporal' },
            { id: '4', text: '1 pterigoideo lateral, 2 pterigoideo medial, 3 temporal e 4 masseter', correct: true }
        ]

    },
    {
        img: require('../resources/questionsImages/face.png'),
        question: "Nomeie e identifique os músculos responsáveis pela mastigação:",
        answers: [
            { id: '1', text: '1- braquifacial 2- mesofacial, 3- dolicofacial' },
            { id: '2', text: '1- mesofacial, 2- dolicofacial, 3- braquifacial' },
            { id: '3', text: '1- dolicofacial, 2- mesofacial, 3- braquifacial' },
            { id: '4', text: '1- braquifacial, 2- dolicofacial, 3- mesofacial', correct: true }
        ]

    },
    {
        img: require('../resources/questionsImages/dentes.png'),
        question: "Nomeie e identifique os músculos responsáveis pela mastigação:",
        answers: [
            { id: '1', text: 'CLASSES: I, II, III' },
            { id: '2', text: 'CLASSES: II, I, III' },
            { id: '3', text: 'CLASSES: II, III, I', correct: true },
            { id: '4', text: 'CLASSES; III, II, I' }
        ]

    },
    {
        question: "Qual a inervação dos músculos mastigatórios?",
        answers: [
            { id: '1', text: 'Nervo facial' },
            { id: '2', text: 'Nervo trigemio – raiz motora mandibular', correct: true },
            { id: '3', text: 'Nervo trigemio – raiz motora maxilar' },
            { id: '4', text: 'Nervo hipoglosso' }
        ]
    },
    {
        question: "O músculo mais potente da mastigação, cuja função é oclusão mandibular é chamado:",
        answers: [
            { id: '1', text: 'Masseter', correct: true },
            { id: '2', text: 'Temporal' },
            { id: '3', text: 'Bucinador' },
            { id: '4', text: 'Labial' }
        ]
    },
    {
        question: "O músculo mastigatório que possui função de oclusão e retrusão da mandíbula e que é considerado mais um músculo de movimento do que de força, chama-se:",
        answers: [
            { id: '1', text: 'Masseter' },
            { id: '2', text: 'Pterigoideo medial' },
            { id: '3', text: 'Temporal', correct: true },
            { id: '4', text: 'Pterigoideo lateral' },
        ]

    },
    {
        question: "Qual o músculo responsável pela lateralização da mandíbula de forma contralateral?",
        answers: [
            { id: '1', text: 'Masseter' },
            { id: '2', text: 'Pterigoideo medial' },
            { id: '3', text: 'Temporal' },
            { id: '4', text: 'Pterigoideo lateral', correct: true },
        ]

    },
    {
        question: "Sobre os músculos faciais, cujas características possibilitam as numerosas combinações de expressão facial, qual a opção INCORRETA?",
        answers: [
            { id: '1', text: 'O músculo risório, quando contraído, direciona o ângulo da boca para a lateral' },
            { id: '2', text: 'O músculo zigomático maior, quando contraído, leva o ângulo da boca para cima e para lateral' },
            { id: '3', text: 'O músculo bucinador é o principal músculo da bochecha, sendo responsável por comprimir os lábios e as bochechas contra os dentes e direcionar os ângulos da boca lateralmente' },
            { id: '4', text: 'O músculo depressor do ângulo da boca, quando contraído, ajuda a enrugar e arredondar os lábios', correct: true },
        ]

    },
    {
        question: "Para que a mandíbula realize o movimento de fechamento da boca, é necessária a contração dos músculos elevadores da mandíbula, que são:",
        answers: [
            { id: '1', text: 'Masseter e pterigóideo lateral' },
            { id: '2', text: 'Masseter, digástrico e Milo hióideo' },
            { id: '3', text: 'Temporal e digástrico ventre anterior' },
            { id: '4', text: 'Masseter, temporal e pterigoideo medial', correct: true },
        ]

    },
    {
        question: "Em relação à função de deglutição, é importante considerar que a forma de deglutir dependerá de:",
        answers: [
            { id: '1', text: 'mordida, oclusão e natureza do alimento' },
            { id: '2', text: 'mordida, idade, oclusão e características craniofaciais' },
            { id: '3', text: 'características faciais, tipo de oclusão e mordida, idade do indivíduo, natureza do alimento, tônus e propriocepção', correct: true },
            { id: '4', text: 'características craniofaciais, tipo de oclusão, movimentos mandibulares, idade do indivíduo, natureza do alimento, tônus e propriocepção' },
        ]

    },
    {
        question: "Acerca do desenvolvimento da função respiratória, qual afirmativa INCORRETA?",
        answers: [
            { id: '1', text: 'O ar entra por sucção e circula pela cavidade nasal, faringe, laringe, traqueia e brônquios antes de chegar ao pulmão' },
            { id: '2', text: 'O nariz é formado por uma estrutura osteocartilaginosa e está dividido pelo septo nasal' },
            { id: '3', text: 'Na parede lateral da cavidade oral encontram-se as conchas nasais' },
            { id: '4', text: 'A inspiração é um ato passivo e a expiração é ativa', correct: true },
        ]

    },
    {
        question: "Qual a opção que contém três músculos extrínsecos da língua?",
        answers: [
            { id: '1', text: 'Genioglosso, transverso, vertical' },
            { id: '2', text: 'Vertical, longitudinal superior, estiloglosso' },
            { id: '3', text: 'Palatoglosso, estiloglosso, genioglosso', correct: true },
            { id: '4', text: 'Vertical, longitudinal inferior, palatoglosso' },
        ]

    },
    {
        question: "Qual a opção que contém três músculos intrínsecos da língua?",
        answers: [
            { id: '1', text: 'Genioglosso, transverso, vertical' },
            { id: '2', text: 'Vertical, longitudinal superior, estiloglosso' },
            { id: '3', text: 'Palatoglosso, estiloglosso, genioglosso' },
            { id: '4', text: 'Transverso, longitudinal inferior, longitudinal superior', correct: true },
        ]

    },
    {
        question: "Quais as ações do músculo Estiloglosso da língua?",
        answers: [
            { id: '1', text: 'Abaixamento, retração' },
            { id: '2', text: 'Elevação, retração', correct: true },
            { id: '3', text: 'Abaixamento, elevação' },
            { id: '4', text: 'Protrusão, abaixamento' },
        ]

    },
    {
        question: "Sobre Carcinoma de células Escamosas, qual a opção FALSA?",
        answers: [
            { id: '1', text: 'Imagens radiográficas não ajudam a revelar a extensão e a localização do tumor', correct: true },
            { id: '2', text: 'O estágio do tumor vai determinar o prognóstico' },
            { id: '3', text: 'O consumo de álcool e o tabagismo são fatores de risco' },
            { id: '4', text: 'Na língua, geralmente localiza-se no aspecto anterolateral' },
        ]

    },
    {
        question: "A respeito da Anquiloglossia, qual a opção FALSA?",
        answers: [
            { id: '1', text: 'A língua pode apresentar formato em V' },
            { id: '2', text: 'Não há riscos de causas problemas na amamentação', correct: true },
            { id: '3', text: 'A língua pode ser incapaz de tocar o palato' },
            { id: '4', text: 'A língua pode ser incapaz do movimento de protrusão além dos incisivos' },
        ]

    },
    {
        question: "Qual a assertiva ERRADA em relação a Deglutição?",
        answers: [
            { id: '1', text: 'A onda peristáltica retira o restante do bolo da valécula epiglótica e a maior porção do bolo já está no esôfago' },
            { id: '2', text: 'As estruturas não retornam à sua posição inicial à medida que a onda peristáltica se move em direção ao esôfago', correct: true },
            { id: '3', text: 'A porção cricofaríngea do constritor inferior relaxa para auxiliar a entrada do bolo no esôfago' },
            { id: '4', text: 'A deglutição é uma combinação de contrações musculares voluntárias e involuntárias para mover o bolo alimentar da cavidade oral para o esôfago' },
        ]

    },
    {
        question: "São movimentos da mandíbula, exceto?",
        answers: [
            { id: '1', text: 'Elevação' },
            { id: '2', text: 'Extensão', correct: true },
            { id: '3', text: 'Depressão' },
            { id: '4', text: 'Protrusão' },
        ]

    },
    {
        question: "Sobre mastigação, é correto dizer que:",
        answers: [
            { id: '1', text: 'Metade dos músculos da mastigação são inervados pelo nervo mandibular, uma das divisões do nervo trigêmeo' },
            { id: '2', text: 'São músculos atuantes na mastigação: masseter, pterigoideo lateral, pterigoideo medial', correct: true },
            { id: '3', text: 'Metade dos músculos da mastigação se originam no crânio e inserem-se na mandíbula' },
            { id: '4', text: 'A mastigação é o processo pelo qual o alimento é preparado somente para a digestão' },
        ]

    },
    {
        question: "O palato mole é composto por 5 músculos, assinale a opção que contém três desses músculos corretos:",
        answers: [
            { id: '1', text: 'Músculo da úvula, tensor do véu palatino, levantador do véu palatino', correct: true },
            { id: '2', text: 'Palatoglosso, músculo da úvula, milo-hióideo' },
            { id: '3', text: 'Tensor do véu palatino, músculo da úvula, milo-hióideo' },
            { id: '4', text: 'Levantador do véu palatino, palatoglosso, gênio-hióideo' },
        ]

    },
    {
        question: "Assinale a opção que contém um limite inferior da cavidade oral:",
        answers: [
            { id: '1', text: 'Língua ', correct: true },
            { id: '2', text: 'Bochecha' },
            { id: '3', text: 'Palato mole' },
            { id: '4', text: 'Palato duro' },
        ]

    },

]

export default questions;