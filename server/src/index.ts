import express from 'express';
import './db';
import Note, { NoteDocument } from './models/note'

import noteRouter from './routers/note'


//create a server
const app = express();

//this will parse post requests coming from fetch.post() method
app.use(express.json());

//this will parse post requests coming from html form
app.use(express.urlencoded({extended : false}));


interface IncomingBody{
    title: string;
    description?: string;
}

/**
 * localhost:8000/note/create
 * localhost:8000/note
 * localhost:8000/note/noteId
 * localhost:8000/note/noteId
 */
app.use("/note", noteRouter)


//listen to some port
app.listen(8000, () =>{
    
    console.log('listening');
})