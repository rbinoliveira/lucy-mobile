import { IMG_PREFIX } from '@/application/constants/img-prefix'

export type Technique = {
  name: string
  summary: string
  definition: string
  objective: string
  indication?: string
  description?: string
  precaution?: string
  example?: string
  images: string[]
  lectureTime: number
}

export const techniques: Technique[] = [
  {
    name: 'Falar-Mostrar-Fazer',
    summary: 'Explica e demonstra antes de realizar o procedimento',
    definition:
      'Consiste em apresentar aos poucos os elementos do consultório odontológico à criança, para que ela se familiarize com o ambiente, explicar os procedimentos, materiais, instrumentais e equipamentos numa linguagem simples, inclui também a demonstração visual, auditiva, tátil e olfatória dos mesmos, para, em seguida, se realizar o procedimento (ROCHA; ROLIM; MORAES, 2015).',
    objective:
      'Lidar com o medo da criança frente a situações desconhecidas, ensinando-lhe aspectos importantes do tratamento odontológico e moldando suas respostas aos procedimentos por meio de uma forma adaptada de aprendizagem por aproximações sucessivas, podendo conter elementos de dessensibilização. (BARENIE; RIPA, 1977; AAPD, 2017).',
    indication:
      'Para pacientes que ainda não têm experiência com o tratamento odontológico ou que apresentem sinais de medo, ansiedade; para explicar informações adequadas com relação aos procedimentos, pois é comum que pacientes recebam informações inadequadas por parte dos pais, amigos ou da mídia. (BARROS; GOES, 2017).',
    description:
      'O odontopediatra explica o que vai fazer numa linguagem adequada à idade e compreensão do paciente. Esta explicação de como o procedimento vai decorrer é feita lentamente e com a repetição necessária para que a criança compreenda. O dentista mostra os instrumentos que vai utilizar, ilustrando a sua aplicação num modelo, no assistente ou no responsável pela criança até que a mesma entenda. Sem se desviar do que explicou e mostrou, o profissional então realiza o procedimento. (BARROS; GOES, 2017).',
    precaution:
      'Evitar conversas paralelas, barulhos ou movimentos inesperados. A criança deve ter espaço para fazer uma ou duas perguntas, mas a continuação das questões é provavelmente uma forma de a criança adquirir o controle da situação e adiar o procedimento, por isso essa série de indagações deve ser evitada, passando rapidamente à fase seguinte. (BARROS; GOES, 2017)',
    example:
      'No momento do exame clínico o dentista apresenta ao paciente o espelho odontológico dizendo em uma linguagem adequada para que serve o espelho e o que o paciente sentirá ao usá-lo: "Este é o espelho que vou usar para olhar seus dentes, quando eu o colocar na sua boca, você vai sentir que ele é gelado. Quer segurar o espelho para ver como ele é?". A seguir o dentista executa o procedimento de exame clínico com o espelho no paciente. Pode-se também demonstrar antes em um modelo de arcada dentária ou boneco.',
    images: [
      `${IMG_PREFIX}/falar-mostrar-fazer1.jpg`,
      `${IMG_PREFIX}/falar-mostrar-fazer2.jpg`,
    ],
    lectureTime: 10,
  },
  {
    name: 'Reforçamento Positivo',
    summary: 'Recompensa comportamentos desejados para estimular sua repetição',
    definition:
      'O reforço positivo é uma técnica eficaz em recompensar comportamentos desejados e, assim, estimular o retorno desses comportamentos.  Existem os reforçadores sociais como a modulação positiva da voz, a expressão facial, o elogio verbal e demonstrações físicas apropriadas de afeto por parte dos membros da equipe odontológica; e os reforçadores não sociais como brindes e brinquedos (AAPD, 2015).',
    objective:
      'Reforçar o comportamento positivo desejado, possibilitando o aumento da frequência deste (BARROS; GOES, 2017).',
    indication: 'Pode ser usada em todos os pacientes.',
    description:
      'Realiza-se uma verbalização positiva, indicando reconhecimento pelos esforços que o paciente fez para enfrentar, de forma positiva, procedimentos que podem ser aversivos. Além disso, pode-se fazer uso de uma pequena recompensa, de caráter simbólico, para reforçar o comportamento colaborativo da criança, esta recompensa deve estar associada aos seus esforços de enfrentamento diante do que lhe causa medo (BARROS; GOES, 2017).',
    precaution:
      'O profissional deve estar ciente de que alguns de seus comportamentos, como o adiamento do tratamento, a interrupção para responder a uma série de perguntas ansiosas, podem contribuir para reforçar comportamentos indesejados da criança. Além disso, o reforço positivo deve ser realizado imediatamente após a atitude desejada e não antes dessa, em troca da promessa de bom comportamento (LEITE et al., 2013; BARROS; GOES, 2017).',
    example:
      'Uma criança ansiosa diante de um tratamento restaurador, permitiu a utilização da caneta de baixa rotação. Imediatamente o dentista faz uma verbalização positiva: "Você é corajoso! Conseguiu respirar fundo e relaxar, e isso me ajudou a tirar toda a sujeira do seu dente. Muito bem!". Ao final da consulta, pode-se também dar algum brinde ou prêmio à criança.',
    images: [
      `${IMG_PREFIX}/reforcamento-positivo1.jpg`,
      `${IMG_PREFIX}/reforcamento-positivo2.jpg`,
      `${IMG_PREFIX}/reforcamento-positivo3.jpg`,
      `${IMG_PREFIX}/reforcamento-positivo4.jpg`,
    ],
    lectureTime: 5,
  },
  {
    name: 'Distração',
    summary:
      'Desvia a atenção do paciente para elementos agradáveis durante o procedimento',
    definition:
      'É a técnica de desviar a atenção do paciente do que possa ser entendido como um procedimento desagradável. O profissional orienta a atenção da criança para estímulos agradáveis, positivos, atrativos, distraindo-a dos que lhe causam ansiedade, medo ou dor (BARROS; GOES, 2017).',
    objective:
      'Diminuir a percepção, por parte da criança, de estímulos repulsivos, como também evitar comportamentos negativos de recusa ao procedimento (AAPD, 2015). Além disso, atividades agradáveis criam um ambiente do qual a criança não deseja fugir (MORAES; ROCHA, 2017).',
    indication:
      'Técnica indicada para todos os pacientes, especialmente os ansiosos.',
    description:
      'Pode-se contar uma história, em que a criança possa imaginar cenas agradáveis, ou apenas uma conversa engraçada. Se a criança trouxe um brinquedo, é possível usar este para distraí-la por algum tempo durante o procedimento. Filmes e jogos também podem ser usados para distração do paciente, levando sempre em consideração a idade e os gostos do mesmo (BARROS; GOES, 2017).',
    precaution:
      'O profissional deve manter o controle da situação e deixar claro que o objetivo é realizar o procedimento de forma breve e efetiva. Evitar satisfazer desejos sucessivos da criança como forma de evitar o tratamento (BARROS; GOES, 2017).',
    example:
      'Criança assiste a um desenho que ela goste enquanto o profissional faz o preparo cavitário.',
    images: [`${IMG_PREFIX}/distracao.jpg`],
    lectureTime: 5,
  },
  {
    name: 'Modelação',
    summary:
      'Criança observa outro paciente colaborativo para aprender comportamento adequado',

    definition:
      'A criança observa um modelo (de preferência outra criança) que foi submetido a um procedimento odontológico semelhante ao que será realizado nela. Neste caso, desloca-se a atenção do paciente para o comportamento colaborativo e não para o procedimento. A observação desse modelo pode encorajar o paciente a submeter-se à mesma situação (COSTA JUNIOR, 2002).',
    objective:
      'Reduzir o medo dos tratamentos dentários em crianças ligeiramente ansiosas; adotar uma conduta positiva quantos aos procedimentos odontológicos em crianças que ainda não tem experiência no dentista.',
    indication:
      'Crianças que não tiveram experiências anteriores no cirurgião dentista; pacientes ansiosos e/ou com comportamento não colaborador.',
    description:
      'O cirurgião-dentista realiza o procedimento em um modelo já condicionado, para que a criança observe o comportamento desse paciente. Recomenda-se que seja escolhida uma criança na mesma faixa etária, ou pessoas significativas para a criança, como amigos ou parentes, como modelos para a realização desta técnica. Também pode ser passado um vídeo para a criança e seus responsáveis assistirem na sala de espera antes de entrar no consultório, em que uma criança passa por uma consulta simples, com humor alegre e calmo (BARROS; GOES, 2017).',
    precaution:
      'A criança também pode aprender a sentir medo e ansiedade se, precipitadamente, observar modelos ansiosos. Por isso é importante certificar-se de que o modelo escolhido é realmente uma pessoa calma e bem controlada (BARROS; GOES, 2017).',
    example:
      'O odontopediatra pede aos pais para trazerem a criança para observar algum procedimento realizado no irmão mais velho que costuma manter-se calmo e colaborar com o tratamento.',
    images: [`${IMG_PREFIX}/modelacao.jpg`],
    lectureTime: 10,
  },
  {
    name: 'Modelagem',
    summary: 'Desenvolve novo comportamento através de aproximações sucessivas',
    definition:
      'Pode ser definida como o desenvolvimento de uma nova conduta, reforçando os comportamentos que se assemelham cada vez mais ao desempenho final desejado, em aproximações sucessivas a esse comportamento (MARTIN; PEAR, 1978; MORAES; PESSOTTI, 1985).',
    objective:
      'É usada para produzir um comportamento que a criança ainda não executa (MORAES; PESSOTTI, 1985).',
    description:
      'Deve-se definir o comportamento final desejado; escolher o comportamento inicial; especificar os passos intermediários para se chegar ao desempenho final e prosseguir em um ritmo adequado para cada criança (MORAES; PESSOTTI, 1985).',
    precaution:
      'Deve-se levar em conta as particularidades da criança, de modo que não se use definições muito exigentes de comportamento final nem um ritmo de treinamento incompatível com as dificuldades da criança (MORAES; PESSOTTI, 1985).',
    example:
      'Quando o dentista pretende ensinar à criança a escovar os dentes, ele primeiro define a técnica de escovação adequada para a criança, em seguida começa pelo comportamento de escovação que a criança já conhece e, por fim, define os passos que ela precisa aprender até chegar à técnica final, como fazer movimentos.',
    images: [`${IMG_PREFIX}/modelagem1.jpg`, `${IMG_PREFIX}/modelagem2.jpg`],
    lectureTime: 10,
  },
  {
    name: 'Dessensibilização',
    summary: 'Expõe gradualmente a situações de menor para maior ansiedade',
    definition:
      'Técnica em que as situações que causam medo ou ansiedade vão sendo progressivamente apresentadas, dessa forma, a criança é exposta primeiro a situações que causam pouca ansiedade, em seguida às que causam muita (ROBERTS et al.,2010). É direcionada a uma situação ansiogênica específica para o paciente (BARROS; GOES, 2017).',
    objective:
      'Visa a substituição da resposta ansiogênica por uma resposta inversa de relaxamento (BARROS; GOES, 2017).',
    indication:
      'Todas as crianças, principalmente as que se mostram ansiosas na consulta odontológica.',
    description:
      'Ao longo das sessões, o profissional vai aumentando gradativamente o tempo de permanência da criança no consultório, realizando gradualmente os procedimentos odontológicos, do mais simples ao mais complexo. Ensina-se ao paciente a substituir uma resposta emocional inapropriada (ansiedade ou medo) por uma adequada (OLIVEIRA, 2002; LEITE, 2013).',
    precaution:
      'Na aproximação do comportamento desejado, as atitudes de colaboração são reforçadas, mas a fuga não é permitida (BARROS; GOES, 2017). Deve-se evitar o número elevado de sessões de adaptação para que o dentista não se perca em sua atuação (BAUSELLS, 1996). A técnica não tem boa aplicação em situações de emergência (JOSGRILBERG et al., 2005).',
    example:
      'A criança começa a acompanhar o seu responsável, enquanto este conversa com o profissional, em seguida ela senta na cadeira odontológica (os mais novos podem sentar-se no colo do seu responsável) e conversa com o odontopediatra na presença dos pais. O dentista, então, começa a realizar procedimentos simples, como contar os dentes ou colocar água na boca da criança. Finalmente, se o paciente foi capaz de se apresentar um pouco calmo e controlado nessas etapas anteriores, o tratamento é realizado (BARROS; GOES, 2017).',
    images: [`${IMG_PREFIX}/dessensibilizacao.jpg`],
    lectureTime: 10,
  },
  {
    name: 'Estruturação do Tempo',
    summary:
      'Informa e conta o tempo do procedimento para dar sensação de controle',
    definition:
      'Consiste em informar a duração, em segundos, de um procedimento odontológico, e, ao realizá-lo, contar os segundos em voz alta (ROCHA et al, 2016).',
    objective:
      'Dividir o procedimento em sequências menores de tempo pois, desse modo, o paciente tem a sensação de controle sobre as etapas do tratamento e passa a mostrar comportamentos de colaboração (MILGROM et. al, 1985).',
    description:
      'Antes do procedimento, dizer à criança quantos segundos vai durar e contá-los em voz alta, quando os segundos terminarem, parar o procedimento. Se for preciso mais tempo, deve-se combinar novamente com a criança para realizar uma nova contagem de segundos (ROCHA, 2010).',
    precaution:
      'Não se deve contar segundos a mais do que o que foi proposto à criança e é obrigatório interromper o procedimento quando os segundos terminarem (ROCHA, 2010).',
    example:
      'O dentista está com a caneta de baixa rotação na mão e diz: Agora vamos usar o motorzinho para limpar seus dentes. Vou colocar o motorzinho na sua boca, contar até dez e aí posso tirar o motorzinho, combinado? A criança diz: Combinado. Dentista: Vamos lá, começou: 1, 2, 3, ..., 9, 10. Pronto, muito bem! (ROCHA, 2010).',
    images: [
      `${IMG_PREFIX}/estruturacao-tempo1.jpg`,
      `${IMG_PREFIX}/estruturacao-tempo2.jpg`,
      `${IMG_PREFIX}/estruturacao-tempo3.jpg`,
    ],
    lectureTime: 5,
  },
  {
    name: 'Suporte',
    summary:
      'Permite que acompanhante segure a mão do paciente durante tratamento',
    definition:
      'Nesta técnica, permite-se que o acompanhante segure a mão do paciente durante a realização do tratamento (ROCHA et al., 2016).',
    objective:
      'Possibilitar que a criança enfrente uma condição potencialmente aversiva, com o suporte do seu cuidador (ROCHA et al., 2016).',
    description:
      'O cirurgião-dentista deve perguntar se a criança deseja que alguém segure sua mão, ou se quer segurar um brinquedo enquanto estiver sendo atendida (ROCHA, 2010).',
    precaution:
      'Cada família e cada situação devem ser analisadas independentemente, e deve ser tomada uma decisão com relação à presença dos pais durante o atendimento, baseada nos benefícios e contribuições que ela pode trazer para o manejo do comportamento da criança. Não é recomendada a presença dos pais na sala de atendimento quando for percebido que eles apresentam ansiedade e medo, podendo prejudicar o andamento da consulta (AAPD, 2015).',
    example:
      'O dentista está levando o espelho odontológico à boca da criança, então a criança fala: "Tia, estou com medo." O profissional para o procedimento e pergunta: "Você quer segurar a mão da sua mãe?" A criança responde: "Quero." A mãe segura a mão da criança, esta então abre a boca e o dentista a examina com o espelho (ROCHA, 2010).',
    images: [`${IMG_PREFIX}/suporte1.jpg`],
    lectureTime: 5,
  },
  {
    name: 'Participação Ativa',
    summary:
      'Envolve a criança no procedimento permitindo que ajude em tarefas simples',
    definition:
      'A criança é incentivada a participar ativamente do procedimento, segurando o espelho de mão, sugador ou outro instrumento odontológico. Dessa forma, a criança se sente mais confortável com o tratamento e percebe que está ajudando o profissional (ROCHA; ROLIM; MORAES, 2015).',
    objective:
      'Promover maior autonomia para a criança e familiarização com os eventos relacionados ao tratamento odontológico (ROCHA; ROLIM; MORAES, 2015). ',
    indication: 'Pode ser usada em todos os pacientes.',
    description:
      'Perguntar se a criança quer segurar algum objeto relacionado ao atendimento, que pode ser sugador, espelho, entre outros, ou pedir que ela escolha a cor de algum material que será utilizado, quando possível (ROCHA, 2010).',
    precaution:
      'A pergunta deve ser elaborada de maneira que a reposta "não" não comprometa o atendimento clínico. O profissional deve oferecer possibilidades de escolha apenas em momentos adequados, considerando que a escolha e participação ativa do paciente não devem interferir na execução técnica do tratamento (ROCHA; ROLIM; MORAES, 2015).',
    example:
      'O dentista está realizando profilaxia, então para o procedimento e diz para a criança: Você quer segurar um espelho para ver o que estou fazendo nos seus dentes? Criança: Quero sim! Posso segurar esse canudinho também? Dentista: Esse canudinho é o sugador, que bom que você vai me ajudar, pode sim! Se você quiser segurar outra coisa é só pedir (ROCHA, 2010).',
    images: [`${IMG_PREFIX}/participacao-ativa.jpg`],
    lectureTime: 5,
  },
  {
    name: 'Relaxamento',
    summary:
      'Utiliza exercícios de respiração e relaxamento muscular para reduzir ansiedade',
    definition:
      'São estratégias de relaxamento muscular e respiração profunda efetuadas antes da execução de um procedimento odontológico (MORAES; ROCHA, 2017). Esta técnica baseia-se no fato de que o relaxamento físico é uma resposta contrária à ansiedade, diminuindo consideravelmente a percepção de dor ou desconforto associados a procedimentos médicos (BARROS; GOES, 2017).',
    objective:
      'Provocar uma redução progressiva da tensão muscular da criança, bem como maior equilíbrio respiratório; reduzir a agitação motora durante o procedimento (COSTA JUNIOR, 2002).',
    description:
      'Um adulto orienta a criança a realizar exercícios simples de respiração profunda, na qual deve-se inspirar lenta e profundamente e, em seguida, expirar lentamente. O adulto pode orientar à criança a fazer esse exercício enquanto ele conta lentamente. Outra forma é o relaxamento muscular progressivo, mais indicado para crianças mais velhas ou adolescentes. Com o paciente deitado confortavelmente na cadeira e de olhos fechados, pede-se a ele para apertar e relaxar cada grupo muscular, em sequência, começando pelos pés e pernas, até a cabeça. Pode-se também permitir que a criança ouça, com fones de ouvido, uma gravação com instruções para relaxar, durante o procedimento, contribuindo dessa forma para uma maior distração do paciente (BARROS; GOES, 2017).',
    precaution:
      'Usar técnicas mais complexas de relaxamento muscular com o devido conhecimento das mesmas.',
    example:
      'O dentista está tratando os dentes da criança, então para o tratamento e diz: "Você pode levantar a mão quando quiser que eu pare um pouco para você respirar, tá?" O dentista continua o tratamento. A criança levanta a mão, o dentista para o procedimento e a criança fala: "Quero um tempo para respirar." O dentista diz: "Então puxe o ar pelo nariz, respirando fundo, segure um pouquinho e solte pela boca bem devagarzinho. Isso, de novo, puxe o ar, segure, e solte..." (ROCHA, 2010).',
    images: [`${IMG_PREFIX}/relaxamento1.jpg`],
    lectureTime: 10,
  },
  {
    name: 'Reforçamento Intermitente',
    summary:
      'Reforça comportamentos desejados de forma ocasional com pausas ou prêmios',
    definition:
      'É a manutenção de um comportamento desejado por meio de reforçamento ocasional ou intermitente. Cria-se um esquema que especifica quais ocorrências de um comportamento serão reforçadas (MORAES; PESSOTTI, 1985).',
    objective:
      'Auxiliar na moderação dos comportamentos de não colaboração, pois permite mostrar à criança qual o comportamento adequado que se espera dela (BARROS; GOES, 2017).',
    indication: 'Crianças com comportamento de não colaboração.',
    description:
      'Realiza-se uma breve pausa logo após a criança ter colaborado, durante o procedimento e um elogio à criança. Faz-se uma combinação verbal com a criança em que, caso esta permaneça colaboradora durante a intervenção, tem direito a fazer mais uma pausa. Caso contrário, o dentista continua o procedimento e explica à criança que dará uma pausa quando ela colaborar (BARROS; GOES, 2017). No caso do reforçador ser uma pausa, esta estratégia ganha o nome de fuga contingente (KUHN; ALLEN, 1994).',
    precaution:
      'A escolha do reforçador adequado para cada faixa etária e para cada caso é essencial para o sucesso da técnica (KUHN; ALLEN, 1994).',
    example:
      'A criança se comporta adequadamente durante a abertura coronária, então o dentista fala: "Muito bem! Você se comportou e me ajudou a tratar seu dente! Vamos combinar uma coisa?". A criança responde: "Vamos!" O dentista diz: "Se você continuar assim, vou te dar uma pausa para descansar." A criança diz: "Tudo bem, combinado!". Na figura 18, tem-se um quadro em que a criança ganha um adesivo de estrela e uma pausa quando ela colaborar durante o atendimento e um adesivo de "X" quando ela não colaborar, indicando que não ganhará o descanso, apenas quando ela colaborar novamente.',
    images: [`${IMG_PREFIX}/reforcamento-intermitente.jpg`],
    lectureTime: 10,
  },
  {
    name: 'Atividade Lúdica',
    summary:
      'Usa brincadeiras e jogos para familiarizar com o ambiente odontológico',
    definition:
      'Constitui um ambiente planejado e enriquecido que possibilita à criança a oportunidade de entretenimento, prazer e aprendizagem de habilidades relevantes ao enfrentamento de situações potencialmente estressantes. Instrumentos como brinquedos e brincadeiras são utilizados nas atividades lúdicas com o objetivo de mediar a relação entre as necessidades da criança e o ambiente de cuidados, em que pode facilitar o processo de comunicação e de conhecimento da criança (MOORE; RUSS, 2006).',
    objective:
      'A atividade lúdica pode proporcionar as contingências para que ocorra o aprendizado  sobre regras, sobre as pessoas e sobre si mesmas; a preparação da criança para o procedimento; a exteriorização dos medos que a criança venha a ter; o oferecimento de instrumentos para que esta seja agente ativo do seu tratamento; a estimulação da criatividade e do raciocínio da criança (MITRE;  GOMES, 2004; BARRETO; CARDOSO; CORRÊA, 2013; COTA; COSTA, 2017).',
    description:
      'Utilizar brinquedos habituais à vida da criança; jogos educativos; música e/ou brinquedos com temas odontológicos que dão enfoque à visão positiva da Odontologia e auxiliam na promoção de saúde bucal (MIALHE; CUNHA; JÚNIOR, 2009).',
    example:
      'Antes de iniciar o procedimento odontológico, a criança brinca de dentista e observa os dentes de um macromodelo com o espelho bucal.',
    images: [`${IMG_PREFIX}/atividade-ludica.jpg`],
    lectureTime: 10,
  },
  {
    name: 'Estabilização Protetora',
    summary:
      'Limita movimentos do paciente para garantir segurança do procedimento',
    definition:
      'É a limitação da liberdade de movimentos do paciente a fim de diminuir o risco de ferimento ao permitir a conclusão segura do tratamento. A limitação pode requerer o auxílio de uma outra pessoa, um dispositivo de imobilização do paciente ou uma combinação disso (AAPD, 2015).',
    objective:
      'Reduzir os movimentos súbitos; proteger o paciente, seus cuidadores e a equipe odontológica; permitir a realização do tratamento odontológico de urgência (AAPD, 2015).',
    indication:
      'A estabilização é indicada para pacientes que necessitam de tratamento imediato, porém que não cooperam por imaturidade emocional ou pela condição física e mental (AAPD, 2015).',
    precaution:
      'É aconselhável ao dentista analisar cada paciente e as estratégias possíveis de se realizar.  É imprescindível ter o consentimento dos pais ou cuidadores informado e documentado na ficha do paciente antes de utilizar a estabilização protetora (AAPD, 2015).',
    images: [
      `${IMG_PREFIX}/contencao-fisica1.jpg`,
      `${IMG_PREFIX}/contencao-fisica2.jpg`,
    ],
    lectureTime: 5,
  },
]
