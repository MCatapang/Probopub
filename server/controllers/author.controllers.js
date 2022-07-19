const Author = require('../models/Author.models');

module.exports = {
    createNewAuthor: (req, res) => {
        Author.create(req.body)
            .then(newlyCreatedAuthor => res.json({ Author: newlyCreatedAuthor }))
            .catch(err => res.status(400).json(err));
    },

    findAllAuthors: (req, res) => {
        Author.find()
            .then(allDaAuthors => res.json({ Authors: allDaAuthors }))
            .catch(err => res.status(400).json(err));
    },

    findOneSingleAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(oneSingleAuthor => res.json({ Author: oneSingleAuthor }))
            .catch(err => res.status(400).json(err));
    },

    updateExistingAuthor: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(oneSingleAuthor => res.json({ Author: oneSingleAuthor }))
            .catch(err => res.status(400).json(err));
    },

    deleteAnExistingAuthor: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.status(400).json(err));
    }
}