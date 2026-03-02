// Função auxiliar para exibir mensagens na tela
function mostrarMensagem(elementoId, texto, cor) {
    const el = document.getElementById(elementoId);
    if(el) {
        el.textContent = texto;
        el.style.color = cor;
        el.style.display = 'block';
        setTimeout(() => el.style.display = 'none', 4000);
    }
}

// --- LÓGICA DA PÁGINA DE GUIAS ---
const formGuia = document.getElementById('form-guia');
if (formGuia) {
    formGuia.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const numeroGuia = document.getElementById('numeroGuia').value;
        const dadosGuia = {
            numeroGuia: parseInt(numeroGuia),
            unidadeSolicitante: document.getElementById('unidadeSolicitante').value,
            dataRecebimento: document.getElementById('dataRecebimento').value,
            horaRecebimento: document.getElementById('horaRecebimento').value,
            status: document.getElementById('status').value,
            dataArquivamento: document.getElementById('dataArquivamento').value || null,
            caixaLocalizacao: document.getElementById('caixaLocalizacao').value || null,
            observacao: document.getElementById('observacao').value || ""
        };

        try {
            // Puxa as guias que já existem no navegador (se não existir, cria uma lista vazia)
            let guiasSalvas = JSON.parse(localStorage.getItem('bd_guias')) || [];
            
            // Adiciona a nova guia na lista
            guiasSalvas.push(dadosGuia);
            
            // Salva a lista atualizada de volta no navegador
            localStorage.setItem('bd_guias', JSON.stringify(guiasSalvas));

            mostrarMensagem('msg-guia', `Guia ${numeroGuia} salva localmente para teste!`, 'green');
            formGuia.reset();
            
            // Exibe no console para você conferir (Aperte F12 no navegador para ver)
            console.log("Guias no Banco de Dados Local:", guiasSalvas);
            
        } catch (error) {
            console.error("Erro:", error);
            mostrarMensagem('msg-guia', `Erro ao salvar: ${error.message}`, 'red');
        }
    });
}

// --- LÓGICA DA PÁGINA DE PROCESSOS ---
const formProcesso = document.getElementById('form-processo');
if (formProcesso) {
    formProcesso.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const numeroProcesso = document.getElementById('numeroProcesso').value;

        const dadosProcesso = {
            numeroProcesso: numeroProcesso,
            guiaRemessa: parseInt(document.getElementById('guiaRemessa').value),
            dataAbertura: document.getElementById('dataAbertura').value || null,
            dataRecebimento: document.getElementById('dataRecebimentoProc').value || null,
            assunto: document.getElementById('assunto').value || "",
            interessado: document.getElementById('interessado').value || "",
            qntFolhas: parseInt(document.getElementById('qntFolhas').value) || null,
            tipoProcessoSEI: document.getElementById('tipoProcessoSEI').value || "",
            status: document.getElementById('statusProc').value,
            anexo: document.getElementById('anexo').value || "",
            qntPaginasAnexo: document.getElementById('qntPaginasAnexo').value || "",
            dataDigitalizacao: document.getElementById('dataDigitalizacao').value || null,
            dataInsercaoSEI: document.getElementById('dataInsercaoSEI').value || null,
            qntImagens: parseInt(document.getElementById('qntImagens').value) || null,
            caixaLocalizacao: document.getElementById('caixaLocalizacaoProc').value || ""
        };

        try {
            // Puxa os processos que já existem no navegador
            let processosSalvos = JSON.parse(localStorage.getItem('bd_processos')) || [];
            
            // Adiciona o novo processo
            processosSalvos.push(dadosProcesso);
            
            // Salva de volta
            localStorage.setItem('bd_processos', JSON.stringify(processosSalvos));

            mostrarMensagem('msg-processo', `Processo ${numeroProcesso} salvo localmente para teste!`, 'green');
            formProcesso.reset();

            // Exibe no console para você conferir
            console.log("Processos no Banco de Dados Local:", processosSalvos);

        } catch (error) {
            console.error("Erro:", error);
            mostrarMensagem('msg-processo', `Erro ao salvar: ${error.message}`, 'red');
        }
    });
}
