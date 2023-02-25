'use strict'

const url = 'http://localhost:3000/posts';

fetch(url)
  .then(response => response.json())
  .then(json => {
    json.forEach(post => {

      const main = document.querySelector('main');

      const redditPost = document.createElement('div');
      redditPost.setAttribute('class', 'reddit-post');
      main.appendChild(redditPost);


      const upvote = document.createElement('img');
      upvote.setAttribute('class', 'upvoter');
      upvote.setAttribute("src", "/assets/upvote.png");
      redditPost.appendChild(upvote);

      upvote.addEventListener('click', () => {
        upvote.setAttribute("src", "/assets/upvoted.png")
        location.reload();
      });

      upvote.addEventListener('click', () => {
        fetch(`http://localhost:3000/posts/${post.id}/upvote`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
        })
        .then(res => res.json);
      })

      const downvote = document.createElement('img');
      downvote.setAttribute('class', 'downvoter');
      downvote.setAttribute("src", "/assets/downvote.png");
      redditPost.appendChild(downvote);

      downvote.addEventListener('click', () => {
        downvote.setAttribute("src", "/assets/downvoted.png")
        location.reload();
      });

      
      downvote.addEventListener('click', () => {
        fetch(`http://localhost:3000/posts/${post.id}/downvote`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
        })
        .then(res => res.json);
      })

      const score = document.createElement('p');
      score.setAttribute('class', 'score');
      score.innerHTML = JSON.stringify(post.score);
      redditPost.appendChild(score);


      const postTitle = document.createElement('div');
      postTitle.setAttribute('class', 'post-title');
      postTitle.innerHTML = JSON.stringify(post.title);
      redditPost.appendChild(postTitle);
      postTitle.addEventListener('click', () => {
        location.href = post.url;
      })


      const minute = 1000 * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const year = day * 365;
      let hours = Math.round((Date.now() - post.timestamp) / hour);
      const uploadTime = document.createElement('p');
      uploadTime.setAttribute('class', 'upload-time');
      uploadTime.innerHTML = `submitted ${hours} hours ago by Anonymous`;
      redditPost.appendChild(uploadTime);


      const deletePost = document.createElement('p');
      deletePost.setAttribute('class', 'delete-post');
      deletePost.innerHTML = 'delete';
      redditPost.appendChild(deletePost);
      deletePost.addEventListener('click', () => {
          fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
              'Content-type': 'application/json'
            },
          })
          .then(res => res.json);
      })

      const editPost = document.createElement('p');
      editPost.setAttribute('class', 'edit-post');
      editPost.innerHTML = 'edit';
      redditPost.appendChild(editPost);
      editPost.addEventListener('click', () => {
        location.href = 'http://localhost:3000/edit';
      })

    })
  })
  .catch(error => document.body.appendChild = error)