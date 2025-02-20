const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors());

app.use(express.json())
var username='admin'
var password=1234
app.use(express.urlencoded({extended:true}))
app.post('/login',function(req,res){
    
    console.log(req.body.username)
    console.log(req.body.password)
      if(req.body.username==username && req.body.password==password){
        res.send(true)
      }
      else{
        res.send(false)
      }
})
app.listen(3000, function(){
    console.log('server is started')
})