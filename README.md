# 🚀 NASA Library

Este projeto é uma aplicação web desenvolvida com **React** que consome a API pública da NASA para exibir imagens incríveis do espaço. Ele conta com uma estrutura organizada por páginas e componentes reutilizáveis, proporcionando uma experiência de navegação fluida e visualmente agradável.

---

## 📁 Estrutura do Projeto

nasa-app/

├── public/

├── src/

│ ├── assets/

│ ├── components/Header/

│ ├── pages/

│ │ ├── DayImg/

│ │ ├── EarthImg/

│ │ └── Home/

│ ├── services/

│ ├── App.css

│ ├── App.jsx

│ ├── index.css

│ ├── main.jsx

│ └── routes.jsx

├── .gitignore

├── index.html

├── package.json

├── vite.config.js

└── README.md

---

## 🧑‍💻 Tecnologias Utilizadas

- **JavaScript**
- **React (JSX)**
- **CSS**
- **HTML**
- **Three.js** – Para renderização 3D da Terra na página *EarthImg*
- **Vite** – Ferramenta de build e dev server

---

## 🌐 Funcionalidades

### 🏠 Home
Página inicial que permite a navegação para as demais seções:
- Imagem do Dia (DayImg)
- Imagem da Terra (EarthImg)

![image](https://github.com/user-attachments/assets/225d4d19-6b45-4a5a-b393-8241b250acfa)


### 🌞 DayImg
Realiza uma **requisição à API pública da NASA** para buscar e exibir a *imagem astronômica do dia* (Astronomy Picture of the Day - APOD), junto de sua descrição.

![image](https://github.com/user-attachments/assets/efb85c19-db38-4f0f-9a0a-5a4d01feb21d)

### 🌍 EarthImg
Renderiza uma **imagem 3D interativa da Terra** utilizando a biblioteca **Three.js**, proporcionando uma visualização dinâmica do nosso planeta.

![image](https://github.com/user-attachments/assets/e0eb5e4d-6ada-4c3e-99e2-4ee10fca4501)

---

## ▶️ Como Rodar o Projeto

1. Clone o repositório:
   ```
   git clone https://github.com/PedrohmCandido/Projeto-Nasa-Web1.git

2. Instale as dependências:
   ```
   npm install

3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
Instale as dependências:

 ---
 

✨ Créditos

API da NASA: https://api.nasa.gov

Biblioteca 3D: https://threejs.org/
