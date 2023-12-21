CRUD ==> Create Read Update Delete

/ => read all the note/tasks
/ => create(post) => create a note/tasks
/:uniqueId => read (get) => send the note related to this uniqueId
/:uniqueId => update(post/put/patch) => update the note related to this uniqueId
/:uniqueId => delete(delete) => delete the note related to this uniqueId

react 
axios.post()
fetch.post()

<form onSubmit={submitForm}> </form>
<form action="index.js"></form>

HTTP Request Mehthods:

GET: Used to retrieve data from the server. This method is the most commonly used HTTP method and is typicaly used to fetch information from a server without modifying any data.

POST: Used to send data to the server. This method is typically used to submit information or to create a new record to the server

PUT: Used to update data on the server. This method is used to update an existing resource on the server. 

PATCH: Same like put but to update partially

DELTE: used to delete data on the server. 

Put vs Patch

The HTTP Put and Patch methods are used to updates resources on a server. 

PUT: updatae entire resource

PATCH: Partial Update