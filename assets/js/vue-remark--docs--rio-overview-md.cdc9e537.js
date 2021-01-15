(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{QqmV:function(e,o,n){"use strict";n.r(o);var t=n("KHd+"),i=n("UQSp"),r=n("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var s={VueRemarkRoot:i.a},c=function(e){var o=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===a(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?o[e]=s[e]:n[e]=function(){return s[e]}}))},p=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"Robonomics IO Overview"};var b=function(e){e.options[l]&&(e.options[l]=d),r.a.util.defineReactive(e.options,l,d),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},h=Object(t.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("VueRemarkRoot",[t("h1",{attrs:{id:"robonomics-io-overview"}},[t("a",{attrs:{href:"#robonomics-io-overview","aria-hidden":"true"}},[e._v("#")]),e._v("Robonomics IO Overview")]),t("p",[e._v("The "),t("a",{attrs:{href:"https://crates.robonomics.network/robonomics_io/index.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("crate")]),e._v(" provides a convenient way to interact with blockchain and includes a set of tools. The latest release can be found "),t("a",{attrs:{href:"https://github.com/airalab/robonomics/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")])]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics io\nrobonomics-io 0.21.0\nRobonomics Framework I/O operations\n\nUSAGE:\n    robonomics io [FLAGS] [OPTIONS] <SUBCOMMAND>\n\nFLAGS:\n        --dev        Specify the development chain\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -d, --base-path <PATH>        Specify custom base path\n        --chain <CHAIN_SPEC>      Specify the chain specification (one of dev, local, or staging)\n    -l, --log <LOG_PATTERN>...    Sets a custom logging filter. Syntax is <target>=<level>, e.g. -lsync=debug\n\nSUBCOMMANDS:\n    help     Prints this message or the help of the given subcommand(s)\n    read     Read information from device\n    write    Write information into device\n")])]),t("h2",{attrs:{id:"the-pipeline-philosophy"}},[t("a",{attrs:{href:"#the-pipeline-philosophy","aria-hidden":"true"}},[e._v("#")]),e._v("The Pipeline Philosophy")]),t("p",[e._v("The tool is designed in order to be included in a pipeline chain of processes. From Unix user experience everyone is familiar with commands like:")]),t("pre",[t("code",{pre:!0},[e._v("ps aux | grep robonomics\n")])]),t("p",[e._v("It means standard output produced by the "),t("code",{pre:!0},[e._v("ps")]),e._v(" program becomes standard input for the "),t("code",{pre:!0},[e._v("grep")]),e._v(" program. ")]),t("p",[e._v("The "),t("code",{pre:!0},[e._v("robonomics io")]),e._v(" consists of several subcommands with reading, writing abilities or both. It treats everything as a virtual or physical device ("),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Everything_is_a_file",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("everything is a file")]),e._v(")")]),t("h2",{attrs:{id:"read-overview"}},[t("a",{attrs:{href:"#read-overview","aria-hidden":"true"}},[e._v("#")]),e._v("Read Overview")]),t("p",[e._v("In general "),t("code",{pre:!0},[e._v("read")]),e._v(" means it reads data from a device or a network and prints it in "),t("code",{pre:!0},[e._v("stdout")]),e._v(".")]),t("p",[e._v("How to use it for:")]),t("ul",[t("li",[t("a",{attrs:{href:"/docs/rio-ipfs"}},[e._v("ipfs")])]),t("li",[t("a",{attrs:{href:"/docs/rio-launch"}},[e._v("launch")])])]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics io read\nrobonomics-io-read 0.4.0\nRead information from device\n\nUSAGE:\n    robonomics io read <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    help      Prints this message or the help of the given subcommand(s)\n    ipfs      Download data from IPFS storage\n    launch    Robot launch request events\n    pubsub    Subscribe for broadcasing data\n    sds011    Nova SDS011 particle sensor\n")])]),t("h2",{attrs:{id:"write-overview"}},[t("a",{attrs:{href:"#write-overview","aria-hidden":"true"}},[e._v("#")]),e._v("Write Overview")]),t("p",[e._v("Usually it writes data to blockchain or publishes to pubsub channel. ")]),t("p",[e._v("How to use it for:")]),t("ul",[t("li",[t("a",{attrs:{href:"/docs/rio-datalog"}},[e._v("datalog")])]),t("li",[t("a",{attrs:{href:"/docs/rio-ipfs"}},[e._v("ipfs")])]),t("li",[t("a",{attrs:{href:"/docs/rio-launch"}},[e._v("launch")])])]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics io write\nrobonomics-io-write 0.4.0\nWrite information into device\n\nUSAGE:\n    robonomics io write <SUBCOMMAND>\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nSUBCOMMANDS:\n    datalog    Data blockchainization subsystem command\n    help       Prints this message or the help of the given subcommand(s)\n    ipfs       Upload data into IPFS storage\n    launch     CPS launch subsystem command\n    pubsub     Broadcast data into PubSub topic\n")])]),t("h2",{attrs:{id:"local-testnet"}},[t("a",{attrs:{href:"#local-testnet","aria-hidden":"true"}},[e._v("#")]),e._v("Local Testnet")]),t("p",[e._v("For testing purpose it's possible to run the development environment:")]),t("pre",[t("code",{pre:!0},[e._v("% ./robonomics --dev --rpc-cors all\n")])]),t("p",[t("code",{pre:!0},[e._v("--rpc-cors all")]),e._v(" allows the "),t("a",{attrs:{href:"https://parachain.robonomics.network/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Dapp")]),e._v(" to be connected to local node. After launching the node, go to the dapp, click on Robonomics icon in the upper left corner, choose Development and put node's local address")]),t("p",[t("g-image",{attrs:{src:n("sOk7"),alt:"Robonomics Dapp Connect to Local Node",title:"Robonomics Dapp Connect to Local Node"}})],1),t("p",[e._v("Finally click Switch and you should be connected to the local node. Check out Accounts tab. There you can create new accounts and transfer tokens.")])])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof b&&b(h);o.default=h.exports},UQSp:function(e,o,n){"use strict";o.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},sOk7:function(e,o){e.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/robonomics-dapp-connect-local.09c0af9.8bb6632a8836118ad6b6049d0852c1eb.jpg",size:{width:340,height:376},sizes:"(max-width: 340px) 100vw, 340px",srcset:["/assets/static/robonomics-dapp-connect-local.09c0af9.8bb6632a8836118ad6b6049d0852c1eb.jpg 340w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 340 376' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-e607eae87949ccf44548a8f85412f4d7'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-e607eae87949ccf44548a8f85412f4d7)' width='340' height='376' xlink:href='data:image/jpeg%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABHCAIAAAA4DtYxAAAACXBIWXMAAAsSAAALEgHS3X78AAALPUlEQVRo3u1aSW8b2RHW/8klCRIgQJDLDJDj5JT7IMcgt%2bRm52LHQQIHnsxgZuIERpLRjMeSrMXW2JZlUbIsURLFTRQ3iZtEUuK%2b9b6wm818r1%2bz1SIlxYvIjJBplBrV9aqb9b1X9b1qUmMiz45OuBY5CwJROOaN7hV4TuAYIuSSI7dLcurTD8ZGGD0jyioJvVnCZxMYPENjskIcUJzIZabSFlptkSgi2yRGUUg9/3xsdHMvq0L8BfevX7Cf/Yx//FuxVUEEqixIAplanFVZlEWeKqfmnmMUrt7V2116GLoqNAU8UOCS0Z2xEc29KInFBPvJT7jxX/Irt7kHH/LPfi8qWjoRr1fLiJht1g8zKejNejWTSjoWgRPZeqctIfIOX%2b3wlW5HM3RNYmuiwO8F3KMB0BTbXSEwwX76U971R37%2bd/zSH/h//JxtNV6uLG9urE0/nFpeevFi8fmrlyvh3Z0n38zvhoKKJFAYiBVBA4C8eluc%2bw1dBqwJhuKBjbER5Y%2biCclV9u57fHCSX/4TFG7iQ0lpx6PhYMDnXnsV2gmkknvhUDAei2TSyexBxrkCyBoEreW9WuYVySXDkAFA4GJ%2b99joKliU%2bOU/sx/9gP34R%2bzf3xeyAVLKXEuVhLYq2wVAplzgoNsABLbZFpmu49BloGpIAj9CADyDCUPEwqFXiC4IjYLFSDY5XsSqCLep8vWOIkA0vi4yyB9OIiuwMTbSfYBtEPaUFBI6pcLXBE%2bI37wFT0BF4ZJnpItTyDkxPNuiCrXgkortQ3Xbwl8wo2QLa77pLnayFESsy7MB2EFjGAIqoMRsXyI7cYZFUyVFgs7DgksYrVHTwZHEw5IzACD0tiJR/mo1apBquYh5zR1mwNAMKLpcxF/hKHeUOzxIJ6FTyWcP6hVih0ujVjnKZWGkFTk6AAgaEzk3O%2b3Z3AA7BP2%2bvXgU3AyO%2b/r%2bV6nEPjaa8S/%2bPf/okWtpMbQTXFp8/mJxYXZmGrTt3d56NDczNTnxaHZmxbW06V73erbwNOEtU%2bVtAWDu08n94nEeimdrw8QQ8Xk9Xs9mcn8PU4vIVpZdvm0PfPLZw4Df615fi0V2/b5tv8%2b7vxf1bG2GQzvYjHAXsmjoAEK%2b/hTSVBnR02GcZUdC02Kgo1Ro3tOUs3XUALJuRDUQjZxbxDbDOGfRpqM%2bh767zu4ohwEgEj6XRvu40kmaFzIp42DS/wUAuqVDAR1RoWlD2YkyJnpgXIJGTSa1MqetWPbepTQKFhoEUCoc1SoljEV2Q9HwbmIvdpBOgTLRHoJMUbvQs2DQPTRdYTjksgfg0NxBen8vhqFYNFw4zoNjwWDVSonU8TABoBcc69sEJh58vb62it4bPLjsWpqbmQa9oMtdfbmCDnEn4L//1ZcPpyZXV5bBPBvutTnw6MOpJ9889nu3ce/DycnpqUnTfxlt5rCZFAToANDbfSn5VEpFTCSIEvMNZsTe1GrWK6VCNLILioxHI6XCcaVcxJRHwqFMKhEKBnDGKmEIXBwNhxL7cbunH4ag6rBHjQ1a6UdSAgWrQqGZTbpcgTOz3%2bp%2bSUkg9c1RUi1m9tOaMUtFHDYXYdYuaub4012aZRwgH6ecWExl2EV8qgYGmznbz6nQF3Cnvc9nBFuYLXuxaP9ObNMoXlipEQp9V4JCd1yOaUoiZ%2b%2b%2bdIj2qmj4ICPYxehkhYL%2bUyyEQNFR1sxG0u/17AT9YBvvtucgk0K5rL1aRV2imkE4aOZWlpfwJr614UZ3hP5vY30NHAUFo%2bixR4AB0T5feNbfjaLxRKBQthCTex0kmUkl0Xi6zFiBCv2cz7u97HoBogS3Pnv6ZP7xIxgR%2buz0NPgqldxvm8s0AgDPnj3tTyG7bwOHgjSxK4Eu0eVDYMFrAJVGvSrwtLjZWqWMJYID3gHQsdJ0Gk0KoY0fKOIe4dBioO2D/YWZLZLAO2eCvrJRt9FEb9XAzikapV8cSEKPDTGXdlEO0mUfkw42p8MTsceTp4pYFHihVZGTq7qm6aqia2q3a3QNg3wPo6l6m4jWVqhiiwZRlbaqDA4NT%2bgG3weAfPEklNPy%2bl/NL1A7hmEEg8HpmZlAIGAQGA6xLru2pd9huNIFBAuAI4UogIy8%2bTcamt/vu379%2bo0bN3D2erfJV5OiyHMs1keRZVmS8BRREBqNOtNq5rJZgedUFSPS8VFekSVda2MWhiJdo43G3QQAUhwAsPEZBfDgwYObN2/euXMH5/v378NSKZciaNx2dkCdwWBgNxSam509yKQPDjLj41%2b4lpZWVpZfriwvPHs6NTlZLhXNhdSHBwCcsf7q5bkAsA9cu3791q1b165dw44AiySJ8Vg0mUhkMql8LpvLHuKloNVsyJKYSiVTyUQmnc4eHh5kMulUEkYz2S4p6I7W1VXUYt8KBP3eMwDQHxE6uu5eXx8fH19fW9PpneTmwcOgBdOrCtt88vF0HQbPZ15ScY4iGMol5IDFAWCwiHsAOlovXHKn0Qulo2sQPNd5NnofbF32FOeiW2eLA8wnG7bidOh2T/EBjbjbYYtK4Est76P%2bNoCdgO88ADoNl0bzjimL0lcUGVWOvGo0anguyzAodFAwMhA%2bHMtqJiPjkmVa8ASnwxm6jtWVWtw/P2A//jH70Q/bSRdhIUV8vRV4ZzHM%2bWvU64i4Wikjslq1AvoqFo4RK%2bIGZYG64ACQAIDiwRCqC9wABW92qtHV0yvM7e8ZQk2Y/JUw82sCQLZe9JythE2jn18iALoCkigAANgWIYJogYqsiUyIGHZcAhh8TIWHHTqGoCiSqCO5%2bDJ7933u7nvMne8rkTkTgLUCAd/2wEbm/uSSAVgpbm18xgkZ9Iy2g10bzm3LXEO9lpRW/6ImFqnxvCIWhFpe9o/bNXBZYnOLzTB9lkG7k5oo89i/sRIAyhkAyLcSRNgmFpx0dd8q4VoiUyO/0NDLwTcytKCKaAreDKF/uwXRngIg8WyjxRzXWsU60xOiF2qtgq30xGFvWW51cmkNOexDkuMa02wxkg2AfJ/FM7kaJ6gdqW2JrBm2Imv0bCh6V9ENaoQCMd1028Eesp9z6SK3O7zayddY2Xx7sVOIOW5wdiegaW1sIm2TycBrYGtwHyocGoQ0Rah3HgfXVlXsNSzLkC6U/DcBEZE4st3LPE41KR2je1znpHMAkBPHca1Wq9FoVCqVUqlUM49isdhsNsvlsq7rsNfrdfucz%2bcr5gEf0D2MuJdSZncIx8UATI9OR8MqYAlUVTMP6DgjIERPz7YCH6wFFOrTMQ/qfCnh4rGYUJzfAACdvL4IbMvgUP96m6Msyzo/9W3yxnwO1hwdemJ/H/PyugAURWHNAy9eQJ/L5SKRCNJjf38/HA7H4/HDw8NUKgV7IpFAdmUyGThvbW35fD5Y0uk0nBcXF3H7uwPI5bLebU/A78Mi/3cAhokS4U5MTDx58gQBxWIxBB0Khfx%2b/8bGRjQaRXwej2dtbW1zc9PtdgMJ7IVCAf6rq6sulwvKwsLCvXv3kF3vnkJIX86cyotSSDIBdHq9iSTLxVKphf6xVqtUq%2bAVrMMROY5ZjpMkqVrFSM2s8iospVIZPrDjY1S1DQU1kEylYLDa/ncQx4JYonfOApCvc8PhjMs/0J/m6%2bwJAPOHGbaAHa4hFJtECg2%2b0OBOzk0oPEBjlYje5IliO1iXPJVi0/LHmT7t0uUIcdYZ2WzYgv7eGxl2ZjTsV0WkXjMXcf5KaXYXV0NOfuDYi4/2H54u98tdngWnX2EAkOjg/0pcIcFLmcu1dLVXYH5%2b/moDiEWjVxtAPBa76ix0pQEIbDQSudIAuJ2A/2oDOP0j33cAvgPwfwngP2k4GQyKOccVAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}}}]);