const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://epritchard:NseTdziBCWQxvh3y@cluster0.lx7mxz3.mongodb.net/?retryWrites=true&w=majority";//dont show on camera
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});