const selectEl = document.getElementById('select');
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');

const tarif_info_title = document.getElementById('tarif-info-title');
const tarif_info_speed = document.getElementById('tarif-info-speed');
const tarif_info_price = document.getElementById('tarif-info-price');

const registration_form_info_wrapper = document.getElementById("registration-form-info-wrapper");
const tarif_img = document.getElementById('tarif-info-img');

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
        registration_form_info_wrapper.style.background = "linear-gradient(rgb(0, 255, 149), rgb(252, 205, 75))";
        tarif_img.src = "./Assets/Tarif img.svg";
        return;
    }
    if(this.value === 'guepard'){
        tarif_info_title.innerText = tarif_dict["guepard"]["title"];
        tarif_info_speed.innerText = tarif_dict["guepard"]["speed"];
        tarif_info_price.innerText = tarif_dict["guepard"]["price"];
        registration_form_info_wrapper.style.background = "linear-gradient(rgb(184, 0, 0), rgb(216, 115, 0))";
        tarif_img.src = "./Assets/Tarif img fire.svg";
        return;
    }
    tarif_info_title.innerText = tarif_dict["rabbit"]["title"];
    tarif_info_speed.innerText = tarif_dict["rabbit"]["speed"];
    tarif_info_price.innerText = tarif_dict["rabbit"]["price"];
    registration_form_info_wrapper.style.background = "linear-gradient(rgb(24, 53, 150), rgb(53, 231, 255))";
    tarif_img.src = "./Assets/Tarif img.svg";
})

button.addEventListener('click', function() {
    console.log(this.className);
})