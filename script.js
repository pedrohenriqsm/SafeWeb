const conteudo = document.getElementById("conteudo");

function trocarTela(html) {
    conteudo.classList.remove("entrando");

    setTimeout(() => {
        conteudo.innerHTML = html;
        conteudo.classList.add("entrando");
    }, 120);
}

function ativarMenu(botaoAtivo) {
    const botoes = document.querySelectorAll("nav button");

    botoes.forEach(botao => {
        botao.classList.remove("ativo");
    });

    if (botaoAtivo) {
        botaoAtivo.classList.add("ativo");
    }
}

function mostrarInicio(botao) {
    ativarMenu(botao);

    trocarTela(`
        <section class="hero">
            <div class="hero-topo">
                <span class="secao">SAFEWEB // 01</span>
                <span class="status">SISTEMA ONLINE</span>
            </div>

            <div class="hero-conteudo">
                <div>
                    <h2>Não seja a próxima vítima.</h2>

                    <p>
                        Golpes digitais estão cada vez mais convincentes.
                        Conheça as principais ameaças e aprenda a identificar
                        sinais de perigo antes que seja tarde.
                    </p>

                    <div class="acoes">
                        <button onclick="mostrarGolpes()">
                            Explorar ameaças
                        </button>

                        <span class="indicador">01 / 04</span>
                    </div>
                </div>

                <div class="painel-destaque">
                    <span>ALERTA DIGITAL</span>

                    <strong>
                        PARE.<br>
                        CONFIRA.<br>
                        PROTEJA.
                    </strong>

                    <small>
                        Segurança começa antes do clique.
                    </small>
                </div>
            </div>
        </section>
    `);
}

function mostrarGolpes(botao) {
    ativarMenu(botao);

    trocarTela(`
        <section class="pagina">
            <div class="hero-topo">
                <span class="secao">AMEAÇAS // 02</span>
                <span class="status">4 RISCOS MAPEADOS</span>
            </div>

            <div class="cabecalho-pagina">
                <div>
                    <h2>Nem tudo é o que parece.</h2>

                    <p>
                        Criminosos usam mensagens, páginas e perfis falsos
                        para induzir decisões rápidas e roubar informações.
                    </p>
                </div>

                <span class="numero-gigante">02</span>
            </div>

            <div class="cards">
                <article class="card">
                    <span>01</span>
                    <h3>Links falsos</h3>
                    <p>
                        Mensagens que levam para páginas criadas para roubar
                        senhas ou dados pessoais.
                    </p>
                </article>

                <article class="card">
                    <span>02</span>
                    <h3>PIX falso</h3>
                    <p>
                        Cobranças, QR Codes e pedidos de transferência enviados
                        por perfis ou contatos falsos.
                    </p>
                </article>

                <article class="card">
                    <span>03</span>
                    <h3>Perfis falsos</h3>
                    <p>
                        Contas copiadas para enganar amigos, familiares
                        ou clientes.
                    </p>
                </article>

                <article class="card">
                    <span>04</span>
                    <h3>Falso banco</h3>
                    <p>
                        Mensagens que simulam atendimento bancário e pedem
                        códigos ou dados de acesso.
                    </p>
                </article>
            </div>

            <div class="acoes">
                <button onclick="mostrarProtecao()">
                    Aprender a se proteger
                </button>

                <span class="indicador">02 / 04</span>
            </div>
        </section>
    `);
}

function mostrarProtecao(botao) {
    ativarMenu(botao);

    trocarTela(`
        <section class="pagina">
            <div class="hero-topo">
                <span class="secao">DEFESA // 03</span>
                <span class="status">PROTOCOLO ATIVO</span>
            </div>

            <div class="cabecalho-pagina">
                <div>
                    <h2>Proteção começa com atenção.</h2>

                    <p>
                        Algumas atitudes simples reduzem muito as chances
                        de você cair em uma fraude digital.
                    </p>
                </div>

                <span class="numero-gigante">03</span>
            </div>

            <div class="cards">
                <article class="card">
                    <span>01</span>
                    <h3>Evite links suspeitos</h3>
                    <p>
                        Não abra links recebidos de fontes desconhecidas
                        ou mensagens inesperadas.
                    </p>
                </article>

                <article class="card">
                    <span>02</span>
                    <h3>Use verificação em duas etapas</h3>
                    <p>
                        Adicione uma segunda camada de proteção às suas contas.
                    </p>
                </article>

                <article class="card">
                    <span>03</span>
                    <h3>Confira o endereço</h3>
                    <p>
                        Observe sempre o domínio do site antes de inserir
                        qualquer informação.
                    </p>
                </article>

                <article class="card">
                    <span>04</span>
                    <h3>Proteja seus códigos</h3>
                    <p>
                        Nunca compartilhe códigos de segurança ou confirmação.
                    </p>
                </article>
            </div>

            <div class="acoes">
                <button onclick="mostrarQuiz()">
                    Testar conhecimento
                </button>

                <span class="indicador">03 / 04</span>
            </div>
        </section>
    `);
}

function mostrarQuiz(botao) {
    ativarMenu(botao);

    trocarTela(`
        <section class="pagina quiz">
            <div class="hero-topo">
                <span class="secao">TESTE // 04</span>
                <span class="status">SIMULAÇÃO</span>
            </div>

            <div class="cabecalho-pagina">
                <div>
                    <h2>Você cairia nesse golpe?</h2>

                    <p>
                        Você recebe uma mensagem dizendo que ganhou um prêmio
                        e precisa acessar um link imediatamente.
                    </p>
                </div>

                <span class="numero-gigante">04</span>
            </div>

            <div class="quiz-caixa">
                <span class="quiz-label">MENSAGEM RECEBIDA</span>

                <p class="mensagem-falsa">
                    “Parabéns! Você ganhou um prêmio exclusivo.
                    Clique agora no link abaixo para resgatar.”
                </p>

                <div class="quiz-opcoes">
                    <button onclick="responderQuiz('seguro')">
                        Acessar o link
                    </button>

                    <button onclick="responderQuiz('suspeito')">
                        Ignorar e verificar
                    </button>
                </div>

                <p id="resultado"></p>
            </div>

            <div class="acoes">
                <button onclick="mostrarInicio()">
                    Voltar ao início
                </button>

                <span class="indicador">04 / 04</span>
            </div>
        </section>
    `);
}

function responderQuiz(resposta) {
    const resultado = document.getElementById("resultado");

    if (resposta === "suspeito") {
        resultado.className = "resultado certo";
        resultado.innerHTML =
            "✓ CORRETO — mensagens inesperadas com urgência podem indicar tentativa de golpe.";
    } else {
        resultado.className = "resultado errado";
        resultado.innerHTML =
            "✕ CUIDADO — nunca acesse links de prêmios inesperados sem verificar a origem.";
    }
}