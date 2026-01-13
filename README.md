# Smartmart Dashboard

SmartMart Dashboard é uma aplicação web para visualização e gestão de produtos e vendas, permitindo importar dados via CSV, filtrar por categorias e acompanhar métricas como quantidade de vendas e faturamento em um dashboard simples e eficiente.

<br>

## Tecnologias Utilizadas

- **TypeScript** — Linguagem de programação do projeto
- **React** — Framework
- **Vite** — Ferramenta de build e desenvolvimento
- **NPM** — Gerenciador de pacotes
- **Tailwind CSS** — Framework CSS
- **Redux Toolkit** — Gerenciamento de estado global
- **Axios** — Comuicação com a API
- **Radix UI** — Componentes para UI
- **Shadcn/ui** — Biblioteca de componentes reutilizáveis baseada em Radix UI
- **Lucide-React** — Biblioteca de ícones SVG
- **Recharts** – Visualização de dados e gráficos

<br>

## Estrutura do Projeto

```
smartmart_dashboard_frontend/
├─── src/
│    ├── api/
│    │   ├── axios.ts
│    │   ├── routes.ts
│    │   ├── services_categories.ts
│    │   ├── services_products.ts
│    │   └── services_sales.ts
│    │
│    ├── components/
│    │   ├── application/
│    │   │   └── navbar.ts
│    │   │
│    │   └── ui/   ---> Componentes reutilizáveis do Shadcn/ui
│    │
│    ├── lib/
│    │   └── utils.ts
│    │
│    ├── pages/
│    │   ├── dashboard/
│    │   │   ├── components/
│    │   │   │   ├── revenueOverTimeRechartForDashboard.tsx
│    │   │   │   ├── salesVolumeByMonthRechartForDashboard.tsx
│    │   │   │   └── titleForDashboard.tsx
│    │   │   └── Dashboard.tsx
│    │   │
│    │   └── products/
│    │       ├── components/
│    │       │   ├── addNewCategoryForProduct.tsx
│    │       │   ├── addNewProductForProduct.tsx
│    │       │   ├── cardOfEditProductForProduct.tsx
│    │       │   ├── noFound.tsx
│    │       │   ├── paginationForProduct.tsx
│    │       │   ├── searchAndFilterForProduct.tsx
│    │       │   ├── tableForProducts.tsx
│    │       │   ├── titleAndButtonsForProducts.tsx
│    │       │   └── uploadCsvForProduct.tsx
│    │       └── Products.tsx
│    │
│    ├── store/
│    │   ├── categorySlice.ts
│    │   ├── productSlice.ts
│    │   ├── saleSlice.ts
│    │   └── store.ts
│    │
│    ├── App.tsx
│    ├── index.css
│    ├── main.tsx
│    └── types.ts
│
├── .gitignore
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

<br>

<br>

## Pré-requisito

- **NPM**

<br>

## Variáveis de Ambiente (**.env**)

Crie um arquivo **.env** na raiz do projeto:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

<br>

## NPM

Subir a aplicação

```bash
npm install
npm run dev
```

A aplicação ficará disponível em:

```
http://localhost:5173

```
