const express = require('express');
const route = express.Router();
const db = require('./dbConnection');
const jwt = require('jsonwebtoken');

route.post('/login', (req,res)=>{

    const result = req.body;
    console.log(result);
    //if (result.error) { return res.status(400).send('Error') }
    db.query(
`select * from newuser where UserEmail = ${db.escape(req.body.UserEmail)} limit 1;`,
(err,result2)=>{
    if(err)
    {
        console.log('error');
    }

    let body = req.body.UserPw;
    let resultPass = result2[0]['UserPw'];
    console.log(body);
    console.log(resultPass);

    const compare = body.localeCompare(resultPass);
    if(compare==0){
        //res.send('successful');
        res.send({
            msg:'successful',
            token: jwt.sign({UserID:result2[0].UserID},'the-super-strong-secrect',{ expiresIn: '1h' }),
            user: result2[0]['UserName']
        })

    } else{
        res.status(400).send('email or password wrong');
    }
}
    )

})

module.exports = route;