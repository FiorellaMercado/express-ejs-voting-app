// Votar tema
document.querySelectorAll('.btn-votar-tema').forEach(btn => {
    btn.addEventListener('click', () => {
        const idTema = btn.dataset.temaId;

        fetch(`/temas/votarTema/${idTema}`, { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                document.getElementById(`votos-tema-${idTema}`).textContent = data.votos;
            });
    });
});