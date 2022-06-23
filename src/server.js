const express = require("express");
const cors = require("cors");

const [MOCK_blocoData, MOCK_blocoHead] = require('./mockData')

const server = express()
server.use(cors(
  {
    origin: "*"
  }
))

server.get('/', (req, res) => {
  const { id } = req.query
  let responseData;

  if( id != undefined ){ 
    const blocoIdx = id-1;
    responseData= {blocoData: MOCK_blocoData[blocoIdx]}
  } else {
    responseData= {blocosHead: MOCK_blocoHead}
  }
  
  res.json(responseData)

})

server.listen(3001, ()=>{
  console.log("Running at 3001")
  // console.log(MOCK_blocoData)
})