const app = require("express")()
const exec = require("child_process").exec
const httpProxy = require("http-proxy")

exec("./gogs web",function(err,out){
  if(err)console.log(err)

  console.log(out) 
})


const apiProxy = 
httpProxy.createProxyServer({
  target: "http://localhost:3000"
});

app.use("/", function(req, res) {
  apiProxy.web(req, res);
});

app.listen(process.env.PORT||2000)
