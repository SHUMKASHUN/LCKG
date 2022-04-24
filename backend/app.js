const express = require('express')
const app = express()
const port = 5001
const cors = require('cors')
const multer = require('multer')

// Headers("Access-Control-Allow-Origin: *");
var corsOptions = {
  credentials:true,
  origin:'http://localhost:3000',
  optionsSuccessStatus:200
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    // cb(null, file.originalname) 
    cb(null, 'contract.txt')
  },
})

const upload = multer({ storage: storage })

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// }
// app.use(allowCrossDomain)

// app.configure(function() {
//   app.use(allowCrossDomain);
//   //some other code
// });    

app.use(cors(corsOptions))
// 在corsOptions中我们定义了一些cors所需要的配置，比如指定前端的地址是http://localhost:3000，之后我们使用app.use来把这些内容提供给app。
app.post('/image', upload.single('file'), function (req, res) {
  res.json({})
})


// trail 2.0 get的路径还有问题！！
app.get('/', function(req, res) {
  // console.log('here!')
  var spawn = require("child_process").spawn;
      

  var process = spawn('python',["./contract_handler_2.py"] );

  // Takes stdout data from script which executed
  // with arguments and send this data to res object
  process.stdout.on('data', function(data) {
      // res.send(data.toString());
      console.log(`${data}`)
      res.send(`${data}`);
  } )
  // res.send('success!')
  // res.send(`${data}`); // 此处发送的data, 即为前端中callback里将会得到的data, 如不需要则可以省略这一行
  // 这里开始写你需要的东西,比如更新数据库之类的...

  // res.end();// 如果不执行end(), 那么前端网页则会一直等待response
})



// app.get('/', function (req, res) {
//   var spawn = require("child_process").spawn;
      

//   var process = spawn('python',["./contract_handler.py"] );

//   // Takes stdout data from script which executed
//   // with arguments and send this data to res object
//   process.stdout.on('data', function(data) {
//       // res.send(data.toString());
//       console.log(`${data}`)
//   } )
//   res.send('success!')
// });

// below is the trail to run python

  
// Function callName() is executed whenever 
// url is of the form localhost:3000/name
// app.get('/name', callName);
  

    // var spawn = require("child_process").spawn;
      

    // var process = spawn('python',["./contract_handler.py"] );
  
    // // Takes stdout data from script which executed
    // // with arguments and send this data to res object
    // process.stdout.on('data', function(data) {
    //     // res.send(data.toString());
    //     console.log(`${data}`)
    // } )
// }

// end of trail

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

