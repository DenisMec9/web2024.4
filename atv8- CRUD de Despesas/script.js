const olDespesas= document.getElementById("Despesas");
const Descricao = document.getElementById("Descricao");
const valor = document.getElementById("valor");
const btAdicionar = document.getElementById("btAdicionar");

const baseURL = "https://parseapi.back4app.com/classes/despesa";
const headers = {
    "X-Parse-Application-Id: WOf1KY10sPkIzZxynvsyD8xKO8VxYYpU0b0qpV7F",
    "X-Parse-REST-API-Key: eppqhzHQDef4zXFtqlgZV5okC3JQuDeP7fCPTiPB"
  };
  const headersJson = {
    ...headers,
    "Content-Type": "application/json",
  };
  const createList = (data) => {
    Despesas.innerHTML = "";
    const Descricao = data.results;
    Descricao.forEach((descricao) => {
      const text = document.createTextNode(`${Despesas.descricao} `);
      const li = document.createElement("li");
      li.appendChild(text);
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = tarefa.concluida;
      cb.onchange = () => handleCheckboxClick(cb, Despesas);
      li.appendChild(cb);
      const bt = document.createElement("button");
      bt.innerHTML = "x";
      bt.onclick = () => handleBtRemoverClick(bt, Despesas);
      li.appendChild(bt);
      olTarefas.appendChild(li);
    });
  };