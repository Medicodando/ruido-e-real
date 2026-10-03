const screens=[{fx:"fade",html:`<p class="kicker">Palestra · 50 min + 10 de perguntas</p>
    <h1>IAs e Novas Tecnologias no auxílio dos Diagnósticos Assertivos</h1>
    <p class="lead">O que é <strong>RUÍDO</strong> e o que é <strong>REAL</strong>?</p>
    <p class="sub">Harrison Oliveira Santiago · CRM 30.148 BA</p>`},{fx:"rise",html:`<p class="kicker">Contrato com a sala</p>
    <h2>Estamos aqui pra aprendermos de maneira simples, eficiente e eficaz.</h2>
    <p class="body">Uma ideia por tela. Você decide o ritmo. No fim, um presente que fica com você.</p>`},{fx:"slide",cls:"question",html:`<p class="kicker">Pergunta</p>
    <h2>O que é ruído e o que é real no seu dia a dia clínico?</h2>
    <span class="q-tag">A sala responde</span>`},{fx:"fade",html:`<p class="kicker">Quem fala</p>
    <h2>Harrison Oliveira Santiago</h2>
    <p class="body">CRM 30.148 BA. Médico. Neurocientista.</p>
    <p class="sub">Telemédico desde 2020 · Doctoralia · Noa Notes</p>`},{fx:"slide",html:`<p class="kicker">Formação</p>
    <h2>Pós e segunda graduação</h2>
    <ul class="list">
      <li>CBI of Miami · TEA, TDAH, Altas Habilidades e Neurociências</li>
      <li>Unyleya · Telemedicina e Telessaúde: e-Health</li>
      <li>UniAmérica e CETRUS · Psiquiatria</li>
      <li>Engenharia de Arquitetura de Software e Inteligência Artificial</li>
    </ul>`},{fx:"rise",html:`<p class="kicker">Atuação</p>
    <h2>Clínica, gestão e fronteira tecnológica</h2>
    <p class="body">Mais Médicos e gestão. Progressão em IA, cybersecurity e neurodivergências — sem trocar o julgamento clínico por uma tela.</p>`},{fx:"slide",cls:"question",html:`<p class="kicker">Pergunta</p>
    <h2>O que você faz agora quando a IA te entrega um “diagnóstico”?</h2>
    <span class="q-tag">Guarda para o fim</span>`},{fx:"fade",html:`<p class="kicker">Contrato</p>
    <h2>Hoje não vendemos ferramenta.</h2>
    <p class="body">Vendemos filtro. Ruído entra barato. Real custa julgamento, tempo e fonte.</p>`},{fx:"rise",html:`<p class="kicker">Caso · voto silencioso</p>
    <h2>Um adolescente. Queixa de “falta de foco”. Relatório de IA sugere TDAH.</h2>
    <ul class="list">
      <li>A — Aceito e medicamos</li>
      <li>B — Peço segunda opinião humana</li>
      <li>C — Reabro história e contexto</li>
      <li>D — Testo a fonte do modelo</li>
    </ul>
    <p class="sub">Não precisa falar. Só escolhe.</p>`},{fx:"slide",html:`<p class="kicker">Ruído</p>
    <h2>Ruído parece certeza.</h2>
    <p class="body">É texto fluente, estatística órfã, paper sem método, prompt que confirma o que você já queria ouvir.</p>`},{fx:"fade",html:`<p class="kicker">Real</p>
    <h2>Real sobrevive a três perguntas.</h2>
    <ul class="list">
      <li>De onde veio?</li>
      <li>Quem revisou?</li>
      <li>O que muda se eu estiver errado?</li>
    </ul>`},{fx:"rise",html:`<p class="kicker">Exemplo fictício</p>
    <h2>A sala aponta o furo</h2>
    <p class="body">“Modelo X acerta 94% dos diagnósticos de TEA em 30 segundos.” Sem sample, sem gold standard, sem quem errou. Onde está o real?</p>
    <p class="sub">Fictício de propósito. Treino de olho.</p>`},{fx:"slide",html:`<p class="kicker">Psicopatologia · nicho</p>
    <h2>Por que psicopatologia entra aqui?</h2>
    <p class="body">Porque o ruído adora rótulo rápido. Em neurodesenvolvimento e em trajetórias de personalidade, rótulo barato dói caro.</p>`},{fx:"fade",html:`<p class="kicker">Fonte verificada · 1</p>
    <h2>Atuação multiprofissional em transtornos do neurodesenvolvimento</h2>
    <p class="body">Revisão coautorada. Dez estudos, dezembro de 2024 a abril de 2025. Equipe multiprofissional favorece diagnósticos mais precisos.</p>
    <p class="sub">TEA · TDAH · transtorno do desenvolvimento da linguagem · deficiência intelectual</p>`},{fx:"rise",html:`<p class="kicker">Fonte verificada · 1 · âncora</p>
    <h2>Penner et al., JAMA Network Open, 2023</h2>
    <p class="body">Concordância do diagnóstico de autismo: pediatras versus equipe multidisciplinar especializada. O paper lembra: quem olha juntos muda o que se vê.</p>`},{fx:"slide",html:`<p class="kicker">Fonte verificada · 2</p>
    <h2>Entre a infância e a psicopatia</h2>
    <p class="body"><em>Lumen et Virtus</em>, 2025, v. 16, n. 49, p. 6491–6503. DOI 10.56238/levv16n49-028.</p>
    <p class="sub">Harrison Oliveira Santiago · graduado em Medicina · UESC</p>`},{fx:"fade",html:`<p class="kicker">Fonte verificada · 2 · o que o texto liga</p>
    <h2>Transtorno de personalidade antissocial em jovens</h2>
    <p class="body">O texto associa a trajetória a TDAH, transtorno de conduta e menor volume de matéria cinzenta na amígdala e em estruturas límbicas.</p>
    <p class="sub">Não é atalho de rótulo. É mapa de risco e de cuidado.</p>`},{fx:"slide",cls:"question",html:`<p class="kicker">Pergunta</p>
    <h2>Como você chegou a esse ponto diagnóstico?</h2>
    <span class="q-tag">A sala responde</span>`},{fx:"rise",html:`<p class="kicker">Filtro em cinco passos</p>
    <h2>1 · Nomeie a hipótese sem casar com ela</h2>
    <p class="body">Escreva o que você suspeita. Deixe espaço para o que ainda não sabe.</p>`},{fx:"fade",html:`<p class="kicker">Filtro · 2</p>
    <h2>2 · Separe dado, inferência e narrativa</h2>
    <p class="body">O que foi medido. O que foi interpretado. O que a IA costurou por estilo.</p>`},{fx:"slide",html:`<p class="kicker">Filtro · 3</p>
    <h2>3 · Exija fonte rastreável</h2>
    <p class="body">Paper, guideline, prontuário, exame. Se não cabe em uma citação, não cabe em uma decisão.</p>`},{fx:"rise",html:`<p class="kicker">Filtro · 4</p>
    <h2>4 · Busque a contraprova</h2>
    <p class="body">Peça à IA o argumento contrário. Se ela só elogia sua hipótese, você está no eco.</p>`},{fx:"fade",html:`<p class="kicker">Filtro · 5</p>
    <h2>5 · Decida com custo do erro à vista</h2>
    <p class="body">O que acontece se o rótulo estiver errado? Quem paga? Quanto tempo leva para desfazer?</p>`},{fx:"slide",cls:"question",html:`<p class="kicker">Pergunta</p>
    <h2>Você lê o paper — ou só o resumo que a IA fez do paper?</h2>
    <span class="q-tag">Guarda para o fim</span>`},{fx:"rise",cls:"question",html:`<p class="kicker">Pergunta</p>
    <h2>Open source e inglês são obstáculo — ou porta?</h2>
    <span class="q-tag">A sala responde</span>`},{fx:"fade",cls:"question",html:`<p class="kicker">Pergunta</p>
    <h2>O que deveria ser obrigatório antes de confiar numa saída de modelo?</h2>
    <span class="q-tag">Guarda para o fim</span>`},{fx:"slide",html:`<p class="kicker">Cinco portas de acesso</p>
    <h2>1 · Paga com critério</h2>
    <p class="body">Base paga não é pecado. É orçamento com recibo. Peça o que entra no corpus e o que fica de fora.</p>`},{fx:"fade",html:`<p class="kicker">Porta · 2</p>
    <h2>2 · .edu e .br</h2>
    <p class="body">Universidade e domínio local. Nem sempre abertos — mas muitas vezes rastreáveis.</p>`},{fx:"rise",html:`<p class="kicker">Porta · 3</p>
    <h2>3 · Open source</h2>
    <p class="body">Código e dados que você pode inspecionar. Transparência não substitui método — mas permite auditar.</p>`},{fx:"slide",html:`<p class="kicker">Porta · 4</p>
    <h2>4 · Gratuito com limite</h2>
    <p class="body">Free tem teto. Use para mapear. Não use para decidir sozinho o que a clínica não viu.</p>`},{fx:"fade",html:`<p class="kicker">Porta · 5</p>
    <h2>5 · Trial</h2>
    <p class="body">Teste com pergunta controlada. Cronometre. Anote o que a ferramenta inventou.</p>`},{fx:"rise",html:`<p class="kicker">Ser cara dura</p>
    <h2>Não é agressão. É e-mail ousado com pedido claro.</h2>
    <p class="body">Peça acesso, paper, planilha, trial. Assine com CRM. Ofereça devolutiva. O pior “não” ainda é barato.</p>`},{fx:"slide",html:`<p class="kicker">A IA ensina a si mesma · 1</p>
    <h2>Prompt de definição</h2>
    <div class="prompt">Explique [conceito] como se eu fosse colega de plantão. Depois liste o que você pode estar inventando.</div>`},{fx:"fade",html:`<p class="kicker">Prompt · 2</p>
    <h2>Prompt de contraprova</h2>
    <div class="prompt">Argumente contra o diagnóstico de [X] neste caso. Cite o que faltaria no prontuário para sustentar [X].</div>`},{fx:"rise",html:`<p class="kicker">Prompt · 3</p>
    <h2>Prompt de fonte</h2>
    <div class="prompt">Liste apenas referências verificáveis (DOI ou guideline). Se não tiver, diga “não sei” sem completar com chute.</div>`},{fx:"slide",html:`<p class="kicker">Prompt · 4</p>
    <h2>Prompt de custo do erro</h2>
    <div class="prompt">Se [hipótese] estiver errada, quais danos em 30, 90 e 365 dias? Separe dano ao paciente, à família e ao sistema.</div>`},{fx:"fade",html:`<p class="kicker">Distorção do tempo</p>
    <h2>ROI aqui não é dinheiro. É tempo devolvido ao julgamento.</h2>
    <p class="body">Se a ferramenta te poupa vinte minutos de busca e te custa quarenta de checagem, ela não distorce a seu favor.</p>`},{fx:"rise",html:`<p class="kicker">Fim · respostas curtas</p>
    <h2>O que fazer com a saída da IA?</h2>
    <p class="body">Tratar como rascunho. Rodar o filtro. Só então decidir.</p>`},{fx:"slide",html:`<p class="kicker">Fim · respostas curtas</p>
    <h2>Paper ou resumo?</h2>
    <p class="body">No mínimo o abstract + métodos + limitações. Resumo sem método é ruído elegantemente escrito.</p>`},{fx:"fade",html:`<p class="kicker">Fim · respostas curtas</p>
    <h2>Obrigatório antes de confiar</h2>
    <ul class="list">
      <li>Fonte rastreável</li>
      <li>Contraprova pedida</li>
      <li>Custo do erro nomeado</li>
    </ul>`},{fx:"rise",html:`<p class="kicker">Fecho</p>
    <h2>Ruído entra fácil. Real pede equipe, fonte e tempo.</h2>
    <p class="body">Estamos aqui pra aprendermos de maneira simples, eficiente e eficaz. O presente fica com você.</p>`},{fx:"fade",html:`<p class="kicker">Presente</p>
    <h2>Distorção do Tempo</h2>
    <p class="body">Filtro em quatro perguntas, cinco portas, quatro frases e um e-mail ousado — tudo no site.</p>
    <p class="sub"><a class="gold" href="presente/index.html" onclick="event.stopPropagation()">Abrir o presente →</a></p>`}];
let i=0;const stage=document.getElementById("stage"),bar=document.getElementById("progress");
function render(){const s=screens[i];stage.innerHTML=`<article class="screen active fx-${s.fx} ${s.cls||""}">${s.html}</article>`;bar.style.width=((i+1)/screens.length)*100+"%";}
function next(){if(i<screens.length-1){i++;render();}}
function prev(){if(i>0){i--;render();}}
stage.addEventListener("click",e=>{if(e.target.closest("a"))return;next();});
document.getElementById("next").addEventListener("click",e=>{e.stopPropagation();next();});
document.getElementById("prev").addEventListener("click",e=>{e.stopPropagation();prev();});
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key===" "||e.key==="PageDown"){e.preventDefault();next();}if(e.key==="ArrowLeft"||e.key==="PageUp"){e.preventDefault();prev();}});
render();
console.log("screens",screens.length);
