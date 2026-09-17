// Votar tema
document.querySelectorAll('.btn-votar-tema').forEach(btn => {
    btn.addEventListener('click', () => {
        const idTema = btn.dataset.temaId;

        fetch(`/temas/votarTema/${idTema}`, { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                document.getElementById(`votos-tema-${idTema}`).textContent = data.votos;

                const li = document.querySelector(`.li-temas[data-tema-id="${idTema}"]`);
                li.setAttribute('data-votos', data.votos);

                ordenarTemas();
            });
    });
});

// votar enlaces
document.querySelectorAll('.btn-votar-enlace').forEach(btn =>{
    btn.addEventListener('click',()=>{
        const idTema = btn.dataset.temaId;
        const idEnlace = btn.dataset.enlaceId;
        fetch(`/temas/votarEnlace/tema/${idTema}/enlace/${idEnlace}`, {method:'POST'})
            .then(res => res.json())
            .then(data => {
                document.querySelector(`.lista-enlace[data-tema-id="${idTema}"] #votos-enlace-${idEnlace}`).textContent = data.votos;

                const li = document.querySelector(`.lista-enlace[data-tema-id="${idTema}"] .li-enlace[data-enlace-id="${idEnlace}"]`);
                li.setAttribute('data-votos', data.votos);

                ordenarEnlaces(idTema);
            });
    });
});

// ordenar temas
function ordenarTemas(){
    const padre = document.querySelector('.lista-tema');
    const lista = Array.from(padre.children);

    lista.sort((a, b) => b.dataset.votos - a.dataset.votos);
    lista.forEach(li => padre.appendChild(li));
}

// ordenar enlaces
function ordenarEnlaces(idTema){
    const padre = document.querySelector(`.lista-enlace[data-tema-id="${idTema}"]`);
    const lista = Array.from(padre.children);

    lista.sort((a,b)=> b.dataset.votos - a.dataset.votos);
    lista.forEach(li => padre.appendChild(li));
}