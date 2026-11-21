export type Step = { n?: number; from?: number; prefix?: string; suffix?: string; label?: string; title: string; text: string };

export const timeline: Step[] = [
  { n: 1991, from: 1960, title: "Nasce em Zwide", text: "Nasceu a 16 de junho, Dia da Juventude sul-africano, no township de Zwide, em Port Elizabeth (hoje Gqeberha). Os pais eram quase crianças e foi a avó quem o criou. Houve noites com fome e meses em que foi à escola com os sapatos dela." },
  { n: 12, prefix: "Aos ", suffix: " anos", title: "A bolsa que mudou o rumo", text: "Num torneio juvenil em Mossel Bay, impressionou os olheiros e recebeu uma bolsa de estudo para a Grey Junior, em Port Elizabeth. Seguiu para a Grey High School, onde o râguebi passou a ser caminho." },
  { n: 2013, from: 2000, title: "Estreia pelos Springboks", text: "Depois de subir pelos escalões de Western Province e dos Stormers, vestiu pela primeira vez a camisola da seleção. Em 2017, o treinador Robbie Fleck nomeou-o capitão dos Stormers." },
  { n: 2018, from: 2005, title: "A braçadeira de capitão", text: "Foi nomeado capitão da África do Sul: o 61.º da história e o primeiro negro, depois de mais de um século de capitães brancos. Num país marcado pelo apartheid, o gesto teve peso de símbolo." },
  { label: "2019 e 2023", title: "Campeão do Mundo, duas vezes", text: "Levantou a Taça do Mundo no Japão, em 2019, e voltou a fazê-lo em França, em 2023: o quarto título mundial da África do Sul." },
];

export const pillars = [
  { id: "fome", short: "Fome e pobreza", obstacle: "Cresceu em Zwide a passar fome. Recordou mais tarde as noites em que as dores de estômago o acordavam e a avó lhe dava água com açúcar para as acalmar. Na escola, usou os sapatos dela durante meses.", response: "Transformou a fome em gratidão e ação. Com a mulher, Rachel, lançou em 2020 a Fundação Kolisi, que distribuiu cabazes alimentares e equipamento de proteção por toda a África do Sul." },
  { id: "luto", short: "Luto precoce", obstacle: "Perdeu a avó que o criou ainda criança, nos seus braços, e a mãe, Phakama, quando tinha 15 anos. Ficou sem as duas pessoas que mais o protegiam.", response: "Fez da dor um dever. Assumiu a tutela dos irmãos mais novos, Liyema e Liphelo, que tinham passado anos em orfanatos e famílias de acolhimento, e levou-os para casa." },
  { id: "racismo", short: "Racismo e pressão histórica", obstacle: "Em 2018, tornou-se o primeiro capitão negro dos Springboks, depois de mais de um século de capitães brancos. Carregava a expectativa de um país ainda dividido.", response: "Liderou com inclusão. Em 2019, uma equipa de origens muito diferentes ganhou o Mundial do Japão e mostrou o que “Stronger Together” quer dizer: mais fortes juntos." },
  { id: "joelho", short: "Lesão no joelho", obstacle: "Antes do Mundial de 2023, uma lesão grave no joelho deixou-o com apenas alguns meses para recuperar. Houve dúvidas sobre se chegaria a França.", response: "Recuperou a tempo e voltou a capitanear os Springboks até ao título. Atribui a força à disciplina do trabalho diário e à fé em Deus." },
];

export const quotes = [
  { id: "fe", theme: "Fé", en: "Now that I have given everything to God, nothing else affects me.", pt: "Agora que entreguei tudo a Deus, mais nada me afeta.", outlet: "SportGoMag, «Discovering the Saving Power of Christ»", detail: "Testemunho pessoal assinado por Siya Kolisi, publicado online.", url: "https://sportgomag.com/discovering-the-saving-power-of-christ-siya-kolisi/" },
  { id: "perdao", theme: "Perdão e recomeço", en: "I’m a sinner trying to be the best he can be every day.", pt: "Sou um pecador a tentar ser, todos os dias, o melhor que consegue.", outlet: "The Irish Times, «Siya Kolisi: ‘I’m not a saint at all’»", detail: "Entrevista a propósito do lançamento da autobiografia Rise.", url: "https://www.irishtimes.com/sport/rugby/international/siya-kolisi-i-m-not-a-saint-at-all-i-m-a-sinner-trying-to-be-the-best-he-can-be-1.4691708" },
  { id: "proposito", theme: "Propósito e serviço", en: "I believe in lifting as you rise", pt: "Acredito em ajudar os outros a subir enquanto subimos.", outlet: "IOL, 4 de maio de 2021", detail: "Reportagem que cita a publicação do próprio Siya nas redes sociais a anunciar o livro Rise.", url: "https://iol.co.za/entertainment/books/2021-05-04-siya-kolisis-autobiography-rise-to-release-after-lions-tour/" },
];

