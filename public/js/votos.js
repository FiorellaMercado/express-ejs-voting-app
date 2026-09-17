// Votar tema
document.querySelectorAll('.btn-votar-tema').forEach(btn => {
    //addEventListener revisa en este caso si se hace click en el boton
    btn.addEventListener('click', () => {
        const idTema = btn.dataset.temaId;

        //fetch me permite enviar la peticion a la ruta sin redirigir o refrescar la pagina
        fetch(`/temas/votarTema/${idTema}`, { method: 'POST' })
            .then(res => res.json())
            .then(data => {
                //getElementBy encuentra el elemto dado su id
                document.getElementById(`votos-tema-${idTema}`).textContent = data.votos;
                //quetySelector busca un fragmento html dados los  atributos o clases que identifican a una etiqueta
                const li = document.querySelector(`.li-temas[data-tema-id="${idTema}"]`);
                //setAtribute cambia el valor del atributo, lo actualiza 
                // para que se pueda ordenar correctamente la lista
                //ya qur mi lista se ordena segun este atributo
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
    //buscamos el ul
    const padre = document.querySelector('.lista-tema');
    //armamos una lista con los hijos li
    const lista = Array.from(padre.children);
    //ordenamos la lista en base a los botos
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