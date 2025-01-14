import{d as h,b,r as i,h as T,o as p,c as d,w as n,a as e,i as l,m as f,j as q,k as A,l as M,u as O,g,e as w,t as U,p as F}from"./index-Cg9yRFqc.js";const G=h({__name:"AppMenu",setup(C){const m=b([""]);return(k,r)=>{const t=i("v-list-item"),c=i("v-list-group"),u=i("v-list"),o=T("permission");return p(),d(u,{nav:"",density:"compact",opened:m.value,"onUpdate:opened":r[0]||(r[0]=s=>m.value=s),color:"primary"},{default:n(()=>[e(t,{key:"dashboard",to:"/",title:"Dashboard","prepend-icon":"mdi-view-dashboard",link:"",exact:""}),l((p(),d(c,{value:"celebrations"},{activator:n(({props:s})=>[e(t,f(s,{"prepend-icon":"mdi-cross-celtic",title:"Celebraciones"}),null,16)]),default:n(()=>[l(e(t,{title:"Bautismos","prepend-icon":"mdi-circle-small",to:"/baptisms",link:"",exact:""},null,512),[[o,["menu_bautismos"]]]),l(e(t,{title:"Confirmaciones","prepend-icon":"mdi-circle-small",to:"/confirmations",link:"",exact:""},null,512),[[o,["menu_confirmaciones"]]]),l(e(t,{title:"Matrimonios","prepend-icon":"mdi-circle-small",to:"/marriages",link:"",exact:""},null,512),[[o,["menu_matrimonios"]]])]),_:1})),[[o,["menu_bautismos","menu_confirmaciones","menu_matrimonios"]]]),l((p(),d(c,{value:"settings"},{activator:n(({props:s})=>[e(t,f(s,{"prepend-icon":"mdi-cog",title:"Configuración"}),null,16)]),default:n(()=>[l(e(t,{title:"Personas","prepend-icon":"mdi-circle-small",to:"/people",link:"",exact:""},null,512),[[o,["menu_personas"]]]),l(e(t,{title:"Ministros","prepend-icon":"mdi-circle-small",to:"/ministers",link:"",exact:""},null,512),[[o,["menu_ministros"]]]),l(e(t,{title:"Libros","prepend-icon":"mdi-circle-small",to:"/books",link:"",exact:""},null,512),[[o,["menu_libros"]]]),l(e(t,{title:"Parroquias","prepend-icon":"mdi-circle-small",to:"/parishes",link:"",exact:""},null,512),[[o,["menu_parroquias"]]])]),_:1})),[[o,["menu_personas","menu_ministros","menu_libros","menu_parroquias"]]]),l((p(),d(c,{value:"security"},{activator:n(({props:s})=>[e(t,f(s,{"prepend-icon":"mdi-shield",title:"Seguridad"}),null,16)]),default:n(()=>[l(e(t,{title:"Usuarios","prepend-icon":"mdi-circle-small",to:"/users",link:"",exact:""},null,512),[[o,["menu_usuarios"]]]),l(e(t,{title:"Roles","prepend-icon":"mdi-circle-small",to:"/roles",link:"",exact:""},null,512),[[o,["menu_roles"]]]),l(e(t,{title:"Permisos","prepend-icon":"mdi-circle-small",to:"/permissions",link:"",exact:""},null,512),[[o,["_only_super_"]]])]),_:1})),[[o,["menu_usuarios","menu_roles"]]])]),_:1},8,["opened"])}}}),Y=h({__name:"AdminLayout",setup(C){const m=q(),k=M(),r=b(!1),t=()=>{m.global.name.value=m.global.current.value.dark?"light":"dark"},c=A(),u=b(!0),o=async()=>{r.value=!0,await F()&&k.push({name:"Login"}),r.value=!1};return(s,a)=>{const _=i("v-icon"),v=i("v-btn"),V=i("v-list-item"),P=i("v-list"),R=i("v-navigation-drawer"),x=i("v-spacer"),S=i("v-app-bar"),B=i("RouterView"),D=i("v-main"),L=i("v-footer"),N=i("v-app");return p(),d(N,{app:""},{default:n(()=>[e(R,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=y=>u.value=y),app:""},{append:n(()=>[e(P,{"three-line":""},{default:n(()=>[e(V,{class:"py-2 border-t",subtitle:O(c).authState.user.name,"prepend-avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPYGvsOKyoPhMLvER1SNT4W3RyX6VPeXTxg&s"},{append:n(()=>[e(v,{onClick:o,icon:"",density:"compact",variant:"tonal",loading:r.value},{default:n(()=>[e(_,null,{default:n(()=>a[2]||(a[2]=[g("mdi-logout")])),_:1})]),_:1},8,["loading"])]),_:1},8,["subtitle"])]),_:1})]),default:n(()=>[e(G)]),_:1},8,["modelValue"]),e(S,{floating:"",elevation:"0"},{default:n(()=>[e(v,{icon:"",onClick:a[1]||(a[1]=y=>u.value=!u.value)},{default:n(()=>[e(_,null,{default:n(()=>a[3]||(a[3]=[g("mdi-menu")])),_:1})]),_:1}),e(x),e(v,{icon:"",onClick:t,size:"small",variant:"tonal",class:"mr-2"},{default:n(()=>[e(_,null,{default:n(()=>a[4]||(a[4]=[g("mdi-theme-light-dark")])),_:1})]),_:1})]),_:1}),e(D,null,{default:n(()=>[e(B)]),_:1}),e(L,{app:""},{default:n(()=>[a[5]||(a[5]=w("iframe",{id:"printFrame",style:{display:"none"}},null,-1)),e(x),w("small",null," Lnx © "+U(new Date().getFullYear()),1)]),_:1})]),_:1})}}});export{Y as default};