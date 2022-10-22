const city_form = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const update_UI = data => {
  // UI update here
  console.log(data);

  // update the template
  details.innerHTML = `
    <h5 class="my-3"> ${data.name} </h5>
    <div class="my-3"> ${data.weather[0].description} </div>
    <div class="display-4 my-4">
        <span>${data.main.temp}</span>
        <span>&deg;C</span>
    </div>
    `;

    // remove the d-none if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

const update_city = async city_name => {
  city_data = await getCity(city_name);
  return city_data;
};

city_form.addEventListener("submit", e => {
  // prevent default browser action
  e.preventDefault();

  // get city value
  const city_name = city_form.city.value.trim();
  city_form.reset();

  // update the city with the new UI
  update_city(city_name)
    .then(data => update_UI(data))
    .catch(err => console.log("Error: ", err));


    // save to local storage
    localStorage.setItem('city', city_name);
});


if(localStorage.getItem('city')){
  update_city(localStorage.getItem('city'))
    .then(data => update_UI(data))
    .catch(err => console.log(err))
}
