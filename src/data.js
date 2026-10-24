export const chapters = [
  {
    id: '01',
    week: 'SEMANA 07',
    short: 'Vetores & RAG',
    title: 'Quando os dados ganham significado',
    subtitle: 'Bancos vetoriais e geração aumentada por recuperação',
    icon: '◈',
    accent: 'cyan',
    summary: 'A busca deixa de depender apenas de palavras exatas e passa a recuperar conteúdos semanticamente próximos para dar contexto às respostas de IA.',
    concepts: ['Embeddings', 'Similaridade por cosseno', 'pgvector', 'RAG'],
    flow: ['Documentos', 'Chunks', 'Embeddings', 'Busca vetorial', 'Contexto para IA'],
    evidence: [
      { label: 'Dimensão dos vetores', value: '384', detail: 'O modelo utilizado produziu embeddings com 384 dimensões.' },
      { label: 'Extensão pgvector', value: '0.8.6', detail: 'Extensão confirmada no ambiente da prática.' },
      { label: 'Resultado de similaridade', value: '0,6823', detail: 'Maior pontuação registrada entre os exemplos apresentados no caderno.' }
    ],
    detail: 'O fluxo registra documentos e seus vetores no PostgreSQL, recupera os trechos mais próximos da consulta e entrega esse contexto ao modelo de linguagem. O caderno também demonstra filtros SQL combinados à busca vetorial, índice HNSW e a importância de usar o mesmo modelo na indexação e na consulta.',
    takeaway: 'RAG conecta a capacidade de geração de um modelo a fontes recuperadas, tornando a resposta mais fundamentada no contexto fornecido.',
    terms: [
      ['Embedding', 'Representação numérica de um texto em um espaço vetorial.'],
      ['Top-k', 'Quantidade de resultados mais relevantes recuperados para uma consulta.'],
      ['RAG', 'Retrieval-Augmented Generation: recuperação de contexto antes da geração.']
    ]
  },
  {
    id: '02',
    week: 'SEMANA 08',
    short: 'Dados para ML',
    title: 'Preparar dados é preparar o modelo',
    subtitle: 'Qualidade, transformação e preparação para Machine Learning',
    icon: '⌘',
    accent: 'violet',
    summary: 'Antes do treinamento, os dados precisam ser avaliados e preparados para que as variáveis estejam utilizáveis e comparáveis.',
    concepts: ['Auditoria de dados', 'Limpeza', 'Codificação', 'Escalonamento'],
    flow: ['Dados brutos', 'Auditoria', 'Limpeza', 'Transformação', 'Dados para ML'],
    evidence: [
      { label: 'Foco da prática', value: 'Preparação', detail: 'O tema identificado para a semana é preparar dados para Machine Learning.' },
      { label: 'Etapas-chave', value: '4', detail: 'Auditoria, limpeza, codificação e escalonamento são tópicos de referência desta seção.' },
      { label: 'Evidências numéricas', value: 'N/D', detail: 'O conteúdo textual do PDF desta semana não ficou legível para validação dos resultados específicos.' }
    ],
    detail: 'Esta seção apresenta o tema geral de preparação de dados para treinamento: verificar qualidade, tratar inconsistências, codificar variáveis categóricas e avaliar a necessidade de padronização ou escalonamento. Os nomes das técnicas citadas são um mapa conceitual; resultados, métricas e exemplos específicos devem ser confirmados diretamente no PDF original.',
    takeaway: 'Um modelo não compensa automaticamente dados mal preparados: a qualidade da entrada influencia a confiabilidade do treinamento.',
    terms: [
      ['Limpeza', 'Tratamento de ausências, duplicidades ou valores inconsistentes.'],
      ['Codificação', 'Conversão de categorias para uma representação que o algoritmo possa utilizar.'],
      ['StandardScaler', 'Técnica de padronização mencionada no resumo preliminar; validar o uso concreto no caderno original.']
    ],
    caution: 'O PDF desta semana não pôde ser lido integralmente nesta conversa. Por isso, esta seção não inventa métricas nem resultados de execução.'
  },
  {
    id: '03',
    week: 'SEMANA 09',
    short: 'Armazenamento',
    title: 'Armazenar melhor para processar melhor',
    subtitle: 'Parquet, particionamento, MinIO e Delta Lake',
    icon: '▤',
    accent: 'blue',
    summary: 'Formatos colunares, particionamento e camadas de dados ajudam a reduzir leitura desnecessária e organizar o ciclo analítico.',
    concepts: ['Parquet', 'Partition pruning', 'MinIO / S3', 'Delta Lake'],
    flow: ['Origem', 'Raw', 'Silver', 'Gold', 'Consumo'],
    evidence: [
      { label: 'Fragmentos lidos após filtro', value: '1 de 18', detail: 'A consulta seletiva reduziu a leitura para um único fragmento.' },
      { label: 'Linhas após filtro', value: '42', detail: 'Resultado da consulta com ano/mês e total ≥ 200.' },
      { label: 'Compressão Zstd', value: '38,8%', detail: 'Tamanho relativo ao CSV original: 24.011 bytes contra 61.953 bytes.' }
    ],
    detail: 'A prática compara CSV e Parquet com Snappy e Zstd, mostra particionamento por ano/mês e leitura seletiva, envia um objeto Parquet ao MinIO e explora Delta Lake para transações ACID, histórico de versões e MERGE. O particionamento deve ajudar as consultas sem criar excesso de partições de alta cardinalidade.',
    takeaway: 'A escolha do formato e da organização física afeta custo, desempenho e governança do processamento de dados.',
    terms: [
      ['Parquet', 'Formato colunar que favorece leitura seletiva e compressão.'],
      ['Partition pruning', 'Eliminação de partições que não atendem ao filtro da consulta.'],
      ['Time travel', 'Consulta de uma versão anterior registrada no histórico do Delta Lake.']
    ]
  },
  {
    id: '04',
    week: 'SEMANA 10',
    short: 'Governança',
    title: 'Confiança começa na governança',
    subtitle: 'Qualidade, privacidade, catálogo e linhagem',
    icon: '⌗',
    accent: 'green',
    summary: 'Governança organiza regras, responsabilidades e rastreabilidade para que dados sejam utilizados com qualidade e cuidado.',
    concepts: ['Dimensões da qualidade', 'Great Expectations', 'LGPD', 'Linhagem'],
    flow: ['Origem', 'Regras', 'Quality gate', 'Dados protegidos', 'BI / IA'],
    evidence: [
      { label: 'Clientes com cidade nula', value: '25 de 120', detail: '25 registros, equivalentes a 20,83%, apresentaram cidade ausente.' },
      { label: 'Pedidos com total negativo', value: '3', detail: 'A prática identificou três pedidos inválidos segundo a regra de total positivo.' },
      { label: 'Faixas de idade', value: '18–24 / 25–34', detail: 'Exemplo de generalização aplicado na etapa de minimização.' }
    ],
    detail: 'O caderno trabalha completude, acurácia, unicidade, atualidade, conformidade e consistência. Também demonstra expectativas de qualidade, quarentena de registros inválidos, redução de exposição de dados pessoais, hash de e-mail, catálogo e linhagem.',
    takeaway: 'Governança não é apenas documentação: é uma camada de controle que ajuda a evitar dados inadequados, exposição indevida e análises pouco confiáveis.',
    terms: [
      ['Quality gate', 'Regra de controle que impede dados inválidos de avançarem.'],
      ['Minimização', 'Uso apenas dos dados pessoais necessários para a finalidade.'],
      ['Linhagem', 'Registro da origem dos dados e das transformações pelas quais passaram.']
    ]
  },
  {
    id: '05',
    week: 'SEMANA 11',
    short: 'Automação',
    title: 'De tarefas isoladas a um fluxo confiável',
    subtitle: 'DAGs, retry, quality gates e backfill',
    icon: '⟳',
    accent: 'orange',
    summary: 'A orquestração define dependências, coordena tarefas e oferece mecanismos para tratar falhas e reprocessar períodos históricos.',
    concepts: ['DAG', 'Raw / Silver / Gold', 'Retry', 'Backfill'],
    flow: ['Extração Raw', 'Transformação Silver', 'Validação', 'Consolidação Gold', 'Relatório'],
    evidence: [
      { label: 'Clientes de demonstração', value: '60', detail: 'Base SQLite criada na prática.' },
      { label: 'Pedidos de demonstração', value: '360', detail: 'Pedidos gerados, incluindo totais negativos para validar regras.' },
      { label: 'Datas no backfill', value: '3', detail: 'Três datas lógicas reprocessadas no exercício.' }
    ],
    detail: 'A prática percorre a verificação de ambiente, geração de dados, execução de uma DAG, pipeline lakehouse, falha controlada com retry, bloqueio por qualidade, backfill por datas e geração de relatório final.',
    takeaway: 'Um pipeline bem orquestrado é observável e repetível: separa responsabilidades, controla falhas e permite reprocessar dados de forma direcionada.',
    terms: [
      ['DAG', 'Grafo acíclico dirigido que representa dependências entre tarefas.'],
      ['Retry', 'Nova tentativa após uma falha que pode ser transitória.'],
      ['Backfill', 'Reprocessamento controlado de datas ou períodos anteriores.']
    ]
  }
];

export const synthesis = [
  { label: 'Representar', text: 'Vetores transformam texto em representações úteis para busca semântica.', color: 'cyan' },
  { label: 'Preparar', text: 'Dados de entrada precisam de avaliação e transformação antes do ML.', color: 'violet' },
  { label: 'Armazenar', text: 'Formatos, partições e camadas afetam eficiência e histórico.', color: 'blue' },
  { label: 'Governar', text: 'Regras de qualidade e privacidade protegem o uso dos dados.', color: 'green' },
  { label: 'Orquestrar', text: 'DAGs e controles automatizam a execução de ponta a ponta.', color: 'orange' }
];