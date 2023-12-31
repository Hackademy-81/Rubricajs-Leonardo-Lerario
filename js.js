// wrapper
let cardWrapper = document.querySelector('#card-Wrapper')

// bottoni
let BtnRubrica = document.querySelector('#Btn-Rubrica')
let saveContactBtn = document.querySelector ('#saveContactBtn')

// input
let nameInput = document.querySelector('#nameInput')
let numberInput = document.querySelector('#numberInput')



let Rubrica = {
    contatti : [
        {id : 1, name : 'Leonardo', telefono : '3454321123' },
        {id : 2, name : 'Lynne', telefono : '3468546735' },
        {id : 3, name : 'Stefano', telefono : '34765898766' },
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
     // icone
    let icons = document.querySelectorAll('.icon')
        
    icons.forEach( (icon, i)=> {
        icon.addEventListener('click', ()=>{
                let contactId = this.contatti[i].id;
                this.eliminaContatto(contactId)
        });
    });
    
    },

   

    salvaContatto : function(newName, newNumber) {

        let newId;

        if (this.contatti.length > 0){
            newId = this.contatti[this.contatti.length - 1].id + 1;
        }else{
            newId = 1;
        }

        this.contatti.push({id : newId, name: newName, telefono: newNumber});
        this.schedaRubrica ()
    },

    eliminaContatto : function(newId){
        let element = this.contatti.find((contatto)=> contatto.id == newId);

        let index = this.contatti.indexOf(element);

        this.contatti.splice(index, 1);

        this.schedaRubrica ();
    },
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

saveContactBtn.addEventListener('click',()=>{

    if (nameInput.value != '' && numberInput.value != '') {
        Rubrica.salvaContatto(nameInput.value,numberInput.value);
    // abbiamo collegato gli input alla funzione, adesso quando si scrive qualcosa negli input andranno direttamente nei parametri della funzione

    nameInput.value = '';
    numberInput.value = '';



    if (check == false) {
        BtnRubrica.innerHTML = 'Nascondi Rubrica'
        check = true;
    };

    }else{
        alert('inserire nome e numero')
    };
    
});
