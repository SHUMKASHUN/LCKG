import logo from './logo.svg';
// import './index.css';
import React, { useEffect, useState } from "react";
// import Page from './components/Page';
import CallApi from './components/CallApi';
import $ from 'jquery'; 
// import swal from 'sweetalert2/src/sweetalert2.js';
// import SweetAlert2 from 'sweetalert2';
import swal from 'sweetalert';

function App() {

  //trail
  const [content, setContent] = useState("");
 // useState accepts an initial state and returns two values:

// The current state.
// A function that updates the state.

  var ConfidentialKw,PaymentKw,DisclaimersKw,WarrantiesKw,DisputeResolutionKw,ForceMajeureKw,OtherKw = []
// function to make get request to backend, call python script
  function JSalert(){ // 一个fancy的 alert

    swal("Congrats!", "Analysis is done!");
    
    }
  function getResult() {
      CallApi.getSomething()
      .then(response => {
          // console.log(response.data)
          // console.log('?!')
          setContent(response.data)//response is an object
          // console.log('now')
          // alert('Yes!')
          JSalert()
          // console.log(typeof(response))
          // console.log(typeof(response.data))
          // console.log(response.data)
          // console.log(response.data.split(" "))
      })
  }
// function to do search with the relation triples
  function showKeywords(){
      console.log(content) // content 是一个大string，每个部分用[]区分，因此要按照]做split
      function getList(contentEle){
      //   将python中的list转化为7个js array,
        var sevenCategories =   contentEle.split("]") 

        function keywordsHandler(oneCategory){
          var Final = oneCategory.split("'") 
          var list = []
          for (let i=1; i<Final.length;++i){
            if(Final[i]!==' '){
              if(Final[i]!== '\n'){
                if(Final[i]!==''){
                  if(Final[i]!=='\n '){
                    if(Final[i]!==', '){
                      list.push(Final[i])
                    }
                  }
                }
              }
            }
          }
          return list
        }

        var ConfidentialKeywords = keywordsHandler(sevenCategories[0])
        var PaymentTermsKeywords = keywordsHandler(sevenCategories[1])
        var DisclaimersKeywords = keywordsHandler(sevenCategories[2])
        var WarrantiesKeywords = keywordsHandler(sevenCategories[3])
        var DisputeResolutionTermsKeywords = keywordsHandler(sevenCategories[4])
        var ForceMajeureKeywords = keywordsHandler(sevenCategories[5])
        var OtherKeywords = keywordsHandler(sevenCategories[6])

        // console.log(OtherKeywords[0])
        return [ConfidentialKeywords,PaymentTermsKeywords,DisclaimersKeywords,WarrantiesKeywords,DisputeResolutionTermsKeywords,ForceMajeureKeywords,OtherKeywords]
        // js不支持返回multiple values function
      }


      let matchResult = getList(content)

      ConfidentialKw = matchResult[0]
      PaymentKw = matchResult[1]
      DisclaimersKw = matchResult[2]
      WarrantiesKw = matchResult[3]
      DisputeResolutionKw = matchResult[4]
      ForceMajeureKw = matchResult[5]
      OtherKw = matchResult[6]


      // console.log(sourceList)
      // console.log(contentEle)
      // $('#buttonGroup2').removeAttr("hidden")
      // $('#btn3').prop('value',sourceList[17])
      // $('#btn3').prop('value',contentEle[7])
      // $('#fileDisplayArea2').text(sourceList.slice(0,20))// later need to choose high-quality key words to display
      $('#keywordsTable').show();

      // 这一部分为table添加各类keywords

      for (let j =0;j<matchResult.length;++j){
        var currentLen = matchResult[j].length
        // console.log(currentLen)
        if(currentLen != 0){
          if(currentLen >=5){
            currentLen = 5 // 现在只支持五个keywords，太多了放不下
          }
          for(let i =0;i<currentLen;++i){
            let currentData = document.getElementById(`column_${j}_data_${i}`);
            // console.log(currentRowData)
            currentData.innerHTML =matchResult[j][i]
          }

        }

      }

    //   let NumOfCategory = 8; // 
    //   let NumOfRow = 5; 

    //   for (let j = 0; j< NumOfRow; j++){
    //     let currentRow = document.getElementById(`row_${j}`)

    //     for (let i = 0; i < NumOfCategory;++i){ // bond search function to each td, one more for 补充信息,对最后一个格子里的信息需要添加一点功能，变成txt，复制粘贴？
    //         let currentRowData = document.getElementById('row_${j}_data_${i}'); // td是一行内并列的data cell

                
    //     }
    //     // tbody.appendChild(row_2);

    // }

      // bond search function to each table elements

      // for (let i=0;i<NumOfKey;++i){
      //   let currentRow = document.getElementById(`row_${i}`)
      //   currentRow.innerHTML = sourceList[i];
      //   // currentRow.innerHTML = contentEle[i];
      // }


      

  }
 
  // var currentContent
  //
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5001/image', {
      mode: 'no-cors',
      // headers:{
      //   'Access-Control-Allow-Origin': '*'
      // },
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)

    // function to show txt
    // window.onload = function() {
      var fileInput = document.getElementById('fileInput'),
		      fileDisplayArea = document.getElementById('fileDisplayArea');
      var file = fileInput.files[0],
            reader = new FileReader();
        
        reader.onload = function(e) {
          console.log('testing loader')
          console.log(typeof(reader.result))
          fileDisplayArea.innerHTML = reader.result;
        };
        
        reader.readAsText(file);	
    // }
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    // window.onload = function() {
    //   var fileInput = document.getElementById('fileInput'),
		//       fileDisplayArea = document.getElementById('fileDisplayArea');
    //   var file = fileInput.files[0],
    //         reader = new FileReader();
        
    //     reader.onload = function(e) {
    //       console.log('testing loader')
    //       fileDisplayArea.innerText = reader.result;
    //     };
        
    //     reader.readAsText(file);	
    // }
    setImage(img)
    // $('#table').text=img
  }
  // const showPage = (e)=>{
  //   // document.getElementById('Page').display = 'inline'
  //   $('#Page').append(Page)
  // }
  // const domContainer = document.querySelector('#like_button_container');
  // ReactDOM.render(e(LikeButton), domContainer);


  
  return (
    <div className="App">
      <h2>Upload Your Contract</h2>
      {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
      <div className="UploadZone">
        <form className="uploadForm" onSubmit={handleSubmit}>
            <label className="custom-file-upload">
              <input type='file' id = 'fileInput' name='file' onChange={handleFileChange}></input>
              Upload
            </label>
            {/* <input type='file' name='file' onChange={handleFileChange}></input> */}
            <button id='btn6' className = 'fancyButton' type='submit'>Submit</button>
          </form>
          <div id ='buttonGroup'>
            <button id="btn1" className = 'fancyButton' onClick = {getResult}>Analysis
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button id="btn2" className = 'fancyButton' onClick = {showKeywords}>Show List
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
      </div>
          {/* <hr></hr> */}

      {/* <div className="Page" ></div> */}
      {/* <form onSubmit={handleSubmit}>
        <input type='file' name='file' onChange={handleFileChange}></input>
        <button type='submit'>Submit</button>
      </form> */}
      {status && <h4>{status}</h4>}
    </div>
  );
}

// const domContainer = document.querySelector('#function zone');
// ReactDOM.render(e(APP), domContainer);

export default App;
