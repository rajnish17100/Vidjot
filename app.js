const express=require('express');
const exphbs=require('express-handlebars');
const mongoose=require('mongoose');

const app=express();

//MAp global promise - get rid of warning
mongoose.Promose=global.Promise;

//connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev',{
   useMongoClient:true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));


  //load Idea Model
  require('./models/Idea');
  const Idea=mongoose.model('ideas');
// Handlebars Middleware
app.engine('handlebars', exphbs({
   defaultLayout: 'main'
 }));
 app.set('view engine', 'handlebars');
 
//middleWare
/*app.use(function(req,res,next){
   console.log("Rajnish Patel");
});*/

app.get('/',(req,res)=>{
   const title='Welcome';
    res.render("index", {
       title: title
    });
    //console.log(req.name);
    //res.send(req.name);
});

app.get('/about',(req,res)=>{
   res.render("About");
});
const port=3000;
app.listen(port,()=>{
console.log(`The server is srated on port number ${port}`);
});