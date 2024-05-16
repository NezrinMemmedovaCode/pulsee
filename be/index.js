import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

const ProductsSchema = new mongoose.Schema({
    img:String,
    name: String,
   
    price:Number
  })

  const ProductModel = mongoose.model('Product', ProductsSchema);


app.get('/user',async (req, res) => {
    const products = await ProductModel.find();

    res.send(products)
  })
  
  app.post('/user',async (req, res) => {
     const body=req.body
     const products=new ProductModel(body)
     await products.save()
    res.send(products)
  })
  
  app.put('/user',async (req, res) => {
      const {id}=req.params
      const body=req.body
      const updateProducts=await ProductModel.findByIdAndUpdate(id,body)
    res.send(updateProducts)
  })
  
  app.delete('/user/:id',async (req, res) => {
      const {id}=req.params
      const deleteProducts=await ProductModel.findByIdAndDelete(id)
    res.send(deleteProducts)
  })
  mongoose.connect('mongodb+srv://nezrin:nezrin@nezrin.dtlskcs.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