export const quiz = [
  { q: "Em que bairro de Port Elizabeth nasceu Siya Kolisi?", options: ["Zwide", "Soweto", "Sandton", "Camps Bay"], answer: 0, why: "Nasceu em Zwide a 16 de junho de 1991. Port Elizabeth chama-se hoje Gqeberha." },
  { q: "Que marca histórica alcançou ao tornar-se capitão em 2018?", options: ["Primeiro capitão negro dos Springboks", "Capitão mais jovem de sempre", "Primeiro capitão estrangeiro", "Primeiro capitão a jogar na Europa"], answer: 0, why: "Foi o 61.º capitão da história e o primeiro negro, após mais de um século de capitães brancos." },
  { q: "Que organização lançou com Rachel, em 2020, para ajudar quem passa fome?", options: ["Fundação Kolisi", "Fundação Springbok", "Cruz Verde", "Banco da Esperança"], answer: 0, why: "A Fundação Kolisi distribuiu cabazes alimentares e equipamento de proteção por toda a África do Sul." },
  { q: "O que significa a ideia “lifting as you rise”?", options: ["Subir ajudando os outros a subir também", "Vencer sempre sozinho", "Levantar mais peso no ginásio", "Subir de divisão no campeonato"], answer: 0, why: "Para Siya, crescer implica servir e elevar a comunidade. É a ideia que liga a fé, a liderança e a Fundação." },
];

export const sources = [
  { t: "Kolisi, S. com Starling, B., Rise (HarperCollins, 2021)", u: "" },
  { t: "SportGoMag, «Discovering the Saving Power of Christ»", u: "https://sportgomag.com/discovering-the-saving-power-of-christ-siya-kolisi/" },
  { t: "The Irish Times, «Siya Kolisi: ‘I’m not a saint at all’»", u: "https://www.irishtimes.com/sport/rugby/international/siya-kolisi-i-m-not-a-saint-at-all-i-m-a-sinner-trying-to-be-the-best-he-can-be-1.4691708" },
  { t: "IOL, 4 de maio de 2021, sobre o lançamento de Rise", u: "https://iol.co.za/entertainment/books/2021-05-04-siya-kolisis-autobiography-rise-to-release-after-lions-tour/" },
  { t: "TimesLive, 28 de maio de 2018, nomeação do capitão n.º 61", u: "https://www.timeslive.co.za/sport/rugby/2018-05-28-new-bok-captain-kolisi-has-come-a-long-from-the-dusty-streets-of-zwide/" },
  { t: "The Citizen, «The incredible journey of Siya Kolisi»", u: "https://citizen.co.za/sport/rugby/long-read-the-incredible-journey-of-siya-kolisi" },
  { t: "Daily Maverick, 29 de outubro de 2019", u: "https://www.dailymaverick.co.za/article/2019-10-29-captain-kolisi-in-a-world-cup-final-a-long-walk-to-acceptance-and-equality/" },
  { t: "SA Rugby Magazine, excerto de Rise e entrevista ao Guardian", u: "https://www.sarugbymag.co.za/kolisi-opens-struggles-alcohol-1/" },
  { t: "Vision Christian Media, «Leading with Faith in Jesus»", u: "https://vision.org.au/read/articles/rugby-world-champions-christian-leader/" },
  { t: "JOY! News, «Boks captain, God’s champion»", u: "https://joynews.co.za/siya-kolisi-boks-captain-gods-champion/" },
  { t: "Post Matric 2023, «South Africa’s superhero»", u: "https://issuu.com/yesmedia/docs/postmatric_gauteng_2023/s/28299481" },
];
