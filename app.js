const screens = [
  // 1. Título oficial
  {
    fx: "fade",
    html: `<p class="kicker">Revisão pós-palestra · 50 min + 10 de perguntas</p>
    <h1>IAs e Novas Tecnologias no auxílio dos Diagnósticos Assertivos: O que é RUÍDO e o que é REAL?</h1>
    <p class="lead">Para revisitar com calma. Não é teleprompter — a fala é 100% ao vivo.</p>
    <p class="sub">Dr. Harrison Oliveira Santiago · CRM: 30.148 BA</p>`
  },

  // 2. Tela própria de abertura (contrato com a sala)
  {
    fx: "rise",
    html: `<p class="kicker">Abertura</p>
    <h2>Estamos aqui pra aprendermos de maneira simples, eficiente e eficaz.</h2>
    <p class="body">Uma ideia por tela. Você decide o ritmo da revisão. No final, o presente que fica com você.</p>`
  },

  // 3. Pergunta disparadora
  {
    fx: "slide",
    cls: "question",
    html: `<p class="kicker">Pergunta da sala</p>
    <h2>O que é ruído e o que é real no seu dia a dia clínico?</h2>
    <span class="q-tag">Ponto de partida</span>`
  },

  // 4. Quem fala (bio preservada exatamente como ditada)
  {
    fx: "fade",
    html: `<p class="kicker">Quem fala</p>
    <h2>Harrison Oliveira Santiago</h2>
    <p class="body">CRM: 30.148 BA. Médico. Neurocientista.</p>
    <p class="sub">Telemédico desde 2020 · Doctoralia · Noa Notes</p>`
  },

  // 5. Formação (preservada)
  {
    fx: "slide",
    html: `<p class="kicker">Formação</p>
    <h2>Pós e segunda graduação</h2>
    <ul class="list">
      <li>CBI of Miami · TEA, TDAH, Altas Habilidades e Neurociências</li>
      <li>Unyleya · Telemedicina e Telessaúde: e-Health</li>
      <li>UniAmérica e CETRUS · Psiquiatria</li>
      <li>Engenharia de Arquitetura de Software e Inteligência Artificial</li>
    </ul>`
  },

  // 6. Atuação (preservada)
  {
    fx: "rise",
    html: `<p class="kicker">Atuação</p>
    <h2>Clínica, gestão e fronteira tecnológica</h2>
    <p class="body">Mais Médicos e gestão. Progressão em IA, cybersecurity e neurodivergências — sem trocar o julgamento clínico por uma tela.</p>`
  },

  // 7. Contrato ético
  {
    fx: "fade",
    html: `<p class="kicker">Contrato</p>
    <h2>Hoje não vendemos ferramenta. Vendemos filtro.</h2>
    <p class="body">Ruído entra barato. Real custa julgamento, método, equipe e tempo.</p>`
  },

  // 8. Caso fictício de abertura
  {
    fx: "rise",
    html: `<p class="kicker">Caso · voto silencioso</p>
    <h2>Um adolescente. Queixa de “falta de foco”. Relatório de IA sugere TDAH.</h2>
    <ul class="list">
      <li>A — Aceito e medicamos</li>
      <li>B — Peço segunda opinião humana</li>
      <li>C — Reabro história e contexto</li>
      <li>D — Testo a fonte do modelo</li>
    </ul>
    <p class="sub">Não precisa falar. Só escolha o seu filtro.</p>`
  },

  // 9. Ruído versus Real (Item 1)
  {
    fx: "slide",
    html: `<p class="kicker">Ruído versus Real</p>
    <h2>Ruído parece certeza. Real exige prova.</h2>
    <p class="body"><strong>Ruído:</strong> texto fluente, estatística órfã, paper sem método e prompt que apenas confirma o que você já queria ouvir.</p>
    <p class="body" style="margin-top:1rem"><strong>Real:</strong> sobrevive às três perguntas: <em>De onde veio? Quem revisou? O que muda se eu estiver errado?</em></p>`
  },

  // 10. Exemplo fictício do ruído
  {
    fx: "rise",
    html: `<p class="kicker">Exemplo fictício de treino</p>
    <h2>A sala aponta o furo</h2>
    <p class="body">“Modelo X acerta 94% dos diagnósticos de TEA em 30 segundos.” Sem amostra, sem padrão-ouro, sem saber quem errou. Onde está o real?</p>
    <p class="sub">Caso fictício de propósito. Treino de olho clínico.</p>`
  },

  // 11. Psicopatologia no nicho (Item 2)
  {
    fx: "slide",
    html: `<p class="kicker">Psicopatologia no nicho</p>
    <h2>O cardápio temático da sala</h2>
    <ul class="list">
      <li><strong>TEA</strong> · Transtorno do Espectro Autista</li>
      <li><strong>TDAH</strong> · Transtorno do Déficit de Atenção com Hiperatividade</li>
      <li><strong>Altas habilidades / superdotação</strong></li>
      <li><strong>Metabolômica</strong></li>
    </ul>
    <p class="sub">O ruído adora rótulo rápido. Em neurodesenvolvimento, rótulo apressado custa caro ao paciente.</p>`
  },

  // 12. Fonte verificada 1: Atuação multiprofissional (Item 3a)
  {
    fx: "fade",
    html: `<p class="kicker">Fonte verificada · 1</p>
    <h2>Atuação multiprofissional em transtornos do neurodesenvolvimento</h2>
    <p class="body">Revisão coautorada com janela de revisão entre <strong>dezembro de 2024 e abril de 2025</strong>. A conclusão é direta: a equipe multiprofissional favorece diagnósticos mais precisos.</p>
    <p class="sub">TEA · TDAH · Transtorno do desenvolvimento da linguagem · Deficiência intelectual</p>`
  },

  // 13. Fonte verificada 1: Penner et al. (Item 3a cont.)
  {
    fx: "rise",
    html: `<p class="kicker">Fonte verificada · 1 · Âncora de concordância</p>
    <h2>Penner et al., JAMA Network Open, 2023</h2>
    <p class="body">Avaliação da concordância diagnóstica no autismo entre pediatras e equipe multidisciplinar especializada. O estudo demonstra como a multiplicidade de olhares clínicos transforma o diagnóstico.</p>`
  },

  // 14. Fonte verificada 2: Entre a infância e a psicopatia (Item 3b)
  {
    fx: "slide",
    html: `<p class="kicker">Fonte verificada · 2</p>
    <h2>Entre a infância e a psicopatia</h2>
    <p class="body"><em>Lumen et Virtus</em>, v. XVI, n. XLIX, p. 6491–6503, 2025. DOI: 10.56238/levv16n49-028.</p>
    <p class="sub">Dr. Harrison Oliveira Santiago · CRM: 30.148 BA</p>`
  },

  // 15. Fonte verificada 2: Conteúdo clínico (Item 3b cont.)
  {
    fx: "fade",
    html: `<p class="kicker">Fonte verificada · 2 · Associação clínica</p>
    <h2>Transtorno de personalidade antissocial em jovens</h2>
    <p class="body">O estudo associa a trajetória antissocial na juventude ao TDAH, ao transtorno de conduta e ao menor volume de matéria cinzenta na amígdala e em estruturas límbicas.</p>
    <p class="sub">Não é atalho nem rótulo preditivo determinista: é mapa biológico e clínico de risco e cuidado.</p>`
  },

  // 16. O diagnóstico que a IA não fecha: 5 passos (Item 4)
  {
    fx: "rise",
    html: `<p class="kicker">Diagnóstico assertivo</p>
    <h2>O diagnóstico que a IA não fecha. O clínico assina.</h2>
    <ul class="list">
      <li><strong>1. Nomeie a hipótese sem casar com ela:</strong> acolha a suspeita sem apego precoce.</li>
      <li><strong>2. Separe dado, inferência e narrativa:</strong> isole o que é fato clínico do que é estilo da IA.</li>
      <li><strong>3. Exija fonte rastreável:</strong> diretriz, artigo ou prontuário com método claro.</li>
      <li><strong>4. Busque a contraprova ativa:</strong> force a IA a argumentar contra a sua suspeita.</li>
      <li><strong>5. Decida com o custo do erro à vista:</strong> quem arca se o rótulo estiver errado?</li>
    </ul>`
  },

  // 17. Cadeia Emoção — Sentimento — Comportamento (Item 5)
  {
    fx: "slide",
    html: `<p class="kicker">Cadeia clínica</p>
    <h2>Emoção — Sentimento — Comportamento</h2>
    <p class="body"><strong>Emoção:</strong> disparo neurofisiológico visceral e automático.</p>
    <p class="body" style="margin-top:0.6rem"><strong>Sentimento:</strong> percepção consciente e nomeação subjetiva da emoção.</p>
    <p class="body" style="margin-top:0.6rem"><strong>Comportamento:</strong> a ação observável no mundo e na relação.</p>
    <p class="sub">Quadro pedagógico de Harrison Santiago para a sala (não é escala psicométrica nem instrumento publicado).</p>`
  },

  // 18. Quadro de 4 quadrantes (Item 5 cont.)
  {
    fx: "rise",
    html: `<p class="kicker">Quadro pedagógico da sala</p>
    <h2>Os quatro quadrantes de leitura clínica</h2>
    <div class="chart-quadrants">
      <div class="quadrant">
        <h4>1 · Emoção Primária</h4>
        <p>Ativação autonômica imediata (medo, raiva, alerta, surpresa).</p>
      </div>
      <div class="quadrant">
        <h4>2 · Sentimento Elaborado</h4>
        <p>A narrativa interna: angústia, vergonha, culpa, alívio percebido.</p>
      </div>
      <div class="quadrant">
        <h4>3 · Comportamento Aberto</h4>
        <p>A resposta visível: esquiva, explosão, busca de amparo, retraimento.</p>
      </div>
      <div class="quadrant">
        <h4>4 · Contexto & Vínculo</h4>
        <p>Ambiente familiar, estressores, história de vida e relação terapêutica.</p>
      </div>
    </div>
    <p class="sub">Estrutura didática para ancorar raciocínio clínico na consulta.</p>`
  },

  // 19. Autoestima em cinco palavras (Item 6)
  {
    fx: "fade",
    html: `<p class="kicker">Autoestima em cinco palavras</p>
    <h2>Autoimagem · Amor-próprio · Autorrespeito · Autoconhecimento · Autoconfiança</h2>
    <p class="body">Cinco pilares indivisíveis. Sem autoconhecimento, a autoimagem vira refém do ruído alheio. Sem autorrespeito, não há conduta sustentável.</p>`
  },

  // 20. TEPT complexo, CID-11 (Item 7)
  {
    fx: "slide",
    html: `<p class="kicker">Classificação diagnóstica</p>
    <h2>TEPT Complexo (Transtorno de Estresse Pós-Traumático Complexo)</h2>
    <p class="body">Reconhecido formalmente na <strong>CID-11 em 2018</strong>.</p>
    <p class="sub">Categoria diagnóstica de traumas prolongados ou repetitivos com impacto na auto-organização, regulação emocional e vínculos relacionais.</p>`
  },

  // 21. Medicina centrada na pessoa (Item 8)
  {
    fx: "rise",
    html: `<p class="kicker">Referência fundamental</p>
    <h2>Medicina Centrada na Pessoa</h2>
    <p class="body"><strong>Moira Stewart, Judith Belle Brown, W. Wayne Weston, Ian R. McWhinney, Carol L. McWilliam, Thomas R. Freeman.</strong></p>
    <p class="body" style="margin-top:0.8rem"><em>Medicina centrada na pessoa: transformando o método clínico</em>, 3ª edição, Artmed, Porto Alegre, 2017.</p>
    <p class="sub">Original: <em>Patient-Centered Medicine: Transforming the Clinical Method</em>.</p>`
  },

  // 22. Stanislas Dehaene e MBE (Item 9)
  {
    fx: "fade",
    html: `<p class="kicker">Nomes no mapa</p>
    <h2>Stanislas Dehaene · Medicina Baseada em Evidências</h2>
    <p class="body">A neurociência dos circuitos de aprendizagem e da leitura (Dehaene) e o rigor metodológico da Medicina Baseada em Evidências.</p>
    <p class="sub">Exemplos citados no mapa de raciocínio para distinguir percepção subjetiva de evidência reprodutível.</p>`
  },

  // 23. Psicossomática: Julio de Melo Filho (Item 10)
  {
    fx: "slide",
    html: `<p class="kicker">Psicossomática</p>
    <h2>Julio de Melo Filho</h2>
    <p class="body">Referência pioneira no pensamento psicossomático brasileiro: a integração indissociável entre mente, corpo e sofrimento humano no exame clínico.</p>
    <p class="sub">O sintoma físico nunca existe em vácuo biográfico.</p>`
  },

  // 24. Regulação emocional (Item 11)
  {
    fx: "rise",
    html: `<p class="kicker">Clínica</p>
    <h2>Regulação emocional</h2>
    <p class="body">Capacidade biológica e aprendida de monitorar, modular e responder às experiências emocionais sem ser paralisado ou governado por elas.</p>
    <p class="sub">Ferramenta clínica e humana central para o paciente e para o médico diante do caso difícil.</p>`
  },

  // 25. Permissão para sentir: Marc Brackett (Item 12)
  {
    fx: "fade",
    html: `<p class="kicker">Referência em inteligência emocional</p>
    <h2>Marc Brackett</h2>
    <p class="body">Autor de <em>Permission to Feel</em> (em português: <em>Permissão para sentir</em>).</p>
    <p class="sub">Dar nome ao que se sente é a condição prévia para qualquer intervenção assertiva sobre o comportamento.</p>`
  },

  // 26. Second brain (Item 13)
  {
    fx: "slide",
    html: `<p class="kicker">Gestão do conhecimento pessoal</p>
    <h2>Segundo cérebro (Second Brain)</h2>
    <p class="body">A ideia de um sistema externo e estruturado de notas, prontuário de raciocínio e recuperação rápida de informação.</p>
    <p class="sub">Um método para proteger a memória de trabalho do médico — não um discurso comercial de produto.</p>`
  },

  // 27. APIs em uma frase simples (Item 14)
  {
    fx: "rise",
    html: `<p class="kicker">Tecnologia descomplicada</p>
    <h2>API: uma porta entre dois programas.</h2>
    <p class="body">Interface de Programação de Aplicação em uma frase simples: é o canal padronizado que permite a um sistema conversar com outro de forma controlada e segura.</p>`
  },

  // 28. Quatro ferramentas (Item 15)
  {
    fx: "fade",
    html: `<p class="kicker">Painel prático · quatro ferramentas</p>
    <h2>Grok · Cursor · ChatGPT · Claude</h2>
    <div class="tools-grid">
      <div class="tool-card">
        <h3>Grok</h3>
        <p>Acesso e rastreamento de discussões em tempo real e contexto de rede.</p>
      </div>
      <div class="tool-card">
        <h3>Cursor</h3>
        <p>Ambiente de desenvolvimento e orquestração técnica profunda com arquivos locais.</p>
      </div>
      <div class="tool-card">
        <h3>ChatGPT</h3>
        <p>Exploração ampla de ideias, síntese dialógica e prototipagem de prompts.</p>
      </div>
      <div class="tool-card">
        <h3>Claude</h3>
        <p>Leitura de longos documentos com nuance semântica, rigor analítico e redação estruturada.</p>
      </div>
    </div>
    <p class="sub">Sem ranking nem benchmarks inventados: cada uma cumpre uma função no fluxo de trabalho.</p>`
  },

  // 29. LTV na relação clínica (Item 16)
  {
    fx: "slide",
    html: `<p class="kicker">Conceito ressignificado</p>
    <h2>LTV: tempo de vida da relação clínica</h2>
    <p class="body">Não é métrica financeira de receita nem fórmula de marketing.</p>
    <p class="body" style="margin-top:0.8rem">É o <strong>tempo de vida do vínculo de cuidado</strong> entre o médico, o paciente e a família ao longo das fases do desenvolvimento.</p>`
  },

  // 30. FOMO: perda honesta (Item 17)
  {
    fx: "rise",
    html: `<p class="kicker">Atenção plena</p>
    <h2>FOMO: a perda honesta</h2>
    <p class="body">Não precisamos de estatísticas fabricadas para sentir o medo de ficar para trás.</p>
    <p class="body" style="margin-top:0.8rem">A perda real no consultório é <strong>o minuto em que você desviou o olho do paciente para a tela</strong> e <strong>a pergunta essencial que você deixou de fazer</strong> por pressa.</p>`
  },

  // 31. Exercício do papel (Item 18)
  {
    fx: "fade",
    html: `<p class="kicker">Exercício do papel no consultório</p>
    <h2>Sentimento de um lado · Emoção do outro</h2>
    <p class="body">Pegue uma folha em branco na mesa e trace uma linha ao meio:</p>
    <ul class="list">
      <li><strong>De um lado:</strong> o sentimento relatado e percebido conscientemente.</li>
      <li><strong>Do outro lado:</strong> a emoção corporal e fisiológica disparada no momento.</li>
    </ul>
    <p class="sub">Um exercício analógico simples para desemaranhar o caso antes de recorrer a qualquer tela.</p>`
  },

  // 32. Frases do consultório como prompts (Item 19)
  {
    fx: "slide",
    cls: "question",
    html: `<p class="kicker">Frases do consultório como prompts de reflexão</p>
    <h2>Perguntas que a sala e a prática trazem</h2>
    <ul class="list">
      <li>O que você faz agora?</li>
      <li>Como você chegou a esse ponto?</li>
      <li>O que é open source?</li>
      <li>O que são esses tantos termos em inglês?</li>
      <li>Eu tenho que aprender mesmo? Não tenho? É obrigatório?</li>
    </ul>
    <p class="sub">Perguntas da sala de aula e da profissão — não atribuídas a pacientes reais.</p>`
  },

  // 33. Cinco portas de acesso: visão geral (Item 22 + preservado)
  {
    fx: "rise",
    html: `<p class="kicker">As cinco portas de acesso</p>
    <h2>Onde o dado fica e como acessar</h2>
    <ul class="list">
      <li><strong>1 · Paga com critério:</strong> orçamento claro e recibo do que entra no corpus.</li>
      <li><strong>2 · Desconto institucional (.edu / .br):</strong> só se a página oficial da empresa aceita.</li>
      <li><strong>3 · Open source:</strong> código e modelos auditáveis — não é “grátis na internet”.</li>
      <li><strong>4 · Gratuita com preço zero hoje:</strong> teto claro, sem colar dados de pacientes reais.</li>
      <li><strong>5 · Trial:</strong> teste cronometrado em caso fictício controlado.</li>
    </ul>`
  },

  // 34. Porta 1: Paga
  {
    fx: "fade",
    html: `<p class="kicker">Porta · 1</p>
    <h2>1 · Paga com critério</h2>
    <p class="body">Base paga não é problema quando há transparência. Peça garantia contratual do que entra no corpus de treino e do que fica isolado.</p>`
  },

  // 35. Porta 2: Desconto institucional
  {
    fx: "slide",
    html: `<p class="kicker">Porta · 2</p>
    <h2>2 · Desconto institucional (.edu ou .br)</h2>
    <p class="body">Só vale se a <strong>página oficial de educação da própria empresa</strong> aceitar formalmente o domínio acadêmico ou institucional.</p>
    <p class="sub">Nada de atalhos duvidosos ou gambiarras de e-mail.</p>`
  },

  // 36. Porta 3: Open source
  {
    fx: "rise",
    html: `<p class="kicker">Porta · 3</p>
    <h2>3 · Open source não é “grátis na internet”</h2>
    <p class="body">Open source significa código aberto e pesos inspecionáveis rodando na sua máquina ou nuvem privada. Transparência para auditar onde o dado fica.</p>`
  },

  // 37. Porta 4: Gratuita com preço zero hoje
  {
    fx: "fade",
    html: `<p class="kicker">Porta · 4</p>
    <h2>4 · Gratuita com preço zero hoje</h2>
    <p class="body">Serviço com preço zero hoje tem teto e modelo de monetização. Use para mapeamento e rascunhos gerais — <strong>nunca cole dados de pacientes reais</strong>.</p>`
  },

  // 38. Porta 5: Trial em caso fictício
  {
    fx: "slide",
    html: `<p class="kicker">Porta · 5</p>
    <h2>5 · Trial em caso fictício</h2>
    <p class="body">Teste com pergunta controlada, em caso estritamente fictício. Ligue o cronômetro: compare o tempo economizado com o tempo gasto na checagem.</p>`
  },

  // 39. Ser cara dura: e-mail ousado
  {
    fx: "rise",
    html: `<p class="kicker">Ser cara dura</p>
    <h2>Não é agressão. É e-mail ousado em cinco linhas.</h2>
    <p class="body">Peça acesso a artigos fechados, tabelas e trials institucionais. Identifique-se com CRM, ofereça contrapartida responsável e assine. O pior “não” ainda é barato.</p>`
  },

  // 40. Prompts pedagógicos 1 e 2
  {
    fx: "fade",
    html: `<p class="kicker">A IA ensina a si mesma · Prompts de treino</p>
    <h2>Definição e Contraprova</h2>
    <div class="prompt">1. Explique [conceito] como se eu fosse colega de plantão. Depois liste o que você pode estar inventando.</div>
    <div class="prompt" style="margin-top:1rem">2. Argumente contra o diagnóstico de [X] neste caso. Cite o que faltaria no prontuário para sustentar [X].</div>`
  },

  // 41. Prompts pedagógicos 3 e 4
  {
    fx: "slide",
    html: `<p class="kicker">A IA ensina a si mesma · Prompts de rigor</p>
    <h2>Fonte e Custo do Erro</h2>
    <div class="prompt">3. Liste apenas referências verificáveis (DOI ou guideline). Se não tiver, diga “não sei” sem completar com chute.</div>
    <div class="prompt" style="margin-top:1rem">4. Se [hipótese] estiver errada, quais danos em 30, 90 e 365 dias? Separe dano ao paciente, à família e ao sistema.</div>`
  },

  // 42. Mapa de autores (Item 20)
  {
    fx: "rise",
    html: `<p class="kicker">Constelação intelectual · mapa de autores</p>
    <h2>Vozes e exemplos citados na sala</h2>
    <ul class="list">
      <li><strong>Robert Leahy</strong> · Exemplo citado · Terapia cognitivo-comportamental e regulação emocional</li>
      <li><strong>Aaron Beck</strong> · Exemplo citado · Terapia cognitiva</li>
      <li><strong>Stephen Stahl</strong> · Exemplo citado · Psicofarmacologia clínica</li>
      <li><strong>Carl Rogers</strong> · Exemplo citado · Abordagem centrada na pessoa</li>
      <li><strong>Viktor Frankl</strong> · Exemplo citado · Logoterapia e sentido</li>
      <li><strong>Fiódor Dostoiévski</strong> · Exemplo citado · Literatura e psiquismo</li>
      <li><strong>Friedrich Nietzsche</strong> · Exemplo citado · Filosofia</li>
      <li><strong>António Damásio</strong> · Exemplo citado · Neurobiologia da emoção e sentimento</li>
      <li><strong>Diane Papalia</strong> · Exemplo citado · Desenvolvimento humano</li>
      <li><strong>David Barlow</strong> · Exemplo citado · Protocolo unificado em transtornos emocionais</li>
      <li><strong>Matos Abreu</strong> · Exemplo citado</li>
      <li><strong>Marlon Diniz</strong> · Exemplo citado</li>
      <li><strong>Jacob Moreno</strong> · Exemplo citado · Psicodrama e teoria dos papéis</li>
    </ul>
    <p class="sub">Nomes e papéis públicos como exemplos citados na fala — não constituem lista de livros que ele ensina. Sem páginas ou citações inventadas.</p>`
  },

  // 43. Mapa temporal da sessão: 10 blocos (Item 21)
  {
    fx: "fade",
    html: `<p class="kicker">Estrutura da fala</p>
    <h2>Mapa de 50 minutos + 10 de perguntas · Dez blocos</h2>
    <ul class="list">
      <li><strong>1 · Abertura e contrato ético</strong> (5 min)</li>
      <li><strong>2 · Ruído versus Real</strong> (5 min)</li>
      <li><strong>3 · Psicopatologia no nicho</strong> (5 min)</li>
      <li><strong>4 · Fontes verificadas</strong> (5 min)</li>
      <li><strong>5 · O diagnóstico que a IA não fecha</strong> (5 min)</li>
      <li><strong>6 · Emoção, sentimento e comportamento</strong> (5 min)</li>
      <li><strong>7 · Fundamentos e autores</strong> (5 min)</li>
      <li><strong>8 · As quatro ferramentas e APIs</strong> (5 min)</li>
      <li><strong>9 · As cinco portas e a ousadia</strong> (5 min)</li>
      <li><strong>10 · Distorção do tempo e fecho</strong> (5 min)</li>
    </ul>
    <p class="sub">+ 10 minutos dedicados a perguntas da sala. Corte de contingência se o tempo apertar: encurte o bloco da ousadia; <strong>nunca corte ruído/real, o menu de acesso ou o presente</strong>.</p>`
  },

  // 44. Fecho da revisão
  {
    fx: "slide",
    html: `<p class="kicker">Fecho</p>
    <h2>Ruído entra fácil. Real pede equipe, fonte e tempo.</h2>
    <p class="body">Estamos aqui pra aprendermos de maneira simples, eficiente e eficaz. O julgamento e a assinatura continuam humanos.</p>`
  },

  // 45. Presente da palestra: Distorção do Tempo (Item 22)
  {
    fx: "rise",
    html: `<p class="kicker">Presente da palestra</p>
    <h2>Distorção do Tempo</h2>
    <p class="body">O presente que fica com você: o filtro em quatro perguntas, as cinco portas com onde o dado fica, os quatro prompts de ensino, o e-mail em cinco linhas e o relógio de checagem.</p>
    <p class="sub"><a class="gold" href="presente/index.html" onclick="event.stopPropagation()">Abrir o presente completo →</a></p>`
  }
];

let i = 0;
const stage = document.getElementById("stage");
const bar = document.getElementById("progress");

function render() {
  const s = screens[i];
  stage.innerHTML = `<article class="screen active fx-${s.fx} ${s.cls || ""}">${s.html}</article>`;
  bar.style.width = ((i + 1) / screens.length) * 100 + "%";
}

function next() {
  if (i < screens.length - 1) {
    i++;
    render();
  }
}

function prev() {
  if (i > 0) {
    i--;
    render();
  }
}

stage.addEventListener("click", e => {
  if (e.target.closest("a")) return;
  next();
});

document.getElementById("next").addEventListener("click", e => {
  e.stopPropagation();
  next();
});

document.getElementById("prev").addEventListener("click", e => {
  e.stopPropagation();
  prev();
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
    e.preventDefault();
    next();
  }
  if (e.key === "ArrowLeft" || e.key === "PageUp") {
    e.preventDefault();
    prev();
  }
});

render();
console.log("screens loaded:", screens.length);
