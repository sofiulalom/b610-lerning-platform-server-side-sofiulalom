const express=require('express');
const app=express();
const port=process.env.PORT || 5500;
const cors=require('cors');
app.use(cors())
const catagoris =require('./fackdata/catagory.json')
const courses =require('./fackdata/course.json')


app.get('/', (req, res)=>{
     res.send('hello assignment !!!')
});
app.get('/catagoris', (req, res)=>{
    res.send(catagoris)
})
app.get('/catagory/:id', (req, res)=>{
    const id =req.params.id;
    const select_Catagory=catagoris.filter(catagory => catagory.id ===id )
    res.send(select_Catagory)
})
app.get('/courses', (req, res)=>{
    res.send(courses)
})
app.get('/course/:id', (req, res)=>{
    const id =req.params.id;
    const selectedCourses =courses.find(course => course._id === id)
    res.send(selectedCourses)
})
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})