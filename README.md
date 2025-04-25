# Plasma Docs

## English Documentation

> A modern, interactive, and extensible documentation platform built with Next.js and TypeScript.

Plasma Docs is an open‑source platform designed to host and render documentation for any technology or framework. It provides a customizable editor for creating pages: the editor outputs a JSON description, and the platform dynamically generates each page based on that JSON schema.

### 🚀 Key Features

- **Custom Page Editor**: Create and edit documentation content using a WYSIWYG or Markdown-like editor that serializes to JSON. Pages are rendered from JSON, ensuring consistency and enabling advanced features (versioning, dynamic imports).
- **Multi‑Tech Support**: Scaffold docs under `src/app/docs/{technology}`. Current sample: GitHub; future: Docker, Kubernetes, Terraform, React, Node.js, and more.
- **Hybrid Rendering**: Uses Next.js App Router for Static Site Generation (SSG) and Server‑Side Rendering (SSR) per page to balance performance and freshness.
- **Modular Architecture**: Each technology section can include `meta.json` for navigation, custom layouts, and localized content.
- **Theming & Layouts**: Swap themes (light/dark) and customize layouts via Tailwind CSS configuration and CSS variables.
- **Bilingual Content Ready**: Supports English and Portuguese content side‑by‑side or separate builds.
- **SEO & Accessibility**: Optimized for search engines and follows ARIA guidelines for an inclusive experience.
- **Zero‑Config Deployments**: Deploy instantly on Vercel, Netlify, or any Node.js host.

### 📂 Project Structure

```plaintext
plasma-docs/
├── assets/                     # Static images, logos, contributor avatars
├── public/                     # Public files (robots.txt, favicon)
├── src/
│   ├── app/
│   │   ├── docs/
│   │   │   ├── github/         # Sample GitHub docs: pages & meta.json
│   │   │   ├── docker/         # Placeholder for Docker docs
│   │   │   └── …               # Additional tech sections
│   │   ├── editor/             # Custom editor components & JSON schema
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Application root layout
│   │   └── page.tsx            # Home and routing logic
├── meta/                       # Shared metadata definitions
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS config
├── tsconfig.json               # TypeScript settings
├── package.json                # Scripts & dependencies
└── vercel.json                 # Vercel deployment settings
``` 

### 💻 Installation & Usage

1. **Clone**:  
   ```bash
   git clone https://github.com/Plasma-Dev12/plasma-docs.git
   cd plasma-docs
   ```
2. **Install**:  
   ```bash
   npm install
   # or yarn install
   ```
3. **Develop**:  
   ```bash
   npm run dev
   ```  
   Open `http://localhost:3000`.
4. **Build**:  
   ```bash
   npm run build
   ```
5. **Start**:  
   ```bash
   npm start
   ```
6. **Deployment**:  
   Connect to Vercel, Netlify, or push to your Node.js host for instant deployment.

### 🛠️ Technologies

- **Framework**: Next.js 14+ (App Router)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS, PostCSS  
- **JSON Schema**: Custom editor → JSON → React components  
- **Hosting**: Vercel, Netlify, any Node.js environment

### 🤝 Contributing

We welcome contributions to extend support and improve features:

1. Fork this repo.  
2. Create a branch: `feature/{technology}` or `editor-enhancement`.  
3. Add or update documentation under `src/app/docs/{technology}`. Include or modify `meta.json` for navigation.  
4. Implement editor enhancements in `src/app/editor`.  
5. Commit, push, and open a Pull Request.

Please maintain clear English and Portuguese content blocks and update JSON schemas accordingly.

### 📄 License

This project is licensed under the MIT License.

---

## Documentação em Português

> Uma plataforma de documentação moderna, interativa e extensível desenvolvida com Next.js e TypeScript.

O Plasma Docs é uma plataforma de código aberto projetada para hospedar e renderizar documentação de qualquer tecnologia ou framework. Possui um editor personalizado para criação de páginas: o editor gera um JSON, e a plataforma gera dinamicamente cada página com base nesse esquema JSON.

