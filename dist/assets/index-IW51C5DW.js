import{_ as N,h as U,a as $}from"./sacrament.constants-CgpqCj2C.js";import{a as h}from"./selectItems.services-BNeHz74L.js";import{_ as x}from"./Form.vue_vue_type_script_setup_true_lang-BSYwJTTf.js";import{d as G,b as P,c as a,w as e,r as n,h as C,o as s,a as t,i as l,g as c,u as g}from"./index-CVCjnSgw.js";import"./DataTable.types-CX4v7_jN.js";import"./ruleUtils-Dk9EfJu0.js";const W=G({__name:"index",setup(R){const _=P([]),w=async u=>await $(u,2);return(async()=>{_.value=await h()})(),(u,o)=>{const y=n("v-text-field"),f=n("v-col"),r=n("v-btn"),I=n("v-row"),k=n("v-card-item"),p=n("v-icon"),v=n("v-list-item"),D=n("LnxDialogConfirm"),V=n("v-list"),O=n("v-menu"),S=n("LnxDataTable"),T=n("v-card"),m=C("permission"),L=C("tooltip");return s(),a(T,{title:"Confirmaciones",subtitle:"Gestión de confirmaciones"},{default:e(()=>[t(S,{loadDataTable:w,headers:g(U)},{header:e(({request:i,loading:d,init:b,loadingTable:z,debouncedReload:B,reLoadDataTable:E})=>[t(k,{class:"border-t border-b"},{default:e(()=>[t(I,{class:"d-flex justify-space-between align-center"},{default:e(()=>[t(f,{cols:"12",md:"4"},{default:e(()=>[t(y,{modelValue:i.search,"onUpdate:modelValue":j=>i.search=j,label:"Buscar",clearable:"",onInput:B,"onClick:clear":E},null,8,["modelValue","onUpdate:modelValue","onInput","onClick:clear"])]),_:2},1024),t(f,{cols:"12",md:"4",class:"d-md-flex d-block justify-end text-end"},{default:e(()=>[l((s(),a(r,{class:"me-2",disabled:d},{default:e(()=>[o[0]||(o[0]=c(" nuevo ")),t(x,{type:"2",ministersItems:_.value,onOnSuccess:b},null,8,["ministersItems","onOnSuccess"])]),_:2},1032,["disabled"])),[[m,["crear_celebracion_confirmacion"]]]),l(t(r,{density:"comfortable",icon:"mdi-reload",onClick:b,loading:z},null,8,["onClick","loading"]),[[L,"Recargar registros"]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.actions":e(({item:i,loadDataTable:d})=>[l((s(),a(r,{icon:"",size:"small",variant:"text"},{default:e(()=>[t(p,null,{default:e(()=>o[1]||(o[1]=[c(" mdi-dots-vertical ")])),_:1}),t(O,{activator:"parent"},{default:e(()=>[t(V,{nav:""},{default:e(()=>[l((s(),a(v,{title:"Editar",density:"compact",value:"edit"},{prepend:e(()=>[t(p,{size:"small"},{default:e(()=>o[2]||(o[2]=[c(" mdi-pencil ")])),_:1})]),default:e(()=>[t(x,{type:"2",formState:i,onOnSuccess:d,ministersItems:_.value},null,8,["formState","onOnSuccess","ministersItems"])]),_:2},1024)),[[m,["editar_celebracion_confirmacion"]]]),l((s(),a(v,{title:"Eliminar",class:"text-red",density:"compact",value:"delete"},{prepend:e(()=>[t(p,{size:"small"},{default:e(()=>o[3]||(o[3]=[c(" mdi-delete ")])),_:1})]),default:e(()=>[t(D,{onOnConfirm:async()=>{await g(N)(i.id),d()},message:"¿Está seguro de eliminar este registro?"},null,8,["onOnConfirm"])]),_:2},1024)),[[m,["eliminar_celebracion_confirmacion"]]])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[m,["editar_celebracion_confirmacion","eliminar_celebracion_confirmacion"]]])]),"item.participants":e(({item:i})=>[t(r,{link:"",to:`/confirmation/${i.id}/participants`,"prepend-icon":"mdi-account-multiple",variant:"text"},{default:e(()=>o[4]||(o[4]=[c(" Participantes ")])),_:2},1032,["to"])]),_:1},8,["headers"])]),_:1})}}});export{W as default};
