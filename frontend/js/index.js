function draw(){
    var oldConfig ={
        neo4j:{
            serverUrl:"bolt://localhost:11003",
            serverUser:"neo4j",
            serverPassword:"LCKG",
        },
        containerId:"viz",
        initialCypher: "MATCH (n)-[r:Edge]->(m) RETURN * LIMIT 100",
        consoleDebug: true,
        
        // labels:{
        //     "Source": {
        //         "caption":"test" ,
        //         "source": "source",
        //         // "image": 'https://visjs.org/images/visjs_logo.png',
        //         // "color":"#333333",
        //         community: "community",
        //         size:"pagerank",
        //         "font": {
        //             "size":16,
        //             "color":"grey"
        //         },
        //     },
        //     "Target": {
        //         "target": "target",
        //         "community": "community",
        //         "font": {
        //             "size":16,
        //             "color":"grey"
        //         },
        //     }
        // },
        // relationships: {
        //     "Edge": {
        //         "thickness": "count",
        //         "caption": false,
        //         'color':'green'
        //     }
        // },



        labels: {
            // Entity: { // everything that is directly on this object gets mapped from the neo4j node
            //     // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
            //     // "source": "source",
            //     label: "entity", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
            //     value: "pagerank",
            //     group: "community",
            //     [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put node properties that aren't mapped directly from the neo4j node
            //         // cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
            //         //     value: "MATCH (n) WHERE id(n) = $id MATCH (n)-[r]-() RETURN sum(r.weight) AS c"
            //         // },
            //         function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
            //             title: NeoVis.objectToTitleHtml, // alternativly
            //             // title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank"])
            //             // color:'#6fd14b'
            //         },
            //         static: { // everything here will be copied directly to the vis.js's node object
            //             font: {
            //                 size: 10,
            //                 // color: "#6fd14b"
            //                 color:'grey',
            //                 strokeWidth:2
            //             },
            //             // shape: "image",
            //             // image: 'https://visjs.org/images/visjs_logo.png'
            //         }
            //     }
            // },
            Entity: { // everything that is directly on this object gets mapped from the neo4j node
                // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
                // "target": "target",
                // label: "entity", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
                // value: "pagerank",
                // shape: "triangle",
                // value: 50,
                // group: "community",
                [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put node properties that aren't mapped directly from the neo4j node
                    cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                        value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                        label: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                        group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                        // color:
                    },
                    // value: "pagerank",
                    function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                        // title: NeoVis.objectToTitleHtml, // alternativly
                        title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community"]),
                        // color:'#6fd14b'
                        // chosen.node: function(values, id, selected, hovering) {
                        //     values.color = 'black';
                        // }
                        // color:(props) =>NeoVis.

                    },
                    static: { // everything here will be copied directly to the vis.js's node object
                        // chosen:"True",
                        shape: "dot",
                        borderWidth:1.5,
                        // label: "name", 
                        // size: "pagerank",
                        // group: "community",

                        // color:{
                        //         border:'#d93d35',
                        //         background:'#e06f6b',
                        //         // hover:{
                        //         //     border:'black'
                        //         // }
                        //     },


                        font: {
                            size: 15,
                            color:'#343434',
                            strokeWidth:2.5
                            // color: "#333333"
                        },
                        // shape: "image",
                        // image: 'https://visjs.org/images/visjs_logo.png'
                    }
                }
            }
        },
        relationships: {
            Edge: { // same as node but mapped from neo4j relationship to vis.js edge
                // full properties list can be found at https://visjs.github.io/vis-network/docs/network/edges.html
                value: "wight",
                // the default is now without caption
                [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put edge properties that aren't mapped directly from the neo4j relationship
                    // cypher: {}, // same as label advance cypher
                    function: { // same as label advance function
                        title: NeoVis.objectToTitleHtml // putting caption on the title
                    },
                    static: {
                        color:'#a6abb5'
                    } // same as label advance static
                }
            }
        },
    
        // initial_cypher: "MATCH (n)-[r:Edge]->(m) RETURN * LIMIT 100",
        // arrows: true,
        // hierarchical_layout:true,
        // hierarchical_sort_method:"directed",


        visConfig: {
            edges: {
                arrows: {
                    to: {enabled: true}
                }
            },
            // layout: {
            //     enabled: true,
            //     sortMethod: 'directed'
            // }
        },

    }
    // import { migrateFromOldConfig } from "neovis.js";
    // const newConfig = migrateFromOldConfig(config)
    // const viz = migrateFromOldConfig(oldConfig);

    // const newConfig = NeoVis.migrateFromOldConfig(oldConfig);

    // import { migrateFromOldConfig } from "neovis.js";
    // const newConfig = migrateFromOldConfig(oldConfig)
    var viz = new NeoVis.default(oldConfig);
    viz.render();
    console.log(viz);
}


