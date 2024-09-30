document.getElementById('meuForm').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    try {
        const response = await fetch('/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone, mensagem })
        });

        const data = await response.json();
        
        if (response.ok) {
            alert('Cadastro efetuado com sucesso!');
        } else {
            alert(`Erro: ${data.message || 'Não foi possível cadastrar.'}`);
        }

    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Erro ao cadastrar. Tente novamente.');
    }

 
    document.getElementById('meuForm').reset();
});
