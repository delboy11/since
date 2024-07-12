const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('gd')
})

app.get('/sexy',function(요청 ,응답){
    응답.sendFile(__dirname + '/index.html')
})

app.get('/',function(요청 ,응답){
    console.log('ㅎㅇ')
    응답.sendFile(__dirname + '/index.html')
    
})