### 🚀 Funcionalidades Principais

- **Editor Personalizado de Páginas**: Crie e edite conteúdo usando um editor WYSIWYG ou estilo Markdown que serializa para JSON. As páginas são renderizadas a partir do JSON, garantindo consistência e viabilizando recursos avançados (versionamento, imports dinâmicos).
- **Suporte Multi‑Tecnologia**: Estruture docs em `src/app/docs/{tecnologia}`. Exemplo: GitHub; futuro: Docker, Kubernetes, Terraform, React, Node.js e mais.
- **Renderização Híbrida**: Utiliza Next.js App Router para Static Site Generation (SSG) e Server‑Side Rendering (SSR), otimizando desempenho e atualização.
- **Arquitetura Modular**: Cada seção pode incluir `meta.json` para navegação, layouts customizados e conteúdo localizado.
- **Temas & Layouts**: Troque temas (claro/escuro) e personalize layouts via configuração do Tailwind CSS e variáveis CSS.
- **Pronto para Bilingue**: Suporta conteúdo em inglês e português em blocos separados ou builds distintas.
- **SEO & Acessibilidade**: Otimizado para mecanismos de busca e segue diretrizes ARIA.
- **Deploy Zero‑Config**: Deploy instantâneo no Vercel, Netlify ou qualquer host Node.js.

### 📂 Estrutura do Projeto

```plaintext
plasma-docs/
├── assets/                     # Imagens, logos, avatares
├── public/                     # Arquivos públicos (robots.txt, favicon)
├── src/
│   ├── app/
│   │   ├── docs/
│   │   │   ├── github/         # Exemplo de docs GitHub
│   │   │   ├── docker/         # Futuras docs Docker
│   │   │   └── …               # Outras tecnologias
│   │   ├── editor/             # Componentes do editor e esquema JSON
│   │   ├── globals.css         # Estilos globais
│   │   ├── layout.tsx          # Layout raiz da aplicação
│   │   └── page.tsx            # Lógica de página e rotas
├── meta/                       # Definições de metadados compartilhados
├── next.config.ts              # Configuração Next.js
├── tailwind.config.js          # Configuração Tailwind CSS
├── tsconfig.json               # Configurações TypeScript
├── package.json                # Scripts e dependências
└── vercel.json                 # Configuração de deploy Vercel
``` 

### 💻 Instalação & Uso

1. **Clone**:  
   ```bash
   git clone https://github.com/Plasma-Dev12/plasma-docs.git
   cd plasma-docs
   ```
2. **Instale**:  
   ```bash
   npm install
   ```
3. **Desenvolva**:  
   ```bash
   npm run dev
   ```  
   Acesse `http://localhost:3000`.
4. **Build**:  
   ```bash
   npm run build
   ```
5. **Iniciar**:  
   ```bash
   npm start
   ```
6. **Deploy**:  
   Conecte ao Vercel, Netlify ou seu host Node.js.

### 🛠️ Tecnologias

- **Framework**: Next.js 14+ (App Router)  
- **Linguagem**: TypeScript  
- **Estilos**: Tailwind CSS, PostCSS  
- **Esquema JSON**: Editor → JSON → Componentes React  
- **Hospedagem**: Vercel, Netlify, Node.js

### 🤝 Contribuindo

Contribuições são bem‑vindas:

1. Faça um fork do repositório.  
2. Crie uma branch: `feature/{tecnologia}` ou `editor-enhancement`.  
3. Adicione ou atualize docs em `src/app/docs/{tecnologia}` incluindo `meta.json` para navegação.  
4. Implemente melhorias no editor em `src/app/editor`.  
5. Commit, push e abra um Pull Request.

Mantenha blocos de conteúdo claros para inglês e português e atualize os esquemas JSON.

### 📄 Licença

Este projeto está licenciado sob a Licença MIT.

### 🤝 Suporte & Comunidade

- **Issues**: Use a aba Issues no GitHub.
- **Discussions**: Participe das Discussions no GitHub.
- **Contato**: contact@plasma-dev.dev

