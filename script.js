/* Ambient Scribe Mock — Interactions + i18n */

(function () {
  // ===== i18n Translation System =====
  let currentLang = 'pt';

  const i18n = {
    pt: {
      consultType: 'Consulta Geral Adulto',
      record: 'Gravar', recording: 'Gravando', pause: 'Pausar', cont: 'Continuar', stop: 'Parar',
      discard: 'Descartar', finalize: 'Finalizar e gerar nota',
      searchPH: 'Nome ou número de documento do paciente',
      templateTitle: 'Template da consulta',
      chiefLabel: 'Queixa principal:',
      chiefText: 'Cefaleia de início súbito há 3 dias, com sinais de alarme (rigidez de nuca, fotofobia).',
      hpiLabel: 'História da doença atual:',
      hpiText: 'Paciente relata cefaleia em trovoada. Sem trauma. Negou febre inicialmente, mas evoluiu com náuseas. Suspeita de hemorragia subaracnóidea. Solicitado TC de crânio com contraste para melhor caracterização.',
      medsLabel: 'Medicamentos em uso:',
      medsText: 'Losartana 50mg, AAS 100mg. Nega uso regular de AINEs.',
      diseasesLabel: 'Doenças prévias:',
      diseasesText: 'Hipertensão, HAC. Ressalta-se: contraindicado RM de crânio — projétil de arma de fogo no ombro direito de acidente no passado, não removido (ferromagnético).',
      notesLabel: 'Notas:',
      notesPH: 'Escreva qualquer tipo de nota que tenha relevância na consulta',
      historyLabel: 'Histórico médico:',
      historyPH: 'Copie e cole o histórico médico do paciente para fazer a consulta de acompanhamento corretamente.',
      attachText: 'Arraste ou clique para anexar documentos',
      evidenceTitle: 'Telepatia Evidence',
      evidenceDesc: 'Explore artigos, diretrizes e referências confiáveis (NEJM, JAMA, ABN) sugeridos pelo chat.',
      newEvidence: 'Nova pesquisa de evidências',
      refLabel: 'Referências confiáveis:',
      gradeStrength: 'Força da evidência:', gradeMod: 'Moderada', gradeSystem: '(GRADE)',
      susBtn: 'Discutir este caso no contexto do SUS',
      susIntro: 'No SUS, o manejo de hipersensibilidade a contraste iodado segue diretrizes do Ministério da Saúde. Correlação com o consenso ACR/AAAAI:',
      susItem1: '<strong>TC de crânio com contraste:</strong> Coberto pelo SUS quando há indicação clínica. Em suspeita de hemorragia subaracnóidea, a TC sem contraste pode ser realizada inicialmente; com contraste é reservada para casos selecionados.',
      susItem2: '<strong>Encaminhamento a alergologista:</strong> Disponível na rede de atenção especializada. Algumas regiões têm fila; priorizar pacientes com reação prévia grave.',
      susItem3: '<strong>Dessensibilização:</strong> Realizada em centros de referência (ex.: hospitais universitários, centros de alergia). O acesso pode exigir regulamento via central de regulação.',
      susItem4: '<strong>Contraste iodado no SUS:</strong> Meios de baixa osmolalidade disponíveis em muitos serviços. Na impossibilidade de dessensibilização, considerar alternativas (ex.: TC sem contraste quando suficiente para o diagnóstico).',
      susFooter: 'Consulte a Rede de Atenção à Saúde e protocolos da sua região para fluxos específicos.',
      actionsFor: 'Ações para o médico:',
      deeperExpand: 'Aprofundar: resultados, estatísticas e metodologia',
      deeperCollapse: 'Recolher detalhes',
      methodTitle: 'Metodologia', resultsTitle: 'Resultados e dados estatísticos',
      discussTitle: 'Discuta este artigo',
      discussHint: 'Tire dúvidas ou aprofunde sua compreensão com base nas evidências acima.',
      askArticlePH: 'Pergunte sobre o artigo...',
      newSearchTitle: 'Nova pesquisa',
      blankPH: 'Pesquise evidências, diretrizes ou pergunte sobre o caso...',
      intTitle: 'Telepatia Intelligence',
      rolAns: 'Rol ANS', backChat: 'Voltar ao chat',
      alertTitle: 'Alerta: Alergia a contraste iodado',
      alertDesc: 'Este paciente tem alergia a contraste iodado. Recomenda-se reconsiderar a prescrição de TC de crânio com contraste.',
      alertBtn: 'Ver evidências e conduta recomendada',
      sugHasbled: 'Calcule a escala HAS-BLED',
      sugUseful: 'O que mais seria útil saber do paciente nesta consulta?',
      sugDiag: 'Quais diagnósticos diferenciais devo considerar primeiro?',
      sugScale: 'Calcule a escala de...',
      chatPH: 'Escreva suas perguntas aqui',
      disclaimer: 'Telepatia Intelligence é uma IA e pode cometer erros. Por favor, verifique as respostas.',
      lgpdBtn: 'Conformidade LGPD',
      calcTitle: 'Escala HAS-BLED',
      calcSubtitle: 'Risco de sangramento em pacientes com fibrilação atrial em uso de anticoagulantes',
      calcH: 'Hipertensão', calcHD: 'PAS > 160 mmHg',
      calcA: 'Alteração renal/hepática', calcAD: 'Diálise, transplante, Cr > 2,26 ou cirrose, bilirrubina > 2x, AST/ALT > 3x',
      calcS: 'AVC (Stroke)', calcSD: 'História prévia de AVC',
      calcB: 'Sangramento (Bleeding)', calcBD: 'História ou predisposição a sangramento',
      calcL: 'INR lábil (Labile)', calcLD: 'INR instável, TTR < 60%',
      calcE: 'Idoso (Elderly)', calcED: 'Idade > 65 anos',
      calcD: 'Drogas/Álcool', calcDD: 'Antiplaquetários, AINEs ou abuso de álcool',
      calcScoreLabel: 'Pontuação:', calcMax: '/ 9',
      calcLow: 'Baixo risco de sangramento', calcModR: 'Risco moderado de sangramento', calcHigh: 'Alto risco de sangramento',
      calcLowI: 'Pontuação 0-2: risco baixo. Anticoagulação pode ser mantida com monitoramento habitual.',
      calcModI: 'Pontuação 3: risco moderado. Considerar revisão de fatores de risco modificáveis. Monitoramento mais frequente recomendado.',
      calcHighI: 'Pontuação ≥ 4: alto risco. Reavaliar indicação de anticoagulação. Corrigir fatores modificáveis (PA, INR, drogas). Considerar alternativas ou dose reduzida.',
      rolTitle: 'Rol ANS — TC de crânio com contraste',
      rolContent: 'O <strong>TC de crânio com contraste</strong> está incluído no Rol de Procedimentos e Eventos em Saúde da ANS (cobertura obrigatória para planos que incluem exames de imagem). Para planos Bradesco Saúde, a tomografia de crânio com contraste é cobertura assistencial obrigatória quando há indicação clínica. Consulte as diretrizes de utilização (Anexo II) para critérios específicos. Recomenda-se documentar a suspeita diagnóstica (ex.: hemorragia subaracnóidea) para fins de autorização.',
      rolLink: 'Consultar Rol ANS completo →',
      gradePopTitle: 'GRADE — Força da evidência',
      gradePopDesc: 'O método GRADE (Grading of Recommendations Assessment, Development and Evaluation) classifica a qualidade da evidência e a força das recomendações.',
      gradeHighL: 'Alta:', gradeHighD: 'Confiança elevada no efeito estimado — a evidência provavelmente não mudará.',
      gradeModL: 'Moderada:', gradeModD: 'Confiança moderada — o efeito real pode ser diferente do estimado.',
      gradeLowL: 'Baixa:', gradeLowD: 'Confiança limitada — o efeito real pode ser substancialmente diferente.',
      gradeVLowL: 'Muito baixa:', gradeVLowD: 'Muito pouca confiança no efeito estimado.',
      gradeFooter: 'Consensos e diretrizes de sociedades geralmente têm evidência <strong>moderada</strong> a <strong>alta</strong>.',
      lgpdPopTitle: 'Seus dados em conformidade com a LGPD',
      lgpdPopDesc: 'Garantimos a segurança e privacidade dos dados de pacientes e profissionais conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).',
      lgpdEnc: '<strong>Criptografia:</strong> dados sensíveis criptografados em trânsito e em repouso',
      lgpdAcc: '<strong>Controle de acesso:</strong> apenas profissionais autorizados acessam informações da consulta',
      lgpdMin: '<strong>Minimização:</strong> coletamos apenas o necessário para o atendimento',
      lgpdTrans: '<strong>Transparência:</strong> você tem direito a saber como seus dados são tratados',
      lgpdFooter: 'Política de Privacidade e Termos de Uso disponíveis em sua conta.',
      articleExplanation: 'O consenso ACR/AAAAI recomenda, para pacientes com reação prévia ao contraste iodado, considerar dessensibilização em vez de pré-medicação isolada. A pré-medicação com corticóide e anti-histamínico isolada tem evidência fraca e pode mascarar reações. O artigo completo traz o algoritmo atualizado e os protocolos específicos.',
      articleActions: [
        'Avaliação por alergologista para caracterizar o tipo de reação (IgE mediada vs pseudo-alérgica)',
        'Teste cutâneo quando indicado',
        'Dessensibilização em 12-14 etapas com doses crescentes do meio de contraste, em ambiente monitorado',
        'Alternativa: trocar para agente de baixa osmolalidade, se teste cutâneo negativo'
      ],
      articleMethodology: 'O consenso foi desenvolvido por um painel multidisciplinar de especialistas da ACR e AAAAI, utilizando o método GRADE para avaliação da qualidade da evidência. Revisão sistemática de estudos sobre hipersensibilidade a meios de contraste, incluindo ensaios clínicos, séries de casos e relatórios de consenso. Delineamento Delphi para harmonização de recomendações entre as duas sociedades.',
      articleResults: 'Em estudos de dessensibilização com protocolos de 12-14 etapas, taxas de sucesso relatadas de 95-98% para procedimentos subsequentes com contraste iodado. Reações leves durante dessensibilização em ~15% dos casos, geralmente autolimitadas. Teste cutâneo positivo em ~40% dos pacientes com história de reação imediata; dessensibilização indicada quando positivo ou quando não é possível trocar o agente. Incidência de reações imediatas ao contraste: 0,5-2%; não imediatas: 0,5-2%.',
      articleRefLabel: 'Radiology • ACR/AAAAI Consensus • Clique para ver o resumo',
      genericReply: 'Como posso ajudar na sua consulta?',
      usefulReply: 'Com base no quadro atual, seria importante investigar: histórico familiar de aneurisma ou doença vascular cerebral, uso de anticoagulantes ou antiplaquetários, tabagismo, e se houve episódios anteriores de cefaleia semelhante. Além disso, verificar os valores de pressão arterial recentes e a frequência da cefaleia.',
      diagReply: 'Para esta apresentação clínica (cefaleia em trovoada com rigidez de nuca e fotofobia), os principais diagnósticos diferenciais são: hemorragia subaracnóidea (principal suspeita), meningite, cefaleia thunderclap primária, trombose venosa cerebral, e dissecção arterial cervical. A TC de crânio sem contraste deve ser o primeiro exame.',
      scaleReply: 'Posso calcular diversas escalas clínicas. Qual escala você precisa? Exemplos: HAS-BLED, CHA₂DS₂-VASc, NIHSS, Glasgow, SOFA, Wells, entre outras.',
      desensIntro: 'Para dessensibilizar este paciente e permitir a prescrição do TC com contraste, recomendo o consenso ACR/AAAAI sobre hipersensibilidade a meios de contraste. Clique no artigo abaixo para ver um resumo das instruções:',
      blankSearching: 'Pesquisando evidências relevantes para sua pergunta. Um momento...',
      workspaceReply: 'Com base no consenso ACR/AAAAI, posso ajudar a esclarecer dúvidas sobre dessensibilização ou alternativas ao contraste. O que gostaria de aprofundar?',
      wsSug1Label: 'Sinais de alerta para cefaleia',
      wsSug1Full: 'Quais são os sinais de alerta (red flags) para cefaleia?',
      wsSug2Label: 'Como avaliar uma TC de crânio — Radiopaedia',
      wsSug3Label: 'Exames de imagem para HSA',
      wsSug3Full: 'Quais exames de imagem são indicados na suspeita de hemorragia subaracnóidea?',
      wsSug4Label: 'Protocolo de pré-medicação para contraste',
      wsSug4Full: 'Qual o protocolo de pré-medicação para contraste iodado em pacientes alérgicos?',
    },
    en: {
      consultType: 'General Adult Consultation',
      record: 'Record', recording: 'Recording', pause: 'Pause', cont: 'Resume', stop: 'Stop',
      discard: 'Discard', finalize: 'Finalize and generate note',
      searchPH: 'Patient name or document number',
      templateTitle: 'Consultation template',
      chiefLabel: 'Chief complaint:',
      chiefText: 'Sudden onset headache for 3 days, with alarm signs (neck stiffness, photophobia).',
      hpiLabel: 'History of present illness:',
      hpiText: 'Patient reports thunderclap headache. No trauma. Initially denied fever but developed nausea. Suspected subarachnoid hemorrhage. Head CT with contrast ordered for further evaluation.',
      medsLabel: 'Current medications:',
      medsText: 'Losartan 50mg, ASA 100mg. Denies regular NSAID use.',
      diseasesLabel: 'Past medical history:',
      diseasesText: 'Hypertension, chronic arterial hypertension. Note: MRI contraindicated — gunshot projectile in right shoulder from past accident, not removed (ferromagnetic).',
      notesLabel: 'Notes:',
      notesPH: 'Write any notes relevant to the consultation',
      historyLabel: 'Medical history:',
      historyPH: 'Copy and paste the patient\'s medical history for proper follow-up.',
      attachText: 'Drag or click to attach documents',
      evidenceTitle: 'Telepatia Evidence',
      evidenceDesc: 'Explore articles, guidelines, and trusted references (NEJM, JAMA, ABN) suggested by the chat.',
      newEvidence: 'New evidence search',
      refLabel: 'Trusted references:',
      gradeStrength: 'Evidence strength:', gradeMod: 'Moderate', gradeSystem: '(GRADE)',
      susBtn: 'Discuss this case in the SUS context',
      susIntro: 'In the SUS (Brazilian Unified Health System), management of iodinated contrast hypersensitivity follows Ministry of Health guidelines. Correlation with ACR/AAAAI consensus:',
      susItem1: '<strong>Head CT with contrast:</strong> Covered by SUS when clinically indicated. In suspected subarachnoid hemorrhage, non-contrast CT may be performed first; contrast is reserved for selected cases.',
      susItem2: '<strong>Allergist referral:</strong> Available in the specialized care network. Some regions have waiting lists; prioritize patients with prior severe reactions.',
      susItem3: '<strong>Desensitization:</strong> Performed at reference centers (e.g., university hospitals, allergy centers). Access may require regulation via central regulation.',
      susItem4: '<strong>Iodinated contrast in SUS:</strong> Low-osmolality agents available in many services. If desensitization is not possible, consider alternatives (e.g., non-contrast CT when sufficient).',
      susFooter: 'Consult the Health Care Network and protocols in your region for specific workflows.',
      actionsFor: 'Actions for the physician:',
      deeperExpand: 'Go deeper: results, statistics, and methodology',
      deeperCollapse: 'Collapse details',
      methodTitle: 'Methodology', resultsTitle: 'Results and statistical data',
      discussTitle: 'Discuss this article',
      discussHint: 'Ask questions or deepen your understanding based on the evidence above.',
      askArticlePH: 'Ask about the article...',
      newSearchTitle: 'New search',
      blankPH: 'Search for evidence, guidelines, or ask about the case...',
      intTitle: 'Telepatia Intelligence',
      rolAns: 'ANS Coverage', backChat: 'Back to chat',
      alertTitle: 'Alert: Iodinated contrast allergy',
      alertDesc: 'This patient has an allergy to iodinated contrast. Reconsider the prescription of head CT with contrast.',
      alertBtn: 'View evidence and recommended approach',
      sugHasbled: 'Calculate HAS-BLED score',
      sugUseful: 'What else would be useful to know about this patient?',
      sugDiag: 'Which differential diagnoses should I consider first?',
      sugScale: 'Calculate a clinical score...',
      chatPH: 'Type your questions here',
      disclaimer: 'Telepatia Intelligence is an AI and may make mistakes. Please verify the responses.',
      lgpdBtn: 'LGPD Compliance',
      calcTitle: 'HAS-BLED Score',
      calcSubtitle: 'Bleeding risk in patients with atrial fibrillation on anticoagulants',
      calcH: 'Hypertension', calcHD: 'SBP > 160 mmHg',
      calcA: 'Abnormal renal/liver function', calcAD: 'Dialysis, transplant, Cr > 2.26 or cirrhosis, bilirubin > 2x, AST/ALT > 3x',
      calcS: 'Stroke', calcSD: 'Previous stroke history',
      calcB: 'Bleeding', calcBD: 'History or predisposition to bleeding',
      calcL: 'Labile INR', calcLD: 'Unstable INR, TTR < 60%',
      calcE: 'Elderly', calcED: 'Age > 65 years',
      calcD: 'Drugs/Alcohol', calcDD: 'Antiplatelets, NSAIDs or alcohol abuse',
      calcScoreLabel: 'Score:', calcMax: '/ 9',
      calcLow: 'Low bleeding risk', calcModR: 'Moderate bleeding risk', calcHigh: 'High bleeding risk',
      calcLowI: 'Score 0-2: low risk. Anticoagulation can be maintained with routine monitoring.',
      calcModI: 'Score 3: moderate risk. Consider reviewing modifiable risk factors. More frequent monitoring recommended.',
      calcHighI: 'Score ≥ 4: high risk. Reassess anticoagulation indication. Correct modifiable factors (BP, INR, drugs). Consider alternatives or reduced dose.',
      rolTitle: 'ANS Coverage — Head CT with contrast',
      rolContent: '<strong>Head CT with contrast</strong> is included in the ANS List of Procedures (mandatory coverage for plans that include imaging exams). For Bradesco Saúde plans, head CT with contrast is mandatory coverage when clinically indicated. Consult the utilization guidelines (Annex II) for specific criteria. Document the diagnostic suspicion (e.g., subarachnoid hemorrhage) for authorization.',
      rolLink: 'View full ANS Coverage list →',
      gradePopTitle: 'GRADE — Strength of Evidence',
      gradePopDesc: 'The GRADE method (Grading of Recommendations Assessment, Development and Evaluation) classifies the quality of evidence and the strength of recommendations.',
      gradeHighL: 'High:', gradeHighD: 'High confidence in the estimated effect — the evidence is unlikely to change.',
      gradeModL: 'Moderate:', gradeModD: 'Moderate confidence — the real effect may differ from the estimate.',
      gradeLowL: 'Low:', gradeLowD: 'Limited confidence — the real effect may be substantially different.',
      gradeVLowL: 'Very low:', gradeVLowD: 'Very little confidence in the estimated effect.',
      gradeFooter: 'Society consensus statements and guidelines generally have <strong>moderate</strong> to <strong>high</strong> evidence.',
      lgpdPopTitle: 'Your data in LGPD compliance',
      lgpdPopDesc: 'We ensure the security and privacy of patient and professional data in accordance with the Brazilian General Data Protection Law (Law 13.709/2018).',
      lgpdEnc: '<strong>Encryption:</strong> sensitive data encrypted in transit and at rest',
      lgpdAcc: '<strong>Access control:</strong> only authorized professionals access consultation information',
      lgpdMin: '<strong>Minimization:</strong> we collect only what is necessary for care',
      lgpdTrans: '<strong>Transparency:</strong> you have the right to know how your data is processed',
      lgpdFooter: 'Privacy Policy and Terms of Use available in your account.',
      articleExplanation: 'The ACR/AAAAI consensus recommends, for patients with prior reaction to iodinated contrast, considering desensitization instead of premedication alone. Premedication with corticosteroids and antihistamines alone has weak evidence and may mask reactions. The full article contains the updated algorithm and specific protocols.',
      articleActions: [
        'Allergist evaluation to characterize the type of reaction (IgE-mediated vs pseudo-allergic)',
        'Skin testing when indicated',
        'Desensitization in 12-14 steps with increasing doses of contrast agent, in a monitored setting',
        'Alternative: switch to low-osmolality agent if skin test is negative'
      ],
      articleMethodology: 'The consensus was developed by a multidisciplinary panel of ACR and AAAAI experts, using the GRADE method for evidence quality assessment. Systematic review of studies on contrast media hypersensitivity, including clinical trials, case series, and consensus reports. Delphi design for harmonizing recommendations between the two societies.',
      articleResults: 'In desensitization studies with 12-14 step protocols, success rates of 95-98% were reported for subsequent procedures with iodinated contrast. Mild reactions during desensitization in ~15% of cases, generally self-limiting. Positive skin test in ~40% of patients with history of immediate reaction; desensitization indicated when positive or when agent switching is not possible. Incidence of immediate contrast reactions: 0.5-2%; non-immediate: 0.5-2%.',
      articleRefLabel: 'Radiology • ACR/AAAAI Consensus • Click to see summary',
      genericReply: 'How can I help with your consultation?',
      usefulReply: 'Based on the current presentation, it would be important to investigate: family history of aneurysm or cerebrovascular disease, use of anticoagulants or antiplatelets, smoking, and whether there were previous similar headache episodes. Also, check recent blood pressure values and headache frequency.',
      diagReply: 'For this clinical presentation (thunderclap headache with neck stiffness and photophobia), the main differential diagnoses are: subarachnoid hemorrhage (primary suspicion), meningitis, primary thunderclap headache, cerebral venous thrombosis, and cervical artery dissection. Non-contrast head CT should be the first exam.',
      scaleReply: 'I can calculate various clinical scales. Which scale do you need? Examples: HAS-BLED, CHA₂DS₂-VASc, NIHSS, Glasgow, SOFA, Wells, among others.',
      desensIntro: 'To desensitize this patient and allow the contrast CT prescription, I recommend the ACR/AAAAI consensus on contrast media hypersensitivity. Click the article below to see a summary:',
      blankSearching: 'Searching for relevant evidence for your question. One moment...',
      workspaceReply: 'Based on the ACR/AAAAI consensus, I can help clarify questions about desensitization or alternatives to contrast. What would you like to explore further?',
      wsSug1Label: 'Red flags for headache',
      wsSug1Full: 'What are the red flags for headache?',
      wsSug2Label: 'How to evaluate a head CT — Radiopaedia',
      wsSug3Label: 'Imaging for SAH',
      wsSug3Full: 'What imaging exams are indicated for suspected subarachnoid hemorrhage?',
      wsSug4Label: 'Contrast premedication protocol',
      wsSug4Full: 'What is the premedication protocol for iodinated contrast in allergic patients?',
    },
    es: {
      consultType: 'Consulta General Adulto',
      record: 'Grabar', recording: 'Grabando', pause: 'Pausar', cont: 'Continuar', stop: 'Detener',
      discard: 'Descartar', finalize: 'Finalizar y generar nota',
      searchPH: 'Nombre o número de documento del paciente',
      templateTitle: 'Plantilla de la consulta',
      chiefLabel: 'Queja principal:',
      chiefText: 'Cefalea de inicio súbito hace 3 días, con signos de alarma (rigidez de nuca, fotofobia).',
      hpiLabel: 'Historia de la enfermedad actual:',
      hpiText: 'Paciente relata cefalea en trueno. Sin trauma. Negó fiebre inicialmente, pero evolucionó con náuseas. Sospecha de hemorragia subaracnoidea. Se solicitó TC de cráneo con contraste para mejor caracterización.',
      medsLabel: 'Medicamentos en uso:',
      medsText: 'Losartán 50mg, AAS 100mg. Niega uso regular de AINEs.',
      diseasesLabel: 'Enfermedades previas:',
      diseasesText: 'Hipertensión, HTA crónica. Contraindicada RM de cráneo — proyectil de arma de fuego en hombro derecho, no removido (ferromagnético).',
      notesLabel: 'Notas:',
      notesPH: 'Escriba cualquier nota relevante para la consulta',
      historyLabel: 'Historial médico:',
      historyPH: 'Copie y pegue el historial médico del paciente para la consulta de seguimiento.',
      attachText: 'Arrastre o haga clic para adjuntar documentos',
      evidenceTitle: 'Telepatia Evidence',
      evidenceDesc: 'Explore artículos, guías y referencias confiables (NEJM, JAMA, ABN) sugeridos por el chat.',
      newEvidence: 'Nueva búsqueda de evidencias',
      refLabel: 'Referencias confiables:',
      gradeStrength: 'Fuerza de la evidencia:', gradeMod: 'Moderada', gradeSystem: '(GRADE)',
      susBtn: 'Discutir este caso en el contexto del SUS',
      susIntro: 'En el SUS (Sistema Único de Salud de Brasil), el manejo de hipersensibilidad al contraste yodado sigue directrices del Ministerio de Salud. Correlación con el consenso ACR/AAAAI:',
      susItem1: '<strong>TC de cráneo con contraste:</strong> Cubierto por el SUS cuando hay indicación clínica. En sospecha de hemorragia subaracnoidea, la TC sin contraste puede realizarse inicialmente.',
      susItem2: '<strong>Derivación a alergólogo:</strong> Disponible en la red de atención especializada. Algunas regiones tienen lista de espera; priorizar pacientes con reacción previa grave.',
      susItem3: '<strong>Desensibilización:</strong> Realizada en centros de referencia (ej.: hospitales universitarios, centros de alergia). El acceso puede requerir regulación.',
      susItem4: '<strong>Contraste yodado en el SUS:</strong> Medios de baja osmolalidad disponibles en muchos servicios. Si no es posible la desensibilización, considerar alternativas.',
      susFooter: 'Consulte la Red de Atención a la Salud y protocolos de su región para flujos específicos.',
      actionsFor: 'Acciones para el médico:',
      deeperExpand: 'Profundizar: resultados, estadísticas y metodología',
      deeperCollapse: 'Colapsar detalles',
      methodTitle: 'Metodología', resultsTitle: 'Resultados y datos estadísticos',
      discussTitle: 'Discuta este artículo',
      discussHint: 'Aclare dudas o profundice su comprensión con base en las evidencias anteriores.',
      askArticlePH: 'Pregunte sobre el artículo...',
      newSearchTitle: 'Nueva búsqueda',
      blankPH: 'Busque evidencias, guías o pregunte sobre el caso...',
      intTitle: 'Telepatia Intelligence',
      rolAns: 'Cobertura ANS', backChat: 'Volver al chat',
      alertTitle: 'Alerta: Alergia al contraste yodado',
      alertDesc: 'Este paciente tiene alergia al contraste yodado. Se recomienda reconsiderar la prescripción de TC de cráneo con contraste.',
      alertBtn: 'Ver evidencias y conducta recomendada',
      sugHasbled: 'Calcule la escala HAS-BLED',
      sugUseful: '¿Qué más sería útil saber del paciente en esta consulta?',
      sugDiag: '¿Qué diagnósticos diferenciales debo considerar primero?',
      sugScale: 'Calcule la escala de...',
      chatPH: 'Escriba sus preguntas aquí',
      disclaimer: 'Telepatia Intelligence es una IA y puede cometer errores. Por favor, verifique las respuestas.',
      lgpdBtn: 'Conformidad LGPD',
      calcTitle: 'Escala HAS-BLED',
      calcSubtitle: 'Riesgo de sangrado en pacientes con fibrilación auricular en uso de anticoagulantes',
      calcH: 'Hipertensión', calcHD: 'PAS > 160 mmHg',
      calcA: 'Alteración renal/hepática', calcAD: 'Diálisis, trasplante, Cr > 2,26 o cirrosis, bilirrubina > 2x, AST/ALT > 3x',
      calcS: 'ACV (Stroke)', calcSD: 'Historia previa de ACV',
      calcB: 'Sangrado (Bleeding)', calcBD: 'Historia o predisposición al sangrado',
      calcL: 'INR lábil (Labile)', calcLD: 'INR inestable, TTR < 60%',
      calcE: 'Anciano (Elderly)', calcED: 'Edad > 65 años',
      calcD: 'Drogas/Alcohol', calcDD: 'Antiplaquetarios, AINEs o abuso de alcohol',
      calcScoreLabel: 'Puntuación:', calcMax: '/ 9',
      calcLow: 'Bajo riesgo de sangrado', calcModR: 'Riesgo moderado de sangrado', calcHigh: 'Alto riesgo de sangrado',
      calcLowI: 'Puntuación 0-2: riesgo bajo. La anticoagulación puede mantenerse con monitoreo habitual.',
      calcModI: 'Puntuación 3: riesgo moderado. Considerar revisión de factores de riesgo modificables. Monitoreo más frecuente recomendado.',
      calcHighI: 'Puntuación ≥ 4: alto riesgo. Reevaluar indicación de anticoagulación. Corregir factores modificables (PA, INR, drogas). Considerar alternativas o dosis reducida.',
      rolTitle: 'Cobertura ANS — TC de cráneo con contraste',
      rolContent: 'La <strong>TC de cráneo con contraste</strong> está incluida en la Lista de Procedimientos de la ANS (cobertura obligatoria para planes que incluyen exámenes de imagen). Para planes Bradesco Saúde, es cobertura obligatoria cuando hay indicación clínica. Consulte las directrices de utilización (Anexo II) para criterios específicos. Se recomienda documentar la sospecha diagnóstica para fines de autorización.',
      rolLink: 'Consultar lista completa de Cobertura ANS →',
      gradePopTitle: 'GRADE — Fuerza de la evidencia',
      gradePopDesc: 'El método GRADE clasifica la calidad de la evidencia y la fuerza de las recomendaciones.',
      gradeHighL: 'Alta:', gradeHighD: 'Confianza elevada en el efecto estimado — la evidencia probablemente no cambiará.',
      gradeModL: 'Moderada:', gradeModD: 'Confianza moderada — el efecto real puede diferir del estimado.',
      gradeLowL: 'Baja:', gradeLowD: 'Confianza limitada — el efecto real puede ser sustancialmente diferente.',
      gradeVLowL: 'Muy baja:', gradeVLowD: 'Muy poca confianza en el efecto estimado.',
      gradeFooter: 'Los consensos y directrices generalmente tienen evidencia <strong>moderada</strong> a <strong>alta</strong>.',
      lgpdPopTitle: 'Sus datos en conformidad con la LGPD',
      lgpdPopDesc: 'Garantizamos la seguridad y privacidad de los datos conforme a la Ley General de Protección de Datos de Brasil (Ley 13.709/2018).',
      lgpdEnc: '<strong>Cifrado:</strong> datos sensibles cifrados en tránsito y en reposo',
      lgpdAcc: '<strong>Control de acceso:</strong> solo profesionales autorizados acceden a información de la consulta',
      lgpdMin: '<strong>Minimización:</strong> recopilamos solo lo necesario para la atención',
      lgpdTrans: '<strong>Transparencia:</strong> usted tiene derecho a saber cómo se tratan sus datos',
      lgpdFooter: 'Política de Privacidad y Términos de Uso disponibles en su cuenta.',
      articleExplanation: 'El consenso ACR/AAAAI recomienda, para pacientes con reacción previa al contraste yodado, considerar desensibilización en lugar de premedicación aislada. La premedicación con corticoides y antihistamínicos aislada tiene evidencia débil y puede enmascarar reacciones. El artículo completo trae el algoritmo actualizado y los protocolos específicos.',
      articleActions: [
        'Evaluación por alergólogo para caracterizar el tipo de reacción (IgE mediada vs pseudo-alérgica)',
        'Prueba cutánea cuando esté indicado',
        'Desensibilización en 12-14 etapas con dosis crecientes del medio de contraste, en ambiente monitorizado',
        'Alternativa: cambiar a agente de baja osmolalidad, si la prueba cutánea es negativa'
      ],
      articleMethodology: 'El consenso fue desarrollado por un panel multidisciplinar de expertos de la ACR y AAAAI, utilizando el método GRADE. Revisión sistemática de estudios sobre hipersensibilidad a medios de contraste, incluyendo ensayos clínicos, series de casos e informes de consenso.',
      articleResults: 'En estudios de desensibilización con protocolos de 12-14 etapas, tasas de éxito de 95-98% para procedimientos subsiguientes con contraste yodado. Reacciones leves en ~15% de los casos. Prueba cutánea positiva en ~40% de pacientes con historia de reacción inmediata. Incidencia de reacciones inmediatas: 0,5-2%.',
      articleRefLabel: 'Radiology • ACR/AAAAI Consensus • Haga clic para ver el resumen',
      genericReply: '¿Cómo puedo ayudar con su consulta?',
      usefulReply: 'Según el cuadro actual, sería importante investigar: antecedentes familiares de aneurisma o enfermedad vascular cerebral, uso de anticoagulantes o antiplaquetarios, tabaquismo, y si hubo episodios anteriores de cefalea similar. Además, verificar los valores de presión arterial recientes.',
      diagReply: 'Para esta presentación clínica (cefalea en trueno con rigidez de nuca y fotofobia), los principales diagnósticos diferenciales son: hemorragia subaracnoidea (principal sospecha), meningitis, cefalea thunderclap primaria, trombosis venosa cerebral y disección arterial cervical. La TC sin contraste debe ser el primer examen.',
      scaleReply: 'Puedo calcular diversas escalas clínicas. ¿Qué escala necesita? Ejemplos: HAS-BLED, CHA₂DS₂-VASc, NIHSS, Glasgow, SOFA, Wells, entre otras.',
      desensIntro: 'Para desensibilizar a este paciente, recomiendo el consenso ACR/AAAAI sobre hipersensibilidad a medios de contraste. Haga clic en el artículo a continuación:',
      blankSearching: 'Buscando evidencias relevantes para su pregunta. Un momento...',
      workspaceReply: 'Con base en el consenso ACR/AAAAI, puedo ayudar a aclarar dudas sobre desensibilización o alternativas al contraste. ¿Qué le gustaría profundizar?',
      wsSug1Label: 'Signos de alerta para cefalea',
      wsSug1Full: '¿Cuáles son los signos de alerta (red flags) para cefalea?',
      wsSug2Label: 'Cómo evaluar una TC de cráneo — Radiopaedia',
      wsSug3Label: 'Exámenes de imagen para HSA',
      wsSug3Full: '¿Qué exámenes de imagen están indicados en la sospecha de hemorragia subaracnoidea?',
      wsSug4Label: 'Protocolo de premedicación para contraste',
      wsSug4Full: '¿Cuál es el protocolo de premedicación para contraste yodado en pacientes alérgicos?',
    }
  };

  function t(key) { return i18n[currentLang]?.[key] ?? i18n.pt[key] ?? key; }

  // ===== Helper: update text node inside a mixed-content element =====
  function setBtnText(el, text) {
    if (!el) return;
    if (typeof el === 'string') el = document.querySelector(el);
    if (!el) return;
    // Find the longest text node (skip whitespace-only)
    let best = null, bestLen = 0;
    for (const n of el.childNodes) {
      if (n.nodeType === 3 && n.textContent.trim().length > bestLen) {
        best = n; bestLen = n.textContent.trim().length;
      }
    }
    if (best) { best.textContent = ' ' + text + ' '; }
  }

  // ===== Recording timer & controls =====
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
      recordBtn.querySelector('.record-label').textContent = t('recording');
      recordBtn.style.display = 'none';
      pauseBtn.classList.remove('hidden');
      continueBtn.classList.add('hidden');
      stopBtn.classList.remove('hidden');
      if (!timerInterval) timerInterval = setInterval(tickTimer, 1000);
    } else {
      recordBtn.classList.remove('recording');
      recordBtn.querySelector('.record-label').textContent = t('record');
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

  // ===== Checklist auto-progression =====
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

  [8000, 16000, 24000, 32000].forEach((delay, idx) => {
    setTimeout(() => completeSection(sectionOrder[idx]), delay);
  });

  // ===== Chat flow =====
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('send-btn');

  function getArticleRefHtml() {
    return `
      <div class="article-ref" data-article>
        <div class="article-icon">RSNA<br>Rad</div>
        <div class="article-info">
          <strong>Management and Prevention of Hypersensitivity Reactions to Radiocontrast Media</strong>
          <span>${t('articleRefLabel')}</span>
        </div>
      </div>
    `;
  }

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
        } else { resolve(); }
      }
      type();
    });
  }

  sendBtn.addEventListener('click', handleSend);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });

  function handleSend() {
    const raw = chatInput.value.trim();
    if (!raw) return;
    const text = raw.toLowerCase();

    appendUserMessage(raw);
    chatInput.value = '';

    // Desensitization question → article reference
    if (text.includes('desensibil') || text.includes('dessensit') || text.includes('desensitiz') ||
        text.includes('o que fazer') || text.includes('prescrever') || text.includes('what to do') ||
        text.includes('prescribe') || text.includes('qué hacer') || text.includes('prescribir')) {
      const replyDiv = document.createElement('div');
      replyDiv.className = 'msg msg-assistant';
      chatMessages.appendChild(replyDiv);
      const p = document.createElement('p');
      p.textContent = '';
      replyDiv.appendChild(p);
      const refContainer = document.createElement('div');
      refContainer.innerHTML = getArticleRefHtml();
      replyDiv.appendChild(refContainer);
      refContainer.querySelector('[data-article]')?.addEventListener('click', openArticleInWorkspace);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      typewriter(p, t('desensIntro'), 22);
    }
    // "What else useful" question
    else if (text.includes('útil') || text.includes('useful') || text.includes('útil saber')) {
      appendAssistantMessage(`<p>${t('usefulReply')}</p>`);
    }
    // Differential diagnosis
    else if (text.includes('diferencia') || text.includes('differential') || text.includes('diagnóstico')) {
      appendAssistantMessage(`<p>${t('diagReply')}</p>`);
    }
    // Scale question
    else if (text.includes('escala de') || text.includes('scale') || text.includes('calcule a escala') || text.includes('calcule la escala')) {
      appendAssistantMessage(`<p>${t('scaleReply')}</p>`);
    }
    // Generic fallback
    else {
      appendAssistantMessage(`<p>${t('genericReply')}</p>`);
    }
  }

  // ===== Center workspace (Telepatia Evidence) =====
  const workspaceEmpty = document.getElementById('workspace-empty');
  const workspaceContent = document.getElementById('workspace-content');
  const workspaceSummaryWrap = document.getElementById('workspace-summary-wrap');
  const workspaceRolWrap = document.getElementById('workspace-rol-wrap');
  const workspaceTitle = document.getElementById('workspace-title');
  const refIconsBar = document.getElementById('ref-icons-bar');
  const gradeBar = document.getElementById('grade-bar');
  const susBar = document.getElementById('sus-bar');
  const susBtn = document.getElementById('sus-btn');
  const susContent = document.getElementById('sus-content');
  const workspaceClose = document.getElementById('workspace-close');
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
    const actions = t('articleActions');
    if (Array.isArray(actions)) {
      actions.forEach((action) => {
        const li = document.createElement('li');
        li.textContent = action;
        summaryActionsList.appendChild(li);
      });
    }
    if (withTypewriter) {
      typewriter(summaryExplanation, t('articleExplanation'), 15);
    } else {
      summaryExplanation.textContent = t('articleExplanation');
    }
    summaryDeeper?.classList.add('hidden');
    if (deeperMethodology) deeperMethodology.textContent = t('articleMethodology');
    if (deeperResults) deeperResults.textContent = t('articleResults');
  }

  btnGoDeeper?.addEventListener('click', () => {
    summaryDeeper?.classList.toggle('hidden');
    const expanded = !summaryDeeper?.classList.contains('hidden');
    btnGoDeeper?.classList.toggle('expanded', expanded);
    const svg = btnGoDeeper?.querySelector('svg');
    if (svg) svg.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
    const textEl = btnGoDeeper?.querySelector('.btn-go-deeper-text');
    if (textEl) textEl.textContent = expanded ? t('deeperCollapse') : t('deeperExpand');
  });

  susBtn?.addEventListener('click', () => {
    susContent?.classList.toggle('hidden');
    susBtn?.classList.toggle('expanded', !susContent?.classList.contains('hidden'));
  });

  function openArticleInWorkspace() {
    workspaceEmpty.classList.add('hidden');
    workspaceContent.classList.remove('hidden');
    workspaceTitle.textContent = 'Management and Prevention of Hypersensitivity Reactions to Radiocontrast Media';
    workspaceTitle.href = 'https://pubs.rsna.org/doi/10.1148/radiol.240100';
    workspaceTitle.target = '_blank';
    workspaceSummaryWrap.classList.remove('hidden');
    workspaceRolWrap.classList.add('hidden');
    document.getElementById('workspace-blank-wrap')?.classList.add('hidden');
    refIconsBar.classList.remove('hidden');
    gradeBar.classList.remove('hidden');
    susBar?.classList.remove('hidden');
    susContent?.classList.add('hidden');
    susBtn?.classList.remove('expanded');
    renderArticleSummary(true);
  }

  function closeWorkspace() {
    workspaceContent.classList.add('hidden');
    workspaceEmpty.classList.remove('hidden');
  }

  function openBlankWorkspace() {
    workspaceEmpty.classList.add('hidden');
    workspaceContent.classList.remove('hidden');
    workspaceTitle.textContent = t('newSearchTitle');
    workspaceTitle.href = '#';
    workspaceSummaryWrap.classList.add('hidden');
    workspaceRolWrap.classList.add('hidden');
    document.getElementById('workspace-blank-wrap')?.classList.remove('hidden');
    refIconsBar.classList.remove('hidden');
    gradeBar.classList.add('hidden');
    susBar?.classList.add('hidden');
  }

  document.getElementById('workspace-new')?.addEventListener('click', openBlankWorkspace);

  // ===== Chat pane views =====
  const chatView = document.getElementById('chat-view');
  const chatRolView = document.getElementById('chat-rol-view');
  const chatRolContent = document.getElementById('chat-rol-content');

  function openRolInChat() {
    chatRolContent.innerHTML = t('rolContent');
    chatView.classList.add('hidden');
    chatRolView.classList.remove('hidden');
    document.getElementById('chat-calculator-view')?.classList.add('hidden');
  }

  function backToChat() {
    chatRolView.classList.add('hidden');
    document.getElementById('chat-calculator-view')?.classList.add('hidden');
    chatView.classList.remove('hidden');
  }

  // ===== HAS-BLED Calculator =====
  const calcView = document.getElementById('chat-calculator-view');
  const calcScoreEl = document.getElementById('calc-score');
  const calcRiskEl = document.getElementById('calc-risk');
  const calcInterpEl = document.getElementById('calc-interpretation');

  function openHasbled() {
    chatView.classList.add('hidden');
    chatRolView.classList.add('hidden');
    calcView?.classList.remove('hidden');
    updateCalcScore();
  }

  function updateCalcScore() {
    const checks = document.querySelectorAll('.calc-check');
    let score = 0;
    checks.forEach(c => { if (c.checked) score += parseInt(c.dataset.points || '1'); });

    calcScoreEl.textContent = score;
    calcScoreEl.className = 'calc-score-value';

    if (score <= 2) {
      calcScoreEl.classList.add('risk-low');
      calcRiskEl.innerHTML = `<span class="calc-risk-dot calc-risk-low"></span><span>${t('calcLow')}</span>`;
      calcInterpEl.textContent = t('calcLowI');
    } else if (score === 3) {
      calcScoreEl.classList.add('risk-moderate');
      calcRiskEl.innerHTML = `<span class="calc-risk-dot calc-risk-moderate"></span><span>${t('calcModR')}</span>`;
      calcInterpEl.textContent = t('calcModI');
    } else {
      calcScoreEl.classList.add('risk-high');
      calcRiskEl.innerHTML = `<span class="calc-risk-dot calc-risk-high"></span><span>${t('calcHigh')}</span>`;
      calcInterpEl.textContent = t('calcHighI');
    }
  }

  document.querySelectorAll('.calc-check').forEach(c => {
    c.addEventListener('change', updateCalcScore);
  });

  document.getElementById('btn-hasbled')?.addEventListener('click', openHasbled);
  document.getElementById('btn-back-from-calc')?.addEventListener('click', backToChat);
  workspaceClose.addEventListener('click', closeWorkspace);
  document.getElementById('rol-ans-btn')?.addEventListener('click', openRolInChat);
  document.getElementById('btn-back-to-chat')?.addEventListener('click', backToChat);

  // ===== Blank evidence workspace =====
  const workspaceBlankMessages = document.getElementById('workspace-blank-messages');
  const workspaceBlankInput = document.getElementById('workspace-blank-input');
  const workspaceBlankSend = document.getElementById('workspace-blank-send');

  document.getElementById('btn-new-evidence')?.addEventListener('click', openBlankWorkspace);

  function appendBlankMsg(text, isUser) {
    const div = document.createElement('div');
    div.className = 'ws-blank-msg ' + (isUser ? 'ws-blank-msg-user' : 'ws-blank-msg-assistant');
    div.textContent = text;
    workspaceBlankMessages.appendChild(div);
    workspaceBlankMessages.scrollTop = workspaceBlankMessages.scrollHeight;
  }

  function handleBlankSend() {
    const text = workspaceBlankInput.value.trim();
    if (!text) return;
    appendBlankMsg(text, true);
    workspaceBlankInput.value = '';
    const suggestionsEl = document.querySelector('.workspace-blank-suggestions');
    if (suggestionsEl) suggestionsEl.style.display = 'none';
    setTimeout(() => { appendBlankMsg(t('blankSearching'), false); }, 500);
  }

  workspaceBlankSend?.addEventListener('click', handleBlankSend);
  workspaceBlankInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleBlankSend(); }
  });

  document.querySelectorAll('.ws-suggestion-btn[data-ws-quick]').forEach((btn) => {
    btn.addEventListener('click', () => {
      workspaceBlankInput.value = btn.dataset.wsQuick;
      handleBlankSend();
    });
  });

  // ===== Workspace article chat =====
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
    appendWorkspaceMsg(t('workspaceReply'), false);
  }

  workspaceSendBtn?.addEventListener('click', handleWorkspaceSend);
  workspaceChatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleWorkspaceSend(); }
  });

  // ===== FIX: Make ALL suggestion buttons functional =====
  const suggestionBtns = document.querySelectorAll('.suggestions .suggestion-btn');
  suggestionBtns.forEach((btn) => {
    if (btn.id === 'btn-hasbled') return; // Already has handler
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      chatInput.value = text;
      handleSend();
    });
  });

  // ===== Popovers =====
  const lgpdBtn2 = document.getElementById('lgpd-btn');
  const lgpdPopover = document.getElementById('lgpd-popover');
  const lgpdClose = document.getElementById('lgpd-close');
  lgpdBtn2?.addEventListener('click', () => lgpdPopover?.classList.toggle('hidden'));
  lgpdClose?.addEventListener('click', () => lgpdPopover?.classList.add('hidden'));

  const gradeBtn = document.getElementById('grade-btn');
  const gradePopover = document.getElementById('grade-popover');
  const gradeClose = document.getElementById('grade-close');
  gradeBtn?.addEventListener('click', () => gradePopover?.classList.toggle('hidden'));
  gradeClose?.addEventListener('click', () => gradePopover?.classList.add('hidden'));

  // CDSS alert action button
  document.getElementById('btn-alert-evidence')?.addEventListener('click', () => {
    openArticleInWorkspace();
  });

  // ===== Language Switcher =====
  const langBtn = document.getElementById('btn-lang');
  const langDropdown = document.getElementById('lang-dropdown');
  const langCurrent = document.getElementById('lang-current');

  langBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown?.classList.toggle('hidden');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    langDropdown?.classList.add('hidden');
  });

  langDropdown?.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.querySelectorAll('.lang-option').forEach((opt) => {
    opt.addEventListener('click', () => {
      const lang = opt.dataset.lang;
      if (lang && lang !== currentLang) {
        applyLanguage(lang);
      }
      langDropdown?.classList.add('hidden');
    });
  });

  // ===== Apply Language =====
  function applyLanguage(lang) {
    currentLang = lang;

    // Update dropdown UI
    langCurrent.textContent = lang.toUpperCase();
    document.querySelectorAll('.lang-option').forEach(o => {
      o.classList.toggle('active', o.dataset.lang === lang);
    });

    // HTML lang attribute
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';

    // Title
    document.title = t('consultType') + ' — Ambient Scribe';

    // ---- Header ----
    const consultType = document.querySelector('.consult-type');
    if (consultType) consultType.textContent = t('consultType');
    const consultDD = document.querySelector('.consult-dropdown span');
    if (consultDD) consultDD.textContent = t('consultType');

    const recLabel = recordBtn?.querySelector('.record-label');
    if (recLabel) recLabel.textContent = recordBtn.classList.contains('recording') ? t('recording') : t('record');
    setBtnText(pauseBtn, t('pause'));
    setBtnText(continueBtn, t('cont'));
    setBtnText(stopBtn, t('stop'));

    const discardBtn = document.querySelector('.btn-discard');
    if (discardBtn) discardBtn.textContent = t('discard');
    setBtnText(document.querySelector('.btn-finalize'), t('finalize'));

    // ---- Scribe pane ----
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.placeholder = t('searchPH');

    const templateTitle = document.querySelector('.checklist-title');
    if (templateTitle) templateTitle.textContent = t('templateTitle');

    const sectionMap = {
      chief: ['chiefLabel', 'chiefText'],
      hpi: ['hpiLabel', 'hpiText'],
      meds: ['medsLabel', 'medsText'],
      diseases: ['diseasesLabel', 'diseasesText']
    };
    Object.entries(sectionMap).forEach(([sec, [labelKey, textKey]]) => {
      const item = document.querySelector(`.checklist-item[data-section="${sec}"]`);
      if (!item) return;
      const strong = item.querySelector('strong');
      const span = item.querySelector('.text-pending, .text-complete');
      if (strong) strong.textContent = t(labelKey);
      if (span) span.textContent = t(textKey);
    });

    const notesLabel = document.querySelector('.notes-section label');
    if (notesLabel) notesLabel.textContent = t('notesLabel');
    const notesTA = document.querySelector('.notes-section textarea');
    if (notesTA) notesTA.placeholder = t('notesPH');
    const historyLabel = document.querySelector('.history-section label');
    if (historyLabel) historyLabel.textContent = t('historyLabel');
    const historyTA = document.querySelector('.history-section textarea');
    if (historyTA) historyTA.placeholder = t('historyPH');

    const attachSpan = document.querySelector('.attach-area span');
    if (attachSpan) attachSpan.textContent = t('attachText');

    // ---- Center workspace ----
    const wsEmptyTitle = document.querySelector('.workspace-empty-title');
    if (wsEmptyTitle) wsEmptyTitle.textContent = t('evidenceTitle');
    const wsEmptyDesc = document.querySelector('.workspace-empty p:not(.workspace-empty-title)');
    if (wsEmptyDesc) wsEmptyDesc.textContent = t('evidenceDesc');
    setBtnText(document.getElementById('btn-new-evidence'), t('newEvidence'));

    const refLabel = document.querySelector('.ref-label');
    if (refLabel) refLabel.textContent = t('refLabel');

    const gradeLabel = document.querySelector('.grade-label');
    if (gradeLabel) gradeLabel.textContent = t('gradeStrength');
    const gradeValue = document.querySelector('.grade-value');
    if (gradeValue) gradeValue.textContent = t('gradeMod');
    const gradeSys = document.querySelector('.grade-system');
    if (gradeSys) gradeSys.textContent = t('gradeSystem');

    // SUS button text
    const susBtnSpan = susBtn?.querySelector('span:not(.sus-flag)');
    if (susBtnSpan) susBtnSpan.textContent = t('susBtn');

    // SUS content
    const susIntroEl = document.querySelector('.sus-intro');
    if (susIntroEl) susIntroEl.textContent = t('susIntro');
    const susItems = document.querySelectorAll('.sus-list li');
    ['susItem1', 'susItem2', 'susItem3', 'susItem4'].forEach((key, i) => {
      if (susItems[i]) susItems[i].innerHTML = t(key);
    });
    const susFooterEl = document.querySelector('.sus-footer');
    if (susFooterEl) susFooterEl.textContent = t('susFooter');

    // Summary actions label
    const actionsStrong = document.querySelector('.summary-actions strong');
    if (actionsStrong) actionsStrong.textContent = t('actionsFor');
    const deeperText = document.querySelector('.btn-go-deeper-text');
    if (deeperText) {
      const isExpanded = !summaryDeeper?.classList.contains('hidden');
      deeperText.textContent = isExpanded ? t('deeperCollapse') : t('deeperExpand');
    }
    const methTitle = document.querySelector('.summary-deeper h5:first-child');
    if (methTitle) methTitle.textContent = t('methodTitle');
    const resTitle = document.querySelectorAll('.summary-deeper h5')[1];
    if (resTitle) resTitle.textContent = t('resultsTitle');

    // Workspace chat
    const wsChatTitle = document.querySelector('.workspace-chat-title');
    if (wsChatTitle) wsChatTitle.textContent = t('discussTitle');
    const wsChatHint = document.querySelector('.workspace-chat-hint');
    if (wsChatHint) wsChatHint.textContent = t('discussHint');
    const wsChatInput = document.getElementById('workspace-chat-input');
    if (wsChatInput) wsChatInput.placeholder = t('askArticlePH');

    // Blank workspace
    const blankInput = document.getElementById('workspace-blank-input');
    if (blankInput) blankInput.placeholder = t('blankPH');

    // Blank workspace suggestion buttons
    const wsSugBtns = document.querySelectorAll('.ws-suggestion-btn');
    wsSugBtns.forEach((btn, i) => {
      if (i === 0) {
        setBtnText(btn, t('wsSug1Label'));
        btn.dataset.wsQuick = t('wsSug1Full');
      } else if (i === 1) {
        // This is the Radiopaedia link — update text
        // It has favicon + text + external link icon, text is a text node
        setBtnText(btn, t('wsSug2Label'));
      } else if (i === 2) {
        setBtnText(btn, t('wsSug3Label'));
        btn.dataset.wsQuick = t('wsSug3Full');
      } else if (i === 3) {
        setBtnText(btn, t('wsSug4Label'));
        btn.dataset.wsQuick = t('wsSug4Full');
      }
    });

    // Rol ANS link texts
    document.querySelectorAll('.workspace-rol-link').forEach(el => {
      el.textContent = t('rolLink');
    });

    // ---- Right chat pane ----
    const chatHeaderSpan = document.querySelector('.chat-header > span');
    if (chatHeaderSpan) chatHeaderSpan.textContent = t('intTitle');

    setBtnText(document.getElementById('rol-ans-btn'), t('rolAns'));

    // Back to chat buttons
    document.querySelectorAll('.btn-back-to-chat').forEach(btn => {
      setBtnText(btn, t('backChat'));
    });

    // Rol ANS view
    const chatRolTitle = document.querySelector('.chat-rol-title');
    if (chatRolTitle) chatRolTitle.textContent = t('rolTitle');

    // Alert card
    const alertTitle = document.querySelector('.alert-title');
    if (alertTitle) alertTitle.textContent = t('alertTitle');
    const alertDesc = document.querySelector('.alert-desc');
    if (alertDesc) alertDesc.textContent = t('alertDesc');
    const alertBtnEl = document.getElementById('btn-alert-evidence');
    if (alertBtnEl) setBtnText(alertBtnEl, t('alertBtn'));

    // Suggestion buttons
    const sugBtns = document.querySelectorAll('.suggestions .suggestion-btn');
    const sugKeys = ['sugHasbled', 'sugUseful', 'sugDiag', 'sugScale'];
    sugBtns.forEach((btn, i) => {
      if (sugKeys[i]) setBtnText(btn, t(sugKeys[i]));
    });

    // Chat input
    if (chatInput) chatInput.placeholder = t('chatPH');

    // Disclaimer
    const disclaimer = document.querySelector('.disclaimer');
    if (disclaimer) disclaimer.textContent = t('disclaimer');

    // LGPD button
    setBtnText(document.getElementById('lgpd-btn'), t('lgpdBtn'));

    // ---- Calculator ----
    const calcTitleEl = document.querySelector('.calc-title');
    if (calcTitleEl) calcTitleEl.textContent = t('calcTitle');
    const calcSubEl = document.querySelector('.calc-subtitle');
    if (calcSubEl) calcSubEl.textContent = t('calcSubtitle');

    const calcItems = document.querySelectorAll('.calc-item');
    const calcKeys = [
      ['calcH', 'calcHD'], ['calcA', 'calcAD'], ['calcS', 'calcSD'],
      ['calcB', 'calcBD'], ['calcL', 'calcLD'], ['calcE', 'calcED'], ['calcD', 'calcDD']
    ];
    calcItems.forEach((item, i) => {
      if (!calcKeys[i]) return;
      const strong = item.querySelector('strong');
      const desc = item.querySelector('.calc-desc');
      if (strong) strong.textContent = t(calcKeys[i][0]);
      if (desc) desc.textContent = t(calcKeys[i][1]);
    });

    const calcScoreLabel = document.querySelector('.calc-score-label');
    if (calcScoreLabel) calcScoreLabel.textContent = t('calcScoreLabel');
    const calcMax = document.querySelector('.calc-score-max');
    if (calcMax) calcMax.textContent = t('calcMax');
    updateCalcScore(); // Re-render with correct language

    // ---- GRADE popover ----
    const gpTitle = document.querySelector('.grade-popover h4');
    if (gpTitle) gpTitle.textContent = t('gradePopTitle');
    const gpDesc = document.querySelector('.grade-popover p:not(.grade-footer)');
    if (gpDesc) gpDesc.textContent = t('gradePopDesc');
    const gpItems = document.querySelectorAll('.grade-popover li');
    const gpKeys = [
      ['gradeHighL', 'gradeHighD'], ['gradeModL', 'gradeModD'],
      ['gradeLowL', 'gradeLowD'], ['gradeVLowL', 'gradeVLowD']
    ];
    gpItems.forEach((li, i) => {
      if (!gpKeys[i]) return;
      li.innerHTML = `<strong>${t(gpKeys[i][0])}</strong> ${t(gpKeys[i][1])}`;
    });
    const gpFooter = document.querySelector('.grade-footer');
    if (gpFooter) gpFooter.innerHTML = t('gradeFooter');

    // ---- LGPD popover ----
    const lpTitle = document.querySelector('.lgpd-popover h4');
    if (lpTitle) lpTitle.textContent = t('lgpdPopTitle');
    const lpDesc = document.querySelector('.lgpd-popover p:not(.lgpd-footer)');
    if (lpDesc) lpDesc.textContent = t('lgpdPopDesc');
    const lpItems = document.querySelectorAll('.lgpd-popover li');
    ['lgpdEnc', 'lgpdAcc', 'lgpdMin', 'lgpdTrans'].forEach((key, i) => {
      if (lpItems[i]) lpItems[i].innerHTML = t(key);
    });
    const lpFooter = document.querySelector('.lgpd-footer');
    if (lpFooter) lpFooter.textContent = t('lgpdFooter');

    // Re-render article summary if it's currently visible
    if (!workspaceSummaryWrap?.classList.contains('hidden')) {
      renderArticleSummary(false);
    }
  }

  // ===== Auto-start recording on load =====
  setTimeout(() => setRecordingState(true), 1500);
})();
