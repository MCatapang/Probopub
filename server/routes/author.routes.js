const AuthorController = require('../controllers/author.controllers');

module.exports = app => {
    app.post('/api/authors/new', AuthorController.createNewAuthor);
    
    app.get('/api/authors', AuthorController.findAllAuthors);

    app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
    
    app.put('/api/authors/update/:id', AuthorController.updateExistingAuthor);
    
    app.delete('/api/authors/delete/:id', AuthorController.deleteAnExistingAuthor);
}