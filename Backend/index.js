const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middle war 
app.use(cors());
app.use(express.json());

// owIT9pywkiXLfpWZ
// automative



const uri = "mongodb+srv://automative:owIT9pywkiXLfpWZ@cluster0.wes7nwd.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   
    const allCarsCollacton = client.db('allCarsDB').collection('allCars')

    app.get('/allCars', async(req, res)=>{
      const cursor = allCarsCollacton.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    
    //main post post 
    app.post('/allCars', async(req, res)=>{
      const newallCars = req.body;
      console.log(newallCars)
      const result = await allCarsCollacton.insertOne(newallCars);
      res.send(result);
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('This is automative projects')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})