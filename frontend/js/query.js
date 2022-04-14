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