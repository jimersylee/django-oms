webpackJsonp([22],{"653U":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".head-lavel{padding-bottom:50px}.table-button{padding:10px 0;float:left}.table-pagination,.table-search{float:right;padding:10px 0}",""])},"CH+q":function(t,e,a){"use strict";function s(t){a("IEaU")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),l=a.n(i),n=a("ZTLr"),r=a("QmSG"),c=a("GGwe"),o=a("NYxO"),u={components:{addWorkticket:c.default},data:function(){return{radio:"",tableData:[],tabletotal:0,searchdata:"",currentPage:1,limit:r.LIMIT,offset:"",ticket_status:"",pagesize:[10,25,50,100],addForm:!1,rowdata:{ticket_status:0,action_user:sessionStorage.getItem("username")},TICKET_STATUS:{0:{text:"未接收",type:"info"},1:{text:"正在处理",type:"success"},2:{text:"已解决",type:"danger"}},LEVEL:{1:{text:"A",type:"danger"},2:{text:"B",type:"warning"},3:{text:"C",type:"success"},4:{text:"D",type:"info"},5:{text:"E",type:""}},listQuery:{ticketid:"",create_user:"",action_user:"",content:""},workticketlist_btn_add:!1}},computed:l()({},Object(o.b)(["role","elements"])),created:function(){this.fetchData(),this.workticketlist_btn_add=this.elements["工单列表-新建工单按钮"]},methods:{fetchData:function(){var t=this,e={limit:this.limit,offset:this.offset,content__contains:this.listQuery.content,ticket_status:this.ticket_status,ticketid:this.listQuery.ticketid,create_user__username:this.listQuery.create_user,action_user__username:this.listQuery.action_user};Object(n.f)(e).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.limit=t,this.fetchData()},handleCurrentChange:function(t){this.offset=t-1,this.fetchData()},statusChange:function(t){this.ticket_status=t,this.fetchData()},showMeCreate:function(){this.listQuery.create_user=sessionStorage.getItem("username"),this.fetchData()},showMeAction:function(){this.listQuery.action_user=sessionStorage.getItem("username"),this.fetchData()},showAllTicket:function(){this.listQuery.create_user="",this.listQuery.action_user="",this.ticket_status="",this.fetchData()}}},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},["super"===t.role||t.workticketlist_btn_add?a("router-link",{attrs:{to:"addworkticket"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建工单")])],1):t._e(),t._v(" "),a("el-button-group",[a("el-button",{attrs:{type:"danger",plain:"",size:"small"},on:{click:t.showAllTicket}},[t._v("全部")]),t._v(" "),a("el-button",{attrs:{type:"success",plain:"",size:"small"},on:{click:t.showMeCreate}},[t._v("我创建的工单")]),t._v(" "),a("el-button",{attrs:{type:"warning",plain:"",size:"small"},on:{click:t.showMeAction}},[t._v("我处理的工单")])],1),t._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.statusChange},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio",{attrs:{label:"0"}},[t._v("未接收")]),t._v(" "),a("el-radio",{attrs:{label:"1"}},[t._v("正在处理")]),t._v(" "),a("el-radio",{attrs:{label:"2"}},[t._v("已解决")])],1)],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"110px"},attrs:{placeholder:"工单发起人"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.create_user,callback:function(e){t.$set(t.listQuery,"create_user",e)},expression:"listQuery.create_user"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单编号"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.ticketid,callback:function(e){t.$set(t.listQuery,"ticketid",e)},expression:"listQuery.ticketid"}}),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{placeholder:"工单内容"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.content,callback:function(e){t.$set(t.listQuery,"content",e)},expression:"listQuery.content"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"search"},on:{click:t.searchClick}},[t._v("搜索")])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"ticketid",label:"工单编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"text-align":"center",color:"rgb(52,91,225)"},attrs:{slot:"reference"},slot:"reference"},[a("router-link",{attrs:{to:{name:"editworkticket",params:{ticketid:e.row.ticketid}}}},[t._v("\n                "+t._s(e.row.ticketid)+"\n              ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_user",label:"工单创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"level",label:"工单等级",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:t.LEVEL[e.row.level].type}},[t._v("\n                "+t._s(t.LEVEL[e.row.level].text)+"\n              ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ticket_status",label:"工单状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:t.TICKET_STATUS[e.row.ticket_status].type}},[t._v("\n                "+t._s(t.TICKET_STATUS[e.row.ticket_status].text)+"\n              ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"action_user",label:"当前处理人"}})],1)],1),t._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.limit,layout:"prev, pager, next, sizes",total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])])],1)},p=[],_={render:d,staticRenderFns:p},h=_,f=a("VU/8"),k=s,y=f(u,h,!1,k,null,null);e.default=y.exports},IEaU:function(t,e,a){var s=a("653U");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("fc5b84c8",s,!0)}});