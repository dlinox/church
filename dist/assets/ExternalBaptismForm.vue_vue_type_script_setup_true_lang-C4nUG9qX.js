import{d as I,b as d,r as o,o as N,c as S,w as a,a as t,u as U,g as m,f as E}from"./index-CVCjnSgw.js";import{c as F}from"./selectItems.services-BNeHz74L.js";import{j as $}from"./sacrament-records.services-BZrvOhck.js";import{a as j}from"./AnnularActForm.vue_vue_type_script_setup_true_lang-Dkn1F1in.js";const T=I({__name:"ExternalBaptismForm",props:{id:{},type:{}},emits:["onSuccess"],setup(p,{emit:_}){const v=_,i=p,l=d({personId:i.id,date:null,parish:null,type:i.type}),s=d(!1),r=d(!1),f=async()=>{r.value=!0,await $(l.value)&&(v("onSuccess"),s.value=!1),r.value=!1};return(async()=>{})(),(b,e)=>{const x=o("v-text-field"),u=o("v-col"),V=o("v-row"),y=o("v-card-item"),c=o("v-btn"),g=o("v-spacer"),w=o("v-card-actions"),C=o("v-card"),B=o("v-form"),k=o("v-dialog");return N(),S(k,{"max-width":"500",modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=n=>s.value=n),activator:"parent",persistent:""},{default:a(()=>[t(B,{ref:"formRef",onSubmit:E(f,["prevent"])},{default:a(()=>[t(C,{title:"Nuevo registro externo"},{default:a(()=>[t(y,{class:"border-t border-b"},{default:a(()=>[t(V,null,{default:a(()=>[t(u,{cols:"12"},{default:a(()=>[t(x,{modelValue:l.value.date,"onUpdate:modelValue":e[0]||(e[0]=n=>l.value.date=n),label:"Fecha de celebración",type:"date"},null,8,["modelValue"])]),_:1}),t(u,{cols:"12"},{default:a(()=>[t(j,{modelValue:l.value.parish,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value.parish=n),service:U(F),label:"Parroquia de celebración",autocomplete:"off"},null,8,["modelValue","service"])]),_:1})]),_:1})]),_:1}),t(w,null,{default:a(()=>[t(c,{type:"button",variant:"text",color:"secondary",onClick:e[2]||(e[2]=n=>s.value=!1)},{default:a(()=>e[4]||(e[4]=[m(" Cancelar ")])),_:1}),t(g),t(c,{type:"submit",loading:r.value},{default:a(()=>e[5]||(e[5]=[m(" Guardar ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])}}});export{T as _};
