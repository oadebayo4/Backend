const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://oadebayo4:Test2025@songdb.bd6jb.mongodb.net/?retryWrites=true&w=majority&appName=SongDB",
{useNewUrlParser: true})


module.exports = mongoose

