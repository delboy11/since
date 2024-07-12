const express = require('express');
const app = express();

app.listen(8080,function(){
    응답.send('ㅎㅇ')
})

app.get('/sexy',function(요청 ,응답){
    응답.sendFile(__dirname + '/index.html')
})

app.get('/',function(요청 ,응답){
    응답.sendFile(__dirname + '/index.html')
    응답.send('ㅎㅇ')
})
