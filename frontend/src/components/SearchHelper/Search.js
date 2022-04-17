import $ from "jquery"
import {labels, relationsWithLabel} from "../VisualHelper/KGconfig";
import {visConfigDefault, visConfigPhysics, visConfigHier, visConfigCLuster} from "../VisualHelper/visConfig";
const NeoVis = require("neovis.js")

function GetSearchConfig(elementToSearch,visConfig){
    var SearchConfig={
        neo4j:{
            serverUrl:"bolt://localhost:7687",
            serverUser:"neo4j",
            serverPassword:"LKG",
        },
        containerId:"viz",
        initialCypher: "match p=(n)-[r]-(m) where n.name =~"+ " '.*" + elementToSearch+ ".*' " + "or n.relation =~"+" '.*"+ elementToSearch+ ".*' " +
            "or r.relation =~"+" '.*"+elementToSearch+ ".*' "+ "or m.name =~"+ " '.*" + elementToSearch+ ".*' "+ "or m.relation =~"+" '.*"+ elementToSearch+ ".*' "+"return * LIMIT 100",

        consoleDebug: true,
        labels: labels,
        relationships:relationsWithLabel,
        visConfig: visConfig,
    }
    return SearchConfig
}

export {GetSearchConfig}