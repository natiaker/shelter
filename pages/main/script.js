//burger menu
const node = document.querySelector(".logo");
const duplicateLogo = node.cloneNode(true);

const logo2 = document.querySelector(".logo").appendChild(duplicateLogo);
logo2.classList = 'logo2';


document.getElementById('burger').addEventListener('click', toggleBurger);
document.getElementById('nav-bar').addEventListener('click', toggleBurger);
document.getElementById('dim').addEventListener('click', toggleBurger);

function toggleBurger() {
    document.getElementById('nav-bar').classList.toggle('open');
    document.getElementById('burger').classList.add('burger');
    document.getElementById('burger').classList.toggle('burger-transform');
    document.querySelector(".logo2").classList.toggle('logo-display');
    document.querySelector('#dim').classList.toggle('dimmer');
    document.querySelector('body').classList.toggle('scroll-responsive');
}


//json file
fetch('././pets.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    const cardDiv = document.createElement('DIV');
    cardDiv.classList = 'card-div';
    const arrowDiv = document.querySelector('.arrow-left');
    arrowDiv.after(cardDiv);

    let pets = data;
    pets.map(pet => {
      const card = document.createElement('DIV');
      card.classList = 'card';
      cardDiv.appendChild(card);

      const petImage = document.createElement('IMG');
      const petName = document.createElement('H3');
      const petType = document.createElement('h2');
      const petDescription = document.createElement('P');
      const petAge = document.createElement('P');
      const petInoculations = document.createElement('P');
      const petDiseases = document.createElement('P');
      const petParasites = document.createElement('P');
      const petButton = document.createElement('button');
      const modal = document.querySelector(".modal");
      const modalInfo = document.querySelector(".modal-info");
      const modalImage = document.querySelector(".modal-image")
      const closeButton = document.querySelector('.close-button');
    
      card.append(petImage, petName, petButton);

      petImage.src = `${pet.img}`;
      const petCloneImage = petImage.cloneNode(true);

      petName.innerHTML = `${pet.name}`;
      const petCloneName = petName.cloneNode(true);
      petType.innerHTML = `${pet.type} - ${pet.breed}`;
      petDescription.innerHTML = `${pet.description}`;
      petAge.innerHTML = `<li>Age: ${pet.age}</li>`;
      petInoculations.innerHTML = `<li>Inoculations: ${pet.inoculations}</li>`;
      petDiseases.innerHTML = `<li>Diseases: ${pet.diseases}</li>`;
      petParasites.innerHTML = `<li>Parasites: ${pet.parasites}</li>`;
      
      petButton.classList = 'pet-button';
      petButton.innerHTML = "Learn More";

      //Popup
      card.addEventListener("click",() => {
        modal.style.display = 'block';
        modalImage.appendChild(petCloneImage);
        modalInfo.append(petCloneName, petType, petDescription, petAge, petInoculations, petDiseases, petParasites);
        petCloneImage.className = 'modal-image';
        document.querySelector('body').classList.add('scroll');
      })

      //close popup
      closeButton.onclick = closeModal;
      function closeModal() {
        modalImage.removeChild(modalImage.firstChild);
        modalInfo.innerHTML = '';
        modal.style.display = 'none';
        document.querySelector('body').classList.remove('scroll');
      }

    });

    //slider
    const prevButton = document.querySelectorAll(".arrow-left");
    const nextButton = document.querySelectorAll(".arrow-right");
    
    for(const button of nextButton) {
      button.onclick = () => {
        cardDiv.appendChild(cardDiv.firstElementChild);
        cardDiv.appendChild(cardDiv.firstElementChild);
        cardDiv.appendChild(cardDiv.firstElementChild);
      };
    }
    for(const button of prevButton) {
      button.onclick = () => {
        cardDiv.prepend(cardDiv.lastElementChild);
        cardDiv.prepend(cardDiv.lastElementChild);
        cardDiv.prepend(cardDiv.lastElementChild);
      }; 
    }


})
