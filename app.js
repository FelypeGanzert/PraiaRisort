// Avaliações
const opinions = [
    {
        opinion: `Fomos muito bem atendidos. Todos são bem atenciosos e educados. Tivemos uma excelente semana. O
        quarto era agredável, com ar condicionado, frigobar e uma vista maravilhosa do mar (mesmo sendo na
        lateral do edifício). Agradecemos sua hospitalidade.`,
        name: 'John Erick'
    },
    {
        opinion: `Atenção, como sempre, ao Billini! Buscamos refúgio aqui com minha esposa durante o furacão Irma, na costa norte. Oscar não poderia ter sido mais útil e a equipe mais profissional nesses tempos difíceis. Este hotel é bem cuidado, equipe maravilhosa e sempre um prazer para visitar. `,
        name: 'Frederick Gustavo'
    },
    {
        opinion: `Ótimo hotel a uma curta distância de tudo. Funcionários encantadores e prestativos, belos quartos e bar e restaurante na cobertura. Ótima decoração combinando antigo e novo. Definitivamente recomendo este hotel`,
        name: 'Sandra Gonçalves'
    },
    {
        opinion: `O hotel é de boa localização, próximo a Praia e ao Centro. A cobertura tem uma ótima vista para o mar e uma piscina excelente. O hotel possui elevador que ajuda no acesso ao quarto. A equipe é muito atenciosa e dedicada. Recomendo demais!`,
        name: 'Carlos Daniel'
    },
    {
        opinion: `Gostamos muito é um hotel simples, mas com um café maravilhoso com direito até tapioca, as meninas do café também super atenciosas amamos vamos voltar outras vezes os quartos também possuem frigobar, e ar condicionado, só o chuveiro deixou um pouco a desejar, a cama também king muito boa, recomendo para quem quer economizar!                            `,
        name: 'Amanda Cristina'
    }
]

let currentOpinion = 0;
const UIpersonReviewDiv = document.querySelector('#person-review');

document.addEventListener('DOMContentLoaded', () => changeOpinion(currentOpinion))

document.querySelector('#change-opinion').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.id === 'previous') {

        if (currentOpinion === 0) {
            changeOpinion(opinions.length - 1);
        } else {
            changeOpinion(currentOpinion - 1);
        }

    } else if (e.target.id === 'next') {

        if (currentOpinion === (opinions.length - 1)) {
            changeOpinion(0);
        } else {
            changeOpinion(currentOpinion + 1);
        }
    }
})

function changeOpinion(opinionIndex) {
    UIpersonReviewDiv.querySelector('p').innerHTML = `"${opinions[opinionIndex].opinion}"`;
    UIpersonReviewDiv.querySelector('.name').innerHTML = opinions[opinionIndex].name;
    currentOpinion = opinionIndex;
}