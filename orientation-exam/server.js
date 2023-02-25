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
	database: 'alias'
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
	res.sendFile(__dirname + '/public/index.html');
})

app.post('/api/links', (req,res) => {
    let secretCode = Math.floor(1000 + Math.random() * 9000);
    let aliasTable = `create table IF NOT EXISTS links (
        id INT AUTO_INCREMENT PRIMARY KEY,
        url VARCHAR (255) NOT NULL,
        alias VARCHAR (255) NOT NULL,
        hitCount INT NOT NULL,
        secretCode INT NOT NULL
    )`;

    conn.query(aliasTable, (err, result) => {
        if (err) {
            console.log(err);
            return null;
        } else {
            console.log('Table already exists or it was created');
        }
    })

    conn.query('SELECT * FROM links WHERE alias = ?', [req.body.alias], (err,row) => {
        if(err) {
            console.error(err);
            return;
        } else {
            if(row.length === 0) {
                conn.query('INSERT INTO links (url, alias, hitCount, secretCode ) VALUES (?, ?, 0, ?)', [req.body.url, req.body.alias, secretCode], (err, rows) => {
                    if(err) {
                        console.error(err);
                        return;
                    } else {
                        conn.query('SELECT * FROM links WHERE id = ?', [rows.insertId], (err, result) => {
                            if(err) {
                                console.error(err);
                            } else {
                                res.status(201).json(result);
                            }
                        })
                    }
                })
            } else {
                res.status(400).json({Error: 'Your alias is already in use'});
            }
        }
    })
    
})

app.get('/a/:alias', (req,res) => {
    req.header('Accept', 'application/json');
    conn.query('UPDATE links SET hitCount = hitCount + 1 WHERE alias = ?', [req.params.alias], (err, rows) => {
        if(err) {
            console.log(err);
            res.status(400);
        } else {
            conn.query('SELECT * FROM links WHERE alias = ?', [req.params.alias], (err, result) => {
                if(err) {
                    console.log(err);
                    res.status(400);
                } else {
                    res.header('Content-Type', 'application/json')
                    res.status(200).redirect('/');
                }
            })
        }
    })
})

app.get('/api/links', (req,res) => {
	conn.query(`SELECT id,url,alias,hitCount FROM links`, (err,rows) => {
		if(err) {
			console.log(err);
			return;
		}
		res.status(200).json(rows);
	})
});

app.delete('/api/links/:id', (req,res) => {
    conn.query('SELECT secretCode FROM links WHERE id = ?', [req.params.id], (err,rows) => {
        if(err) {
            console.log(err);
            return;
        } else {
            if(parseInt(req.body.secretCode) !== rows[0].secretCode) {
                res.status(403).json(rows);
            } else if(parseInt(req.body.secretCode) === rows[0].secretCode) {
                conn.query('DELETE FROM links WHERE id = ?', [req.params.id], (err, rows) => {
                    if(err) {
                        console.error(err);
                        return;
                    } else {
                        conn.query('SELECT id,url,alias,hitCount FROM links WHERE id = ?', [req.params.id], (err, result) => {
                            if(err) {
                                console.error(err);
                                return;
                            } else {
                                res.status(204).json(result);
                            }
                        })
                    }
                })
            } else {
                res.status(404).json(rows);
            }
        }    
    })
})

app.listen(3000);