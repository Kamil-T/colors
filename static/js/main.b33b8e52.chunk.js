(this.webpackJsonpcolors=this.webpackJsonpcolors||[]).push([[0],{117:function(e,a,o){e.exports=o(190)},122:function(e,a,o){},123:function(e,a,o){},132:function(e,a,o){},187:function(e,a,o){},190:function(e,a,o){"use strict";o.r(a);var r=o(0),n=o.n(r),l=o(5),t=o.n(l),c=o(42),m=(o(122),o(39)),i=o(20),s=(o(123),o(104)),u=function(e){var a=e.background,o=e.name,l=e.moreUrl,t=e.showLink,m=Object(r.useState)(!1),u=Object(i.a)(m,2),d=u[0],f=u[1];return Object(r.useEffect)((function(){setTimeout((function(){return f(!1)}),1500)}),[d]),n.a.createElement(s.CopyToClipboard,{text:a,onCopy:function(){f(!0)}},n.a.createElement("div",{style:{background:a},className:"ColorBox"},n.a.createElement("div",{style:{background:a},className:"copy-overlay ".concat(d&&"show")}),n.a.createElement("div",{className:"copy-msg ".concat(d&&"show")},n.a.createElement("h1",null,"copied!"),n.a.createElement("p",null,a)),n.a.createElement("div",{className:"copy-container"},n.a.createElement("div",{className:"box-content"},n.a.createElement("span",null,o)),n.a.createElement("button",{className:"copy-btn"},"Copy")),t&&n.a.createElement(c.b,{to:l,onClick:function(e){return e.stopPropagation}},n.a.createElement("span",{className:"see-more"},"More"))))},d=(o(132),function(e){var a=Object(r.useState)(e),o=Object(i.a)(a,2);return[o[0],o[1]]}),f=Object(r.createContext)(),p=Object(r.createContext)(),b=function(e){var a=d(500),o=d("hex");return n.a.createElement(f.Provider,{value:a},n.a.createElement(p.Provider,{value:o},e.children))};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=Object(r.useState)(e),o=Object(i.a)(a,2),n=o[0],l=o[1];return[n,function(){l(!n)}]},g=o(223),E=o(226),v=o(224),C=o(222),y=o(109),B=o.n(y),F=o(110),N=(o(186),o(187),function(e){var a=e.showingLevel,o=Object(r.useContext)(f),l=Object(i.a)(o,2),t=l[0],m=l[1],s=Object(r.useContext)(p),u=Object(i.a)(s,2),d=u[0],b=u[1],y=h(!1),N=Object(i.a)(y,2),k=N[0],j=N[1],P=function(){j(k)};return n.a.createElement("nav",{className:"Navbar"},n.a.createElement("div",{className:"logo"},n.a.createElement(c.b,{to:"/"},"reactcolorpicker")),a&&n.a.createElement("div",{className:"slider-container"},n.a.createElement("span",null,"Level: ",t),n.a.createElement("div",{className:"slider"},n.a.createElement(F.a,{defaultValue:t,min:100,max:900,onAfterChange:m,step:100}))),n.a.createElement("div",{className:"select-container"},n.a.createElement(g.a,{value:d,onChange:function(e){b(e.target.value),j(k)}},n.a.createElement(E.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(E.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),n.a.createElement(E.a,{value:"rgba"},"RGBA - rgba(255, 255, 255, 1.0)"))),n.a.createElement(v.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:k,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed!"),ContentProps:{"aria-describedby":"message-id"},onClose:P,action:[n.a.createElement(C.a,{onClick:P,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(B.a,null))]}))}),k=function(e){var a=e.paletteName,o=e.emoji;return n.a.createElement("footer",{className:"Palette-footer"},a," ",n.a.createElement("span",{className:"emoji"},o))},j=function(e){var a=e.palette,o=Object(r.useContext)(f),l=Object(i.a)(o,1)[0],t=Object(r.useContext)(p),c=Object(i.a)(t,1)[0],m=a.colors,s=a.paletteName,d=a.emoji,b=a.id,h=m[l].map((function(e){return n.a.createElement(u,{background:e[c],name:e.name,key:e.id,moreUrl:"/palette/".concat(b,"/").concat(e.id),showLink:!0})}));return n.a.createElement("div",{className:"Palette"},n.a.createElement(N,{showingLevel:!0}),n.a.createElement("div",{className:"Palette-colors"},h),n.a.createElement(k,{paletteName:s,emoji:d}))},P=o(191),S=Object(P.a)({root:{backgroundColor:"white",border:"1px solid black",margin:"2px 0",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"grey",height:"150px",width:"100%"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative","& span":{marginLeft:"0.5rem",fontSize:"1.5rem"}},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"}})((function(e){var a=e.classes,o=e.paletteName,r=e.emoji,l=e.colors,t=e.id,c=e.history,m=l.map((function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return n.a.createElement("div",{className:a.root,onClick:function(){return function(e){return c.push("/palette/".concat(e))}(t)}},n.a.createElement("div",{className:a.colors},m),n.a.createElement("h5",{className:a.title},o," ",n.a.createElement("span",null,r)))})),w=Object(P.a)({root:{backgroundColor:"blue",height:"100%",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",justifyContent:"center",flexWrap:"wrap"},nav:{color:"white",display:"flex",width:"100%",justifyContent:"space-between"},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}})((function(e){var a=e.palettes,o=e.classes,r=e.history;return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:o.container},n.a.createElement("nav",{className:o.nav},n.a.createElement("h1",null,"React Colors")),n.a.createElement("div",{className:o.palettes},a.map((function(e){return n.a.createElement(S,Object.assign({history:r,key:e.id},e))})))))})),x=function(e){var a=e.palette,o=e.colorId,l=Object(r.useContext)(p),t=Object(i.a)(l,1)[0],c=a.paletteName,m=a.emoji,s=function(e,a){var o=[],r=e.colors;for(var n in r)o=o.concat(r[n].filter((function(e){return e.id===a})));return o.slice(1)}(a,o).map((function(e){return n.a.createElement(u,{key:e.name,name:e.name,background:e[t],showLink:!1})}));return n.a.createElement("div",{className:"Palette"},n.a.createElement(N,{showingLevel:!1}),n.a.createElement("div",{className:"Palette-colors"},s),n.a.createElement(k,{paletteName:c,emoji:m}))},O=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],A=o(58),D=o.n(A),G=[50,100,200,300,400,500,600,700,800,900],I=function(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=!0,r=!1,n=void 0;try{for(var l,t=G[Symbol.iterator]();!(o=(l=t.next()).done);o=!0){var c=l.value;a.colors[c]=[]}}catch(h){r=!0,n=h}finally{try{o||null==t.return||t.return()}finally{if(r)throw n}}var m=!0,i=!1,s=void 0;try{for(var u,d=e.colors[Symbol.iterator]();!(m=(u=d.next()).done);m=!0){var f=u.value,p=L(f.color,10).reverse();for(var b in p)a.colors[G[b]].push({name:"".concat(f.name," ").concat(G[b]),id:f.name.toLowerCase().replace(/ /g,"-"),hex:p[b],rgb:D()(p[b]).css(),rgba:D()(p[b]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i=!0,s=h}finally{try{m||null==d.return||d.return()}finally{if(i)throw s}}return a},L=function(e,a){return D.a.scale(function(e){return[D()(e).darken(1.4).hex(),e,"#fff"]}(e)).mode("lab").colors(a)};var M=function(){var e=function(e){return O.find((function(a){return a.id===e}))};return n.a.createElement(b,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(w,Object.assign({palettes:O},e))}}),n.a.createElement(m.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(j,{palette:I(e(a.match.params.id))})}}),n.a.createElement(m.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(x,{colorId:a.match.params.colorId,palette:I(e(a.match.params.paletteId))})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(n.a.createElement(c.a,{basename:"/colors"},n.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[117,1,2]]]);
//# sourceMappingURL=main.b33b8e52.chunk.js.map