(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"0fCG":function(e,t,s){"use strict";s.r(t);var o=s("KHd+"),r=s("UQSp"),m=s("Kw5r");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}m.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},d=function(e){var t=e.options.components=e.options.components||{},s=e.options.computed=e.options.computed||{};Object.keys(a).forEach((function(e){"object"===n(a[e])&&"function"==typeof a[e].render||"function"==typeof a[e]&&"function"==typeof a[e].options.render?t[e]=a[e]:s[e]=function(){return a[e]}}))},i=m.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",_={excerpt:null,title:"Market messages"};var h=function(e){e.options[c]&&(e.options[c]=_),m.a.util.defineReactive(e.options,c,_),e.options.computed=i.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},u=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("VueRemarkRoot",[s("h1",{attrs:{id:"market-messages"}},[s("a",{attrs:{href:"#market-messages","aria-hidden":"true"}},[e._v("#")]),e._v("Market messages")]),s("p",[e._v("Market messages is used for exchange "),s("strong",[e._v("Demand")]),e._v(" and "),s("strong",[e._v("Offer")]),e._v(" information. It also used for delivery "),s("strong",[e._v("Result")]),e._v(" messages with liability execution reports.")]),s("blockquote",[s("p",[e._v("This is spec for Robonomics "),s("code",{pre:!0},[e._v("Generation 5")]),e._v(".")])]),s("ul",[s("li",[e._v("Currently for message delivery is used "),s("a",{attrs:{href:"https://ipfs.io/blog/25-pubsub/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("IPFS PubSub")]),e._v(" broadcaster.")]),s("li",[e._v("IPFS PubSub "),s("strong",[e._v("topic")]),e._v(" is set according to "),s("em",[e._v("Lighthouse "),s("a",{attrs:{href:"https://ens.domains/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("ENS")]),e._v(" name")]),e._v(".")])]),s("h2",{attrs:{id:"messages-content"}},[s("a",{attrs:{href:"#messages-content","aria-hidden":"true"}},[e._v("#")]),e._v("Messages content")]),s("p",[e._v("Robonomics market message use "),s("a",{attrs:{href:"https://www.json.org/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("JSON")]),e._v(" data format.")]),s("h3",{attrs:{id:"demand"}},[s("a",{attrs:{href:"#demand","aria-hidden":"true"}},[e._v("#")]),e._v("Demand")]),s("table",[s("thead",[s("tr",[s("th",[e._v("Field")]),s("th",[e._v("ROS Type")]),s("th",[e._v("Description")])])]),s("tbody",[s("tr",[s("td",[e._v("model")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[e._v("ipfs_common/Multihash")])]),s("td",[e._v("CPS behavioral model identifier")])]),s("tr",[s("td",[e._v("objective")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[e._v("ipfs_common/Multihash")])]),s("td",[e._v("CPS behavioral model parameters in rosbag file")])]),s("tr",[s("td",[e._v("token")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_common/Address")])]),s("td",[e._v("Operational token address")])]),s("tr",[s("td",[e._v("cost")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_common/UInt256")])]),s("td",[e._v("CPS behavioral model execution cost")])]),s("tr",[s("td",[e._v("lighthouse")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_common/Address")])]),s("td",[e._v("Lighthouse contract address")])]),s("tr",[s("td",[e._v("validator")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_common/Address")])]),s("td",[e._v("Observing network address")])]),s("tr",[s("td",[e._v("validatorFee")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_common/UInt256")])]),s("td",[e._v("Observing network fee")])]),s("tr",[s("td",[e._v("deadline")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_common/UInt256")])]),s("td",[e._v("Deadline block number")])]),s("tr",[s("td",[e._v("nonce")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_common/UInt256")])]),s("td",[e._v("Robonomics message counter")])]),s("tr",[s("td",[e._v("sender")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_common/Address")])]),s("td",[e._v("Message sender address")])]),s("tr",[s("td",[e._v("signature")]),s("td",[e._v("std_msgs/UInt8[]")]),s("td",[e._v("Sender’s Ethereum signature")])])])]),s("h3",{attrs:{id:"offer"}},[s("a",{attrs:{href:"#offer","aria-hidden":"true"}},[e._v("#")]),e._v("Offer")]),s("table",[s("thead",[s("tr",[s("th",[e._v("Field")]),s("th",[e._v("ROS Type")]),s("th",[e._v("Description")])])]),s("tbody",[s("tr",[s("td",[e._v("model")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[e._v("ipfs_commom/Multihash")])]),s("td",[e._v("CPS behavioral model identifier")])]),s("tr",[s("td",[e._v("objective")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[e._v("ipfs_commom/Multihash")])]),s("td",[e._v("CPS behavioral model parameters in rosbag file")])]),s("tr",[s("td",[e._v("token")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_commom/Address")])]),s("td",[e._v("Operational token address")])]),s("tr",[s("td",[e._v("cost")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_commom/UInt256")])]),s("td",[e._v("CPS behavioral model execution cost")])]),s("tr",[s("td",[e._v("validator")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_commom/Address")])]),s("td",[e._v("Observing network address")])]),s("tr",[s("td",[e._v("lighthouse")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_commom/Address")])]),s("td",[e._v("Lighthouse contract address")])]),s("tr",[s("td",[e._v("lighthouseFee")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_commom/UInt256")])]),s("td",[e._v("Liability creation fee")])]),s("tr",[s("td",[e._v("deadline")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_commom/UInt256")])]),s("td",[e._v("Deadline block number")])]),s("tr",[s("td",[e._v("nonce")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonuint256msg"}},[e._v("ethereum_commom/UInt256")])]),s("td",[e._v("Robonomics message counter")])]),s("tr",[s("td",[e._v("sender")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_commom/Address")])]),s("td",[e._v("Message sender address")])]),s("tr",[s("td",[e._v("signature")]),s("td",[e._v("std_msgs/UInt8[]")]),s("td",[e._v("Sender’s Ethereum signature")])])])]),s("h3",{attrs:{id:"result"}},[s("a",{attrs:{href:"#result","aria-hidden":"true"}},[e._v("#")]),e._v("Result")]),s("table",[s("thead",[s("tr",[s("th",[e._v("Field")]),s("th",[e._v("ROS Type")]),s("th",[e._v("Description")])])]),s("tbody",[s("tr",[s("td",[e._v("liability")]),s("td",[s("a",{attrs:{href:"/docs/ethereum-common-messages#ethereum_commonaddressmsg"}},[e._v("ethereum_commom/Address")])]),s("td",[e._v("Liability contract address")])]),s("tr",[s("td",[e._v("result")]),s("td",[s("a",{attrs:{href:"/docs/ipfs-common-messages#ipfs_commonmultihashmsg"}},[e._v("ipfs_commom/Multihash")])]),s("td",[e._v("Liability result multihash")])]),s("tr",[s("td",[e._v("success")]),s("td",[e._v("std_msgs/Bool")]),s("td",[e._v("Is liability executed successful")])]),s("tr",[s("td",[e._v("signature")]),s("td",[e._v("std_msgs/UInt8[]")]),s("td",[e._v("Sender’s Ethereum signature")])])])]),s("h2",{attrs:{id:"messages-signing"}},[s("a",{attrs:{href:"#messages-signing","aria-hidden":"true"}},[e._v("#")]),e._v("Messages signing")]),s("p",[e._v("Before signing the messages is packed using "),s("a",{attrs:{href:"https://solidity.readthedocs.io/en/latest/abi-spec.html#non-standard-packed-mode",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("abi.encodePacked")]),e._v(" solidity finction and hashed by Keccak_256.")]),s("pre",[s("code",{pre:!0},[e._v("   demandHash = keccak256(abi.encodePacked(\n        _model\n      , _objective\n      , _token\n      , _cost\n      , _lighthouse\n      , _validator\n      , _validator_fee\n      , _deadline\n      , IFactory(factory).nonceOf(_sender)\n      , _sender\n      ));\n")])]),s("p",[s("strong",[s("code",{pre:!0},[e._v("nonce")]),e._v(" parameter is counted by factory smart contract and incremented for each created liability smart contract.")])]),s("p",[e._v("Message hash are signed using Ethereum "),s("code",{pre:!0},[e._v("secp256k1")]),s("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("signature")]),e._v(".")])])}),[],!1,null,null,null);"function"==typeof d&&d(u),"function"==typeof h&&h(u);t.default=u.exports},UQSp:function(e,t,s){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);