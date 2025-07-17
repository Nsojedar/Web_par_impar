class ParImparLista extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render([]);
    window.addEventListener('rango-seleccionado', (e) => {
      const { inicio, fin } = e.detail;
      const lista = [];
      for (let i = inicio; i <= fin; i++) {
        const tipo = i % 2 === 0 ? 'Par' : 'Impar';
        lista.push(`${i} - ${tipo}`);
      }
      this.render(lista);
    });
  }

  render(lista) {
    this.shadowRoot.innerHTML = `
      <style>
        ul { padding-left: 20px; }
        li { margin: 3px 0; }
      </style>
      <h3>Resultado:</h3>
      <ul>
        ${lista.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }
}

customElements.define('par-impar-lista', ParImparLista);