// const f = document.getElementById('form');
// const q = document.getElementById('query');
// const google = 'https://www.google.com/search?q=site%3A+';
// const site = 'pagedart.com';

// function search(event) {
//   console.log("here01!!!!")
//   event.preventDefault();
//   // const url = google + site + '+' + q.value;
//   // const win = window.open(url, '_blank');
//   // win.focus();
  

//       var searchConfig ={
//           neo4j:{
//               serverUrl:"bolt://localhost:11003",
//               serverUser:"neo4j",
//               serverPassword:"LCKG001",
//           },
//           containerId:"viz",
//           initialCypher: "match (n) where n.name contains 'q.value' or n.relation contains 'q.value' return *",
//           consoleDebug: true,
//           labels: {
//               Entity: { // everything that is directly on this object gets mapped from the neo4j node

//                   [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put node properties that aren't mapped directly from the neo4j node
//                       cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
//                           value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
//                           label: "MATCH (n) WHERE id(n) = $id RETURN n.name",
//                           group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
//                           // color:
//                       },
//                       // value: "pagerank",
//                       function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
//                           // title: NeoVis.objectToTitleHtml, // alternativly
//                           title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community"]),


//                       },
//                       static: { // everything here will be copied directly to the vis.js's node object
//                           // chosen:"True",
//                           shape: "dot",
//                           borderWidth:1.5,


//                           font: {
//                               size: 15,
//                               color:'#343434',
//                               strokeWidth:2.5

//                           },

//                       }
//                   }
//               }
//           },
//           relationships: {
//               Edge: { // same as node but mapped from neo4j relationship to vis.js edge
//                   // full properties list can be found at https://visjs.github.io/vis-network/docs/network/edges.html
//                   value: "wight",
//                   // the default is now without caption
//                   [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put edge properties that aren't mapped directly from the neo4j relationship
//                       // cypher: {}, // same as label advance cypher
//                       function: { // same as label advance function
//                           title: NeoVis.objectToTitleHtml // putting caption on the title
//                       },
//                       static: {
//                           color:'#a6abb5'
//                       } // same as label advance static
//                   }
//               }
//           },
      



//           visConfig: {
//               edges: {
//                   arrows: {
//                       to: {enabled: true}
//                   }
//               },

//           },

//       }

//       var viz = new NeoVis.default(searchConfig);
//       viz.render();
//       console.log("here02!!!!")
//       console.log(viz);
//       console.log("here03!!!!")

// }
// //   var el = document.getElementById('overlayBtn');
//   if(f){
//       f.addEventListener('submit', search);
//   }


const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'pagedart.com';

function search(event) {
    console.log(q.value)
    event.preventDefault();
    // const url = google + site + '+' + q.value;
    // const win = window.open(url, '_blank');
    // win.focus();
    

        var searchConfig ={
            neo4j:{
                serverUrl:"bolt://localhost:11003",
                serverUser:"neo4j",
                serverPassword:"LCKG",
            },
            containerId:"viz",
            // initialCypher: "match (n) where n.name contains"+ " '" + q.value+ "' " + "or n.relation contains"+" '"+ q.value+ "' " +"return *",
            initialCypher: "match p=()-[r]-() where r.relation contains"+ " '" + q.value+ "' " + "return p limit 20",
            // need to distinglish between relation and name
            // need to reset
            consoleDebug: true,
            labels: {
                Entity: { // everything that is directly on this object gets mapped from the neo4j node

                    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put node properties that aren't mapped directly from the neo4j node
                        cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                            value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                            label: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                            group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                            // color:
                        },
                        // value: "pagerank",
                        function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                            // title: NeoVis.objectToTitleHtml, // alternativly
                            title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community"]),


                        },
                        static: { // everything here will be copied directly to the vis.js's node object
                            // chosen:"True",
                            shape: "dot",
                            borderWidth:1.5,


                            font: {
                                size: 15,
                                color:'#343434',
                                strokeWidth:2.5

                            },

                        }
                    }
                }
            },
            relationships: {
                Edge: { // same as node but mapped from neo4j relationship to vis.js edge
                    // full properties list can be found at https://visjs.github.io/vis-network/docs/network/edges.html
                    value: "wight",
                    // the default is now without caption
                    [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put edge properties that aren't mapped directly from the neo4j relationship
                        // cypher: {}, // same as label advance cypher
                        function: { // same as label advance function
                            title: NeoVis.objectToTitleHtml // putting caption on the title
                        },
                        static: {
                            color:'#a6abb5'
                        } // same as label advance static
                    }
                }
            },
        



            visConfig: {
                edges: {
                    arrows: {
                        to: {enabled: true}
                    }
                },

            },

        }

        var viz = new NeoVis.default(searchConfig);
        viz.render();
        console.log("here02!!!!")
        console.log(viz);
        console.log("here03!!!!")

}
//   var el = document.getElementById('overlayBtn');
    if(f){
        f.addEventListener('submit', search);
    }
  
