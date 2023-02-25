const submitButton = document.querySelector('.submit-button');
const form = document.querySelector('form');

form.addEventListener('change', (event) => {
    event.preventDefault();

    let data = {
      title: form.title.value,
      url: form.url.value
    }
    console.log(data);

    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json);
    form.reset();
    history.back();
  })