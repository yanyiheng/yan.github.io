(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-92ca8b6a"],{"47da":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-card",{attrs:{loading:e.loading,bordered:!1,"body-style":{padding:0}}},e._l(e.tradeInfos,function(t,n){return a("a-card-grid",{key:n,staticClass:"top-info"},[a("div",{staticClass:"title"},[e._v(e._s(t.title))]),a("span",{staticClass:"count"},[e._v(e._s(t.count))])])}),1),a("br"),a("br"),e.loading?e._e():a("div",[e._v("\n        时间选择：\n        "),a("a-radio-group",{staticStyle:{"margin-right":"40px"},attrs:{"default-value":"1"},model:{value:e.timeType,callback:function(t){e.timeType=t},expression:"timeType"}},[a("a-radio-button",{attrs:{value:"1"}},[e._v(" 日")]),a("a-radio-button",{attrs:{value:"2"}},[e._v(" 周")]),a("a-radio-button",{attrs:{value:"3"}},[e._v(" 月")])],1),a("a-date-picker",{directives:[{name:"show",rawName:"v-show",value:1==e.timeType,expression:"timeType == 1"}],attrs:{placeholder:"选择日期"}}),a("a-week-picker",{directives:[{name:"show",rawName:"v-show",value:2==e.timeType,expression:"timeType == 2"}],attrs:{placeholder:"选择周"}}),a("a-month-picker",{directives:[{name:"show",rawName:"v-show",value:3==e.timeType,expression:"timeType == 3"}],attrs:{placeholder:"选择月"}})],1),a("br"),a("a-card",{attrs:{bordered:!1,loading:e.loading}},[a("a-table",{attrs:{columns:e.columns,dataSource:e.lineInfo.lines,bordered:"",pagination:e.pagination},scopedSlots:e._u([{key:"title",fn:function(t){return[a("div",{staticClass:"date-amt"},[e._v("\n                    "+e._s(e.lineInfo.date)),a("span",[e._v("总计："+e._s(e.lineInfo.totalAmt))])])]}}])})],1)],1)},i=[],o=a("89ee"),d=a("c0e4"),s=(a("c1df"),[{title:"序号",dataIndex:"id",width:"10%",align:"center",scopedSlots:{customRender:"id"}},{title:"线路名称",dataIndex:"name",width:"30%",align:"center",scopedSlots:{customRender:"name"}},{title:"目的地",dataIndex:"address",width:"25%",align:"center",scopedSlots:{customRender:"address"}},{title:"计费重量",dataIndex:"weight",width:"15%",align:"center",scopedSlots:{customRender:"weight"}},{title:"金额",dataIndex:"amount",width:"20%",align:"center",scopedSlots:{customRender:"amount"}}]),r={name:"Analysis",components:{ARadioButton:d["a"],ARadioGroup:o["a"]},data:function(){var e=this;return{loading:!0,timeType:"1",columns:s,pagination:{defaultPageSize:5,showTotal:function(e){return"共 ".concat(e," 条数据")},showSizeChanger:!0,pageSizeOptions:["5","10","15","20"],onShowSizeChange:function(t,a){return e.pageSize=a}},lineInfo:{date:"2017-10-08",totalAmt:"25000",lines:[{id:1,key:1,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:2,key:2,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:3,key:3,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:4,key:4,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:5,key:5,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:6,key:6,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:7,key:7,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"},{id:8,key:8,name:"济南联邦特价A",address:"美国",weight:"10千克",amount:"180"}]},tradeInfos:[{title:"今日订单数量",count:2222},{title:"今日交易金额",count:11222222},{title:"总订单数量",count:21122},{title:"总交易额",count:332323232332},{title:"今日订单数量",count:2222},{title:"今日交易金额",count:11222222},{title:"总订单数量",count:21122},{title:"总交易额",count:332323232332}]}},created:function(){var e=this;setTimeout(function(){e.loading=!1},2e3),console.log("我是created，我又来了执行了")},mounted:function(){}},l=r,c=(a("f45a"),a("2877")),u=Object(c["a"])(l,n,i,!1,null,"451a7fca",null);t["default"]=u.exports},f21a:function(e,t,a){},f45a:function(e,t,a){"use strict";var n=a("f21a"),i=a.n(n);i.a}}]);