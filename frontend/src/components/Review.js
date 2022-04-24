import React, {useState} from "react";
import swal from "sweetalert";
import CallApi from "./CallApi";
import $ from "jquery";
import {CaretDownOutlined, EyeOutlined, VerticalAlignBottomOutlined } from "@ant-design/icons";
import {Collapse} from "./SearchHelper/Collapse";
import {drawFullCircleKG, drawFullClusterKG, drawFullHierKG, drawFullPhysicsKG} from "./VisualHelper/DrawKG";



function Review () {


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
        <div className="flex bg-[#f2f2f2]  w-full h-3/4 ">
            <div className="block basis-1/4 grow-0 shrink-0 max-w-[25%] px-4 mt-3.5 ">
                <div className="flex flex-col  bg-white mt-3 ">

                    <div className="flex flex-row px-5 border-b-[1px] border-[#979797]/[0.1] rounded ">
                         <form className="" onSubmit={handleSubmit}>
                             <label className="">
                                 <input className="py-3.5"  type='file' id = 'fileInput' name='file' onChange={handleFileChange}></input>

                             </label>
                             <button id='btn6' className = 'rounded-md bg-[#f2f2f2] border-[1px]' type='submit'>Submit</button>
                         </form>
                    </div>
                    <div className="bg-[#f2f2f2] py-8 w-full">

                    </div>

                    <button
                        className="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick = {getResult}
                    >
                        <div className="mr-2.5"><EyeOutlined/></div>
                        <div className="ml-5">Process Review</div>
                    </button>
                    <button
                        className="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick = {showKeywords}
                    >
                        <div className="mr-2.5"><EyeOutlined/></div>
                        <div className="ml-5">Show Results</div>
                    </button>
                    <button
                        className="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick = {showKeywords}
                    >
                        <div className="mr-2.5"><VerticalAlignBottomOutlined /></div>
                        <div className="ml-5">Download Report</div>
                    </button>
                </div>
            </div>
            <div className="block flex flex-col basis-3/4 max-w-[75%] px-4 container" >
                <div className="max-w-full  border-2 max-h-[300px]" id="table1">
                    <pre className="max-w-full max-h-full overflow-auto" id="fileDisplayArea"></pre>
                </div>
                {/*<div className="max-w-full max-h-[66%] border-2 id=table2">*/}
                {/*    <pre className="max-w-full max-h-full overflow-auto" id="fileDisplayArea2"></pre>*/}
                {/*</div>*/}
                {/*<div id="viz">*/}

                {/*</div>*/}
            </div>
        </div>


        // <div className="">
        // {/*  <div className="UploadZone">*/}
        // {/*    <form className="uploadForm" onSubmit={handleSubmit}>*/}
        // {/*        <label className="custom-file-upload">*/}
        // {/*          <input type='file' id = 'fileInput' name='file' onChange={handleFileChange}></input>*/}
        // {/*          Upload*/}
        // {/*        </label>*/}
        // {/*        /!* <input type='file' name='file' onChange={handleFileChange}></input> *!/*/}
        // {/*        <button id='btn6' className = 'fancyButton bg-red-500' type='submit'>Submit</button>*/}
        // {/*      </form>*/}
        // {/*      <div id ='buttonGroup'>*/}
        // {/*        <button id="btn1" className = 'fancyButton bg-red-500' onClick = {getResult}>Analysis*/}
        // {/*          <span></span>*/}
        // {/*          <span></span>*/}
        // {/*          <span></span>*/}
        // {/*          <span></span>*/}
        // {/*        </button>*/}
        // {/*        <button id="btn2" className = 'fancyButton bg-red-500' onClick = {showKeywords}>Show List*/}
        // {/*          <span></span>*/}
        // {/*          <span></span>*/}
        // {/*          <span></span>*/}
        // {/*          <span></span>*/}
        // {/*        </button>*/}
        // {/*      </div>*/}
        // {/*  </div>*/}
        // {/*      /!* <hr></hr> *!/*/}
        //
        // {/*  /!* <div className="Page" ></div> *!/*/}
        // {/*  /!* <form onSubmit={handleSubmit}>*/}
        // {/*    <input type='file' name='file' onChange={handleFileChange}></input>*/}
        // {/*    <button type='submit'>Submit</button>*/}
        // {/*  </form> *!/*/}
        // {/*  {status && <h4 class="bg-green-500">{status}</h4>}*/}
        // {/*</div>*/}
    );
}
export default Review;