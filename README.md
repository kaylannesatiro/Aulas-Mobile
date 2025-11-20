<div align="center">

# 📱 Aulas Mobile - Interface para Dispositivos Móveis

Este repositório armazena os projetos e exercícios práticos desenvolvidos durante a disciplina de **Interface para Dispositivos Móveis**, com foco no aprendizado de **React Native**.

O objetivo é documentar a evolução do aprendizado, desde a configuração do ambiente até a criação de componentes funcionais e estilizados.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📂 Estrutura do Projeto

Para manter o projeto organizado e escalável conforme as aulas avançam, adotei uma estrutura baseada em componentes separados por módulos (aulas).

A árvore de arquivos atual está organizada da seguinte forma:

```bash
intro-react-native/
├── assets/
├── components/              # Pasta raiz para os exercícios
│   ├── aula-01/             # Introdução e conceitos básicos
│   │   ├── HelloWorld.jsx   # Primeiro componente funcional
│   │   └── estilos.js       # Estilização separada (StyleSheet)
│   │
│   └── aula-02/             # Lógica e Interatividade
│       ├── MeuIMC.jsx       # Calculadora de IMC
│       └── estilos.js       # Estilização dedicada
│
├── App.js                   # Ponto de entrada (Entry Point)
├── index.js
├── package-lock.json
└── package.json
```

---

## 🚀 Desenvolvimento e Implementações

Abaixo, detalho o processo de construção e as modificações realizadas na branch `main`:

### 1. Inicialização do Projeto
O projeto foi criado do zero utilizando o comando `npx` para gerar o boilerplate padrão do React Native. Isso garantiu todas as configurações iniciais de bundler e dependências.

### 2. Organização de Componentes
Ao invés de manter tudo na raiz ou em um único arquivo, criei a pasta `components`. A ideia é modularizar cada atividade:
* **Cada aula tem sua própria subpasta** (ex: `aula-01`, `aula-02`).
* **Separação de responsabilidades:** A lógica do componente (`.jsx`) fica separada de sua estilização (`estilos.js`), facilitando a manutenção e leitura do código.

### 3. Atividades Realizadas

#### 🔹 Aula 01: Hello World
* **Foco:** Criação do primeiro componente funcional e entendimento da sintaxe JSX.
* **Arquivos:**
    * `HelloWorld.jsx`: Renderiza textos introdutórios.
    * `estilos.js`: Utiliza `StyleSheet.create` para definir cores, tamanhos de fonte e alinhamentos básicos.

#### 🔹 Aula 02: Calculadora de IMC
* **Foco:** Introdução à lógica dentro dos componentes e manipulação de dados simples.
* **Arquivos:**
    * `MeuIMC.jsx`: Componente que estrutura os dados para o cálculo do Índice de Massa Corporal.
    * `estilos.js`: Estilização específica para a exibição dos resultados e inputs.

### 4. Configuração do Entry Point (`App.js`)
O arquivo `App.js` foi refatorado para servir como um "hub". Ele foi limpo de seu código padrão e agora é responsável por importar e renderizar os componentes criados nas aulas (como o `HelloWorld` ou `MeuIMC`), permitindo testar cada atividade individualmente.

---

## 🛠️ Como rodar o projeto

Caso queira clonar e rodar este projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/kaylannesatiro/Aulas-Mobile.git](https://github.com/kaylannesatiro/Aulas-Mobile.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Execute o projeto:**
    ```bash
    npx expo start
    # ou
    npx react-native run-android
    ```

---

<div align="center"> Developed with 🩷 by Kaylanne Sátiro </div>