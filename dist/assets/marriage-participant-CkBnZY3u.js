import{d as X,B as h,b,r as s,o as p,c as v,w as l,a as e,g as r,e as F,t as $,A as y,f as ee,C as me,q as ce,_ as pe,h as te,i as M,u as oe}from"./index-Cg9yRFqc.js";import{f as K,g as ne,h as ve,d as fe,e as _e,b as be,c as ye}from"./sacrament-records.services-DJmQUm0N.js";import{b as ge}from"./sacrament.services-U2bpzfs6.js";import{c as Ie}from"./sacrament.constants-i16gPLh7.js";import{_ as S,a as Ve,b as xe,c as ke}from"./AnnularActForm.vue_vue_type_script_setup_true_lang-DYBu6pDt.js";import{_ as Q}from"./ExternalBaptismForm.vue_vue_type_script_setup_true_lang-B34gNv7k.js";import{b as Se}from"./selectItems.services-WlXGXuBa.js";import{c as we}from"./index-ClhpXsVc.js";import"./DataTable.types-CX4v7_jN.js";import"./Form.vue_vue_type_script_setup_true_lang-DrqE6RAm.js";import"./ruleUtils-Dk9EfJu0.js";const Be=X({__name:"MarriageParticipantForm",emits:["onSuccess"],setup(j,{emit:W}){const D=h(),z=W,V=b(null),x=b(!1),d=b(!1),g=b(!1),I=b(null),k=b(null),P=()=>({id:null,sacramentId:null,sacramentBookId:null,folioNumber:null,actNumber:null,observations:null,canonical:!1,issued:!1,roles:[{role:"2",personId:null,family:[{role:"1",personId:null},{role:"2",personId:null}]},{role:"3",personId:null,family:[{role:"1",personId:null},{role:"2",personId:null}]},{role:"4",personId:null},{role:"5",personId:null}]}),u=b({...P()}),a=async O=>{let o=await K(O);console.log("getBaptism",o),I.value=o},B=async O=>{let o=await K(O);console.log("getBaptism",o),k.value=o},R=async()=>{var o;u.value.issued=g.value,u.value.sacramentId=parseInt((o=D.params.id)==null?void 0:o.toString()),x.value=!0,await ne(u.value)&&(z("onSuccess"),u.value=P(),d.value=!1),x.value=!1,console.log("submit",u.value)};return(O,o)=>{const q=s("v-spacer"),L=s("v-icon"),C=s("v-btn"),E=s("v-toolbar"),f=s("v-card-item"),n=s("v-col"),t=s("v-list-item-subtitle"),_=s("v-list-item-title"),w=s("v-list-item"),U=s("v-alert"),N=s("v-row"),m=s("v-card-text"),H=s("v-card-actions"),Y=s("v-card"),Z=s("v-form"),A=s("v-dialog");return p(),v(A,{modelValue:d.value,"onUpdate:modelValue":o[12]||(o[12]=c=>d.value=c),activator:"parent",scrollable:""},{default:l(()=>[e(Z,{ref_key:"formRef",ref:V,onSubmit:ee(R,["prevent"])},{default:l(()=>[e(Y,{rounded:"0"},{default:l(()=>[e(E,{color:"gray",title:u.value.id?"Editar Registro":"Nuevo Participante"},{default:l(()=>[e(q),e(C,{icon:"",onClick:o[0]||(o[0]=c=>d.value=!1),color:"secondary",density:"compact"},{default:l(()=>[e(L,null,{default:l(()=>o[13]||(o[13]=[r("mdi-close")])),_:1})]),_:1})]),_:1},8,["title"]),e(m,{class:"pa-0"},{default:l(()=>[e(N,{"no-gutters":""},{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(f,null,{default:l(()=>o[14]||(o[14]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información de la(s) persona(s) ",-1)])),_:1}),e(N,{"no-gutters":""},{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(N,{"no-gutters":""},{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(f,null,{default:l(()=>[e(N,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>o[15]||(o[15]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información del bautismo del esposo ",-1)])),_:1}),u.value.roles[0].personId&&I.value?(p(),v(n,{key:0,cols:"12",class:"bg-green-lighten-5"},{default:l(()=>[e(w,null,{default:l(()=>[e(t,null,{default:l(()=>o[16]||(o[16]=[r(" Lugar de bautismo ")])),_:1}),e(_,null,{default:l(()=>[r($(I.value.parish),1)]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(t,null,{default:l(()=>o[17]||(o[17]=[r(" Fecha de bautismo ")])),_:1}),e(_,null,{default:l(()=>[r($(I.value.date),1)]),_:1})]),_:1})]),_:1})):y("",!0),u.value.roles[0].personId?y("",!0):(p(),v(n,{key:1,cols:"12"},{default:l(()=>[e(U,{dense:"",variant:"tonal",color:"info",icon:"mdi-information",class:"text-subtitle-2"},{default:l(()=>o[18]||(o[18]=[r(" Selecciona a la persona que recibió el sacramento ")])),_:1})]),_:1})),u.value.roles[0].personId&&!I.value?(p(),v(n,{key:2,cols:"12"},{default:l(()=>[e(C,{block:"",variant:"outlined"},{prepend:l(()=>[e(L,null,{default:l(()=>o[19]||(o[19]=[r("mdi-plus")])),_:1})]),default:l(()=>[e(Q,{id:u.value.roles[0].personId,onOnSuccess:o[1]||(o[1]=c=>a(u.value.roles[0].personId))},null,8,["id"]),o[20]||(o[20]=r(" bautismo externo "))]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1}),e(S,{family:"",modelValue:u.value.roles[0],"onUpdate:modelValue":o[2]||(o[2]=c=>u.value.roles[0]=c),title:"Esposo",onOnSelected:a},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(S,{modelValue:u.value.roles[0].family[0],"onUpdate:modelValue":o[3]||(o[3]=c=>u.value.roles[0].family[0]=c),title:"Padre"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(S,{modelValue:u.value.roles[0].family[1],"onUpdate:modelValue":o[4]||(o[4]=c=>u.value.roles[0].family[1]=c),title:"Madre"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(N,{"no-gutters":""},{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(f,null,{default:l(()=>[e(N,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>o[21]||(o[21]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información del bautismo de la esposa ",-1)])),_:1}),u.value.roles[1].personId&&k.value?(p(),v(n,{key:0,cols:"12",class:"bg-green-lighten-5"},{default:l(()=>[e(w,null,{default:l(()=>[e(t,null,{default:l(()=>o[22]||(o[22]=[r(" Lugar de bautismo ")])),_:1}),e(_,null,{default:l(()=>[r($(k.value.parish),1)]),_:1})]),_:1}),e(w,null,{default:l(()=>[e(t,null,{default:l(()=>o[23]||(o[23]=[r(" Fecha de bautismo ")])),_:1}),e(_,null,{default:l(()=>[r($(k.value.date),1)]),_:1})]),_:1})]),_:1})):y("",!0),u.value.roles[1].personId?y("",!0):(p(),v(n,{key:1,cols:"12"},{default:l(()=>[e(U,{dense:"",variant:"tonal",color:"info",icon:"mdi-information",class:"text-subtitle-2"},{default:l(()=>o[24]||(o[24]=[r(" Selecciona a la persona que recibió el sacramento ")])),_:1})]),_:1})),u.value.roles[1].personId&&!k.value?(p(),v(n,{key:2,cols:"12"},{default:l(()=>[e(C,{block:"",variant:"outlined"},{prepend:l(()=>[e(L,null,{default:l(()=>o[25]||(o[25]=[r("mdi-plus")])),_:1})]),default:l(()=>[e(Q,{id:u.value.roles[1].personId,onOnSuccess:o[5]||(o[5]=c=>B(u.value.roles[1].personId))},null,8,["id"]),o[26]||(o[26]=r(" bautismo externo "))]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1}),e(S,{family:"",modelValue:u.value.roles[1],"onUpdate:modelValue":o[6]||(o[6]=c=>u.value.roles[1]=c),title:"Esposa",onOnSelected:B},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(S,{modelValue:u.value.roles[1].family[0],"onUpdate:modelValue":o[7]||(o[7]=c=>u.value.roles[1].family[0]=c),title:"Padre"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(S,{modelValue:u.value.roles[1].family[1],"onUpdate:modelValue":o[8]||(o[8]=c=>u.value.roles[1].family[1]=c),title:"Madre"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(S,{modelValue:u.value.roles[2],"onUpdate:modelValue":o[9]||(o[9]=c=>u.value.roles[2]=c),title:"Padrino"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(S,{modelValue:u.value.roles[3],"onUpdate:modelValue":o[10]||(o[10]=c=>u.value.roles[3]=c),title:"Madrina"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(H,{class:"border-t"},{default:l(()=>[e(C,{type:"button",variant:"text",color:"secondary",onClick:o[11]||(o[11]=c=>d.value=!1)},{default:l(()=>o[27]||(o[27]=[r(" Cancelar ")])),_:1}),e(q),e(C,{text:"Guardar",color:"primary",type:"submit",loading:x.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])}}}),ae=X({__name:"FormAct",props:{recordId:{}},emits:["onSuccess"],setup(j,{emit:W}){const D=h(),z=W,V=j,x=b(null),d=b(!1),g=b(!1),I=b(!1),k=b(null),P=b(null),u=()=>({id:null,sacramentId:null,sacramentBookId:null,folioNumber:null,actNumber:null,observations:null,canonical:!1,issued:!1,roles:[{role:"2",personId:null,family:[{role:"1",personId:null},{role:"2",personId:null}]},{role:"3",personId:null,family:[{role:"1",personId:null},{role:"2",personId:null}]},{role:"4",personId:null},{role:"5",personId:null}]}),a=b({...u()}),B=async n=>{let t=await K(n);k.value=t},R=async n=>{let t=await K(n);console.log("getBaptism",t),P.value=t},O=async n=>{a.value=u();let t=await ve(n);a.value.id=t.id,a.value.sacramentBookId=t.sacramentBookId,a.value.sacramentBookId==null&&E(),a.value.folioNumber=t.folioNumber,a.value.actNumber=t.actNumber,a.value.observations=t.observations,a.value.canonical=t.canonical,a.value.issued=t.issued,t.roles.forEach(_=>{a.value.roles.map(w=>{w.role==_.role&&(w.personId=_.personId,w.family&&_.family&&w.family.map(U=>{_.family.map(N=>{U.role==N.role&&(U.personId=N.personId)})}))})})},o=async n=>{let t=await we(n);a.value.folioNumber=t.next.folioNumber,a.value.actNumber=t.next.actNumber},q=async n=>await Se("2",n),L=()=>{I.value=!0,C()},C=async()=>{var t;a.value.issued=I.value,a.value.sacramentId=parseInt((t=D.params.id)==null?void 0:t.toString()),d.value=!0,await ne(a.value)&&(z("onSuccess"),a.value=u(),g.value=!1),I.value=!1,d.value=!1},E=()=>{let n=localStorage.getItem("marriageParameters");if(n){let t=JSON.parse(n);a.value.sacramentBookId=t.defaultBook,o(t.defaultBook.value)}},f=async()=>{V.recordId?await O(V.recordId):E()};return me(()=>g.value,n=>{n&&f()}),(n,t)=>{const _=s("v-spacer"),w=s("v-icon"),U=s("v-btn"),N=s("v-toolbar"),m=s("v-col"),H=s("v-text-field"),Y=s("v-textarea"),Z=s("v-checkbox"),A=s("v-row"),c=s("v-card-item"),T=s("v-list-item-subtitle"),G=s("v-list-item-title"),J=s("v-list-item"),le=s("v-alert"),se=s("v-card-text"),ue=s("v-card-actions"),re=s("v-card"),de=s("v-form"),ie=s("v-dialog");return p(),v(ie,{modelValue:g.value,"onUpdate:modelValue":t[17]||(t[17]=i=>g.value=i),activator:"parent",fullscreen:"",scrollable:""},{default:l(()=>[e(de,{ref_key:"formRef",ref:x,onSubmit:ee(C,["prevent"])},{default:l(()=>[e(re,{rounded:"0"},{default:l(()=>[e(N,{color:"gray",title:a.value.id?"Editar Registro":"Nuevo Registro"},{default:l(()=>[e(_),e(U,{icon:"",onClick:t[0]||(t[0]=i=>g.value=!1),color:"secondary",density:"compact"},{default:l(()=>[e(w,null,{default:l(()=>t[18]||(t[18]=[r("mdi-close")])),_:1})]),_:1})]),_:1},8,["title"]),e(se,{class:"pa-0"},{default:l(()=>[e(A,{"no-gutters":"",class:"h-100"},{default:l(()=>[e(m,{cols:"12",md:"3",class:"border-e"},{default:l(()=>[e(c,null,{default:l(()=>[e(A,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>t[19]||(t[19]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información del acta ",-1)])),_:1}),e(m,{cols:"12",md:"12",xl:"6"},{default:l(()=>[e(Ve,{modelValue:a.value.sacramentBookId,"onUpdate:modelValue":[t[1]||(t[1]=i=>a.value.sacramentBookId=i),t[2]||(t[2]=i=>i!=null?o(i.value):()=>{})],service:q,label:"Libro",autocomplete:"off","return-object":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"6",md:"6",xl:"3"},{default:l(()=>[e(H,{modelValue:a.value.folioNumber,"onUpdate:modelValue":t[3]||(t[3]=i=>a.value.folioNumber=i),label:"Folio"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6",md:"6",xl:"3"},{default:l(()=>[e(H,{modelValue:a.value.actNumber,"onUpdate:modelValue":t[4]||(t[4]=i=>a.value.actNumber=i),label:"Acta"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(Y,{label:"Observaciones",rows:"3"})]),_:1}),e(m,{cols:"12"},{default:l(()=>[e(Z,{modelValue:a.value.canonical,"onUpdate:modelValue":t[5]||(t[5]=i=>a.value.canonical=i),color:"primary",label:"Cumple con las normas del Derecho Canónico"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(m,{cols:"12",md:"9"},{default:l(()=>[e(c,null,{default:l(()=>t[20]||(t[20]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información de la(s) persona(s) ",-1)])),_:1}),e(A,{"no-gutters":""},{default:l(()=>[e(m,{cols:"6"},{default:l(()=>[e(A,{"no-gutters":""},{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(c,null,{default:l(()=>[e(A,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>t[21]||(t[21]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información del bautismo del esposo ",-1)])),_:1}),a.value.roles[0].personId&&k.value?(p(),v(m,{key:0,cols:"12",class:"bg-green-lighten-5"},{default:l(()=>[e(J,null,{default:l(()=>[e(T,null,{default:l(()=>t[22]||(t[22]=[r(" Lugar de bautismo ")])),_:1}),e(G,null,{default:l(()=>[r($(k.value.parish),1)]),_:1})]),_:1}),e(J,null,{default:l(()=>[e(T,null,{default:l(()=>t[23]||(t[23]=[r(" Fecha de bautismo ")])),_:1}),e(G,null,{default:l(()=>[r($(k.value.date),1)]),_:1})]),_:1})]),_:1})):y("",!0),a.value.roles[0].personId?y("",!0):(p(),v(m,{key:1,cols:"12"},{default:l(()=>[e(le,{dense:"",variant:"tonal",color:"info",icon:"mdi-information",class:"text-subtitle-2"},{default:l(()=>t[24]||(t[24]=[r(" Selecciona a la persona que recibió el sacramento ")])),_:1})]),_:1})),a.value.roles[0].personId&&!k.value?(p(),v(m,{key:2,cols:"12"},{default:l(()=>[e(U,{block:"",variant:"outlined"},{prepend:l(()=>[e(w,null,{default:l(()=>t[25]||(t[25]=[r("mdi-plus")])),_:1})]),default:l(()=>[e(Q,{id:a.value.roles[0].personId,onOnSuccess:t[6]||(t[6]=i=>B(a.value.roles[0].personId))},null,8,["id"]),t[26]||(t[26]=r(" bautismo externo "))]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1}),e(S,{family:"",modelValue:a.value.roles[0],"onUpdate:modelValue":t[7]||(t[7]=i=>a.value.roles[0]=i),title:"Esposo",onOnSelected:B},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(S,{modelValue:a.value.roles[0].family[0],"onUpdate:modelValue":t[8]||(t[8]=i=>a.value.roles[0].family[0]=i),title:"Padre"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(S,{modelValue:a.value.roles[0].family[1],"onUpdate:modelValue":t[9]||(t[9]=i=>a.value.roles[0].family[1]=i),title:"Madre"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(A,{"no-gutters":""},{default:l(()=>[e(m,{cols:"12"},{default:l(()=>[e(c,null,{default:l(()=>[e(A,null,{default:l(()=>[e(m,{cols:"12"},{default:l(()=>t[27]||(t[27]=[F("span",{class:"text-subtitle-2 text-secondary"}," Información del bautismo de la esposa ",-1)])),_:1}),a.value.roles[1].personId&&P.value?(p(),v(m,{key:0,cols:"12",class:"bg-green-lighten-5"},{default:l(()=>[e(J,null,{default:l(()=>[e(T,null,{default:l(()=>t[28]||(t[28]=[r(" Lugar de bautismo ")])),_:1}),e(G,null,{default:l(()=>[r($(P.value.parish),1)]),_:1})]),_:1}),e(J,null,{default:l(()=>[e(T,null,{default:l(()=>t[29]||(t[29]=[r(" Fecha de bautismo ")])),_:1}),e(G,null,{default:l(()=>[r($(P.value.date),1)]),_:1})]),_:1})]),_:1})):y("",!0),a.value.roles[1].personId?y("",!0):(p(),v(m,{key:1,cols:"12"},{default:l(()=>[e(le,{dense:"",variant:"tonal",color:"info",icon:"mdi-information",class:"text-subtitle-2"},{default:l(()=>t[30]||(t[30]=[r(" Selecciona a la persona que recibió el sacramento ")])),_:1})]),_:1})),a.value.roles[1].personId&&!P.value?(p(),v(m,{key:2,cols:"12"},{default:l(()=>[e(U,{block:"",variant:"outlined"},{prepend:l(()=>[e(w,null,{default:l(()=>t[31]||(t[31]=[r("mdi-plus")])),_:1})]),default:l(()=>[e(Q,{id:a.value.roles[1].personId,onOnSuccess:t[10]||(t[10]=i=>R(a.value.roles[1].personId))},null,8,["id"]),t[32]||(t[32]=r(" bautismo externo "))]),_:1})]),_:1})):y("",!0)]),_:1})]),_:1}),e(S,{family:"",modelValue:a.value.roles[1],"onUpdate:modelValue":t[11]||(t[11]=i=>a.value.roles[1]=i),title:"Esposa",onOnSelected:R},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(S,{modelValue:a.value.roles[1].family[0],"onUpdate:modelValue":t[12]||(t[12]=i=>a.value.roles[1].family[0]=i),title:"Padre"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(S,{modelValue:a.value.roles[1].family[1],"onUpdate:modelValue":t[13]||(t[13]=i=>a.value.roles[1].family[1]=i),title:"Madre"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(S,{modelValue:a.value.roles[2],"onUpdate:modelValue":t[14]||(t[14]=i=>a.value.roles[2]=i),title:"Padrino"},null,8,["modelValue"])]),_:1}),e(m,{cols:"6"},{default:l(()=>[e(S,{modelValue:a.value.roles[3],"onUpdate:modelValue":t[15]||(t[15]=i=>a.value.roles[3]=i),title:"Madrina"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(ue,{class:"border-t"},{default:l(()=>[e(U,{type:"button",variant:"text",color:"secondary",onClick:t[16]||(t[16]=i=>g.value=!1)},{default:l(()=>t[33]||(t[33]=[r(" Cancelar ")])),_:1}),e(_),e(U,{text:"Asentar y guardar",color:"primary","prepend-icon":"mdi-file-certificate-outline",variant:"outlined",type:"button",onClick:L,loading:d.value},null,8,["loading"]),e(U,{text:"Guardar",color:"primary",type:"submit",loading:d.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])}}}),Ue=["src"],Ne=X({__name:"PrintAct",props:{record:{}},emits:["onSuccess"],setup(j,{emit:W}){const D=W,z=j,V=b(null),x=b(!1),d=b(!1),g=async()=>{},I=async()=>{x.value=!0;const u=await _e(z.record);V.value=u,x.value=!1,console.log(u)},k=async()=>{x.value=!0;let u=await fe(V.value.data),a=URL.createObjectURL(u);const B=document.getElementById("printFrame");B.src=a,B.onload=function(){B.contentWindow&&(B.contentWindow.print(),d.value=!1,D("onSuccess"))},x.value=!1};return(async()=>{await I()})(),(u,a)=>{const B=s("v-textarea"),R=s("v-card-text"),O=s("v-btn"),o=s("v-spacer"),q=s("v-card-actions"),L=s("v-card"),C=s("v-form"),E=s("v-dialog");return p(),v(E,{"max-width":"600",modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=f=>d.value=f),activator:"parent",persistent:"",scrollable:""},{default:l(()=>[e(C,{ref:"formRef",onSubmit:ee(g,["prevent"])},{default:l(()=>[e(L,{title:"Imprimir Acta"},{default:l(()=>[e(R,{class:"pa-0"},{default:l(()=>{var f,n;return[V.value?(p(),ce("iframe",{key:0,src:(f=V.value)==null?void 0:f.urlTemp,width:"100%",height:"500",frameborder:"0"},null,8,Ue)):y("",!0),(n=V.value)!=null&&n.existPrintings?(p(),v(B,{key:1,class:"pa-3",label:"Observaciones de la reimpresión",rows:"2",modelValue:V.value.data.observations,"onUpdate:modelValue":a[0]||(a[0]=t=>V.value.data.observations=t),rules:[t=>!!t||"Este campo es requerido"]},null,8,["modelValue","rules"])):y("",!0)]}),_:1}),e(q,null,{default:l(()=>{var f,n,t;return[e(O,{type:"button",variant:"text",color:"secondary",onClick:a[1]||(a[1]=_=>d.value=!1)},{default:l(()=>a[3]||(a[3]=[r(" Cancelar ")])),_:1}),e(o),e(O,{color:"primary",type:"submit",loading:x.value,disabled:((f=V.value)==null?void 0:f.existPrintings)&&(((n=V.value)==null?void 0:n.data.observations)==null||((t=V.value)==null?void 0:t.data.observations)=="")},{default:l(()=>[e(pe,{onOnConfirm:k,title:"Imprimir Acta",message:"¿Estás seguro de imprimir el acta?"}),a[4]||(a[4]=r(" Imprimir "))]),_:1},8,["loading","disabled"])]}),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])}}}),Oe={class:"text-h6"},Ce={class:"text-subtitle-2"},$e={class:"text-subtitle-2"},je=X({__name:"marriage-participant",setup(j){const W=h(),D=b(null),z=async x=>{const d=W.params.id;return await ye(x,Number(d))};return(async()=>{const x=W.params.id;D.value=await ge(Number(x))})(),(x,d)=>{const g=s("v-icon"),I=s("v-btn"),k=s("v-card-item"),P=s("v-text-field"),u=s("v-col"),a=s("v-row"),B=s("v-chip"),R=s("v-list-item"),O=s("LnxDialogConfirm"),o=s("v-list"),q=s("v-menu"),L=s("LnxDataTable"),C=s("v-card"),E=te("tooltip"),f=te("permission");return p(),v(C,{title:"Registro de participantes",subtitle:"Gestión de participantes en actas de confirmación"},{append:l(()=>[M((p(),v(I,{icon:"",density:"compact",variant:"tonal"},{default:l(()=>[e(xe,{type:"4"}),e(g,null,{default:l(()=>d[0]||(d[0]=[r("mdi-tune-variant")])),_:1})]),_:1})),[[E,"Definir Parámetros"]])]),default:l(()=>[e(k,{class:"border-t"},{default:l(()=>{var n,t,_;return[F("p",Oe,$((n=D.value)==null?void 0:n.dateFormatted),1),F("p",Ce,$((t=D.value)==null?void 0:t.parish),1),F("p",$e,$((_=D.value)==null?void 0:_.minister),1)]}),_:1}),e(L,{loadDataTable:z,headers:oe(Ie)},{header:l(({request:n,loading:t,init:_,loadingTable:w,debouncedReload:U,reLoadDataTable:N})=>[e(k,{class:"border-t border-b"},{default:l(()=>[e(a,{class:"d-flex justify-space-between align-center"},{default:l(()=>[e(u,{cols:"12",md:"4"},{default:l(()=>[e(P,{modelValue:n.search,"onUpdate:modelValue":m=>n.search=m,label:"Buscar",clearable:"",onInput:U,"onClick:clear":N},null,8,["modelValue","onUpdate:modelValue","onInput","onClick:clear"])]),_:2},1024),e(u,{cols:"12",md:"4",class:"d-md-flex d-block justify-end text-end"},{default:l(()=>[M((p(),v(I,{"prepend-icon":"mdi-plus",class:"me-2",disabled:t},{default:l(()=>[d[1]||(d[1]=r(" acta ")),e(ae,{onOnSuccess:_},null,8,["onOnSuccess"])]),_:2},1032,["disabled"])),[[f,["crear_acta_matrimonio"]]]),M((p(),v(I,{"prepend-icon":"mdi-plus",class:"me-2",disabled:t},{default:l(()=>[d[2]||(d[2]=r(" participante ")),e(Be,{onOnSuccess:_},null,8,["onOnSuccess"])]),_:2},1032,["disabled"])),[[f,["agregar_participante_matrimonio"]]]),M(e(I,{density:"comfortable",icon:"mdi-reload",onClick:_,loading:w},null,8,["onClick","loading"]),[[E,"Recargar registros"]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.status":l(({item:n})=>[e(B,{color:n.status?"blue":"error",variant:"outlined"},{default:l(()=>[r($(n.status?"Activo":" Anulado "),1)]),_:2},1032,["color"])]),"item.actions":l(({item:n,loadDataTable:t})=>[M((p(),v(I,{icon:"",size:"small",variant:"text",disabled:!n.status},{default:l(()=>[e(g,null,{default:l(()=>d[3]||(d[3]=[r(" mdi-dots-vertical ")])),_:1}),e(q,{activator:"parent"},{default:l(()=>[e(o,{nav:""},{default:l(()=>[n.status&&n.issueDate===null?M((p(),v(R,{key:0,title:"Editar",density:"compact",value:"edit"},{prepend:l(()=>[e(g,{size:"small"},{default:l(()=>d[4]||(d[4]=[r(" mdi-pencil ")])),_:1})]),default:l(()=>[e(ae,{recordId:n.id,onOnSuccess:t},null,8,["recordId","onOnSuccess"])]),_:2},1024)),[[f,["editar_celebracion_matrimonio"]]]):y("",!0),n.status&&n.issueDate!==null?M((p(),v(R,{key:1,title:"Imprimir Acta",density:"compact",value:"print"},{prepend:l(()=>[e(g,{size:"small"},{default:l(()=>d[5]||(d[5]=[r(" mdi-printer ")])),_:1})]),default:l(()=>[e(Ne,{record:n,onOnSuccess:t},null,8,["record","onOnSuccess"])]),_:2},1024)),[[f,["imprimir_acta_matrimonio"]]]):y("",!0),n.status&&n.issueDate!==null?M((p(),v(R,{key:2,title:"Anular",class:"text-red",density:"compact",value:"annular"},{prepend:l(()=>[e(g,{size:"small"},{default:l(()=>d[6]||(d[6]=[r(" mdi-minus-circle-outline ")])),_:1})]),default:l(()=>[e(ke,{onOnSuccess:t,record:n},null,8,["onOnSuccess","record"])]),_:2},1024)),[[f,["anular_acta_matrimonio"]]]):y("",!0),n.issueDate==null?M((p(),v(R,{key:3,title:"Eliminar",class:"text-red",density:"compact",value:"delete"},{prepend:l(()=>[e(g,{size:"small"},{default:l(()=>d[7]||(d[7]=[r(" mdi-delete ")])),_:1})]),default:l(()=>[e(O,{onOnConfirm:async()=>{await oe(be)(n.id),t()},message:"¿Está seguro de eliminar este registro?"},null,8,["onOnConfirm"])]),_:2},1024)),[[f,["eliminar_acta_matrimonio"]]]):y("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1032,["disabled"])),[[f,["editar_celebracion_matrimonio","eliminar_celebracion_matrimonio","imprimir_acta_matrimonio","anular_acta_matrimonio"]],[E,"Opciones"]])]),_:1},8,["headers"])]),_:1})}}});export{je as default};
