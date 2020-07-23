# Tables
* ## Notes
    * Title
    * Body
    * Colour
    * Position
    * Date Created
    * Date Last Updated
# Actions
* Add button post requests new note
* Delete button delete requests THE note
* Clicking on the title or the body and then blurring will send an edit request to the server
* Doing any of the frontend actions sends an edit request
* Editing an already existing note sends an edit request to the Date Last Updated field
* Creating a note sends a post request to the Date Created field and sends the creation time to the Date Last Updated field on the moment of creation 