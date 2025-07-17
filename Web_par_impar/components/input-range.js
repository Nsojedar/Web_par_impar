class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        input, button {
          margin: 5px;
          padding: 5px;
        }
      </style>
      <label>Inicio: <input type="number" id="inicio"></label>
      <label>Fin: <input type="number" id="fin"></label>
      <button id="enviar">Enviar</button>
    `;

    this.shadowRoot.getElementById('enviar').addEventListener('click', () => {
      const inicio = parseInt(this.shadowRoot.getElementById('inicio').value);
      const fin = parseInt(this.shadowRoot.getElementById('fin').value);

      if (isNaN(inicio) || isNaN(fin)) {
        alert('Ambos valores deben ser numéricos.');
        return;
      }

      if (inicio > fin) {
        alert('El número inicial debe ser menor o igual al final.');
        return;
      }

      this.dispatchEvent(new CustomEvent('rango-seleccionado', {
        bubbles: true,
        composed: true,
        detail: { inicio, fin }
      }));
    });
  }
}

customElements.define('input-range', InputRange);
