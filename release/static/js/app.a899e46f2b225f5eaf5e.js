webpackJsonp([1],{111:function(t,e){},112:function(t,e){},113:function(t,e){},114:function(t,e){},115:function(t,e){},116:function(t,e){},117:function(t,e){},157:function(t,e,s){t.exports=s.p+"static/img/logo.be50dde.png"},159:function(t,e,s){function n(t){s(113)}var i=s(6)(s(86),s(167),n,"data-v-790cf253",null);t.exports=i.exports},160:function(t,e,s){function n(t){s(115)}var i=s(6)(s(87),s(169),n,"data-v-994b9cee",null);t.exports=i.exports},161:function(t,e,s){function n(t){s(112)}var i=s(6)(s(88),s(166),n,"data-v-535d53a4",null);t.exports=i.exports},162:function(t,e,s){function n(t){s(116)}var i=s(6)(s(89),s(170),n,"data-v-b2acb318",null);t.exports=i.exports},163:function(t,e,s){function n(t){s(114)}var i=s(6)(s(90),s(168),n,"data-v-7bd01244",null);t.exports=i.exports},164:function(t,e,s){function n(t){s(117)}var i=s(6)(s(91),s(171),n,null,null);t.exports=i.exports},165:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),s("Dashboard",{attrs:{design:t.designs,demo:t.demo}}),t._v(" "),s("ul",{staticClass:"transparent"},[t._l(t.designs["picture-naming"],function(t){return s("li",[s("img",{attrs:{src:"./static/picture-naming/"+t+".gif"}})])}),t._v(" "),t._l(t.designs["lexical-decision"],function(e,n){return s("li",[t._l(e,function(e,i){return t._l(e,function(t){return s("img",{attrs:{src:"./static/lexical-decision/"+n+"-"+i+"/"+t+".png"}})})})],2)}),t._v(" "),t._l(t.designs["iq-tester"],function(t){return s("li",[s("img",{attrs:{src:"./static/iq-tester/"+t.Q+".jpg"}})])})],2)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"logo"},[n("img",{attrs:{src:s(157)}}),t._v(" "),n("span",[t._v("sychio")])])}]}},166:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],class:["stage","stage-"+t.status]},[s("div",{staticClass:"stage-pic",style:{"background-image":"url("+t.imageSrc+")"}}),t._v(" "),s("div",{staticClass:"feedback"},[t._v(t._s(t.feedback))]),t._v(" "),s("i",{staticClass:"icon icon-cross"}),t._v(" "),s("i",{staticClass:"icon icon-dot"}),t._v(" "),"playing"===t.status?s("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},on:{keyup:t.end}}):t._e()])},staticRenderFns:[]}},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],class:["stage","stage-"+t.status]},[s("div",{staticClass:"stage-arrow"},[s("span",{class:[t.result.type,t.result.direction]},[s("span",[t._v(t._s(t.arrowText))])])]),t._v(" "),s("div",{staticClass:"feedback"},[t._v(t._s(t.feedback))]),t._v(" "),s("i",{staticClass:"icon icon-cross"}),t._v(" "),"playing"===t.status?s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"transparent",attrs:{type:"text"},on:{keyup:t.end}}):t._e()])},staticRenderFns:[]}},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],class:["stage","stage-"+t.status]},[s("div",{staticClass:"stage-cycle"},[s("span",{class:[t.result.type,t.result.direction]})]),t._v(" "),s("div",{staticClass:"feedback"},[t._v(t._s(t.feedback))]),t._v(" "),s("i",{staticClass:"icon icon-cross"}),t._v(" "),"playing"===t.status?s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"transparent",attrs:{type:"text"},on:{keyup:t.end}}):t._e()])},staticRenderFns:[]}},169:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],class:["stage","stage-"+t.status]},[s("h5",[t._v(t._s(t.item.Q))]),t._v(" "),s("div",{staticClass:"stage-pic",style:{"background-image":"url("+t.imageSrc+")"}}),t._v(" "),s("div",{staticClass:"patch"}),t._v(" "),"playing"===t.status?s("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},on:{keyup:t.end}}):t._e()])},staticRenderFns:[]}},170:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],class:["stage","stage-"+t.status]},[s("div",{staticClass:"stage-pic",style:{"background-image":"url("+t.imageSrc+")"}}),t._v(" "),s("i",{staticClass:"icon icon-cross"}),t._v(" "),s("i",{staticClass:"icon icon-dot"}),t._v(" "),s("i",{staticClass:"icon icon-asterisk"}),t._v(" "),s("i",{staticClass:"icon icon-lang"},[t._v(t._s(t.languageSay))])])},staticRenderFns:[]}},171:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"phone-viewport"},[s("section",{staticClass:"container"},[s("form",{staticClass:"form"},[s("div",{staticClass:"col-half"},[s("md-input-container",[s("label",[t._v("Your Name/你的名字")]),t._v(" "),s("md-input",{model:{value:t.yourname,callback:function(e){t.yourname=e},expression:"yourname"}})],1),t._v(" "),s("md-input-container",[s("label",[t._v("Contact/联系方式")]),t._v(" "),s("md-input",{attrs:{required:""},model:{value:t.contact,callback:function(e){t.contact=e},expression:"contact"}})],1)],1),t._v(" "),s("md-input-container",[s("md-switch",{model:{value:t.realMode,callback:function(e){t.realMode=e},expression:"realMode"}},[t._v(t._s(t.realMode?"Experiment":"Practice")+" Mode/"+t._s(t.realMode?"实测":"示例")+"模式")])],1),t._v(" "),s("md-input-container",[s("label",[t._v("Test Type/测试类型")]),t._v(" "),s("md-select",{attrs:{name:"type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[s("md-option",{attrs:{value:t.TYPE_PIC}},[t._v("Picture Naming/图片命名")]),t._v(" "),s("md-option",{attrs:{value:t.TYPE_LEX}},[t._v("Lexical Decision/词汇判断")]),t._v(" "),s("md-option",{attrs:{value:t.TYPE_FLANKER}},[t._v("Flanker/箭头测试")]),t._v(" "),s("md-option",{attrs:{value:t.TYPE_SIMON}},[t._v("Simon/西蒙测试")]),t._v(" "),s("md-option",{attrs:{value:t.TYPE_IQ}},[t._v("IQ Test/IQ测试")])],1)],1),t._v(" "),"lexical-decision"===t.type?s("md-input-container",[s("label",[t._v("Languages/语言")]),t._v(" "),s("md-select",{attrs:{name:"type"},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}},[s("md-option",{attrs:{value:"chinese"}},[t._v("Chiese/中文")]),t._v(" "),s("md-option",{attrs:{value:"uyghur"}},[t._v("Uyghur/维文")])],1)],1):t._e()],1),t._v(" "),t.showError&&!t.contact?s("div",{staticClass:"error"},[t._v("Please enter contact/请填写联系方式")]):t._e(),t._v(" "),s("md-button",{staticClass:"md-raised md-accent",nativeOn:{click:function(e){t.start(e)}}},[t._v("Start/开始")]),t._v(" "),t.hasData&&t.realMode?s("md-button",{staticClass:"md-raised md-primary",nativeOn:{click:function(e){t.download(e)}}},[t._v("Export/导出")]):t._e(),t._v(" "),t.realMode&&t.hasData?s("md-button",{staticClass:"md-raised md-warn",nativeOn:{click:function(e){t.upload(e)}}},[t._v("Save/保存")]):t._e()],1),t._v(" "),s("section",{ref:"container",class:["container",{processing:t.current>=0}]},[t._l(t.list,function(e,n){return t.current>=n+1?s("div",{directives:[{name:"show",rawName:"v-show",value:t.current<=n+1,expression:"current <= (index + 1)"}]},[s(t.type,{tag:"component",attrs:{item:e,language:t.language},on:{end:t.next}})],1):t._e()}),t._v(" "),0===t.current?s("div",{staticClass:"instruction"},[s("input",{directives:[{name:"focus",rawName:"v-focus"}],staticClass:"transparent",attrs:{type:"text"},on:{keyup:t.play}}),t._v(" "),s("div",{staticClass:"instruction-content"},[s("p",{staticClass:"instruction-header"},[t._v(t._s(t.instructionContent.header))]),t._v(" "),s("p",{staticClass:"instruction-body",domProps:{innerHTML:t._s(t.instructionContent[t.sumType])}}),t._v(" "),s("p",{staticClass:"instruction-footer"},[t._v(t._s(t.instructionContent.footer))])])]):t._e()],2),t._v(" "),s("section",{staticClass:"container"},[t.type===t.TYPE_PIC?s("md-list",t._l(t.results[t.TYPE_PIC],function(e,n){return s("md-list-item",{key:"index",attrs:{href:t.blobUrl(e.record),target:"_blank"}},[s("md-avatar",[s("img",{attrs:{src:e.src}})]),t._v(" "),s("span",[t._v(t._s(e.name)+" - ("+t._s(e.response)+"ms)")]),t._v(" "),s("span",[t._v("["+t._s(e.language)+"]")])],1)})):t._e(),t._v(" "),t._l([t.TYPE_LEX_CN,t.TYPE_LEX_UG],function(e,n){return t.type===t.TYPE_LEX?s("md-list",{key:"typeIdx"},t._l(t.results[e],function(n,i){return t.sumType===e?s("md-list-item",{key:"index"},[s("md-avatar",[s("img",{attrs:{src:n.src}})]),t._v(" "),s("span",[t._v(t._s(n.name)+" - ("+t._s(n.response)+"ms)")]),t._v(" "),s("span",[t._v("["+t._s(n.language)+"]")]),t._v(" "),s("small",[t._v("Choice/选择(Fact/实际)："+t._s(n.selection?"True/真":"False/假")+"("+t._s(n.isNon?"False/假":"True/真")+")")]),t._v(" "),n.selection!==n.isNon?s("md-icon",{staticClass:"md-primary",attrs:{"md-theme":"green"}},[t._v("∨")]):s("md-icon",{staticClass:"md-warn",attrs:{"md-theme":"orange"}},[t._v("x")])],1):t._e()})):t._e()}),t._v(" "),t.type===t.TYPE_FLANKER?s("md-list",t._l(t.results[t.sumType],function(e,n){return s("md-list-item",{key:"index"},[s("span",["con"===e.type?[t._v("Congruent/一致")]:"incon"===e.type?[t._v("Incongruent/不一致")]:"neu"===e.type?[t._v("Neutral/中立")]:t._e()],2),t._v(" "),s("span",[s("small",[t._v("Selection/选择: ")]),t._v(" "),s("strong",[t._v(t._s(e.selection))]),t._v(" "),s("small",[t._v(" - "+t._s(e.response)+"ms")]),t._v(" "),e.selection===e.direction?s("md-icon",{staticClass:"md-primary",attrs:{"md-theme":"green"}},[t._v("∨")]):s("md-icon",{staticClass:"md-warn",attrs:{"md-theme":"orange"}},[t._v("x")])],1)])})):t._e(),t._v(" "),t.type===t.TYPE_SIMON?s("md-list",t._l(t.results[t.sumType],function(e,n){return s("md-list-item",{key:"index"},[s("md-avatar",{style:{background:"blue"===e.type?"#0c83e8":"#e80d0d"}}),t._v(" "),s("span",["blue"===e.type?[t._v("Blue/蓝色")]:"red"===e.type?[t._v("Red/红色")]:t._e(),t._v(" "),s("small",[t._v("Position/位置: "+t._s(e.direction))])],2),t._v(" "),s("span",[s("small",[t._v("Selection/选择: ")]),t._v(" "),s("strong",[t._v(t._s(e.selection))]),t._v(" "),s("small",[t._v(" - "+t._s(e.response)+"ms")]),t._v(" "),e.selection===e.direction?s("md-icon",{staticClass:"md-primary",attrs:{"md-theme":"green"}},[t._v("∨")]):s("md-icon",{staticClass:"md-warn",attrs:{"md-theme":"orange"}},[t._v("x")])],1)],1)})):t._e(),t._v(" "),t.type===t.TYPE_IQ&&t.IQscore?s("div",{staticClass:"score"},[t._v("Score/最后得分："+t._s(t.IQscore)+"/60")]):t._e()],2)])},staticRenderFns:[]}},176:function(t,e){},63:function(t,e){},64:function(t,e,s){function n(t){s(111)}var i=s(6)(s(85),s(165),n,null,null);t.exports=i.exports},84:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(29),i=s(64),a=s.n(i),r=s(65),o=s.n(r),u=s(63);s.n(u);n.default.config.productionTip=!1,n.default.use(o.a),n.default.directive("focus",{inserted:function(t){setInterval(function(){return t.focus()},50)}}),new n.default({el:"#app",template:"<App/>",components:{App:a.a}})},85:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(164),i=s.n(n);e.default={name:"app",data:function(){return{designs:JSON.parse('{\n      "picture-naming": [\n        "015", "016", "027", "040", "044", "105", "109", "128", "155", "215", "222"\n      ],\n      "lexical-decision": {\n        "chinese": {\n          "words": [\n            "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",\n            "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",\n            "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",\n            "031", "032", "033", "034", "035", "036", "037", "038", "039", "040",\n            "041", "042", "043", "044", "045", "046", "047", "048"\n          ],\n          "nonwords": [\n            "005-7", "006-5", "012-6", "030-5", "020-7", "021-7", "019-6", "018-6",\n            "045-5", "093-5", "089-5", "085-7", "074-7", "083-7", "104-5", "106-5",\n            "077-6", "120-5", "160-5", "139-6", "123-6", "151-6", "159-6", "157-6",\n            "172-6", "162-6", "181-5", "164-7", "173-7", "189-5", "142-7", "212-5",\n            "204-5", "217-6", "220-6", "236-6", "209-7", "225-7", "243-5", "234-7",\n            "228-6", "240-7", "263-7", "281-7", "313-5", "324-7", "577-6", "521-6"\n          ]\n        },\n        "uyghur": {  \n          "words": [\n            "001", "002", "003", "004", "007", "008", "009", "010",\n            "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",\n            "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",\n            "031", "032", "033", "034", "035", "036", "037", "038", "039", "040",\n            "041", "042", "043", "044", "045", "046", "047", "048", "049", "050"\n          ],\n          "nonwords": [\n            "001", "002", "003", "004", "005", "006", "007", "008", "009", "010",\n            "011", "012", "013", "014", "015", "016", "017", "018", "019", "020",\n            "021", "022", "023", "024", "025", "026", "027", "028", "029", "030",\n            "031", "032", "033", "034", "035", "036", "038", "039", "040",\n            "041", "042", "043", "044", "045", "052", "053", "054", "055"\n          ]\n        }\n      },\n      "iq-tester": [\n        { "Q": "A01", "A": 4 }, { "Q": "A02", "A": 5 }, { "Q": "A03", "A": 1 }, { "Q": "A04", "A": 2 }, { "Q": "A05", "A": 6 }, { "Q": "A06", "A": 3 }, { "Q": "A07", "A": 6 }, { "Q": "A08", "A": 2 }, { "Q": "A09", "A": 1 }, { "Q": "A10", "A": 3 }, { "Q": "A11", "A": 5 }, { "Q": "A12", "A": 4 },\n        { "Q": "B01", "A": 2 }, { "Q": "B02", "A": 6 }, { "Q": "B03", "A": 1 }, { "Q": "B04", "A": 2 }, { "Q": "B05", "A": 1 }, { "Q": "B06", "A": 3 }, { "Q": "B07", "A": 5 }, { "Q": "B08", "A": 6 }, { "Q": "B09", "A": 4 }, { "Q": "B10", "A": 3 }, { "Q": "B11", "A": 4 }, { "Q": "B12", "A": 5 },\n        { "Q": "C01", "A": 8 }, { "Q": "C02", "A": 2 }, { "Q": "C03", "A": 3 }, { "Q": "C04", "A": 8 }, { "Q": "C05", "A": 7 }, { "Q": "C06", "A": 4 }, { "Q": "C07", "A": 5 }, { "Q": "C08", "A": 1 }, { "Q": "C09", "A": 7 }, { "Q": "C10", "A": 6 }, { "Q": "C11", "A": 1 }, { "Q": "C12", "A": 2 },\n        { "Q": "D01", "A": 3 }, { "Q": "D02", "A": 4 }, { "Q": "D03", "A": 3 }, { "Q": "D04", "A": 7 }, { "Q": "D05", "A": 8 }, { "Q": "D06", "A": 6 }, { "Q": "D07", "A": 5 }, { "Q": "D08", "A": 4 }, { "Q": "D09", "A": 1 }, { "Q": "D10", "A": 2 }, { "Q": "D11", "A": 5 }, { "Q": "D12", "A": 6 },\n        { "Q": "E01", "A": 7 }, { "Q": "E02", "A": 6 }, { "Q": "E03", "A": 8 }, { "Q": "E04", "A": 2 }, { "Q": "E05", "A": 1 }, { "Q": "E06", "A": 5 }, { "Q": "E07", "A": 2 }, { "Q": "E08", "A": 4 }, { "Q": "E09", "A": 1 }, { "Q": "E10", "A": 6 }, { "Q": "E11", "A": 3 }, { "Q": "E12", "A": 5 }\n      ],\n      "flanker": [\n        { "count": 21, "type": "con", "direction": "right" },\n        { "count": 21, "type": "con", "direction": "left" },\n        { "count": 21, "type": "incon", "direction": "right" },\n        { "count": 21, "type": "incon", "direction": "left" },\n        { "count": 21, "type": "neu", "direction": "right" },\n        { "count": 21, "type": "neu", "direction": "left" }\n      ],\n      "simon": [\n        { "count": 21, "type": "red", "direction": "right" },\n        { "count": 21, "type": "red", "direction": "left" },\n        { "count": 21, "type": "red", "direction": "center" },\n        { "count": 21, "type": "blue", "direction": "right" },\n        { "count": 21, "type": "blue", "direction": "left" },\n        { "count": 21, "type": "blue", "direction": "center" }\n      ]\n    }'),demo:JSON.parse('{\n      "picture-naming": [ "001", "002", "003", "004" ],\n      "lexical-decision": {\n        "chinese": {\n          "words": [ "049", "050", "051", "052" ],\n          "nonwords": [ "527-6", "552-7", "558-5", "597-5" ]\n        },\n        "uyghur": {  \n          "words": [ "051", "052", "053", "054" ],\n          "nonwords": [ "046", "047", "048", "049" ]\n        }\n      },\n      "iq-tester": [\n        { "Q": "A01", "A": 3 },\n        { "Q": "A02", "A": 4 },\n        { "Q": "A03", "A": 5 },\n        { "Q": "A04", "A": 1 }\n      ],\n      "flanker": [\n        { "count": 4, "type": "con", "direction": "right" },\n        { "count": 4, "type": "con", "direction": "left" },\n        { "count": 4, "type": "incon", "direction": "right" },\n        { "count": 4, "type": "incon", "direction": "left" },\n        { "count": 4, "type": "neu", "direction": "right" },\n        { "count": 4, "type": "neu", "direction": "left" }\n      ],\n      "simon": [\n        { "count": 4, "type": "red", "direction": "right" },\n        { "count": 4, "type": "red", "direction": "left" },\n        { "count": 4, "type": "red", "direction": "center" },\n        { "count": 4, "type": "blue", "direction": "right" },\n        { "count": 4, "type": "blue", "direction": "left" },\n        { "count": 4, "type": "blue", "direction": "center" }\n      ]\n    }')}},mounted:function(){window.onbeforeunload=function(t){return t=t||window.event,t&&(t.returnValue="是否确认关闭当前窗口？"),"是否确认关闭当前窗口？"}},components:{Dashboard:i.a}}},86:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13);s.n(n);e.default={name:"Flanker",props:["item"],data:function(){return{KEY:{LEFT:65,RIGHT:76},startDate:0,status:null,steps:[],result:{type:this.item.type,direction:this.item.direction,selection:null,response:0}}},watch:{status:function(){"end"===this.status?(this.end(),this.$emit("end",this.result)):"playing"===this.status?this.startDate=new Date:"feedback"===this.status&&this.setStatus("end",this.steps[3])}},methods:{end:function(t){t?"playing"===this.status&&(t.keyCode===this.KEY.RIGHT?this.result.selection="right":t.keyCode===this.KEY.LEFT&&(this.result.selection="left"),this.result.selection&&(clearTimeout(this.endTimeout),this.setStatus("feedback"),this.record())):this.record()},record:function(){this.startDate&&(this.result.response=new Date-this.startDate,this.startDate=0)},setStatus:function(t,e){var s=this;if(e)return setTimeout(function(){s.status=t},e);this.status=t}},computed:{arrowText:function(){return String.fromCharCode("8594")},feedback:function(){var t="";return t=null===this.result.selection?"反应超时":this.isCorrect?"正确":"错误",t},isCorrect:function(){return this.result.selection===this.result.direction}},mounted:function(){this.steps=[500,250,2e3,250],this.setStatus("start"),this.setStatus("ready",this.steps[0]),this.setStatus("playing",n.sum(n.slice(this.steps,0,2))),this.endTimeout=this.setStatus("feedback",n.sum(n.slice(this.steps,0,3)))}}},87:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"IQTester",props:["item","language"],data:function(){return{startDate:0,status:null,result:{name:this.item.Q,answer:this.item.A,response:0,choice:0,src:""}}},watch:{status:function(){"end"===this.status?(this.end(),this.$emit("end",this.result)):"playing"===this.status&&(this.startDate=new Date)}},methods:{end:function(t){t?"playing"===this.status&&(this.record(),t.keyCode>48&&t.keyCode<57&&(this.status="end",clearTimeout(this.endTimeout),this.result.choice=t.keyCode-48)):this.record()},record:function(){this.startDate&&(this.result.response=new Date-this.startDate,this.result.src=this.imageSrc,this.startDate=0)}},computed:{imageSrc:function(){return"./static/iq-tester/"+this.item.Q+".jpg"}},mounted:function(){var t=this;this.status="playing",this.endTimeout=setTimeout(function(){t.status="end"},24e5)},directives:{focus:{inserted:function(t){setInterval(function(){return t.focus()},50)}}}}},88:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13);s.n(n);e.default={name:"LexicalDecision",props:["item","language"],data:function(){return{KEY:{REAL:65,FAKE:76},startDate:0,status:null,steps:[],result:{name:this.item.name,isNon:this.item.isNon,response:0,selection:null,language:this.language,src:""}}},watch:{status:function(){"end"===this.status?(this.end(),this.$emit("end",this.result)):"playing"===this.status?this.startDate=new Date:"feedback"===this.status&&this.setStatus("end",this.steps[3])}},methods:{end:function(t){t?"playing"===this.status&&(this.record(),t.keyCode===this.KEY.REAL?this.result.selection=!0:t.keyCode===this.KEY.FAKE&&(this.result.selection=!1),null!==this.result.selection&&(clearTimeout(this.endTimeout),this.setStatus("feedback"))):this.record()},record:function(){this.startDate&&(this.result.response=new Date-this.startDate,this.result.src=this.imageSrc,this.startDate=0)},setStatus:function(t,e){var s=this;if(e)return setTimeout(function(){s.status=t},e);this.status=t}},computed:{imageSrc:function(){return"./static/lexical-decision/"+this.language+"-"+(this.item.isNon?"nonwords":"words")+"/"+this.item.name+".png"},feedback:function(){var t="";return t=null===this.result.selection?"反应超时":this.result.selection!==this.result.isNon?"正确":"错误",t}},mounted:function(){this.steps=[1e3,250,2e3,250],this.setStatus("start"),this.setStatus("ready",this.steps[0]),this.setStatus("playing",n.sum(n.slice(this.steps,0,2))),this.endTimeout=this.setStatus("feedback",n.sum(n.slice(this.steps,0,3)))}}},89:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13),i=(s.n(n),s(137)),a=s.n(i),r=window.webkitSpeechRecognition;e.default={name:"PictureNaming",props:["item","language"],data:function(){return{startDate:0,status:null,result:{name:this.item.name,isEnd:this.item.isEnd,switch:"",language:this.item.language,response:0,record:null,src:""},recognition:new r,media:null}},watch:{status:function(){"end"===this.status?(this.recognition.onspeechstart=function(){},this.media.stop(),this.record(),this.$emit("end",this.result)):"playing"===this.status?(this.startDate=new Date,this.media.start(5e3)):"prompt"===this.status&&this.recognition.start()}},methods:{loadRecorder:function(){var t=this;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({audio:!0},function(e){t.media=new a.a(e),t.media.mimeType="audio/wav",t.media.ondataavailable=function(e){t.result.record=e}},function(t){console.error("media error",t)})},record:function(t){this.startDate&&(this.result.response=n.min([4e3,new Date-this.startDate]),this.result.src=this.imageSrc,this.result.switch=this.isChanged,this.startDate=0,t&&t())},setStatus:function(t,e){var s=this;e?setTimeout(function(){s.status=t},e):this.status=t}},computed:{languageSay:function(){return{chinese:"说",uyghur:"سۆزلەڭ",english:"Say"}[this.item.language]},imageSrc:function(){return"./static/picture-naming/"+this.item.name+".gif"},isChanged:function(){var t="Not changed";return this.item.isChange?t="Changed":null===this.item.isChange&&(t="First"),t}},mounted:function(){var t=this;this.loadRecorder();var e=[1e3,250,500,4e3];this.item.isEnd&&e.push(1e3),this.recognition.onspeechstart=function(){if(console.log(t.status),"playing"===t.status)t.record(function(){t.status="saying"});else{var e=t.recognition.onspeechstart;t.recognition=new r,t.recognition.onspeechstart=e,t.recognition.start()}},this.setStatus("start"),this.setStatus("ready",e[0]),this.setStatus("prompt",n.sum(n.slice(e,0,2))),this.setStatus("playing",n.sum(n.slice(e,0,3))),this.item.isEnd&&this.setStatus("group",n.sum(n.slice(e,0,4))),this.setStatus("end",n.sum(e))}}},90:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(13);s.n(n);e.default={name:"Simon",props:["item"],data:function(){return{KEY:{RED:65,BLUE:76},startDate:0,status:null,steps:[],result:{type:this.item.type,direction:this.item.direction,selection:null,response:0}}},watch:{status:function(){"end"===this.status?(this.end(),this.$emit("end",this.result)):"playing"===this.status?this.startDate=new Date:"feedback"===this.status&&this.setStatus("end",this.steps[3])}},methods:{end:function(t){t?"playing"===this.status&&(t.keyCode===this.KEY.BLUE?this.result.selection="blue":t.keyCode===this.KEY.RED&&(this.result.selection="red"),this.result.selection&&(clearTimeout(this.endTimeout),this.setStatus("feedback"),this.record())):this.record()},record:function(){this.startDate&&(this.result.response=new Date-this.startDate,this.startDate=0)},setStatus:function(t,e){var s=this;if(e)return setTimeout(function(){s.status=t},e);this.status=t}},computed:{feedback:function(){var t="";return t=null===this.result.selection?"反应超时":this.isCorrect?"正确":"错误",t},isCorrect:function(){return this.result.selection===this.result.type}},mounted:function(){this.steps=[500,250,2e3,250],this.setStatus("start"),this.setStatus("ready",this.steps[0]),this.setStatus("playing",n.sum(n.slice(this.steps,0,2))),this.endTimeout=this.setStatus("feedback",n.sum(n.slice(this.steps,0,3)))}}},91:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(94),i=s.n(n),a=s(92),r=s.n(a),o=s(13),u=(s.n(o),s(125)),c=s.n(u),l=s(66),h=s.n(l),d=s(153),p=(s.n(d),s(118)),m=(s.n(p),s(162)),f=s.n(m),_=s(161),v=s.n(_),g=s(159),y=s.n(g),E=s(163),C=s.n(E),T=s(160),w=s.n(T);e.default={name:"Dashboard",props:["design","demo"],data:function(){var t={type:"",saved:!1,TYPE_PIC:"picture-naming",TYPE_IQ:"iq-tester",TYPE_LEX:"lexical-decision",TYPE_LEX_CN:"lexical-decision-chinese",TYPE_LEX_UG:"lexical-decision-uyghur",TYPE_SIMON:"simon",TYPE_FLANKER:"flanker",language:"chinese",current:-1,list:[],results:{},demoData:{},SECTION_COUNT:6,showError:!1,yourname:"",contact:"",realMode:!1,nextTimeout:null,KEY:{START:32}};return t.type=t.TYPE_PIC,t.results[t.TYPE_PIC]=[],t.results[t.TYPE_LEX_CN]=[],t.results[t.TYPE_LEX_UG]=[],t.results[t.TYPE_IQ]=[],t.results[t.TYPE_FLANKER]=[],t.results[t.TYPE_SIMON]=[],t.demoData[t.TYPE_PIC]=[],t.demoData[t.TYPE_LEX_CN]=[],t.demoData[t.TYPE_LEX_UG]=[],t.demoData[t.TYPE_IQ]=[],t.demoData[t.TYPE_FLANKER]=[],t.demoData[t.TYPE_SIMON]=[],t},methods:{blobUrl:function(t){return t&&URL.createObjectURL(t)},start:function(){var t=this;if(!this.contact)return void(this.showError=!0);this.current=-1,d.enabled&&(d.request(this.$refs.container),d.onchange(function(e){d.isFullscreen||(clearTimeout(t.nextTimeout),t.current=-1)})),this.list=this.random(),console.log("list",this.list),this.$nextTick(function(){t.current=0})},play:function(t){t.keyCode===this.KEY.START&&(this.current=1)},next:function(t){var e=this;t&&(this.realMode?this.results[this.sumType].push(t):this.demoData[this.sumType].push(t),this.current===this.list.length?(this.current=-1,d.exit(),this.upload()):this.nextTimeout=setTimeout(function(){e.current++},500))},random:function(){var t={};return t[this.TYPE_PIC]="randomPictures",t[this.TYPE_LEX]="randomLexical",t[this.TYPE_IQ]="randomIQ",t[this.TYPE_FLANKER]="randomExperiment",t[this.TYPE_SIMON]="randomExperiment",this[t[this.type]]()},randomExperiment:function(){var t=o.flatMap(this.items,function(t){return o.fill(Array(t.count),t)});return o.sampleSize(t,t.length)},randomIQ:function(){return this.items},randomLexical:function(){var t=this.items[this.language],e=o.map(t.nonwords,function(t){return{name:t,isNon:!0}}),s=o.map(t.words,function(t){return{name:t,isNon:!1}}),n=o.concat(e,s);return o.sampleSize(n,n.length)},logPictures:function(t){console.group("========================================="),o.each(t,function(t){console.group("---------------------"),console.log("picture name:",t.name),console.log("language:",t.language),t.isChange?console.log("Changed"):null===t.isChange?console.log("First"):console.log("Not changed"),console.groupEnd("---------------------"),t.isEnd&&(console.groupEnd("<=========================================>"),console.group("<=========================================>"))})},randomPictures:function(){var t=this.randomPictureGroup("uyghur",this.groupImages(this.items)),e=this.randomPictureGroup("chinese",this.groupImages(this.items)),s=o.flatten([t,e]),n=o.sampleSize(s,s.length),i=o.flatten(n);return this.logPictures(i),i},randomPictureGroup:function(t,e){var s=["uyghur","chinese"],n={};n[s[0]]=s[1],n[s[1]]=s[0];var i=o.size(o.flatten(e)),a=i-e.length,r=o.round(a*(1/3)),u=o.round(.5*(a-r)),c={};o.each(s,function(t){c[t]=u});var l=o.map(e,function(s,a){return o.map(s,function(u,l){var h=null;if(l>0&&(h=!1),null!==h){var d=o.random(!0),p=i-e.length+a+1,m=d<r/p,f=0===c[t];1===r&&c[t]>0||!m&&!f?c[t]--:(t=n[t],r--,h=!0)}i--;var _={name:u,language:t,isEnd:s.length===l+1,isChange:h};return h?console.count("Changed from "+n[t]+" to "+t):!1===h?console.count("Keep "+t):console.count("First "+t),_})});return o.sampleSize(l,this.sectionCount)},groupImages:function(t){var e=this,s=t.length,n=s-this.sectionCount,i=s+this.sectionCount,a=0,r=o.chain(Array(this.sectionCount)).map(function(t,r){return function(t){var e=n,u=i;if(a>0?e+=a:u+=a,r+1===t.sectionCount)return s+a;var c=o.random(e,u);return a+=s-c,c}(e)}).sortBy(function(t){return t}).value(),u=o.flatten(o.fill(Array(this.sectionCount),t)),c=0;return console.log("Sum:",o.sum(r)),console.log("Group count:",r.join(",")),o.map(r,function(t){var s=o.slice(u,c,c+t);c+=t;var n=o.sampleSize(s,t);return e.sortedWithSpace(n,e.realMode?3:1)})},sortedWithSpace:function(t,e){var s=[],n=[],i=function(t){var i=!1;return o.includes(o.slice(s,0-e),t)?o.includes(o.slice(s,0,e),t)?(n.push(t),i=!0):s.unshift(t):s.push(t),i};return o.each(t,function(t){i(t),n=o.filter(n,i)}),console.log("sorted images:",s),s},upload:function(t){var e,s=this;this.realMode&&h.a.post("http://api.tych.io/experiment",{name:this.contact,result:(e={},i()(e,this.TYPE_PIC,r()(this.results[this.TYPE_PIC])),i()(e,this.TYPE_LEX_CN,r()(this.results[this.TYPE_LEX_CN])),i()(e,this.TYPE_LEX_UG,r()(this.results[this.TYPE_LEX_UG])),i()(e,this.TYPE_FLANKER,r()(this.results[this.TYPE_FLANKER])),i()(e,this.TYPE_SIMON,r()(this.results[this.TYPE_SIMON])),i()(e,this.TYPE_IQ,r()(this.results[this.TYPE_IQ])),e)}).then(function(e){e.data&&(s.saved=!!t)})},download:function(){var t=this,e=new c.a,n=e.folder("psychio_results_"+this.contact);o.each(this.results,function(t,e){o.each(t,function(t,s){var i=[e,(o.fill(Array(3),"0").join("")+(s+1)).slice(-3)].join("_");t.record&&n.file(i+".wav",t.record),t.number=i})}),n.file("info.json",r()({name:this.yourname,contact:this.contact,results:this.results})),e.generateAsync({type:"blob"}).then(function(e){s.i(p.saveAs)(e,"psychio_results_"+t.contact+".zip")})}},computed:{items:function(){return this.realMode?this.design[this.type]:this.demo[this.type]},sectionCount:function(){return this.realMode?this.SECTION_COUNT:2},sumType:function(){var t=this.type;return t===this.TYPE_LEX&&(t+="-"+this.language),t},hasData:function(){var t=this.results[this.TYPE_PIC].length,e=this.results[this.TYPE_LEX_CN].length,s=this.results[this.TYPE_LEX_UG].length;return t||e||s},IQscore:function(){return o.countBy(this.results[this.TYPE_IQ],function(t){return t.answer===t.choice}).true},instructionContent:function(){var t={},e=window.location.search.match(/(l=)([\w-]+)/);return e&&e.length>=3&&"en-US"===e[2]?(t={header:"Welcome to the experiment!",footer:"Press SPACE bar to start the experiment."},t[this.TYPE_LEX_UG]=["Now you will be presented with a series of words.","If the stimulus is a real Uyghur word, press “Red” key as quick as possible;","If the stimulus is a non-Uyghur word, press “Blue” key as quick as possible."].join("<br/>"),t[this.TYPE_LEX_CN]=["Now you will be presented with a series of characters.","If the stimulus is a real Chinese character, press ”Red” key as quick as possible;","If the stimulus is a non-Chinese character, press “Blue” key as quick as possible."].join("<br/>"),t[this.TYPE_PIC]=["You will be required to name pictures respectively in Uyghur and Chinese.","If you see the cue “说”, speak out the name of following picture in Chinese as quickly as possible;","if you see the cue “سۆزلەڭ”, speak out the name of following picture in Uyghur as quickly as possible.","Try to name the picture as quickly and accurately as possible."].join("<br/>"),t[this.TYPE_SIMON]=["In the experiment, if you see the red square, press “Red” key as quickly as possible;","if you see the blue square, press “Blue” key as quickly as possible, regardless of its location on the screen.","Press the correct key as quickly as possible."].join("<br/>"),t[this.TYPE_FLANKER]=["You will be presented with a series of arrows, choose the direction pointed by the arrow in the CENTRE as quickly as you can, regardless of the direction of other surrounding arrows.","If the arrow in the centre is pointing to the left, press the “Red” key.","If the arrow in the centre is pointing to the right, press the “Blue” key;"].join("<br/>"),t[this.TYPE_IQ]=["Please answer the following 60 questions within 40 minutes. 5 groups in all (A-E)， 12 questions for each group.","Please answer question with number"].join("<br/>")):(t={header:"欢迎参加实验！",footer:"按空格键开始实验。"},t[this.TYPE_LEX_UG]=["你将会看到一系列单词。","如果该单词为真维文词，请按红色键；","如果该单词为假维文词，请按蓝色键。"].join("<br/>"),t[this.TYPE_LEX_CN]=["你将会看到一系列汉字。","如果该字为真汉字，请按红色键；","如果该字为假汉字，请按蓝色键。"].join("<br/>"),t[this.TYPE_PIC]=['你将分别用维语和汉语对出现的图片进行命名。看到提示字为“说”时，请用汉语命名接下来出现的图片；看到提示字为 " سۆزلەڭ”时，请用维语命名接下来出现的图片。'].join("<br/>"),t[this.TYPE_SIMON]=["在实验中，看到红色方块时，请按红色键；看到蓝色方块时，请按蓝色键，不用管图形出现在屏幕中的位置。"].join("<br/>"),t[this.TYPE_FLANKER]=["你将会看到一系列的箭头，请判断中间位置箭头所指的方向，不用管旁边的箭头方向。","如果中间的箭头指向左边，请按红色键。","如果中间的箭头指向右边，请按蓝色键；"].join("<br/>"),t[this.TYPE_IQ]=["请在40分钟内作答下列60道题。共5组（A-E），每组各12题。","请按相应的数字键进行作答。"].join("<br>")),t}},components:{"picture-naming":f.a,"lexical-decision":v.a,flanker:y.a,simon:C.a,"iq-tester":w.a}}}},[84]);
//# sourceMappingURL=app.a899e46f2b225f5eaf5e.js.map