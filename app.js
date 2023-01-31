// create a function and following the progressions inside the function.
function getData() {
  const message = document.getElementById('message');
  let fetchData = fetch('https://jsonplaceholder.typicode.com/users');

  fetchData
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      response.forEach((contact) => {
        const newPlayer = document.createElement('div');
        newPlayer.setAttribute('class', 'player');

        const name = document.createElement('div');
        name.innerText = contact.name;

        const email = document.createElement('div');
        email.innerText = contact.email;

        const phone = document.createElement('div');
        phone.innerText = contact.phone;

        const website = document.createElement('div');
        website.innerText = contact.website;

        const company = document.createElement('div');
        company.innerText = contact.company.name;

        const city = document.createElement('div');
        city.innerText = contact.address.city;

        const zipcode = document.createElement('div');
        zipcode.innerText = contact.address.zipcode;

        newPlayer.append(name);
        newPlayer.append(email);
        newPlayer.append(phone);
        newPlayer.append(website);
        newPlayer.append(company);
        newPlayer.append(city);
        newPlayer.append(zipcode);
        message.append(newPlayer);
      });
    })
    .catch((error) => {
      console.log('Promise rejected');
      console.log(error.message);
      const reject = document.createElement('div');
      reject.innerText =
        "Promise rejected! Sorry we couldn't load the player's details from the API";
      message.append(reject);
    });
}
// Progression 1: Create a promise call which fetches data
// Progression 2: Display the fetched data in the form of list
// Progression 3: When the promise call is rejected then throw an error
