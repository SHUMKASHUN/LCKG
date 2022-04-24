const NeoVis = require("neovis.js")

const labels ={

    Business_Related_Terms: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        name:   "name",
        // shape: "triangle",
        // value: 50,
        // group: "community",
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
                name:'name',
                label: "label",
                size: "pagerank",
                // group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    // border:'rgb(75,132,227)',
                    // background: 'rgb(159,194,247)',
                    border:'rgb(187,83,71)',
                    background: 'rgb(198,121,114)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                label: "MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },

    GPE: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        name:   "name",
        // shape: "triangle",
        // value: 50,
        group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

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
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                label: "MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },


    Contract_Categories: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

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
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    General: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(155,104,58)',
                    background: 'rgb(246,203,69)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    Legal_Related_Practitioner: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(212,119,111)',
                    background: 'rgb(238,125,115)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    Legal_Related_Terms: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    // border:'rgb(187,83,71)',
                    // background: 'rgb(198,121,114)',
                    border:'rgb(116,179,109)',
                    background: 'rgb(155,201,152)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    ORG: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    // border:'rgb(204,119,151)',
                    // background: 'rgb(227,183,200)',
                    border:'rgb(75,132,227)',
                    background: 'rgb(159,194,247)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    PERSON: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(45,96,26)',
                    background: 'rgb(101,218,121)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
                // shape: "image",
                // image: 'https://visjs.org/images/visjs_logo.png'
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property
                // title: NeoVis.objectToTitleHtml, // alternativly
                //   title: (props) => NeoVis.objectToTitleHtml(props, ["name", "pagerank","community",]),
                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // console.log(node.properties)
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    Product: { // everything that is directly on this object gets mapped from the neo4j node
        // full properties list can be found at https://visjs.github.io/vis-network/docs/network/nodes.html
        // "target": "target",
        label: "label",
        name:"name", // puts the property `name` from the neo4j node and puts it onto the label property of vis.js's node
        value: "pagerank",
        // shape: "triangle",
        // value: 50,
        // group: "community",
        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",
                // group: "community",

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
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },
            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property

                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
                label: node => { // 节点中显示的label文字，用于截取
                    const label = `${node.properties.title ? node.properties.title : node.properties.name}`
                    // test = label
                    return label.substring(0, 10) + '...'

                }

            },

        }
    },
    State_or_Counrty: { // everything that is directly on this object gets mapped from the neo4j node

        label: "label",
        name:"name",
        value: "pagerank",

        [NeoVis.NEOVIS_ADVANCED_CONFIG]: {

            static: { // everything here will be copied directly to the vis.js's node object
                // chosen:"True",
                shape: "dot",
                borderWidth:1.5,
                label: "label",
                name:"name",
                size: "pagerank",

                color:{
                    //   border:'#d93d35',
                    //   background:'#e06f6b',
                    border:'rgb(207,161,58)',
                    background: 'rgb(247,197,104)',
                    highlight:{

                        borderWidth:3,
                        border:'black'

                    },
                },


                font: {
                    size: 12,
                    color:'#343434',
                    strokeWidth:1.5
                    // color: "#333333"
                },

            },


            // here you put node properties that aren't mapped directly from the neo4j node
            cypher: { // everything here will map to the vis.js node object from a cypher query (like sizeCypher worked but for every property)
                value: "MATCH (n) WHERE id(n) = $id RETURN n.pagerank",
                name: "MATCH (n) WHERE id(n) = $id RETURN n.name",
                label:"MATCH (n) WHERE id(n) = $id RETURN labels(n)[0]",
                // group: "MATCH (n) WHERE id(n) = $id RETURN n.community",
                // color:
            },
            // value: "pagerank",
            function: { // everything here will map function thats gets the neo4j node properties to a vis.js node property

                title: (nodes)=> NeoVis.objectToTitleHtml(nodes,["label","name", "pagerank"]),
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
