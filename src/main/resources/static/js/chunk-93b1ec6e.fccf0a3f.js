(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93b1ec6e"],{"12a6":function(t,e,r){"use strict";var i=r("595b");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find(t=>!t.isComment&&" "!==t.text)}})},"2a81":function(t,e,r){},3532:function(t,e,r){"use strict";r("2a81");var i=r("595b");e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},"6a8c":function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},ea94:function(t,e,r){"use strict";var i=r("1f04"),n=r("f8d5").trim,a=r("ed58");i({target:"String",proto:!0,forced:a("trim")},{trim:function(){return n(this)}})},ed58:function(t,e,r){var i=r("7ce6"),n=r("6a8c"),a="​᠎";t.exports=function(t){return i((function(){return!!n[t]()||a[t]()!=a||n[t].name!==t}))}},f681:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",id:"navigation-drawer",clipped:"",dark:t.dark},scopedSlots:t._u([{key:"append",fn:function(){return t._l(t.drawerBottomItems,(function(t){return r("list-item",{key:t.title,attrs:{to:t.to,icon:t.icon,title:t.title}})}))},proxy:!0}]),model:{value:t.showDrawer,callback:function(e){t.showDrawer=e},expression:"showDrawer"}},[r("v-list",[t._l(t.drawerUpperItems,(function(t){return r("list-item",{key:t.title,attrs:{to:t.to,icon:t.icon,title:t.title}})})),r("v-divider"),r("v-list-group",{attrs:{"prepend-icon":"mdi-folder-outline",value:t.listGroupValue},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-title",[t._v(t._s(t.$t("drawer.collection")))])]},proxy:!0}])},[r("v-treeview",{staticClass:"ml-9",attrs:{active:t.active,items:t.treeItems,activatable:"",hoverable:"","item-key":"id",transition:""},on:{"update:active":[function(e){t.active=e},t.activeFun]},scopedSlots:t._u([{key:"append",fn:function(e){var i=e.item,n=e.active;return[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:n,expression:"active"}],attrs:{icon:""},on:{click:function(e){return t.editCollection(i)}}},[r("v-icon",{attrs:{size:"20",title:"编辑收藏夹"}},[t._v("mdi-square-edit-outline")])],1)]}}])}),r("v-text-field",{staticClass:"ml-9",attrs:{filled:"",dense:"",placeholder:"添加收藏夹"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertCollection(e)}},model:{value:t.insertTopCollection.title,callback:function(e){t.$set(t.insertTopCollection,"title",e)},expression:"insertTopCollection.title"}},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.insertTopCollection.title,expression:"insertTopCollection.title"}],attrs:{slot:"append",color:"success"},slot:"append"},[t._v(" mdi-check ")])],1),r("v-dialog",{attrs:{width:"650"},model:{value:t.updateCollectionDialog,callback:function(e){t.updateCollectionDialog=e},expression:"updateCollectionDialog"}},[r("v-card",[r("v-card-title",[t._v(" 编辑收藏夹 ")]),r("v-card-text",[r("ValidationObserver",{ref:"editCollection",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.validated;return[r("div",[t._v(" 名称 ")]),r("VTextFieldWithValidation",{attrs:{validated:i,rules:"required"},model:{value:t.updateCollectionInfoParam.title,callback:function(e){t.$set(t.updateCollectionInfoParam,"title",e)},expression:"updateCollectionInfoParam.title"}}),r("div",[t._v(" 添加收藏夹 ")]),r("VTextFieldWithValidation",{attrs:{validated:i,rules:"required"},model:{value:t.insertCollectionParam.title,callback:function(e){t.$set(t.insertCollectionParam,"title",e)},expression:"insertCollectionParam.title"}})]}}])})],1),r("v-card-actions",[r("v-container",[r("v-row",[r("v-col",[r("v-btn",{attrs:{outlined:"",color:"error"},on:{click:function(e){return t.deleteCollection()}}},[t._v("删除收藏夹")])],1)],1),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"9"}}),r("v-col",[r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.updateCollectionDialog=!1}}},[t._v(t._s(t.$t("appBar.dialogClose")))]),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.updateCollectionInfo()}}},[t._v(t._s(t.$t("appBar.dialogAdd")))])],1)],1)],1)],1)],1)],1)],1)],2)],1)},n=[],a=r("6abc"),o=r("60b5"),l=(r("1d43"),r("ea94"),r("6a61"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-item",{attrs:{to:t.$attrs.to,color:"blue darken-1"}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(t.$attrs.icon))])],1),r("v-list-item-title",[t._v(t._s(t.$attrs.title))])],1)}),c=[],s={props:{dark:{type:Boolean,default:!1}},data:function(){return{}}},u=s,d=r("5d22"),p=r("7aad"),v=r.n(p),f=r("60ed"),m=r("273b"),h=r("9597"),C=r("f6f6"),w=Object(d["a"])(u,l,c,!1,null,null,null),g=w.exports;v()(w,{VIcon:f["a"],VListItem:m["a"],VListItemIcon:h["a"],VListItemTitle:C["c"]});var x=r("7736"),k=r("a293");r("e3b5"),r("fc13"),r("9b5f");function b(t){var e=I(t),r=[],i={},n=[];i.children=e.filter((function(t){return 0===t.parentId}));var a,o=Object(k["a"])(i.children);try{for(o.s();!(a=o.n()).done;){var l=a.value;r.push(l)}}catch(f){o.e(f)}finally{o.f()}n.push(i.children);for(var c=0,s=n;c<s.length;c++){var u,d=s[c],p=Object(k["a"])(d);try{var v=function(){var t=u.value;t.children=e.filter((function(e){return e.parentId===t.id})),0!==t.children.length&&n.push(t.children)};for(p.s();!(u=p.n()).done;)v()}catch(f){p.e(f)}finally{p.f()}}return r}function I(t){for(var e=[],r=0;r<t.length;r++){t[r].children=[];var i=JSON.parse(JSON.stringify(t[r]).replace(/title/g,"name"));e.unshift(i)}return e}var $=r("4cb1"),V=r("deaf"),_={name:"BookmarkTombDrawer",components:{ListItem:g,ValidationObserver:$["a"],VTextFieldWithValidation:V["a"]},props:{dark:{type:Boolean,default:!1}},data:function(){return{oldActive:0,active:[],listGroupValue:!1,updateCollectionDialog:!1,insertCollectionDialog:!1,getBmInCollectionParam:{sortAndOrder:{order:"desc",according:"defaults"},collectionId:1},updateCollectionInfoParam:{id:0,title:""},insertCollectionParam:{description:"",title:"",serverParentId:0},insertTopCollection:{description:"",title:"",serverParentId:0}}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!==t.userName){e.next=5;break}return e.next=3,t.$store.dispatch("getUserInfo");case 3:return e.next=5,t.$store.dispatch("getUserAvatar");case 5:return e.next=7,t.$store.dispatch("getCollections");case 7:return e.next=9,t.$store.commit("SET_TREE_ITEMS",b(t.userCollections));case 9:case"end":return e.stop()}}),e)})))()},computed:Object(a["a"])(Object(a["a"])({},Object(x["b"])(["userAvatar","userCollections","newCollection","treeItems"])),{},{showDrawer:{get:function(){return this.$store.getters.showDrawer},set:function(t){this.$store.commit("SET_SHOW_DRAWER",t)}},drawerUpperItems:function(){return[{title:this.$t("drawer.myFavor"),icon:"mdi-heart-multiple-outline",to:"/"},{title:this.$t("drawer.myNotes"),icon:"mdi-note-multiple-outline",to:"/my/note"}]},drawerBottomItems:function(){return[{title:this.$t("drawer.recycleBin"),icon:"mdi-recycle-variant",to:"/recycle"}]},selected:function(){if(this.active.length)return this.active[0]}}),watch:{$route:{handler:function(t){"/"===t.path?(this.$store.dispatch("setDrawerSelected",null),this.active=[]):"/folder"!==t.path&&(this.$store.dispatch("setDrawerSelected",void 0),this.active=[])}}},methods:{editCollection:function(t){this.updateCollectionDialog=!0,this.updateCollectionInfoParam.id=t.id,this.updateCollectionInfoParam.title=t.name},updateCollectionInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("updateCollectionInfo",t.updateCollectionInfoParam);case 2:return e.next=4,t.$store.commit("UPDATE_COLLECTION",t.updateCollectionInfoParam);case 4:if(t.updateCollectionDialog=!1,!t.insertCollectionParam.title.trim()){e.next=10;break}return t.insertCollectionParam.title=t.insertCollectionParam.title.trim(),t.insertCollectionParam.serverParentId=t.updateCollectionInfoParam.id,e.next=10,t.$store.dispatch("insertCollection",t.insertCollectionParam);case 10:case"end":return e.stop()}}),e)})))()},insertCollection:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.insertTopCollection.title=t.insertTopCollection.title.trim(),e.next=3,t.$store.dispatch("insertCollection",t.insertTopCollection);case 3:t.insertTopCollection.title="";case 4:case"end":return e.stop()}}),e)})))()},deleteCollection:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("deleteCollection",t.updateCollectionInfoParam.id);case 2:return e.next=4,t.$store.commit("DELETE_COLLECTION",t.updateCollectionInfoParam.id);case 4:t.updateCollectionDialog=!1;case 5:case"end":return e.stop()}}),e)})))()},activeFun:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t=void 0===t[0]?[]:t,0===t.length){r.next=10;break}return e.getBmInCollectionParam.collectionId=t[0],r.next=5,e.$store.dispatch("getBookmarkInCollection",e.getBmInCollectionParam);case 5:return r.next=7,e.$store.dispatch("setDrawerSelected",t[0]);case 7:if("/folder"===e.$route.path){r.next=10;break}return r.next=10,e.$router.push("/folder");case 10:"/folder"===e.$route.path&&(0===t.length?e.active.push(e.oldActive):e.oldActive=t[0]);case 11:case"end":return r.stop()}}),r)})))()},test:function(){this.value=!this.value}}},T=_,y=r("9b1f"),D=r("2275"),P=r("2a28"),O=r("1cfd"),E=r("1588"),B=r("9205"),R=r("3532"),S=r("2e0d"),A=r("6643"),j=r("17ff"),L=r("ee38"),N=r("110a"),F=r("f9de"),U=Object(d["a"])(T,i,n,!1,null,null,null);e["default"]=U.exports;v()(U,{VBtn:y["a"],VCard:D["a"],VCardActions:P["a"],VCardText:P["c"],VCardTitle:P["d"],VCol:O["a"],VContainer:E["a"],VDialog:B["a"],VDivider:R["a"],VIcon:f["a"],VList:S["a"],VListGroup:A["a"],VListItemTitle:C["c"],VNavigationDrawer:j["a"],VRow:L["a"],VTextField:N["a"],VTreeview:F["a"]})},f8d5:function(t,e,r){var i=r("4023"),n=r("6a8c"),a="["+n+"]",o=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(i(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(l,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},fa63:function(t,e,r){"use strict";var i=r("a593");e["a"]=i["a"].extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(t){t?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(t){this.originalValue=t,setTimeout(()=>{this.isActive=!1})}}})}}]);
//# sourceMappingURL=chunk-93b1ec6e.fccf0a3f.js.map