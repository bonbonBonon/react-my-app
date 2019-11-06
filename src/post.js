let http = require('http');
http.createServer(function (req,res) {
  res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
  let allData = '';
  req.on('data',function (chunk) {  //Buffer
     // console.log(chunk);
     allData += chunk;
  });
  req.on('end',function () {
     console.log(allData);
     let obj = JSON.parse(allData);
     console.log(obj.user);
     console.log(obj.pass);
     if(obj.user === 'user' && obj.pass === '123'){
       res.end('1');
     }else{
       res.end('-1');
     }

  });

}).listen(3000,()=>{
  console.log('服务器已启动');
});