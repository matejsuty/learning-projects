'use strict'

const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(express.json()); //body parser, so express can read the json body of the post request
app.use(express.static('public'));  //allowing index.js to be sent along the html

const conn = mysql.createConnection({ //providing credentials for nodejs to access mysql
	host: 'localhost',
    user: 'root',
	password: 'password',
	database: 'musicplayer'
})


conn.connect((err) => {  //make the actual connection
	if(err) {
		console.log(`The database connection couldn't be established`);
		return;
	} else {
		console.log(`Connection established`);
	}
})

app.get('/', (req,res) => { //sending the html file to the browser to the / endpoint
	res.sendFile(__dirname + '/public/index.html');
})


// Playlists


app.get('/playlists', (req,res) => {
	conn.query('SELECT * FROM playlists', (err, rows) => {
		if(err) {
			console.error(err);
			return;
		} else {
			res.status(200).json(rows);
		}
	})
})

app.post('/playlists', (req,res) => {
	conn.query('INSERT INTO playlists (title, system_rank) VALUES (?, 0)', [req.body.title], (err, rows) => {
		if(err) {
            console.log(err);
            return;
        } else {
            console.log('Playlist added');
            res.header('Content-Type', 'application/json')
            res.status(200).json(rows);
		}
	})
})

app.delete('/playlists/:id', (req,res) => {
	conn.query('SELECT system_rank FROM playlists WHERE id = ?', [req.params.id], (err, result) => {
		if(err) {
			console.error(err);
			return;
		} else {
			if(result.system_rank === 1) {
				console.log(`You can't delete this playlist because it's one of your best`);
				return;
			} else {
				conn.query('DELETE FROM playlists WHERE id = ?', [req.params.id], (err, rows) => {
					if(err) {
						console.error(err);
						return;
					} else if (req.params.id === undefined || NaN) {
						res.json(err);
					} else {
						res.status(200).json(rows);
					}
				})
			}
		}
	})
})


// Tracks

app.get('/playlist-tracks/', (req,res) => {
	conn.query('SELECT title FROM tracks', (err,rows) => {
		if(err) {
			console.error(err);
			return;
		} else {
			res.json(rows);
		}
	})
})

app.get('/playlist-tracks/:playlist_id', (req,res) => {
	conn.query('SELECT ')
})


app.listen(3000);