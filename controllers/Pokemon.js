const router = require('express').Router()
const Pokemon = require('../models/pokemon')

router.get('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.find()
        res.json(pokemon)
    } catch (error) {
        console.log('error fetching all pokemon', error)
        res.status(500).json({ message: 'error fetching all pokemon'})
    }
})

router.get('/:pokemonID', async (req, res) => {
    try {
        const { pokemonID } = req.params
        const pokemon = await Pokemon.find({ pokemonID })
        res.json(pokemon)
    } catch (error) {
        console.log('Error fetching pokemon by id', error)
        res.status(500).json({ message: 'error fetching pokemon by id' })
    }
})

module.exports = router