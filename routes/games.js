const express = require('express');
const router = express.Router();
const games = require('../controllers/games');
const multer = require('multer');
const { storage } = require('../cloudinary')
const upload = multer({ storage });
const { isLoggedIn } = require('../middleware');


router.get('/', games.gamesList);

router.get('/sortByCategorie', games.gamesSortByCategories);

router.get('/sortByPrice', games.gamesSortByPrice);

router.get('/listGameImages/:id', games.listGameImages);

router.post('/', upload.array('image'), games.AddGames);

router.put('/:id', upload.array('image'), games.EditGames);

router.delete('/:id', games.DeleteGames);

router.get('/freeGames', games.FreeGames);

router.get('/paidGames', games.PaidGames);



module.exports = router;
