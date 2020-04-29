const router = require('express').Router();
const upload = require('../middlewares/upload');

const pokemon = require('../controllers/pokemons');

router.post('/create', upload.single('image'), pokemon.create);
// router.post('/create', pokemon.create);
router.get('/all', pokemon.getAllPokemons);
router.get('/:pokemon_id', pokemon.getPokemon);
router.get('/getByType/:type', pokemon.getByType);


module.exports = router;
