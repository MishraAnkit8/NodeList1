const express = require('express');
require('dotenv').config();

const myrouter = require('../NodeDb/src/router/router');




const app = express();


app.use(express.json())
app.use(express.urlencoded({
    extended : true
}));

app.set('view engine' ,'ejs');
app.set('views','./src/view');

app.use(myrouter);



app.listen(process.env.APP_PORT,()=>
{console.log(`server started running at port ${process.env.APP_PORT}`)
});

