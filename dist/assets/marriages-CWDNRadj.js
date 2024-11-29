import{d as B,e as v,r as s,h as w,o as g,c as y,w as t,i as P,a,g as c,u as U,t as T,b as M,f as E}from"./index-DgXLauUC.js";import{_ as C,d as L}from"./debounce-Bz1f7fWb.js";import{_ as $}from"./position.services-Ch_tZ3L6.js";import{_ as A}from"./DialogConfirm.vue_vue_type_script_setup_true_lang-Cxfsjbfz.js";import"./ruleUtils-DaB-ACZt.js";const O=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Nombre del Esposo",key:"nameHusband",value:"nameHusband"},{title:"Apellido Paterno",key:"paternalSurnameHusband",value:"paternalSurnameHusband"},{title:"Apellido Materno",key:"maternalSurnameHusband",value:"maternalSurnameHusband"},{title:"Fecha de Nacimiento",key:"birthDateHusband",value:"birthDateHusband"},{title:"Lugar de Nacimiento",key:"birthPlaceHusband",value:"birthPlaceHusband"},{title:"Padre",key:"fatherHusband",value:"fatherHusband"},{title:"Madre",key:"motherHusband",value:"motherHusband"},{title:"Lugar de Bautizo",key:"baptismPlaceHusband",value:"baptismPlaceHusband"},{title:"Nombre de la Esposa",key:"nameWife",value:"nameWife"},{title:"Apellido Paterno",key:"paternalSurnameWife",value:"paternalSurnameWife"},{title:"Apellido Materno",key:"maternalSurnameWife",value:"maternalSurnameWife"},{title:"Fecha de Nacimiento",key:"birthDateWife",value:"birthDateWife"},{title:"Lugar de Nacimiento",key:"birthPlaceWife",value:"birthPlaceWife"},{title:"Padre",key:"fatherWife",value:"fatherWife"},{title:"Madre",key:"motherWife",value:"motherWife"},{title:"Lugar de Bautizo",key:"baptismPlaceWife",value:"baptismPlaceWife"},{title:"Estado",key:"status",value:"status"}],z=B({__name:"MarriageDataTable",props:{options:{},items:{},loading:{type:Boolean},total:{}},emits:["onUpdateTable"],setup(k,{emit:f}){const r=f,b=v(!1),_=async i=>{b.value=!0,await $(i)&&r("onUpdateTable"),b.value=!1};return(i,e)=>{const m=s("v-icon"),H=s("v-list-item"),l=s("v-list"),n=s("v-menu"),d=s("v-btn"),V=s("v-data-table-server"),p=w("permission");return g(),y(V,{"items-per-page":i.options.itemsPerPage,"onUpdate:itemsPerPage":[e[1]||(e[1]=u=>i.options.itemsPerPage=u),e[4]||(e[4]=u=>r("onUpdateTable"))],"sort-by":i.options.sortBy,"onUpdate:sortBy":[e[2]||(e[2]=u=>i.options.sortBy=u),e[5]||(e[5]=u=>r("onUpdateTable"))],page:i.options.page,"onUpdate:page":[e[3]||(e[3]=u=>i.options.page=u),e[6]||(e[6]=u=>r("onUpdateTable"))],headers:U(O),items:i.items,"items-length":i.total,loading:b.value,"item-value":"id","multi-sort":""},{"item.actions":t(({item:u})=>[P((g(),y(d,{icon:"",density:"compact",variant:"text"},{default:t(()=>[a(m,null,{default:t(()=>e[7]||(e[7]=[c("mdi-dots-vertical")])),_:1}),a(n,{activator:"parent"},{default:t(()=>[a(l,{density:"compact"},{default:t(()=>[P((g(),y(H,{key:"edit",value:"edit","append-icon":"mdi-pencil",class:"text-subtitle-2"},{append:t(()=>[a(m,{size:"small"},{default:t(()=>e[8]||(e[8]=[c(" mdi-pencil ")])),_:1})]),default:t(()=>[e[9]||(e[9]=c(" Editar ")),a(U(C),{formState:u,onOnSuccess:e[0]||(e[0]=S=>r("onUpdateTable"))},null,8,["formState"])]),_:2},1024)),[[p,["positions.edit"]]]),P((g(),y(H,{key:"delete",value:"delete",class:"text-red text-subtitle-2"},{append:t(()=>[a(m,{size:"small",color:"red"},{default:t(()=>e[10]||(e[10]=[c(" mdi-delete ")])),_:1})]),default:t(()=>[e[11]||(e[11]=c(" Eliminar ")),a(A,{title:"Eliminar",message:"¿Está seguro de eliminar este registro?","text-cancel":"No","text-confirm":"Confirmar",loading:b.value,onOnConfirm:()=>_(u.id)},null,8,["loading","onOnConfirm"])]),_:2},1024)),[[p,["positions.delete"]]])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[p,["positions.edit","positions.delete"]]])]),"item.status":t(({item:u})=>[a(d,{color:u.status?"blue":"error","text-color":"white",density:"compact",variant:"tonal"},{default:t(()=>[c(T(u.status?"Habilitado":"Deshabilitado"),1)]),_:2},1032,["color"])]),_:1},8,["items-per-page","sort-by","page","headers","items","items-length","loading"])}}}),R=B({__name:"MarriageForm",props:{formState:{type:Object,default:()=>({})}},emits:["onSuccess"],setup(k,{emit:f}){const r=f,b=k,_=v(!1),i=v(!1),e=v({...b.formState}),m=async()=>{_.value=!0,setTimeout(()=>{_.value=!1,i.value=!1,r("onSuccess")},1500)};return(H,l)=>{const n=s("v-text-field"),d=s("v-col"),V=s("v-row"),p=s("v-card-item"),u=s("v-btn"),S=s("v-spacer"),x=s("v-card-actions"),W=s("v-card"),N=s("v-form"),D=s("v-dialog");return g(),y(D,{"max-width":"700",modelValue:i.value,"onUpdate:modelValue":l[17]||(l[17]=o=>i.value=o),activator:"parent"},{default:t(()=>[a(N,{ref:"formRef",onSubmit:E(m,["prevent"])},{default:t(()=>[a(W,{title:e.value.id?"Editar Registro":"Nuevo Registro"},{default:t(()=>[a(p,{class:"border-t border-b"},{default:t(()=>[l[18]||(l[18]=M("h3",{class:"mb-2"},"Datos del esposo",-1)),a(V,null,{default:t(()=>[a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.nameHusband,"onUpdate:modelValue":l[0]||(l[0]=o=>e.value.nameHusband=o),label:"Nombre del Esposo"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.paternalSurnameHusband,"onUpdate:modelValue":l[1]||(l[1]=o=>e.value.paternalSurnameHusband=o),label:"Apellido Paterno"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.maternalSurnameHusband,"onUpdate:modelValue":l[2]||(l[2]=o=>e.value.maternalSurnameHusband=o),label:"Apellido Materno"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.birthDateHusband,"onUpdate:modelValue":l[3]||(l[3]=o=>e.value.birthDateHusband=o),label:"Fecha de Nacimiento"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.birthPlaceHusband,"onUpdate:modelValue":l[4]||(l[4]=o=>e.value.birthPlaceHusband=o),label:"Lugar de Nacimiento"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.fatherHusband,"onUpdate:modelValue":l[5]||(l[5]=o=>e.value.fatherHusband=o),label:"Padre"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.motherHusband,"onUpdate:modelValue":l[6]||(l[6]=o=>e.value.motherHusband=o),label:"Madre"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.baptismPlaceHusband,"onUpdate:modelValue":l[7]||(l[7]=o=>e.value.baptismPlaceHusband=o),label:"Lugar de Bautizo"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(p,{class:"border-t border-b"},{default:t(()=>[l[19]||(l[19]=M("h3",{class:"mb-2"},"Datos de la esposa",-1)),a(V,null,{default:t(()=>[a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.nameWife,"onUpdate:modelValue":l[8]||(l[8]=o=>e.value.nameWife=o),label:"Nombre de la Esposa"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.paternalSurnameWife,"onUpdate:modelValue":l[9]||(l[9]=o=>e.value.paternalSurnameWife=o),label:"Apellido Paterno"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.maternalSurnameWife,"onUpdate:modelValue":l[10]||(l[10]=o=>e.value.maternalSurnameWife=o),label:"Apellido Materno"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.birthDateWife,"onUpdate:modelValue":l[11]||(l[11]=o=>e.value.birthDateWife=o),label:"Fecha de Nacimiento"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12",md:"6"},{default:t(()=>[a(n,{modelValue:e.value.birthPlaceWife,"onUpdate:modelValue":l[12]||(l[12]=o=>e.value.birthPlaceWife=o),label:"Lugar de Nacimiento"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.fatherWife,"onUpdate:modelValue":l[13]||(l[13]=o=>e.value.fatherWife=o),label:"Padre"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.motherWife,"onUpdate:modelValue":l[14]||(l[14]=o=>e.value.motherWife=o),label:"Madre"},null,8,["modelValue"])]),_:1}),a(d,{cols:"12"},{default:t(()=>[a(n,{modelValue:e.value.baptismPlaceWife,"onUpdate:modelValue":l[15]||(l[15]=o=>e.value.baptismPlaceWife=o),label:"Lugar de Bautizo"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(x,null,{default:t(()=>[a(u,{type:"button",variant:"text",color:"secondary",onClick:l[16]||(l[16]=o=>i.value=!1)},{default:t(()=>l[20]||(l[20]=[c(" Cancelar ")])),_:1}),a(S),a(u,{text:"Guardar",color:"primary",type:"submit",loading:_.value},null,8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},512)]),_:1},8,["modelValue"])}}}),J=B({__name:"marriages",setup(k){const f=v(!1),r=v(!1),b=v([]),_=v(0),i=v({itemsPerPage:10,sortBy:[],page:1,search:"",filters:{}}),e=L(()=>{m()},400),m=async()=>{},H=async()=>{f.value=!0,await m(),f.value=!1};return H(),(l,n)=>{const d=s("v-text-field"),V=s("v-col"),p=s("v-btn"),u=s("v-row"),S=s("v-card-item"),x=s("v-card"),W=w("permission"),N=w("tooltip");return g(),y(x,{title:"Matrimonios",subtitle:"Registros para matrimonios",disabled:f.value},{default:t(()=>[a(S,{class:"border-t border-b"},{default:t(()=>[a(u,{class:"d-flex justify-space-between"},{default:t(()=>[a(V,{cols:"12",md:"4"},{default:t(()=>[a(d,{modelValue:i.value.search,"onUpdate:modelValue":n[0]||(n[0]=D=>i.value.search=D),label:"Buscar",clearable:"",onInput:U(e)},null,8,["modelValue","onInput"])]),_:1}),a(V,{cols:"12",md:"4",class:"d-md-flex d-block justify-end text-end"},{default:t(()=>[P((g(),y(p,{class:"h-md-auto me-2",disabled:f.value},{default:t(()=>[n[1]||(n[1]=c(" nuevo ")),a(U(R),{onOnSuccess:m})]),_:1},8,["disabled"])),[[W,["positions.create"]]]),P(a(p,{class:"h-md-auto",density:"comfortable",icon:"mdi-reload",onClick:H,loading:r.value},null,8,["loading"]),[[N,"Recargar registros"],[W,["positions.index"]]])]),_:1})]),_:1})]),_:1}),P(a(U(z),{options:i.value,loading:r.value,items:b.value,total:_.value,onOnUpdateTable:m},null,8,["options","loading","items","total"]),[[W,["positions.index"]]])]),_:1},8,["disabled"])}}});export{J as default};