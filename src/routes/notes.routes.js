const { Router } = require('express')
const router = Router()

const { renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNotes
} = require('../controllers/notes.controller');

const {isAuthenticated} = require('../helpers/auth');

//New note
router.get('/notes/add',isAuthenticated, renderNoteForm);

router.post('/notes/new-note',isAuthenticated, createNewNote);

//Get all note
router.get('/notes',isAuthenticated, renderNotes);

//Edit Notes
router.get('/notes/edit/:id',isAuthenticated, renderEditForm);

router.put('/notes/edit/:id',isAuthenticated, updateNote);

//delete Notes
router.delete('/notes/delete/:id',isAuthenticated, deleteNotes);



module.exports = router