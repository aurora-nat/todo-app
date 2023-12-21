import { create } from "domain";
import {Router} from "express"
import { updateSingleNote, removeSingleNote, getAllNotes, getSingleNote } from "../controllers/note";


const router = Router()

//route where we want to listen
router.post('/create', create);

//patch request to handle modifications to user:
router.patch("/:noteId", updateSingleNote);

//delete a single note
router.delete("/note/:noteId", removeSingleNote);

//retrieve all notes in the database
router.get('/:id', getAllNotes);

//get a single note from the database
router.get('/:id', getSingleNote);

export default router 