'use strict'

const url = 'http://localhost:3000/api/links';
const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    let data = {
        url: form.url.value,
        alias: form.alias.value
    }

    fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const success = document.createElement('p');
      success.innerHTML = `Your URL is aliased to ${data[0].alias} and your secret code is ${data[0].secretCode}.`
      form.appendChild(success);
      form.reset();
    })
    .catch(err => {
      console.error(err)
      const failure = document.createElement('p');
      failure.innerHTML = `Your alias is already in use!`
      failure.setAttribute('style', 'color: red;')
      form.appendChild(failure);
    })
})

fetch(url)
  .then(response => response.json())
  .then(json => {
    json.forEach(link => {

      console.log(link.alias);
      fetch(`http://localhost:3000/a/${link.alias}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())


      fetch(`http://localhost:3000/api/links/${link.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(res => res.json())


    })
  })
  .catch(error => console.error(error));