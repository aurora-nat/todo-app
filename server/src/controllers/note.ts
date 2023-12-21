import Note,  { NoteDocument } from "../models/note"
import { RequestHandler } from "express-serve-static-core";

interface IncomingBody{
    title: string;
    description?: string;
}

export const create: RequestHandler =  async (req, res) => {
    await Note.create<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description
    })
res.json({message: "I am listening to create!"});

};

export const updateSingleNote: RequestHandler = async (req, res) => {
    const {noteId} = req.params;
    
  
    const {title, description} = req.body as IncomingBody
    const note = await Note.findByIdAndUpdate(noteId, 
        {title, description}, 
        {new: true}
        );
    if (!note) return res.json({error: "Note not found"});


    await note.save()
}

export const removeSingleNote: RequestHandler = async (req, res) => {
    const {noteId} = req.params;
    const removedNote = await Note.findByIdAndDelete(noteId);
    if(!removedNote) return res.json({error: 'Could not remove note!'})

    res.json({message: "Note removed successfully."});
}

export const getAllNotes: RequestHandler = async(req, res) => {
    const notes = await Note.find();
    res.json({ notes });
}

export const getSingleNote: RequestHandler =  async (req, res) => {
    const {id} = req.params
    const note = await Note.findById(id)
    if (!note) return res.json({error: "Note not found!"})

    res.json({note})

}