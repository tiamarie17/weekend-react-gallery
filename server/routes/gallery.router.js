const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST Route
router.post('/', (req, res) => {

    console.log('in POST route, req.body is', req.body);
    
    let newImage = req.body;
    

// INSERT input into the database
    let sqlText = `INSERT INTO "images" ("description", "path")
                    VALUES ($1, $2);`;

    

    pool.query(sqlText, [newImage.description, newImage.path])
        .then((result) => {
            console.log(`added newImage to the database`, newImage);

            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error adding item to the database`, error);

            res.sendStatus(500);
        })
})



// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;

    console.log('in PUT router put with id of:', galleryId);

// UPDATE Like count
    let sqlText = `
    UPDATE "images"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;`;

    pool.query(sqlText, [galleryId])
        .then((dbRes) => {

            res.sendStatus(200);
        })
        .catch(err => {
            console.log('in router PUT error', err);
            
            res.sendStatus(500);
        });
});

   

// GET Route
router.get('/', (req, res) => {
    console.log('in router GET');
    const sqlText = `SELECT * FROM "images" ORDER BY id;`;

    pool.query(sqlText)
        .then((result) => {
            console.log(`Got array back from the database`, result);

            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);

            res.sendStatus(500);
        })
})


//DELETE route

router.delete('/:id', (req, res) => {

    const galleryId = req.params.id;
    console.log('galleryId is', galleryId);

// Delete from database by giving id
    const sqlText = `DELETE FROM "images"
                        WHERE  "id" = $1;`;

    const sqlParams = [galleryId];

    pool.query(sqlText, sqlParams)
        .then((response) => {
            console.log('successfully deleted image!', response);
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log('error in DELETE router', err);
            res.sendStatus(500);
        });
});



module.exports = router;