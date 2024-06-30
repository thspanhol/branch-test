document.getElementById('GET').addEventListener('click', async () => {
    console.log('GET');
    fetch('https://crud-node-a7h4.onrender.com/usuarios')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
});

async function criarUsuario(nome, email, senha) {
    const url = 'https://crud-node-a7h4.onrender.com/usuarios';
    const data = {
        nome,
        email,
        senha,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        console.log('Usuário criado com sucesso');
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}

document.getElementById('POST').addEventListener('click', async () => {
    console.log('POST');
    criarUsuario('Ramoninha', 'moninha@gmail.com', 'mona123');
});

async function deletarUsuario(id) {
    const url = `https://crud-node-a7h4.onrender.com/usuarios/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        console.log('Usuário deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
    }
}

document.getElementById('DELETE').addEventListener('click', async () => {
    console.log('DELETE');
    deletarUsuario('c3fe1af9-e1aa-497d-bcc6-99342581ccee');
});

async function atualizarUsuario(id, nome, email, senha) {
    const url = `https://crud-node-a7h4.onrender.com/usuarios/${id}`;
    const data = {
        nome,
        email,
        senha,
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        console.log('Usuário atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
    }
}

document.getElementById('PUT').addEventListener('click', async () => {
    console.log('PUT');
    atualizarUsuario('bf6741dc-5375-473e-b707-2d23d4fc4de5', 'Nokia', 'nokiabranco@gmail.com', 'nokiapreto');
});