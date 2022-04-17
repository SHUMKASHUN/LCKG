import {labels, relations, relationsWithLabel} from "./KGconfig";
import {visConfigDefault, visConfigPhysics, visConfigHier, visConfigCLuster} from "./visConfig";
const NeoVis = require("neovis.js")

function GetFullKgConfig(visConfig){
    var fullKGConfig ={
        neo4j:{
            serverUrl:"bolt://localhost:7687",
            serverUser:"neo4j",
            serverPassword:"LKG",
        },
        containerId:"viz",
        initialCypher: "MATCH (n)-[r:Relation]->(m) RETURN * LIMIT 500 ", // maybe we can show the full KG here
        consoleDebug: true,
        labels: labels,
        relationships: relations,
        visConfig: visConfig,
    }
    return fullKGConfig
}

function drawFullCircleKG(){
    var fullKGConfig = GetFullKgConfig(visConfigDefault)
    var viz = new NeoVis.default(fullKGConfig);
    viz.render();
}

function drawFullClusterKG(){
    var fullKGConfig = GetFullKgConfig(visConfigCLuster)
    var viz = new NeoVis.default(fullKGConfig);
    viz.render();
}

function drawFullPhysicsKG(){
    var fullKGConfig = GetFullKgConfig(visConfigPhysics)
    var viz = new NeoVis.default(fullKGConfig);
    viz.render();
}

function drawFullHierKG(){
    var fullKGConfig = GetFullKgConfig(visConfigHier)
    var viz = new NeoVis.default(fullKGConfig);
    viz.render();
}
export {drawFullCircleKG, drawFullPhysicsKG, drawFullHierKG, drawFullClusterKG};