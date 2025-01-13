import{d as h,b,r as i,h as N,o as p,c as _,w as t,a as e,i as l,m as f,j as T,k as q,l as A,u as M,g,e as O,t as U,p as G}from"./index-CJ0P2Z7N.js";const X=h({__name:"AppMenu",setup(w){const c=b([""]);return(k,r)=>{const n=i("v-list-item"),m=i("v-list-group"),u=i("v-list"),o=N("permission");return p(),_(u,{nav:"",density:"compact",opened:c.value,"onUpdate:opened":r[0]||(r[0]=s=>c.value=s),color:"primary"},{default:t(()=>[e(n,{key:"dashboard",to:"/",title:"Dashboard","prepend-icon":"mdi-view-dashboard",link:"",exact:""}),l((p(),_(m,{value:"celebrations"},{activator:t(({props:s})=>[e(n,f(s,{"prepend-icon":"mdi-cross-celtic",title:"Celebraciones"}),null,16)]),default:t(()=>[l(e(n,{title:"Bautismos","prepend-icon":"mdi-circle-small",to:"/baptisms",link:"",exact:""},null,512),[[o,["menu_bautismos"]]]),l(e(n,{title:"Confirmaciones","prepend-icon":"mdi-circle-small",to:"/confirmations",link:"",exact:""},null,512),[[o,["menu_confirmaciones"]]]),l(e(n,{title:"Matrimonios","prepend-icon":"mdi-circle-small",to:"/marriages",link:"",exact:""},null,512),[[o,["menu_matrimonios"]]])]),_:1})),[[o,["menu_bautismos","menu_confirmaciones","menu_matrimonios"]]]),l((p(),_(m,{value:"settings"},{activator:t(({props:s})=>[e(n,f(s,{"prepend-icon":"mdi-cog",title:"Configuración"}),null,16)]),default:t(()=>[l(e(n,{title:"Personas","prepend-icon":"mdi-circle-small",to:"/people",link:"",exact:""},null,512),[[o,["menu_personas"]]]),l(e(n,{title:"Ministros","prepend-icon":"mdi-circle-small",to:"/ministers",link:"",exact:""},null,512),[[o,["menu_ministros"]]]),l(e(n,{title:"Libros","prepend-icon":"mdi-circle-small",to:"/books",link:"",exact:""},null,512),[[o,["menu_libros"]]]),l(e(n,{title:"Parroquias","prepend-icon":"mdi-circle-small",to:"/parishes",link:"",exact:""},null,512),[[o,["menu_parroquias"]]])]),_:1})),[[o,["menu_personas","menu_ministros","menu_libros","menu_parroquias"]]]),l((p(),_(m,{value:"security"},{activator:t(({props:s})=>[e(n,f(s,{"prepend-icon":"mdi-shield",title:"Seguridad"}),null,16)]),default:t(()=>[l(e(n,{title:"Usuarios","prepend-icon":"mdi-circle-small",to:"/users",link:"",exact:""},null,512),[[o,["menu_usuarios"]]]),l(e(n,{title:"Roles","prepend-icon":"mdi-circle-small",to:"/roles",link:"",exact:""},null,512),[[o,["menu_roles"]]]),l(e(n,{title:"Permisos","prepend-icon":"mdi-circle-small",to:"/permissions",link:"",exact:""},null,512),[[o,["_only_super_"]]])]),_:1})),[[o,["menu_usuarios","menu_roles"]]])]),_:1},8,["opened"])}}}),$=h({__name:"AdminLayout",setup(w){const c=T(),k=A(),r=b(!1),n=()=>{c.global.name.value=c.global.current.value.dark?"light":"dark"},m=q(),u=b(!0),o=async()=>{r.value=!0,await G()&&k.push({name:"Login"}),r.value=!1};return(s,a)=>{const d=i("v-icon"),v=i("v-btn"),C=i("v-list-item"),V=i("v-list"),P=i("v-navigation-drawer"),x=i("v-spacer"),R=i("v-app-bar"),S=i("RouterView"),B=i("v-main"),D=i("v-footer"),L=i("v-app");return p(),_(L,{app:""},{default:t(()=>[e(P,{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=y=>u.value=y),app:""},{append:t(()=>[e(V,{"three-line":""},{default:t(()=>[e(C,{class:"py-2 border-t",subtitle:M(m).authState.user.name,"prepend-avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPYGvsOKyoPhMLvER1SNT4W3RyX6VPeXTxg&s"},{append:t(()=>[e(v,{onClick:o,icon:"",density:"compact",variant:"tonal",loading:r.value},{default:t(()=>[e(d,null,{default:t(()=>a[2]||(a[2]=[g("mdi-logout")])),_:1})]),_:1},8,["loading"])]),_:1},8,["subtitle"])]),_:1})]),default:t(()=>[e(X)]),_:1},8,["modelValue"]),e(R,{floating:"",elevation:"0"},{default:t(()=>[e(v,{icon:"",onClick:a[1]||(a[1]=y=>u.value=!u.value)},{default:t(()=>[e(d,null,{default:t(()=>a[3]||(a[3]=[g("mdi-menu")])),_:1})]),_:1}),e(x),e(v,{icon:"",onClick:n,size:"small",variant:"tonal",class:"mr-2"},{default:t(()=>[e(d,null,{default:t(()=>a[4]||(a[4]=[g("mdi-theme-light-dark")])),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(S)]),_:1}),e(D,{app:""},{default:t(()=>[e(x),O("small",null," Lnx © "+U(new Date().getFullYear()),1)]),_:1})]),_:1})}}});export{$ as default};