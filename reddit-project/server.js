'use strict'

const mysql = require('mysql');
const express = require('express');
const { time } = require('console');
const app = express();
app.use(express.json()); //body parser, so express can read the json body of the post request
app.use(express.static('public'));  //allowing index.js to be sent along the html

const conn = mysql.createConnection({ //providing credentials for nodejs to access mysql
	host: 'localhost',
    user: 'root',
	password: 'password',
	database: 'reddit'
});

conn.connect((err) => {  //make the actual connection
	if(err) {
		console.log(`The database connection couldn't be established`);
		return;
	} else {
		console.log(`Connection established`);
	}
});

app.get('/', (req,res) => { //sending the html file to the browser to the / endpoint
	res.sendFile('C:/Users/sutym/greenfox/matejsuty/week-08/day-5/reddit-project/public/index.html');
})

app.get('/createpost', (req,res) => { //sending the html file to the browser to the / endpoint
	res.sendFile('C:/Users/sutym/greenfox/matejsuty/week-08/day-5/reddit-project/public/form.html');
})

app.get('/edit', (req,res) => { //sending the html file to the browser to the / endpoint
	res.sendFile('C:/Users/sutym/greenfox/matejsuty/week-08/day-5/reddit-project/public/edit.html');
})

app.get('/posts', (req,res) => { //endpoint to get all the data from the posts table
    req.header('Accept', 'application/json');
	conn.query(`SELECT * FROM posts`, (err,rows) => {
		if(err) {
			console.log(err);
			return;
		}
        res.header('Content-Type', 'application/json');
		res.status(200).json(rows);
	})
});

app.post('/posts', (req,res) => {
    let timestamp = Date.now();
    console.log(timestamp);
    req.header('Accept', 'application/json');
    req.header('Content-Type', 'application/json');

    let createPosts = `create table IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR (255) NOT NULL,
        url VARCHAR (255) NOT NULL,
        timestamp VARCHAR (255) NOT NULL,
        score INT NOT NULL
    )`;

    /*  owner VARCHAR (255) NOT NULL,
        vote INT NOT NULL */

    conn.query(createPosts, (err, result) => {
        if (err) {
            console.log(err);
            return null;
        } else {
            console.log('Table already exists or it was created');
        }
    })

    conn.query('INSERT INTO posts (title, url, timestamp, score) VALUES (?, ?, ?, 0)', [req.body.title, req.body.url, timestamp], (err, rows) => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log('Post added');
            res.header('Content-Type', 'application/json')
            res.status(200).json(rows);
        }
    })
})

app.put('/posts/:id/upvote', (req,res) => {
    req.header('Accept', 'application/json');
    conn.query('UPDATE posts SET score = score + 1 WHERE id = ?', [req.params.id], (err, rows) => {
        if(err) {
            console.log(err);
            return;
        } else {
            conn.query('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                } else {
                    res.header('Content-Type', 'application/json')
                    res.status(200).json(result);
                }
            })
        }
    })
})

app.put('/posts/:id/downvote', (req,res) => {
    req.header('Accept', 'application/json');
    conn.query('UPDATE posts SET score = score - 1 WHERE id = ?', [req.params.id], (err, rows) => {
        if(err) {
            console.log(err);
            return;
        } else {
            conn.query('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                } else {
                    res.header('Content-Type', 'application/json')
                    res.status(200).json(result);
                }
            })
        }
    })
})

app.delete('/posts/:id', (req,res) => {
    req.header('Accept', 'application/json');
    conn.query('DELETE FROM posts WHERE id = ?', [req.params.id], (err, rows) => {
        if(err) {
            console.log(err);
            return;
        } else {
            conn.query('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                } else {
                    res.header('Content-Type', 'application/json')
                    res.status(200).json(result);
                }
            })
        }
    })
})

app.get("/", function(request, response) {
    console.log(request.headers);
    response.send();
  });


app.put('/posts/:id', (req,res) => {
    let timestamp = Date.now();
    req.header('Accept', 'application/json');
    req.header('Content-Type', 'application/json')

    conn.query('UPDATE posts SET title = ?, url = ?, timestamp = ? WHERE id = ?', [req.body.title, req.body.url, timestamp, req.params.id], (err, rows) => {
        if(err) {
            console.log(err);
            return;
        } else {
            conn.query('SELECT * FROM posts WHERE id = ?', [req.params.id], (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                } else {
                    res.header('Content-Type', 'application/json')
                    res.status(200).json(result);
                }
            })
        }
    })
})

/* let createUsers = `create table IF NOT EXISTS users (
        user_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
        votes_number INT DEFAULT 0
)`;

conn.query(createUsers, (err, result) => {
    if (err) {
        console.log(err);
        return null;
    } else {
        console.log('Table already exists or it was created');
    }
}) */

app.get("/posts", function(request, response) {
    console.log(request.headers);
    response.send();
});


app.listen(3000);