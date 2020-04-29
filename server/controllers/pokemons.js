const Pokemon = require('../models/Pokemon');

module.exports.getAllPokemons = async(req, res) => {
    try {
        const pokemon = await Pokemon.find();
        if (!pokemon) throw new Error('Product is not found');
        res.json(pokemon)
        // {
        //     success: true,
        //     msg: user
        // })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: e.message,
        });
        console.log(e)
    }
};

module.exports.getPokemon = async(req, res) => {
    try {
        const {pokemon_id} = req.params;
        const pokemon = await Pokemon.find({
            _id: pokemon_id
        });
        if (!pokemon) throw new Error('Product is not found');
        res.json(pokemon)
        // {
        //     success: true,
        //     msg: user
        // })
    } catch (e) {
        res.status(400).json({
            success: false,
            msg: e.message,
        });
        console.log(e)
    }
};

module.exports.create = async (req, res) =>{
    try {
        console.log(req.body);
        let {name, type, image, HP, attack, defence, stage} = req.body;
        if(!name || !type || !image || !HP || !attack || !defence || !stage) throw new Error('Some field is empty');
        const insertedPokemon = await Pokemon.create({
            name,
            type,
            stage,
            image,
            HP,
            attack,
            defence
        });

        res.json({
            success: true,
            msg: insertedPokemon
        });

    } catch (e) {
        console.log(req.body);
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};

module.exports.getByType = async (req, res) => {
    try{
        let {type} = req.params;
        if(!type) throw new Error('Some field is Empty!!!!');
        const pokemons = await Pokemon.find({type:type});
        res.json({
            success: true,
            msg: pokemons
        });
    } catch (e) {
        console.log(req.body);
        console.log(e);
        res.status(400).json({
            success: false,
            msg: e.message
        })
    }
};
