(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0472":function(t,e,n){},"11b2":function(t,e,n){},"1a56":function(t,e,n){t.exports=n.p+"img/俄烏軍力.32517d0d.jpg"},"1ede":function(t,e,n){t.exports=n.p+"img/logo_ftv.728b8b99.svg"},"280e":function(t,e,n){t.exports=n.p+"img/banner1920_400.be6c15d3.jpg"},"35f6":function(t,e,n){"use strict";n("cdd6")},"388c":function(t,e,n){},4113:function(t,e,n){t.exports=n.p+"img/四個月役男做什麼.3322eb37.jpg"},4383:function(t,e,n){t.exports=n.p+"img/banner768_500.ceee1586.jpg"},"452c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=n("ecee"),r=n("c074"),o=n("ad3d");i["c"].add(r["a"]),a["a"].component("font-awesome-icon",o["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Banner"),n("Intro"),n("Content"),n("Faq"),n("Topic"),n("Video"),n("News"),n("Addition"),n("Bottom"),n("Footer")],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_header"},[n("div",{staticClass:"progress"}),n("div",{staticClass:"layout_grid"},[n("div",[n("p",{on:{click:t.linkToHome}},[n("img",{attrs:{src:t.logo}}),n("span",[t._v(t._s(t.title))])])]),n("div",[n("div",{staticClass:"layout_grid_icon"},[t._m(0),t._m(1),n("i",{staticClass:"fa-solid fa-square-share-nodes fa-xl",attrs:{id:"social_link"},on:{click:t.getLocalUrl}})])])])])},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/soldier/",target:"_blank"}},[n("span",{attrs:{id:"social_line","data-href":"https://www.ftvnews.com.tw/topics/soldier/"}},[n("i",{staticClass:"fa-brands fa-line fa-xl"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"fb-xfbml-parse-ignore",attrs:{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2soldier&src=sdkpreparse"}},[n("span",{attrs:{id:"social_facebook"}},[n("i",{staticClass:"fa-brands fa-facebook-square fa-xl"})])])}],d={name:"Header",data:function(){return{title:"民視新聞網",logo:n("1ede")}},methods:{scroll:function(){var t=this;window.addEventListener("scroll",(function(){t.moveBar("black")}))},moveBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#0984e3",e=document.querySelector(".progress"),n=Math.ceil(Math.round(window.pageYOffset)/(document.body.scrollHeight-window.innerHeight)*100);e.style.width=n+"%",e.style.background=t},linkToHome:function(){window.open("https://www.ftvnews.com.tw/","_blank")},getLocalUrl:function(){var t=document.createElement("input"),e=window.location.href+"?utm_source={{文字加在這}}&utm_medium=copybutton";document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("網址複製成功!")}},mounted:function(){this.scroll(),this.moveBar()}},f=d,p=(n("d7f6"),n("2877")),m=Object(p["a"])(f,l,u,!1,null,"50487099",null),_=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_inner"},[n("a",{attrs:{href:"#part_tw"}},[t._v("點我")]),n("picture",[n("source",{attrs:{media:"(max-width: 450px)",srcset:t.banner_img.mobile}}),n("source",{attrs:{media:"(max-width: 768px)",srcset:t.banner_img.tablet_ver}}),n("source",{attrs:{media:"(max-width: 1260px)",srcset:t.banner_img.tablet_hor}}),n("img",{attrs:{src:t.banner_img.desktop}})])])},h=[],g={data:function(){return{banner_img:{desktop:n("280e"),tablet_hor:n("572a"),tablet_ver:n("830a"),mobile:n("4383")}}}},b=g,w=(n("6a9f"),Object(p["a"])(b,v,h,!1,null,"8c7070e6",null)),y=w.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("h1",[t._v("兵役延長yes or no？")]),n("div",{staticClass:"layout_grid",domProps:{innerHTML:t._s(t.content)}})])},k=[],x={name:"Intro",data:function(){return{content:"\n            <p>\n                最近俄烏戰爭，讓不少人也擔心起台灣的處境，甚至開始檢討現行兵役制度，因為少子化，使得募兵制招募到的志願役士兵人數不如預期，有部分民意認為，應該將目前四個月的義務役，再恢復為從前的一年，來補足兵力缺口。\n            </p>\n            <p>\n                不過延長兵役、增加役男人數，就能夠強化國防安全嗎？面對現代化戰爭，武器越來越複雜，台灣應該採取怎樣的戰略？\n            </p>"}}},j=x,E=(n("ea64"),Object(p["a"])(j,C,k,!1,null,"49297097",null)),O=E.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"part_tw"}},[n("h2",[n("i",{staticClass:"fa-solid fa-person-rifle"}),t._v(" "+t._s(t.title))]),t._l(t.data,(function(e,a){return n("div",{key:a,staticClass:"layout_grid"},[n("div",{staticClass:"layout_grid_cover"},[n("img",{staticClass:"img",attrs:{src:e.img}})]),n("div",{staticClass:"layout_grid_intro"},[n("h3",[t._v(t._s(e.title))]),n("div",{domProps:{innerHTML:t._s(e.description)}})]),n("hr")])}))],2)},$=[],T={name:"Intro",data:function(){return{title:"台灣現況",data:[{img:n("1a56"),title:"台灣兵力人數？",description:"台灣目前採「徵募併行」制度，職業軍人約有16.3萬人，其中陸海空軍分別約有8.8萬人、4萬人、3.5萬人，1994年1月1日以後出生的役男，則須接受4個月軍事訓練，完訓納入後備列管。然而立法院法制局發布報告顯示，國軍部分部隊已出現人力不足的情況，加上少子化趨勢，若兵役制度不變，到了2039年可召募的役男，只剩下5.6萬人。"},{img:n("a17e"),title:"台灣兵制變革",description:"回顧台灣兵役歷史，1987年解嚴前，義務役役期長達3年，1990年代減為2年。到了2000年起，役期縮短至1年10個月，並首度徵集替代役。而後因為對中國戰略轉攻為守，加上國防預算有限，軍隊遂展開三次裁軍「精實案、精進案、精粹案」，更宣布從2013年起，1994年後出生的役男，全面施行4個月的軍事訓練役。"},{img:n("4113"),title:"四個月役男做什麼？",description:"國防部2020年9月調整政策，恢復軍事訓練役「5+11」訓練，意指軍事訓練役完成5週入伍訓練後，即分發本、外島部隊，實施11週編制專長與實務工作訓練。國防部長邱國正表示，役男多了解部隊經驗是好事，比起過去訓完就回家，將有所助益。"},{img:n("df3e"),title:"民眾支持兵役延長嗎？",description:"根據台灣民意基金會3月22日公布的民調顯示，有76.8%受訪者認為，台灣役男只服4個月軍事訓練役不合理；至於役期是否延長至1年，則有75.9%受訪者支持。台灣民意基金會董事長游盈隆分析，民調結果顯示在中國武力威嚇下，加上烏克蘭情境效應，改革現行兵役制度已是社會共識。"},{img:n("df3e"),title:"正反意見怎麼說？",description:"時代力量立委邱顯智、王婉諭指出，4個月軍事訓練無法培養有戰力的後備軍人，應該將役期延長為1年，改革軍事訓練及教召訓練內容，並將女性納入多元化後備戰力。陸軍退役少將于北辰則認為「人多不一定能增加戰力」，拉長服役時間不如提升訓練質量，就現有體制讓軍力更精實、更穩固。"},{img:n("df3e"),title:"從俄烏戰爭看「不對稱作戰」",description:"\n                    <p>\n                        根據「global firepower」資料顯示，俄羅斯和烏克蘭軍力對比懸殊，但俄羅斯此次侵略行動卻頻頻受阻，關鍵就在於烏克蘭採取「不對稱作戰」。\n                    </p>\n                    <p>\n                        所謂「不對稱作戰」，意指利用天然優勢與敵人弱點，用最低成本獲得最大作戰成效，如烏克蘭憑藉外援飛彈，在地面與空中部隊相互協調下，帶給俄軍重大傷亡，也善用資訊及認知作戰，加劇國際反對入侵的聲浪，各種應對模式值得台灣借鏡。\n                    </p>"},{img:n("1a56"),title:"台灣「不對稱作戰」優勢在哪裡？",description:"\n                    <p>\n                        長期關注國際局勢與軍事戰略的「王立第二戰研所」指出，台灣在地理上屬於海島，具有防守優勢，運用海空戰力及高密度的飛彈防禦能力，中國就很難輕鬆進軍。\n                    </p>\n                    <p>\n                        而為了提升台灣防衛作戰能力，我國總統蔡英文上任後致力推動「國防自主」，包括國機國造、潛艦國造等計畫都有重大進展，行政院去年也提出「海空戰力提升條例」，編列2400億元預算，採購8大項目國造武器，期盼快速提升國軍海空防戰力。\n                    </p>"},{img:n("1a56"),title:"兵役延長不只 YES or NO",description:"\n                    <p>\n                        俄羅斯入侵烏克蘭，激發了台灣民眾的防衛決心，也帶動「兵役要不要延長」的話題。對此，總統府發言人張惇涵表示，評估兵役役期長度同時，必須加大訓練量能，更重要的是，訓練內容必須進行改革，讓軍事訓練能夠有效應對現代戰爭需求，強化國軍「不對稱作戰」的建軍思維。\n                    </p>\n                    <p>\n                        「王立第二戰研所」也指出，台灣民眾應該從俄烏戰爭中意識到戰爭的可能，儘早做出準備，並有抗戰精神，「那麼中國就不敢動手，攻打一個全民有準備的對象」。\n                    </p>"}]}},methods:{}},F=T,q=(n("b77c"),Object(p["a"])(F,H,$,!1,null,"1cb201c7",null)),S=q.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"part_topic"}},[n("h2",[n("i",{staticClass:"fa-solid fa-message-lines"}),t._v(" "+t._s(t.title))]),n("div",{staticClass:"layout_grid block_1"},t._l(2,(function(e){return n("div",{key:e.id,staticClass:"layout_grid_cover"},[n("img",{attrs:{src:"https://picsum.photos/id/522/320/200"}}),n("h3",[t._v("Lorem ipsum dolor.")])])})),0),n("div",{staticClass:"layout_grid block_2"},t._l(3,(function(e){return n("div",{key:e.id,staticClass:"layout_grid_cover"},[n("img",{attrs:{src:"https://picsum.photos/id/522/320/200"}}),n("h3",[t._v("Lorem ipsum dolor.")])])})),0)])},L=[],P={name:"Intro",data:function(){return{title:"王立專題文章"}}},Y=P,M=(n("a202"),Object(p["a"])(Y,V,L,!1,null,"688ff45a",null)),B=M.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("h2",[n("i",{staticClass:"fa-solid fa-block-question"}),t._v(" "+t._s(t.title))]),n("div",{staticClass:"layout_grid"},[n("VueFaqAccordion",{attrs:{items:t.topicFaq}})],1)])},I=[],N=n("744c"),z={components:{VueFaqAccordion:N["a"]},data:function(){return{title:"問與答",topicFaq:[{title:"How many time zones are there in all?",value:'Given a 24-hour day and 360 degrees of longitude around the Earth <a href="#" target="_blank">123</a>'},{title:"How long is a day and year on Venus?",value:'Venus takes 224.7 Earth days to complete one orbit around the Sun.<a href="#" target="_blank">123</a>'},{title:"How many time zones are there in all?",value:'Given a 24-hour day and 360 degrees of longitude around the Earth<a href="#" target="_blank">123</a>'},{title:"How long is a day and year on Venus?",value:'Venus takes 224.7 Earth days to complete one orbit around the Sun.<a href="#" target="_blank">123</a>'},{title:"How many time zones are there in all?",value:'Given a 24-hour day and 360 degrees of longitude around the Earth<a href="#" target="_blank">123</a>'},{title:"How long is a day and year on Venus?",value:'Venus takes 224.7 Earth days to complete one orbit around the Sun.<a href="#" target="_blank">123</a>'}]}}},G=z,J=Object(p["a"])(G,A,I,!1,null,null,null),U=J.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("h2",[n("i",{staticClass:"fa-solid fa-video"}),t._v(" "+t._s(t.title))]),t._m(0)])},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_grid"},[n("div",{staticClass:"iframe-container"},[n("iframe",{attrs:{width:"1695",height:"847",src:"https://www.youtube.com/embed/NkeYa6X2vuc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}],K={data:function(){return{title:"相關影音"}}},Q=K,R=(n("629d"),Object(p["a"])(Q,X,D,!1,null,"10c2effa",null)),W=R.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"part_news"}},[n("h2",[n("i",{staticClass:"fa-solid fa-newspaper"}),t._v(" "+t._s(t.title))]),n("div",{staticClass:"layout_grid"},t._l(6,(function(e){return n("div",{key:e.id,staticClass:"layout_grid_cover"},[n("img",{attrs:{src:"https://picsum.photos/id/695/320/200"}}),n("h3",[t._v("Lorem ipsum dolor.")]),n("p",[t._v("22/04/30")])])})),0),n("a",{attrs:{href:"javascript;"}},[t._v("更多新聞")])])},tt=[],et={name:"Intro",data:function(){return{title:"相關新聞"}}},nt=et,at=(n("d4ee"),Object(p["a"])(nt,Z,tt,!1,null,"6cdef126",null)),it=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollY>100,expression:"scrollY > 100"}]},[n("i",{staticClass:"fad fa-2x fa-angle-up",on:{click:t.scrollTop}})])])],1)},ot=[],st={data:function(){return{scrollY:0}},methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},created:function(){var t=this;window.addEventListener("scroll",(function(){t.scrollY=window.scrollY}))}},ct=st,lt=(n("9bcc"),Object(p["a"])(ct,rt,ot,!1,null,"4697c79f",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout_addition"},[n("div",{staticClass:"layout_bottom"},[n("div",t._l(t.titles,(function(e,a){return n("a",{key:a,attrs:{href:e.link}},[t._v(t._s(e.name))])})),0)])])},ft=[],pt={data:function(){return{titles:[{name:"台灣近況",link:"#part_tw"},{name:"王立專題文章",link:"#part_topic"},{name:"相關新聞",link:"#part_news"}]}}},mt=pt,_t=(n("35f6"),Object(p["a"])(mt,dt,ft,!1,null,null,null)),vt=_t.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"layout_grid"},[n("p",[t._v(t._s(t.title))])])])},gt=[],bt={name:"Header",data:function(){return{title:"Copyright © 2022 民視新聞網路部 社群中心"}}},wt=bt,yt=(n("9d83"),Object(p["a"])(wt,ht,gt,!1,null,"05e64a1e",null)),Ct=yt.exports,kt={name:"App",components:{Header:_,Banner:y,Intro:O,Content:S,Faq:U,Topic:B,Video:W,News:it,Addition:ut,Bottom:vt,Footer:Ct}},xt=kt,jt=(n("034f"),n("b0a0"),Object(p["a"])(xt,s,c,!1,null,null,null)),Et=jt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Et)}}).$mount("#app")},"572a":function(t,e,n){t.exports=n.p+"img/banner1260_500.c7e20487.jpg"},"57d1":function(t,e,n){},"629d":function(t,e,n){"use strict";n("11b2")},"6a9f":function(t,e,n){"use strict";n("aa4f")},"830a":function(t,e,n){t.exports=n.p+"img/banner768_1024.fdc7bdc2.jpg"},"85ec":function(t,e,n){},"8e71":function(t,e,n){},"9bcc":function(t,e,n){"use strict";n("57d1")},"9d83":function(t,e,n){"use strict";n("0472")},a17e:function(t,e,n){t.exports=n.p+"img/台灣兵制變革.db52bbf3.jpg"},a202:function(t,e,n){"use strict";n("388c")},aa4f:function(t,e,n){},b0a0:function(t,e,n){"use strict";n("452c")},b77c:function(t,e,n){"use strict";n("8e71")},c81e:function(t,e,n){},cdd6:function(t,e,n){},cde4:function(t,e,n){},d4ee:function(t,e,n){"use strict";n("cde4")},d7f6:function(t,e,n){"use strict";n("c81e")},df3e:function(t,e,n){t.exports=n.p+"img/民調.c551096e.jpg"},ea64:function(t,e,n){"use strict";n("ef22")},ef22:function(t,e,n){}});
//# sourceMappingURL=app.1651197145516.js.map