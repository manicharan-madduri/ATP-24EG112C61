import exp from 'express'
const app=exp()

app.use(exp.json())

const port=3000

app.listen(port,()=>console.log(`server listening port ${port}...`))


let products=[]

 app.get('/products',(req,res)=>{

  res.json({message:"all Products",payload:products})
 })

app.get('/products/:brand',(req,res)=>{
   
    let brand1=req.params.brand
    let product=products.find(obj=>obj.brand===brand1)
    
    if(product===undefined){
      return res.json({message:'Product not found'})
    }
    res.json({message:"the products",payload:product})
})

 app.post('/products',(req,res)=>{
    
    console.log(req.body)
    const newProduct=req.body
    products.push(newProduct)
    
    res.json({message:"Product manufactured"})
 })

 app.put('/products',(req,res)=>{
    
    let modifiedProduct=req.body
    
    let index=products.findIndex(obj=>obj.id===modifiedProduct.id)
    
    if(index===-1){
      return res.json({message:"Product not found"})
    }
    
    products.splice(index,1,modifiedProduct)
    
    res.json({message:"product updated"})
 })


  
 app.delete('/products/:productId',(req,res)=>{
    
    let idOfUrl=Number(req.params.productId)
   
    let index=products.findIndex(obj=>obj.productId===idOfUrl)
    
    if(index===-1){
      return res.json({message:'product not found to delete'})
    }
    
    products.splice(index,1)
    
    res.json({message:'product deleted'})
 })