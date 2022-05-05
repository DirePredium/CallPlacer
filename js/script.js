const selectEl = document.getElementById('select');
//const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');

const tarif_info_title = document.getElementById('tarif-info-title');
const tarif_info_speed = document.getElementById('tarif-info-speed');
const tarif_info_price = document.getElementById('tarif-info-price');

var tarif_dict = {
    "snail": {"title": "Snail", "speed": "50","price": 75},
    "rabbit": {"title": "Rabbit", "speed": "100","price": 100},
    "guepard": {"title": "Guepard", "speed": "200","price": 150}
  };

selectEl.addEventListener('change', function() {
    if(this.value === 'snail'){
        tarif_info_title.innerText = tarif_dict["snail"]["title"];
        tarif_info_speed.innerText = tarif_dict["snail"]["speed"];
        tarif_info_price.innerText = tarif_dict["snail"]["price"];
        return;
    }
    if(this.value === 'guepard'){
        tarif_info_title.innerText = tarif_dict["guepard"]["title"];
        tarif_info_speed.innerText = tarif_dict["guepard"]["speed"];
        tarif_info_price.innerText = tarif_dict["guepard"]["price"];
        return;
    }
    tarif_info_title.innerText = tarif_dict["rabbit"]["title"];
    tarif_info_speed.innerText = tarif_dict["rabbit"]["speed"];
    tarif_info_price.innerText = tarif_dict["rabbit"]["price"];
})

function setSneakyRicardo (elem) {
    registrationImage.src = "./Assets/Ricardo.png";
    registrationImage.style.transform = "scale(-1,1)";
    textToChange.innerText = "запису на танці";
    labels[2].innerText = "Хореограф";
    options[elem.selectedIndex].innerText = "Рікардо Мілос";
    document.body.style.backgroundImage = "url(./Assets/DiscoHall.jpg)"
}

button.addEventListener('click', function() {
    console.log(this.className);
})
