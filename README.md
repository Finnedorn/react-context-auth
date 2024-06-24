# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Partendo dall’esercizio precedente iniziamo ad aggiungere l’area amministrativa al nostro blog :occhiali_da_sole:
Creiamo un context per gestire e trasmettere le informazioni di autenticazione.
Creiamo un middleware per proteggere l’area privata.
Creiamo una pagina con un form al suo interno che simuli il login dell’utente.
N.B Lo stile non è importante!
BONUS:
Aggiungere un bottone per permettere all’utente di effettuare il logout.
Implementate una logica per salvare lo stato di login quando la pagina viene ricaricata (custom hook).
