const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('..modules/pool');



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

    pool.query(sqlText, [itemId])
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

module.exports = router;