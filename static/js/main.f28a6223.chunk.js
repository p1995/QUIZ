(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{43:function(e,t,a){e.exports=a(94)},48:function(e,t,a){},73:function(e,t,a){e.exports=a.p+"static/media/AnyCategory.ee07f821.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/GeneralKnowledge.5a9590f7.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/Books.58876f04.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/Music.bc7d38ce.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/MusicalTheaters.063db771.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/Television.22ff9a21.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/VideoGames.86832c3d.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/BoardGames.55fd826a.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/Science-Nature.40287ee9.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/Science-Computers.16145bd7.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/Mathematics.c9e14cef.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/Myths.fdfe95b7.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/Sports.7c4432a2.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/Geography.cb9df34d.jpg"},87:function(e,t,a){e.exports=a.p+"static/media/History.d3732214.jpg"},88:function(e,t,a){e.exports=a.p+"static/media/Politics.9e2c9471.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/Art.d5c7fcd9.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/Celebrity.9a11a8fe.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/Animals.35a5f047.jpg"},92:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(12),l=a.n(r),o=(a(48),a(14)),m=a(96),s=a(99),i=a(7),u=a.n(i),p=a(95),d=a(100),g=a(101),E=a(13),b=a(34),y=a.n(b);var h=a(8),f=a(41),q=a(21),x=(a(70),a(98));var k=function(e){return Object(c.useEffect)((function(){console.log(u()(".ResultScreen").prop("innerHTML"))}),[]),console.log(e),n.a.createElement("div",{className:"ResultScreen"},n.a.createElement("h2",null,"Your QWIZ Result"),h.a.map(e.questions,(function(t,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{as:"ul"},n.a.createElement(x.a.Item,{as:"li",active:!0},n.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.question}})),n.a.createElement(x.a.Item,{as:"li"},"Your Answer:"," ",n.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.useranswered[a]}})),n.a.createElement(x.a.Item,{as:"li"},"Correct Answer:"," ",n.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.correctanswers[a]}}))),n.a.createElement("br",null))})))},v=[],N=[],I="";var w=Object(E.b)((function(e){return{anycategory:e.Anycategory}}),(function(e){return{anyCategoryfetch:function(t){return e(function(e){return function(t,a){y.a.get(e).then((function(e){t({type:"ANY_CATEGORY",data:e.data.results})}))}}(t))}}}))((function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),r=a[0],l=a[1],m=function(){v=h.a.pluck(e.anycategory,"correct_answer"),N=h.a.map(u()(".question"),(function(e){return 0!==u()(e).find('input[type="radio"]:checked').length?u()(e).find('input[type="radio"]:checked').parents(".input-group").children("input").prop("value"):""})),l(!0)};return Object(c.useEffect)((function(){I=e.url,console.log(I),e.anyCategoryfetch(I)}),[]),n.a.createElement("div",{className:"container"},r?n.a.createElement(k,{correctanswers:v,useranswered:N,questions:e.anycategory}):n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{style:{textAlign:"center"}},"QWIZ",n.a.createElement(f.a,{color:"violet",style:{marginBottom:"11px"}})),h.a.map(e.anycategory,(function(e,t){e.incorrect_answers.push(e.correct_answer);var a=h.a.sample(e.incorrect_answers,e.incorrect_answers.length);return console.log(a),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"question"},n.a.createElement("b",null,"Question ",t+1,": ")," ",n.a.createElement("span",{style:{color:"green",fontWeight:700},dangerouslySetInnerHTML:{__html:e.question}}),h.a.map(a,(function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,null,n.a.createElement(p.a.Prepend,null,n.a.createElement(p.a.Radio,{"aria-label":"Radio button for following text input",name:t})),n.a.createElement(d.a,{style:{background:"white"},"aria-label":"Text input with radio button",value:e,disabled:!0})),n.a.createElement("br",null))}))," "))})),n.a.createElement(g.a,{variant:"outline-warning",onClick:function(){Object(q.confirmAlert)({title:"Confirm to submit",message:"Are you sure to do this.",buttons:[{label:"Yes",onClick:function(){return m()}},{label:"No",onClick:function(){return alert("Click No")}}]})}},"Submit")," ",n.a.createElement(g.a,{variant:"outline-warning",onClick:function(){Object(q.confirmAlert)({title:"Confirm to Reset",message:"Are you sure to do this.",buttons:[{label:"Yes",onClick:function(){return u()('input[type="radio"]').prop("checked",!1)}},{label:"No",onClick:function(){return alert("Click No")}}]})}},"Reset")))})),C="";var O=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),r=t[0],l=t[1];return Object(c.useEffect)((function(){u()(".card").click((function(e){console.log(e.currentTarget),C=u()(e.currentTarget).attr("url"),l(!0)}))}),[]),n.a.createElement("div",null,r?n.a.createElement(w,{url:C}):n.a.createElement(m.a,null,n.a.createElement(s.a,{text:"white",className:"text-center",url:"https://opentdb.com/api.php?amount=10"},n.a.createElement(s.a.Img,{src:a(73),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Any Category")))),n.a.createElement(s.a,{text:"white",className:"text-center",url:"https://opentdb.com/api.php?amount=10&category=9"},n.a.createElement(s.a.Img,{src:a(74),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"General Knowlegde")))),n.a.createElement(s.a,{text:"white",className:"text-center",url:"https://opentdb.com/api.php?amount=10&category=10"},n.a.createElement(s.a.Img,{src:a(75),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Entertainment:Books")))),n.a.createElement(s.a,{text:"white",className:"text-center",url:"https://opentdb.com/api.php?amount=10&category=12"},n.a.createElement(s.a.Img,{src:a(76),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Entertainment:Music")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=13"}," ",n.a.createElement(s.a.Img,{src:a(77),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Entertainment: Musicals & Theatres")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=14"},n.a.createElement(s.a.Img,{src:a(78),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Entertainment: Televsion")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=15"},n.a.createElement(s.a.Img,{src:a(79),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Entertainment: Video Games")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=16"},n.a.createElement(s.a.Img,{src:a(80),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Entertainment: Board Games")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=17"},n.a.createElement(s.a.Img,{src:a(81),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Science and Nature")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=18"},n.a.createElement(s.a.Img,{src:a(82),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Science: Computers")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=19"}," ",n.a.createElement(s.a.Img,{src:a(83),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic",style:{color:"green"}},"Science: Mathematics")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=20"}," ",n.a.createElement(s.a.Img,{src:a(84),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Mythology")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=21"},n.a.createElement(s.a.Img,{src:a(85),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Sports")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=22"},n.a.createElement(s.a.Img,{src:a(86),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Geography")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=23"}," ",n.a.createElement(s.a.Img,{src:a(87),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"History")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=24"},n.a.createElement(s.a.Img,{src:a(88),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Politics")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=25"}," ",n.a.createElement(s.a.Img,{src:a(89),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Art")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=26"}," ",n.a.createElement(s.a.Img,{src:a(90),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Celebrities")))),n.a.createElement(s.a,{text:"white",className:"text-center ",url:"https://opentdb.com/api.php?amount=10&category=27"}," ",n.a.createElement(s.a.Img,{src:a(91),alt:"Card image"}),n.a.createElement(s.a.ImgOverlay,null,n.a.createElement("blockquote",{className:"blockquote mb-0 card-body"},n.a.createElement("p",{class:"quizTopic"},"Animals"))))))},j=(a(92),a(97)),T=(a(93),a(11)),z=a(22),A={Anycategory:[]};var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ANY_CATEGORY":return Object(z.a)(Object(z.a)({},e),{},{Anycategory:t.data});default:return e}},_=a(38),M=a(39),G=Object(T.createStore)(S,Object(_.composeWithDevTools)(Object(T.applyMiddleware)(M.a)));G.subscribe((function(){console.log(G.getState())}));var R=function(){return n.a.createElement("div",{className:"App bg-light"},n.a.createElement(j.a,null,n.a.createElement(E.a,{store:G},n.a.createElement(O,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.f28a6223.chunk.js.map