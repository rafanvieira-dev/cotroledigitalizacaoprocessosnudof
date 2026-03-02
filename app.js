// ... (mantenha o código de guardar Guias e Processos que criámos antes) ...

// --- LÓGICA DA LISTAGEM DE GUIAS ---
const corpoTabelaGuias = document.getElementById('corpo-tabela-guias');
if (corpoTabelaGuias) {
    // Vai buscar os dados ao LocalStorage
    const guiasSalvas = JSON.parse(localStorage.getItem('bd_guias')) || [];
    
    // Limpa a tabela antes de preencher
    corpoTabelaGuias.innerHTML = '';

    // Se não houver dados, mostra uma mensagem
    if (guiasSalvas.length === 0) {
        corpoTabelaGuias.innerHTML = '<tr><td colspan="5" style="text-align:center;">Nenhuma guia registada ainda.</td></tr>';
    } else {
        // Percorre cada guia guardada e cria uma linha na tabela
        guiasSalvas.forEach(guia => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${guia.numeroGuia}</td>
                <td>${guia.unidadeSolicitante}</td>
                <td>${guia.dataRecebimento}</td>
                <td>${guia.status}</td>
                <td>${guia.caixaLocalizacao || '-'}</td>
            `;
            corpoTabelaGuias.appendChild(tr);
        });
    }
}

// --- LÓGICA DA LISTAGEM DE PROCESSOS ---
const corpoTabelaProcessos = document.getElementById('corpo-tabela-processos');
if (corpoTabelaProcessos) {
    // Vai buscar os dados ao LocalStorage
    const processosSalvos = JSON.parse(localStorage.getItem('bd_processos')) || [];
    
    corpoTabelaProcessos.innerHTML = '';

    if (processosSalvos.length === 0) {
        corpoTabelaProcessos.innerHTML = '<tr><td colspan="6" style="text-align:center;">Nenhum processo registado ainda.</td></tr>';
    } else {
        processosSalvos.forEach(processo => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${processo.numeroProcesso}</td>
                <td>${processo.guiaRemessa}</td>
                <td>${processo.interessado || '-'}</td>
                <td>${processo.assunto || '-'}</td>
                <td>${processo.status}</td>
                <td>${processo.dataInsercaoSEI || 'Pendente'}</td>
            `;
            corpoTabelaProcessos.appendChild(tr);
        });
    }
}
