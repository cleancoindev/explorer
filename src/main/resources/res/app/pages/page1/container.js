!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Global_pages/page1/container",[],t):"object"==typeof exports?exports["Global_pages/page1/container"]=t():e["Global_pages/page1/container"]=t()}("undefined"!=typeof self?self:this,function(){return webpackJsonpGlobal__name_([5],{961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i,r,o,l,s,p=n(1),u=(n.n(p),n(27)),c=(n(8),n(28)),d=(n.n(c),n(61),n(62)),b=(n.n(d),n(115)),f=(n.n(b),n(100)),y=(n.n(f),n(83)),g=(n.n(y),n(22)),h=(n.n(g),n(85),n(87),n(65)),v=n(962),x=n.n(v),m=n(964),z=n.n(m),j=n(965),k=new j.a,I=(a=Object(u.inject)("store"))(i=Object(u.observer)(i=function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,e.apply(this,arguments))}return babelHelpers.inherits(t,e),t.prototype.componentDidMount=function(){var e=y.Message.loading("正在加载数据...",0);this.props.store.getTableData(1,this.props.store.pageSize).then(function(){return e()})},t.prototype.render=function(){return this.props.tmpls[0](this,{styles:x.a})},t}(p.Component))||i)||i;Object(h.a)("Container",I,k);r=Object(c.registerTmpl)("DataTable"),o=Object(u.inject)("store"),r(l=o(l=Object(u.observer)((s=function(e){function t(){var n,a,i;babelHelpers.classCallCheck(this,t);for(var r=arguments.length,o=Array(r),l=0;r>l;l++)o[l]=arguments[l];return n=a=babelHelpers.possibleConstructorReturn(this,e.call.apply(e,[this].concat(o))),a.state={columns:[{title:"测试1",dataIndex:"test1",key:"test1"},{title:"测试2",dataIndex:"test2",key:"test2"},{title:"测试3",dataIndex:"test3",key:"test3",children:[{title:"测试4",dataIndex:"test4",key:"test4"},{title:"测试5",dataIndex:"test5",key:"test5"},{title:"测试6",dataIndex:"test6",key:"test6"}]},{title:"测试7",dataIndex:"test7",key:"test7",children:[{title:"测试8",dataIndex:"test8",key:"test8"},{title:"测试9",dataIndex:"test9",key:"test9"},{title:"测试10",dataIndex:"test10",key:"test10"},{title:"测试11",dataIndex:"test11",key:"test11"},{title:"测试12",dataIndex:"test12",key:"test12"}]},{title:"测试13",dataIndex:"test13",key:"test13",children:[{title:"测试14",dataIndex:"test14",key:"test14"},{title:"测试15",dataIndex:"test15",key:"test15"},{title:"测试16",dataIndex:"test16",key:"test16"},{title:"测试17",dataIndex:"test17",key:"test17"},{title:"测试18",dataIndex:"test18",key:"test18"}]}]},i=n,babelHelpers.possibleConstructorReturn(a,i)}return babelHelpers.inherits(t,e),t.prototype.onPageChange=function(e,t){var n=y.Message.loading("正在加载数据...",0);this.props.store.getTableData(e,t).then(function(){return n()})},t.prototype.render=function(){return z.a.dataTable(this.state,this.props,this,{styles:x.a})},t}(p.Component),function(e,t,n,a,i){var r={};return Object.keys(a).forEach(function(e){r[e]=a[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,a){return a(e,t,n)||n},r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=undefined),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}(s.prototype,"onPageChange",[g.autobind],Object.getOwnPropertyDescriptor(s.prototype,"onPageChange"),s.prototype),l=s))||l)||l)},962:function(e,t,n){var a=n(963);"string"==typeof a&&(a=[[e.i,a,""]]);n(53)(a,{});a.locals&&(e.exports=a.locals)},963:function(e,t,n){t=e.exports=n(52)(),t.push([e.i,"",""])},964:function(e,t,n){"use strict";e.exports={dataTable:n(8).compileH({_njTmplKey:-757632400,useString:!1,main:function(e,t,n,a,i){var r,o,l=e.e("ant-table",e,"ant-Table",t),s=null,p=t.d("toJS",0,!0);if(o=p?p.val:e.f.toJS){var u=t.d("store"),c=e.f["."];c?(r=c.apply(t,[u,"tableData"]),u=r):e.wn(".","f"),r=o.apply(p?p._njCtx:t,[u]),s=r}else e.wn("toJS","f");var d=null,b=e.f.obj;if(b){var f="current",y=e.f[":"];if(y){var g=t.d("store"),h=e.f["."];h?(r=h.apply(t,[g,"pageIndex"]),g=r):e.wn(".","f"),r=y.apply(t,[f,g]),f=r}else e.wn(":","f");var v="pageSize",x=e.f[":"];if(x){var m=t.d("store"),z=e.f["."];z?(r=z.apply(t,[m,"pageSize"]),m=r):e.wn(".","f"),r=x.apply(t,[v,m]),v=r}else e.wn(":","f");var j="total",k=e.f[":"];if(k){var I=t.d("store"),w=e.f["."];w?(r=w.apply(t,[I,"count"]),I=r):e.wn(".","f"),r=k.apply(t,[j,I]),j=r}else e.wn(":","f");var C="onChange",O=e.f[":"];O?(r=O.apply(t,[C,t.d("onPageChange")]),C=r):e.wn(":","f"),r=b.apply(t,[f,v,j,C]),d=r}else e.wn("obj","f");return e.H([l,{dataSource:s,rowKey:"test1",columns:t.d("columns"),bordered:!0,pagination:d}])}})}},965:function(e,t,n){"use strict";function a(e,t,n,a){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(a):void 0})}function i(e,t,n,a,i){var r={};return Object.keys(a).forEach(function(e){r[e]=a[e]}),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=n.slice().reverse().reduce(function(n,a){return a(e,t,n)||n},r),i&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(i):void 0,r.initializer=undefined),void 0===r.initializer&&(Object.defineProperty(e,t,r),r=null),r}n.d(t,"a",function(){return f});var r,o,l,s,p,u=n(20),c=n(66),d=(n.n(c),n(22)),b=(n.n(d),n(88)),f=(n.n(b),r=function(){function e(){babelHelpers.classCallCheck(this,e),a(this,"pageIndex",o,this),a(this,"pageSize",l,this),a(this,"count",s,this),a(this,"tableData",p,this)}return e.prototype.getTableData=function(){var e=this,t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.pageIndex,n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.pageSize;return Object(c.fetchData)("/page1/getTableData",function(a){Object(u.transaction)(function(){a.success?(e.pageIndex=t,e.pageSize=n,e.count=a.totalCount,e.tableData=a.data):(e.pageIndex=1,e.pageSize=10,e.count=0,e.tableData=[],b.Notification.error({description:"获取表格数据出错，异常是:"+a.msg,duration:null}))})},{currentPage:t,pageSize:n},{method:"post"})["catch"](function(e){b.Notification.error({description:"获取表格数据出错，错误是:"+e,duration:null})})},e}(),o=i(r.prototype,"pageIndex",[u.observable],{enumerable:!0,initializer:function(){return 1}}),l=i(r.prototype,"pageSize",[u.observable],{enumerable:!0,initializer:function(){return 10}}),s=i(r.prototype,"count",[u.observable],{enumerable:!0,initializer:function(){return 0}}),p=i(r.prototype,"tableData",[u.observable],{enumerable:!0,initializer:function(){return[]}}),i(r.prototype,"getTableData",[d.autobind,u.action],Object.getOwnPropertyDescriptor(r.prototype,"getTableData"),r.prototype),r)}},[961])});
//# sourceMappingURL=container.js.map