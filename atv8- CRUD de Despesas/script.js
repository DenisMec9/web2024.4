const input_descricao = document.getElementById('input-descricao');
const input_valor = document.getElementById('input-valor');
const submit_despesa = document.getElementById('submit-despesa');
const total_el = document.getElementById('total');

const url = 'https://parseapi.back4app.com/classes/Despesa';

async function mainFunction(){
    try{
        await loadDespesas(url);
    } catch(err){
        throw new Error(err);
    }
    submit_despesa.addEventListener('click', () => {
        const descricao = input_descricao.value;
        const valor = Number(input_valor.value);

        try{
            (async function(){
                await postDespesa(url, descricao, valor);
                location.reload();
            })();
        } catch(err){
            throw new Error(err);
        }
    });
}


const loadDespesas = async(url) => {

    const despesasData = await getRequest(url);
    let total_valor = 0;

    despesasData.forEach((despesa) => {
        const objectId = despesa.objectId;
        const descricao = despesa.descricao;
        const valor = despesa.valor;
        
        total_valor += Number(valor);
        
        createElements(descricao, valor, objectId);
    });
    total_el.textContent = (`Total: R$ ${total_valor.toFixed(2)}`);
}




const getRequest = async(url) => {
    const rawResponse = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Parse-Application-Id': 'WOf1KY10sPkIzZxynvsyD8xKO8VxYYpU0b0qpV7F',
            'X-Parse-REST-API-Key': 'eppqhzHQDef4zXFtqlgZV5okC3JQuDeP7fCPTiPB'
        }
    });

    const dataJson = await rawResponse.json();
    const despesasData = dataJson.results;
    
    return despesasData;
}

const putRequest = async(url, id, new_descricao, new_valor) => {
    await fetch((`${url}/${id}`), {
        method: 'PUT',
        headers: {
            'X-Parse-Application-Id': 'WOf1KY10sPkIzZxynvsyD8xKO8VxYYpU0b0qpV7F',
            'X-Parse-REST-API-Key': 'eppqhzHQDef4zXFtqlgZV5okC3JQuDeP7fCPTiPB',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            descricao: new_descricao,
            valor: new_valor
        })
    });
}

const deleteRequest = async(url, id) => {
    await fetch((`${url}/${id}`), {
        method: 'DELETE',
        headers: {
            'X-Parse-Application-Id': 'WOf1KY10sPkIzZxynvsyD8xKO8VxYYpU0b0qpV7F',
            'X-Parse-REST-API-Key': 'eppqhzHQDef4zXFtqlgZV5okC3JQuDeP7fCPTiPB'
        },
        body: JSON.stringify({})
    });
}

const postDespesa = async(url, input_descricao, input_valor) => {
    const rawResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'X-Parse-Application-Id': 'WOf1KY10sPkIzZxynvsyD8xKO8VxYYpU0b0qpV7F',
            'X-Parse-REST-API-Key': 'eppqhzHQDef4zXFtqlgZV5okC3JQuDeP7fCPTiPB',
            'Content-Type': 'application/json'
        },
    
        body: JSON.stringify({
            descricao: input_descricao,
            valor: input_valor
        })
    });

    console.log(rawResponse);
}

// Call main function
mainFunction();