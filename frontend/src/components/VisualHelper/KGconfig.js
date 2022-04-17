const NeoVis = require("neovis.js")

const labels ={
    Undefined: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {
            //     static: { // 针对每一个节点组设置的样式或配置
            //   borderWidth: 4, // 节点边框
            //   borderWidthSelected: 4, // 点击或选中的节点边框
            //   color: { // 自定义这个节点组的颜色
            //     border: this.colorObj[this.index]['border'], // 边框颜色
            //     background: this.colorObj[this.index]['background'], // 背景颜色
            //     highlight: { // 点击时、选中
            //       border: this.colorObj[this.index]['border'] // 点击时的边框
            //     }
            //   }
            // },
            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "name",
                size: "pagerank",
                group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(75,132,227)',
                    background: 'rgb(159,194,247)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 15,
                    color:'#343434',
                    strokeWidth:2.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                label: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["name", "pagerank","community"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }





                //   value: (props) =>
                // color:'#6fd14b'
                // chosen.node: function(values, id, selected, hovering) {
                //     values.color = 'black';
                // }
                // color:(props) =>NeoVis.

            },
            //   function: {
            // 		title: NeoVis.objectToTitleHtml,
            //         label: node => {
            // 			const label = `${node.properties.name}\n${node.properties.pagerank}`;
            // 			return label;
            // 		}
            // 	},
            //   static: { // everything here will be copied directly to the vis.js's node object
            //       // chosen:"True",
            //       shape: "dot",
            //       borderWidth:1.5,
            //       label: "name",
            //       size: "pagerank",
            //       group: "community",

            //       // color:{
            //       //         border:'#d93d35',
            //       //         background:'#e06f6b',
            //       //         // hover:{
            //       //         //     border:'black'
            //       //         // }
            //       //     },


            //       font: {
            //           size: 15,
            //           color:'#343434',
            //           strokeWidth:2.5
            //           // color: "#333333"
            //       },
            //       // shape: "image",
            //       // image: 'https://visjs.org/images/visjs_logo.png'
            //   }
        }
    },
    GPE: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "name",
                size: "pagerank",
                group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(207,161,58)',
                    background: 'rgb(247,194,104)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 15,
                    color:'#343434',
                    strokeWidth:2.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                label: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["name", "pagerank","community"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },

    LAW: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "name",
                size: "pagerank",
                group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(116,179,109)',
                    background: 'rgb(155,201,152)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 15,
                    color:'#343434',
                    strokeWidth:2.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                label: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["name", "pagerank","community"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    }
}
const relations = {
    Relation: { // same as node but mapped from neo4j relationship to vis.js edge
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/edges.html
        value: "weight",
        //   label: "name", // 让name在label中显示,
        // the default is now without caption
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put edge properties that aren't mapped directly from the neo4j relationship
            // cypher: {}, // same as label advance cypher
            function: { // same as label advance function
                title: NeoVis.objectToTitleHtml, // putting caption on the title,
                //   value: (edge)=>{
                //     console.log(edge.color)
                //   }
                //   color:'black'
            },
            static: {
                // hoverWidth:10,
                //   width:{
                //       width:2,
                //       highlight:5
                //   },
                color:{
                    color: 'rgb(173,178,187)',
                    opacity: 10,
                    highlight: 'black'
                    //   highlight:{
                    //       color:'black'
                    //     // shadow:10
                    //     // width:10
                    //   },
                    //   hover:
                },
                //   highlight:{


                //     borderWidth:6,
                //     border:'#a6abb5'

                //     },

            } // same as label advance static
        }
    }
}
const relationsWithLabel = {
    Relation: { // same as node but mapped from neo4j relationship to vis.js edge
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/edges.html
        value: "weight",
        label: "name", // 让name在label中显示,
        // the default is now without caption
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {// here you put edge properties that aren't mapped directly from the neo4j relationship
            // cypher: {}, // same as label advance cypher
            function: { // same as label advance function
                title: NeoVis.objectToTitleHtml, // putting caption on the title,
                //   value: (edge)=>{
                //     console.log(edge.color)
                //   }
                //   color:'black'
            },
            static: {
                // hoverWidth:10,
                //   width:{
                //       width:2,
                //       highlight:5
                //   },
                color: {
                    color: 'rgb(173,178,187)',
                    opacity: 10,
                    highlight: 'black'
                    //   highlight:{
                    //       color:'black'
                    //     // shadow:10
                    //     // width:10
                    //   },
                    //   hover:
                },
                //   highlight:{


                //     borderWidth:6,
                //     border:'#a6abb5'

                //     },

            } // same as label advance static
        }
    }
}

export {labels, relations, relationsWithLabel} ;
