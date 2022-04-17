import {EyeOutlined, SearchOutlined, CaretDownOutlined}  from "@ant-design/icons";
import {drawFullCircleKG,drawFullPhysicsKG,drawFullHierKG,drawFullClusterKG} from "./VisualHelper/DrawKG";
import {Collapse} from "./SearchHelper/Collapse";
import React, {useState} from "react";
import {visConfigCLuster, visConfigDefault, visConfigHier, visConfigPhysics} from "./VisualHelper/visConfig";
import {GetSearchConfig} from "./SearchHelper/Search";

const NeoVis = require("neovis.js")

function Visual(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState('')
    const [mode, setMode] = useState("circle")

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    function searchInBox() {
        var elementToSearch = text
        var searchBoxConfig
        switch(mode){
            case "circle":
                searchBoxConfig = GetSearchConfig(elementToSearch,visConfigDefault)
                break;
            case "cluster":
                searchBoxConfig = GetSearchConfig(elementToSearch,visConfigCLuster)
                break;
            case "hierarchical":
                searchBoxConfig = GetSearchConfig(elementToSearch,visConfigHier)
                break;
            case "physics":
                searchBoxConfig = GetSearchConfig(elementToSearch,visConfigPhysics)
                break;
            default:
                searchBoxConfig = GetSearchConfig(elementToSearch,visConfigDefault)
                console.log('default')
                break;
        }
        var vizSearch = new NeoVis.default(searchBoxConfig);
        vizSearch.render();
    }

    return (
        <div class="flex bg-[#f2f2f2] h-full w-full h-full absolute">
            <div class="block basis-1/4 grow-0 shrink-0 max-w-[25%] px-4 mt-3.5 ">
                <div class="flex flex-col rounded-md bg-white mt-3 ">
                    <div class="flex flex-row px-5 border-b-[1px] border-[#979797]/[0.1] rounded ">
                        <button className="" onClick={searchInBox}><SearchOutlined /></button>
                        <div className="flex grow shrink basis-0 w-full">
                            <input type="text" className="py-5 pl-8 w-full outline-0" placeholder="Search..."
                                    value={text} onChange={(event) => setText(event.target.value)}
                            />
                        </div>
                    </div>
                    <div class="border-b-[1px] border-[#979797]/[0.1] py-3 rounded">
                        <span className="pl-8" >Keywords Suggestions</span>
                        <span class="float-right pt-1 pr-2">
                            <CaretDownOutlined class="" onClick={handleToggle}/>
                        </span>
                    </div>
                    <Collapse isOpen={isOpen} >
                        <div> 此处放内容 </div>
                        <div> 此处放内容 </div>

                        <div> 此处放内容 </div>

                        <div> 此处放内容 </div>

                    </Collapse>

                    <div className="py-4 w-full rounded">
                        <span className="pl-8">
                            Current View Mode :
                        </span>
                        <select className="pl-2"   value={mode} onChange={(event) => setMode(event.target.value)}>
                            <option value="circle">circlal</option>
                            <option value="cluster">cluster</option>
                            <option value="hierarchical">hierarchicy</option>
                            <option value="physics">physics</option>
                        </select>
                    </div>

                    <div className="bg-[#f2f2f2] py-8 w-full">

                    </div>

                    <button
                        class="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick={drawFullCircleKG}
                    >
                        <div class="mr-2.5"><EyeOutlined /></div>
                        <div class="ml-2.5">View Knowledge Graph (Circle)</div>
                    </button>

                    <button
                        className="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick={drawFullHierKG}
                    >
                        <div className="mr-2.5"><EyeOutlined/></div>
                        <div className="ml-2.5">View Knowledge Graph (Hierarchicy)</div>
                    </button>

                    <button
                        className="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick={drawFullClusterKG}
                    >
                        <div className="mr-2.5"><EyeOutlined/></div>
                        <div className="ml-2.5">View Knowledge Graph (Cluster)</div>
                    </button>

                    <button
                        className="flex hover:text-sky-500 flex-row align-middle items-center px-3.5 py-4 border-[#979797]/[0.1] border-b-[1px]"
                        onClick={drawFullPhysicsKG}
                    >
                        <div className="mr-2.5"><EyeOutlined/></div>
                        <div className="ml-2.5">View Knowledge Graph (Physics)</div>
                    </button>
                </div>
            </div>
            <div class="block basis-3/4 grow-0 shrink-0 max-w-[75%] px-4 container" id="viz">

            </div>
        </div>
    );
}

export default Visual;
