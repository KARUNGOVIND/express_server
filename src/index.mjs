import express, { response } from "express";

const app=express();

const PORT=process.env.PORT || 3000;
const users=
[{id:1,name:'karun',number:'9865904235'},
{id:2,name:'modi',number:'9865904235'},
{id:3,name:'podi',number:'9865904235'}
]

app.get('/',(request,response)=>{
response.status(201).send("Welcome to world of mark Antony!");
});

app.get('/api/users',(request,response)=>{
    console.log(request.query)
    const {query:{filter,value},}=request;

    if(!filter && !value)return response.status(201).send(users);
    if(filter && value) return response.send(users.filter((user)=>user[filter].includes(value)))
});


app.get('/api/users/:id',(request,response)=>{
    const int=parseInt(request.params.id)


    if(isNaN(int))return response.send({msg:"is invalid"});

    const finduser=users.find((user)=> user.id===int);

    if(!finduser)return response.sendStatus(404);
    return response.send(finduser);
});


app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`);
});