# Fintech Dashboard 📊

Um dashboard financeiro moderno e responsivo desenvolvido em React com TypeScript. O projeto consome dados de uma API de vendas para apresentar resumos financeiros, gráficos interativos de desempenho, filtragem dinâmica por período (datas e meses pré-definidos) e detalhes individuais de cada transação.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes ferramentas e bibliotecas:

*   **React** (com Vite para um ambiente de desenvolvimento rápido)
*   **TypeScript** (para tipagem estática, garantindo maior segurança e consistência no código)
*   **React Router DOM** (gerenciamento de rotas dinâmicas para navegação entre Resumo, Vendas e Detalhes)
*   **Recharts** (biblioteca para renderização de gráficos de linha interativos e responsivos)
*   **CSS Custom Properties** (estilização moderna e limpa, utilizando variáveis globais para o tema)

---

## 💡 Funcionalidades Principais

*   **Filtro por Período Dinâmico:** Seleção de datas personalizadas (Início/Fim) ou navegação rápida por botões de meses (Abril, Maio, Junho, Julho).
*   **Gráfico de Vendas:** Visualização analítica do desempenho das vendas ao longo do tempo usando gráficos interativos.
*   **Páginas Dinâmicas:** 
    *   **Resumo:** Exibição rápida do total de vendas, valores pagos e processando.
    *   **Vendas:** Tabela/Lista de todas as transações com paginação interativa.
    *   **Detalhes da Venda (`/vendas/:id`):** Página dedicada para inspecionar cada transação, exibindo o ID, nome do cliente, status, preço formatado em BRL e data.
*   **Tratamento de Estados:** Componentes dedicados para o estado de carregamento (`<Loading />`) e tratamento de erros de propriedades nulas/indefinidas da API.

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git](https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git)


   a. cd NOME_DO_REPOSITORIO
   b. npm install
   c. npm run dev


   src/
├── Context/       # Contexto global para compartilhamento do estado da API (DataContext)
├── Hooks/         # Custom Hooks reutilizáveis (useFetch)
├── Components/    # Componentes globais (Header, Loading, GraficoVendas, DateRange, etc.)
├── Pages/         # Componentes de páginas (Resumo, Vendas, Venda)
└── App.tsx        # Configuração principal de rotas e providers

---

### 💡 Dicas extras para fechar com chave de ouro:
1. **Adicione um print/GIF:** Logo abaixo do título (`# Fintech Dashboard`), coloque uma imagem ou um pequeno GIF mostrando o dashboard funcionando. Isso chama muito a atenção de recrutadores.
2. **Substitua os placeholders:** Não se esqueça de trocar `SEU_USUARIO` e `NOME_DO_REPOSITORIO` pelos links reais do seu GitHub quando subir o código!

