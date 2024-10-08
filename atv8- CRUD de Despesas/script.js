const olDespesas= document.getElementById("Despesas");
const inputDescricao = document.getElementById("Descricao");
const inputValor = document.getElementById("Valor");
const btAdicionar = document.getElementById("btAdicionar");

const baseURL = "https://parseapi.back4app.com/classes/despesa";
const headers = {
    "X-Parse-Application-Id": "WOf1KY10sPkIzZxynvsyD8xKO8VxYYpU0b0qpV7F",
    "X-Parse-REST-API-Key": "eppqhzHQDef4zXFtqlgZV5okC3JQuDeP7fCPTiPB",
  };
  const headersJson = {
    ...headers,
    "Content-Type": "application/json",
  };
const createList = (data) => {
  olDespesas.innerHTML = "";
  const despesa = data.results;
  despesa.forEach((despesa) => {
    const text = document.createTextNode(`${tarefa.descricao} `);
    const li = document.createElement("li");
    li.appendChild(text);
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = despesa.concluida;
    cb.onchange = () => handleCheckboxClick(cb, despesa);
    li.appendChild(cb);
    const bt = document.createElement("button");
    bt.innerHTML = "x";
    bt.onclick = () => handleBtRemoverClick(bt, despesa);
    li.appendChild(bt);
    olDespesas.appendChild(li);
  });
};

const handleCheckboxClick = async (cb, despesa) => {
  try {
    cb.disabled = true;
    const response = await fetch(`${baseURL}/${despesa.objectId}`, {
      method: "PUT",
      headers: headersJson,
      body: JSON.stringify({ concluida: !tarefa.concluida }),
    });
    cb.disabled = false;
    console.log(response);
    if (!response.ok) {
      cb.checked = !cb.checked;
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
  } catch (error) {
    cb.checked = !cb.checked;
    console.log(error);
  }
};

const handleBtRemoverClick = async (bt, despesa) => {
  try {
    bt.disabled = true;
    const response = await fetch(`${baseURL}/${despesa.objectId}`, {
      method: "DELETE",
      headers: headers,
    });
    bt.disabled = false;
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    getDespesas();
  } catch (error) {
    console.log(error);
  }
};

const getDespesas = async () => {
  try {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: headers,
    });
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    const data = await response.json();
    createList(data);
  } catch (error) {
    console.log(error);
  }
};

const handleBtAdicionarClick = async () => {
  const descricao = inputDescricao.value.trim();
  if (!descricao) {
    alert("Necessário adicionar uma descrição para criar a lista despesa!");
    inputDescricao.focus();
    return;
  }
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: headersJson,
      body: JSON.stringify({ descricao: descricao }),
    });
    console.log(response);
    if (!response.ok) {
      alert("Erro ao acessar o servidor: " + response.status);
      throw new Error("Erro encontrado: " + response.status);
    }
    inputDescricao.value = "";
    inputDescricao.focus();
    getTarefas();
  } catch (error) {
    console.log(error);
  }
};

window.onload = getDespesas;
btAdicionar.onclick = handleBtAdicionarClick;                                                   