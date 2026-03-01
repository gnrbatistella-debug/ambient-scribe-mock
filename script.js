/* Ambient Scribe Mock — Interactions */

(function () {
  // Recording timer & controls
  let recordingSeconds = 45;
  let timerInterval = null;
  let isPaused = false;

  const recordBtn = document.getElementById('record-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const continueBtn = document.getElementById('continue-btn');
  const stopBtn = document.getElementById('stop-btn');
  const headerTimer = document.getElementById('header-timer');

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }

  function tickTimer() {
    if (!isPaused) recordingSeconds++;
    headerTimer.textContent = formatTime(recordingSeconds);
  }

  function setRecordingState(recording) {
    if (recording) {
      recordBtn.classList.add('recording');
      recordBtn.querySelector('.record-label').textContent = 'Gravando';
      recordBtn.style.display = 'none';
      pauseBtn.classList.remove('hidden');
      continueBtn.classList.add('hidden');
      stopBtn.classList.remove('hidden');
      if (!timerInterval) timerInterval = setInterval(tickTimer, 1000);
    } else {
      recordBtn.classList.remove('recording');
      recordBtn.querySelector('.record-label').textContent = 'Gravar';
      recordBtn.style.display = 'inline-flex';
      pauseBtn.classList.add('hidden');
      continueBtn.classList.add('hidden');
      stopBtn.classList.add('hidden');
      if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    }
  }

  recordBtn?.addEventListener('click', () => setRecordingState(true));
  stopBtn?.addEventListener('click', () => setRecordingState(false));

  pauseBtn?.addEventListener('click', () => {
    isPaused = true;
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    pauseBtn.classList.add('hidden');
    continueBtn.classList.remove('hidden');
  });

  continueBtn?.addEventListener('click', () => {
    isPaused = false;
    timerInterval = setInterval(tickTimer, 1000);
    continueBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
  });

  // Checklist auto-progression
  const checklistItems = document.querySelectorAll('.checklist-item');
  const sectionOrder = ['chief', 'hpi', 'meds', 'diseases'];
  let currentSectionIdx = 0;

  function completeSection(sectionKey) {
    const item = document.querySelector(`.checklist-item[data-section="${sectionKey}"]`);
    if (!item) return;
    const icon = item.querySelector('.check-icon');
    const text = item.querySelector('.text-pending');
    if (icon && text) {
      icon.classList.remove('pending');
      icon.classList.add('complete');
      icon.textContent = '✓';
      text.classList.remove('text-pending');
      text.classList.add('text-complete');
    }
  }

  // Complete sections progressively (simulated during consultation)
  const checklistIntervals = [8000, 16000, 24000, 32000]; // ms from page load
  checklistIntervals.forEach((delay, idx) => {
    setTimeout(() => completeSection(sectionOrder[idx]), delay);
  });

  // Chat flow
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');

  const articleExplanation = `O consenso ACR/AAAAI recomenda, para pacientes com reação prévia ao contraste iodado, considerar dessensibilização em vez de pré-medicação isolada. A pré-medicação com corticóide e anti-histamínico isolada tem evidência fraca e pode mascarar reações. O artigo completo traz o algoritmo atualizado e os protocolos específicos.`;

  const articleActions = [
    'Avaliação por alergologista para caracterizar o tipo de reação (IgE mediada vs pseudo-alérgica)',
    'Teste cutâneo quando indicado',
    'Dessensibilização em 12-14 etapas com doses crescentes do meio de contraste, em ambiente monitorado',
    'Alternativa: trocar para agente de baixa osmolalidade, se teste cutâneo negativo'
  ];

  const articleMethodology = `O consenso foi desenvolvido por um painel multidisciplinar de especialistas da ACR e AAAAI, utilizando o método GRADE para avaliação da qualidade da evidência. Revisão sistemática de estudos sobre hipersensibilidade a meios de contraste, incluindo ensaios clínicos, séries de casos e relatórios de consenso. Delineamento Delphi para harmonização de recomendações entre as duas sociedades.`;

  const articleResults = `Em estudos de dessensibilização com protocolos de 12-14 etapas, taxas de sucesso relatadas de 95-98% para procedimentos subsequentes com contraste iodado. Reações leves durante dessensibilização em ~15% dos casos, geralmente autolimitadas. Teste cutâneo positivo em ~40% dos pacientes com história de reação imediata; dessensibilização indicada quando positivo ou quando não é possível trocar o agente. Incidência de reações imediatas ao contraste: 0,5-2%; não imediatas: 0,5-2%.`;

  const articleRefHtml = `
    <div class="article-ref" data-article>
      <div class="article-icon">RSNA<br>Rad</div>
      <div class="article-info">
        <strong>Management and Prevention of Hypersensitivity Reactions to Radiocontrast Media</strong>
        <span>Radiology • ACR/AAAAI Consensus • Clique para ver o resumo</span>
      </div>
    </div>
  `;

  function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'msg msg-user';
    div.innerHTML = `<p>${escapeHtml(text)}</p>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendAssistantMessage(content, opts = {}) {
    const div = document.createElement('div');
    div.className = 'msg msg-assistant';
    div.innerHTML = content;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (opts.articleRef) {
      const refDiv = div.querySelector('[data-article]');
      if (refDiv) {
        refDiv.addEventListener('click', () => openArticleInWorkspace());
      }
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function typewriter(el, text, speed = 25) {
    return new Promise((resolve) => {
      let i = 0;
      el.textContent = '';
      function type() {
        if (i < text.length) {
          el.textContent += text[i];
          i++;
          setTimeout(type, speed);
        } else {
          resolve();
        }
      }
      type();
    });
  }

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  function handleSend() {
    const text = chatInput.value.trim().toLowerCase();
    if (!text) return;

    appendUserMessage(chatInput.value.trim());
    chatInput.value = '';

    if (text.includes('desensibil') || text.includes('dessensit') || text.includes('o que fazer') || text.includes('prescrever')) {
      const replyDiv = document.createElement('div');
      replyDiv.className = 'msg msg-assistant';
      chatMessages.appendChild(replyDiv);

      const p = document.createElement('p');
      p.textContent = '';
      replyDiv.appendChild(p);

      const refContainer = document.createElement('div');
      refContainer.innerHTML = articleRefHtml;
      replyDiv.appendChild(refContainer);
      refContainer.querySelector('[data-article]')?.addEventListener('click', openArticleInWorkspace);

      chatMessages.scrollTop = chatMessages.scrollHeight;

      const intro = 'Para dessensibilizar este paciente e permitir a prescrição do TC com contraste, recomendo o consenso ACR/AAAAI sobre hipersensibilidade a meios de contraste. Clique no artigo abaixo para ver um resumo das instruções:';
      typewriter(p, intro, 22);
    } else {
      appendAssistantMessage('<p>Como posso ajudar na sua consulta?</p>');
    }
  }

  // Center workspace (Telepatia extension)
  const workspaceEmpty = document.getElementById('workspace-empty');
  const workspaceContent = document.getElementById('workspace-content');
  const workspaceSummary = document.getElementById('workspace-summary');
  const workspaceSummaryWrap = document.getElementById('workspace-summary-wrap');
  const workspaceRolWrap = document.getElementById('workspace-rol-wrap');
  const workspaceRolContent = document.getElementById('workspace-rol-content');
  const workspaceTitle = document.getElementById('workspace-title');
  const refIconsBar = document.getElementById('ref-icons-bar');
  const gradeBar = document.getElementById('grade-bar');
  const susBar = document.getElementById('sus-bar');
  const susBtn = document.getElementById('sus-btn');
  const susContent = document.getElementById('sus-content');
  const workspaceClose = document.getElementById('workspace-close');
  const telepatiaEvidenceBtn = document.getElementById('telepatia-evidence-btn');

  let lastEvidenceView = 'empty'; // 'empty' | 'article'
  let currentWorkspaceView = 'empty'; // 'empty' | 'article' | 'rol'

  const rolContent = `O <strong>TC de crânio com contraste</strong> está incluído no Rol de Procedimentos e Eventos em Saúde da ANS (cobertura obrigatória para planos que incluem exames de imagem). Para planos Bradesco Saúde, a tomografia de crânio com contraste é cobertura assistencial obrigatória quando há indicação clínica. Consulte as diretrizes de utilização (Anexo II) para critérios específicos. Recomenda-se documentar a suspeita diagnóstica (ex.: hemorragia subaracnóidea) para fins de autorização.`;

  const summaryExplanation = document.getElementById('summary-explanation');
  const summaryActionsList = document.getElementById('summary-actions-list');
  const btnGoDeeper = document.getElementById('btn-go-deeper');
  const summaryDeeper = document.getElementById('summary-deeper');
  const deeperMethodology = document.getElementById('deeper-methodology');
  const deeperResults = document.getElementById('deeper-results');

  function renderArticleSummary(withTypewriter = true) {
    if (!summaryExplanation || !summaryActionsList) return;
    summaryExplanation.textContent = '';
    summaryActionsList.innerHTML = '';
    articleActions.forEach((action) => {
      const li = document.createElement('li');
      li.textContent = action;
      summaryActionsList.appendChild(li);
    });
    if (withTypewriter) {
      typewriter(summaryExplanation, articleExplanation, 15);
    } else {
      summaryExplanation.textContent = articleExplanation;
    }
    summaryDeeper?.classList.add('hidden');
    if (deeperMethodology) deeperMethodology.textContent = articleMethodology;
    if (deeperResults) deeperResults.textContent = articleResults;
  }

  btnGoDeeper?.addEventListener('click', () => {
    summaryDeeper?.classList.toggle('hidden');
    const expanded = !summaryDeeper?.classList.contains('hidden');
    btnGoDeeper?.classList.toggle('expanded', expanded);
    const svg = btnGoDeeper?.querySelector('svg');
    if (svg) svg.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
    const textEl = btnGoDeeper?.querySelector('.btn-go-deeper-text');
    if (textEl) textEl.textContent = expanded ? 'Recolher detalhes' : 'Aprofundar: resultados, estatísticas e metodologia';
  });

  susBtn?.addEventListener('click', () => {
    susContent?.classList.toggle('hidden');
    susBtn?.classList.toggle('expanded', !susContent?.classList.contains('hidden'));
  });

  function openArticleInWorkspace() {
    lastEvidenceView = 'article';
    currentWorkspaceView = 'article';
    workspaceEmpty.classList.add('hidden');
    workspaceContent.classList.remove('hidden');
    workspaceTitle.textContent = 'Management and Prevention of Hypersensitivity Reactions to Radiocontrast Media';
    workspaceTitle.href = 'https://pubs.rsna.org/doi/10.1148/radiol.240100';
    workspaceTitle.target = '_blank';
    workspaceSummaryWrap.classList.remove('hidden');
    workspaceRolWrap.classList.add('hidden');
    refIconsBar.classList.remove('hidden');
    gradeBar.classList.remove('hidden');
    susBar?.classList.remove('hidden');
    susContent?.classList.add('hidden');
    susBtn?.classList.remove('expanded');
    renderArticleSummary(true);
    telepatiaEvidenceBtn?.classList.add('active');
  }

  function openRolInWorkspace() {
    currentWorkspaceView = 'rol';
    workspaceEmpty.classList.add('hidden');
    workspaceContent.classList.remove('hidden');
    workspaceTitle.textContent = 'Rol ANS — TC de crânio com contraste';
    workspaceTitle.href = 'https://www.gov.br/ans/pt-br/acesso-a-informacao/participacao-da-sociedade/atualizacao-do-rol-de-procedimentos';
    workspaceTitle.target = '_blank';
    workspaceSummaryWrap.classList.add('hidden');
    workspaceRolWrap.classList.remove('hidden');
    refIconsBar.classList.add('hidden');
    gradeBar.classList.add('hidden');
    susBar?.classList.add('hidden');
    workspaceRolContent.innerHTML = rolContent;
    telepatiaEvidenceBtn?.classList.remove('active');
  }

  function openTelepatiaEvidence() {
    currentWorkspaceView = lastEvidenceView === 'article' ? 'article' : 'empty';
    if (lastEvidenceView === 'article') {
      workspaceEmpty.classList.add('hidden');
      workspaceContent.classList.remove('hidden');
      workspaceTitle.textContent = 'Management and Prevention of Hypersensitivity Reactions to Radiocontrast Media';
      workspaceTitle.href = 'https://pubs.rsna.org/doi/10.1148/radiol.240100';
      workspaceTitle.target = '_blank';
      workspaceSummaryWrap.classList.remove('hidden');
      workspaceRolWrap.classList.add('hidden');
      refIconsBar.classList.remove('hidden');
      gradeBar.classList.remove('hidden');
      susBar?.classList.remove('hidden');
      susContent?.classList.add('hidden');
      susBtn?.classList.remove('expanded');
      renderArticleSummary(false);
      telepatiaEvidenceBtn?.classList.add('active');
    } else {
      workspaceContent.classList.add('hidden');
      workspaceEmpty.classList.remove('hidden');
      telepatiaEvidenceBtn?.classList.remove('active');
    }
  }

  function closeWorkspace() {
    currentWorkspaceView = 'empty';
    workspaceContent.classList.add('hidden');
    workspaceEmpty.classList.remove('hidden');
    telepatiaEvidenceBtn?.classList.remove('active');
  }

  workspaceClose.addEventListener('click', closeWorkspace);
  document.getElementById('rol-ans-btn')?.addEventListener('click', openRolInWorkspace);
  telepatiaEvidenceBtn?.addEventListener('click', openTelepatiaEvidence);

  // Workspace chat (discuss article)
  const workspaceChatInput = document.getElementById('workspace-chat-input');
  const workspaceChatMessages = document.getElementById('workspace-chat-messages');
  const workspaceSendBtn = document.getElementById('workspace-send');

  function appendWorkspaceMsg(text, isUser) {
    const div = document.createElement('div');
    div.className = 'workspace-chat-msg ' + (isUser ? 'workspace-chat-msg-user' : 'workspace-chat-msg-assistant');
    div.textContent = text;
    workspaceChatMessages.appendChild(div);
    workspaceChatMessages.scrollTop = workspaceChatMessages.scrollHeight;
  }

  function handleWorkspaceSend() {
    const text = workspaceChatInput.value.trim();
    if (!text) return;
    appendWorkspaceMsg(text, true);
    workspaceChatInput.value = '';
    appendWorkspaceMsg('Com base no consenso ACR/AAAAI, posso ajudar a esclarecer dúvidas sobre dessensibilização ou alternativas ao contraste. O que gostaria de aprofundar?', false);
  }

  workspaceSendBtn?.addEventListener('click', handleWorkspaceSend);
  workspaceChatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleWorkspaceSend();
    }
  });

  // LGPD popover
  const lgpdBtn = document.getElementById('lgpd-btn');
  const lgpdPopover = document.getElementById('lgpd-popover');
  const lgpdClose = document.getElementById('lgpd-close');

  lgpdBtn?.addEventListener('click', () => lgpdPopover?.classList.toggle('hidden'));
  lgpdClose?.addEventListener('click', () => lgpdPopover?.classList.add('hidden'));

  // GRADE popover
  const gradeBtn = document.getElementById('grade-btn');
  const gradePopover = document.getElementById('grade-popover');
  const gradeClose = document.getElementById('grade-close');

  gradeBtn?.addEventListener('click', () => gradePopover?.classList.toggle('hidden'));
  gradeClose?.addEventListener('click', () => gradePopover?.classList.add('hidden'));

  // Quick-send suggestion buttons
  document.querySelectorAll('.suggestion-btn[data-quick]').forEach((btn) => {
    btn.addEventListener('click', () => {
      chatInput.value = btn.dataset.quick;
      handleSend();
    });
  });

  // Start recording on load (auto-simulated)
  setTimeout(() => setRecordingState(true), 1500);
})();
