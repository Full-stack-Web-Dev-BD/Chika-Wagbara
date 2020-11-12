const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const passport=require('passport');
const cors =require('cors');
const path=require('path');
const users=require('./routes/users');
const branchs=require('./routes/branchs')
const staffs=require('./routes/staffs')
const countries=require('./routes/countries')
const states=require('./routes/states')
const cities=require('./routes/cities')
const patients=require('./routes/patients')
const guardians=require('./routes/guardians')
const referringPersons=require('./routes/referringPersons')


const app=express();

const port=process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())
app.use('/uploads', express.static('./uploads'));
app.use(passport.initialize());

require('./middleware/passport')(passport);

//DB config
const db=require('./config/keys').mongoURI;

//MongoDB connect
mongoose
.connect(db,{ useNewUrlParser: true })
.then(()=>console.log('MongoDB connected'))
.catch((err)=> console.log(err));


//use routes
app.use('/api/users', users);
app.use('/api/branchs', branchs);
app.use('/api/staffs', staffs);
app.use('/api/countries', countries);
app.use('/api/states', states);
app.use('/api/cities', cities);
app.use('/api/patients', patients);
app.use('/api/guardians', guardians);
app.use('/api/referringPersons', referringPersons);

if(process.env.NODE_ENV==='production'){
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {  
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});	
}


app.listen(port,()=>{
	console.log('server is running on port: '+port);
})
