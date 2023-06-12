// wrapper
let cardWrapper = document.querySelector('#card-Wrapper')

// bottoni
let BtnRubrica = document.querySelector('#Btn-Rubrica')


let Rubrica = {
    contatti : [
        {name : 'Leonardo', telefono : '3454321123' },
        {name : 'Lynne', telefono : '3468546735' },
        {name : 'Stefano', telefono : '34765898766' },
    ],

    schedaRubrica : function() {

            cardWrapper.innerHTML = '';

            this.contatti.forEach(contatto => {
                let div = document.createElement('div');
                div.classList.add('col-12');
                div.innerHTML = `

                <div class="card-custom width-card d-flex justify-content-around align-items-center mx-auto">
                <p class="lead">${contatto.name}</p>
                <p class="lead">${contatto.telefono}</p>
                <i class="fa-solid fa-dumpster fa-2x icon"></i>
                </div>

               `;
                cardWrapper.appendChild(div);
            });
    }
};



// RICORDARSI DI LANCIARE LA FUNZIONE!!
let check = false;


BtnRubrica.addEventListener('click', ()=>{
    if (check == false) {
        Rubrica.schedaRubrica();
        BtnRubrica.innerHTML = 'Nascondi Rubrica'
        check = true;
    }else {
        cardWrapper.innerHTML = '';
        check = false;
        BtnRubrica.innerHTML = 'Mostra Rubrica'

    }

        
});