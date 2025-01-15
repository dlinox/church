import{_ as z,c as J,d as G,e as M}from"./Form.vue_vue_type_script_setup_true_lang-CbbcxHqI.js";import{d as L,b as y,r as a,o as _,c as b,w as t,a as o,g as c,u as F,e as H,q as K,v as Q,F as W,x as q,D as j,h as X,t as x,A as R,i as T,_ as Y,f as Z}from"./index-CVCjnSgw.js";import{b as h}from"./selectItems.services-BNeHz74L.js";import{k as ee}from"./sacrament-records.services-BZrvOhck.js";import{r as te}from"./ruleUtils-Dk9EfJu0.js";const oe=L({__name:"BoxSearchPerson",emits:["onSelect"],setup(S,{emit:f}){const p=f,r=y(!1),n=y(!1),u=y(""),i=y([]),d=q(async l=>{if(l==null){i.value=[];return}if(l.length<3)return;n.value=!0;let e=await J(l);i.value=e,n.value=!1},300),g=l=>{p("onSelect",l),r.value=!1,u.value="",i.value=[]};return(l,e)=>{const m=a("v-icon"),v=a("v-btn"),C=a("v-text-field"),N=a("v-card-title"),I=a("v-alert"),w=a("v-card-item"),$=a("v-list-item-subtitle"),P=a("v-list-item"),V=a("v-list"),k=a("v-card"),O=a("v-dialog");return _(),b(O,{"max-width":"600",modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=s=>r.value=s),activator:"parent"},{default:t(()=>[o(k,{title:"Buscar persona"},{append:t(()=>[o(v,{icon:"",onClick:e[0]||(e[0]=s=>r.value=!1),density:"compact",variant:"tonal",color:"muted"},{default:t(()=>[o(m,null,{default:t(()=>e[5]||(e[5]=[c("mdi-close")])),_:1})]),_:1})]),default:t(()=>[o(k,{variant:"tonal",subtitle:"Resultados de la búsqueda",loading:n.value},{default:t(()=>[o(N,null,{default:t(()=>[o(C,{label:"Buscar",clearable:"","onUpdate:modelValue":[F(d),e[1]||(e[1]=s=>u.value=s)],modelValue:u.value},null,8,["onUpdate:modelValue","modelValue"])]),_:1}),i.value.length==0?(_(),b(w,{key:0},{default:t(()=>[o(I,{dense:"",outlined:"",class:"text-center"},{default:t(()=>[e[7]||(e[7]=H("small",{class:"text-secondary d-block"}," No se encontraron resultados, escribe al menos 3 caracteres ",-1)),o(v,{"prepend-icon":"mdi-plus",class:"mt-2"},{default:t(()=>[o(z,{onOnSuccess:e[2]||(e[2]=s=>F(d)(s.documentNumber))}),e[6]||(e[6]=c(" Nueva "))]),_:1})]),_:1})]),_:1})):(_(),b(V,{key:1,dense:"",class:"border-t overflow-y-auto",style:{"max-height":"200px"}},{default:t(()=>[(_(!0),K(W,null,Q(i.value,s=>(_(),b(P,{class:"border-b",color:"primary",key:s.id,title:`${s.documentNumber??""}  ${s.fullName}`},{prepend:t(()=>[o(m,{size:"small"},{default:t(()=>e[8]||(e[8]=[c("mdi-account")])),_:1})]),default:t(()=>[o($,{class:"text-end"},{default:t(()=>[o(v,{density:"compact",color:"info",variant:"text"},{default:t(()=>[o(z,{formState:s,onOnSuccess:e[3]||(e[3]=B=>F(d)(B.documentNumber))},null,8,["formState"]),e[9]||(e[9]=c(" editar "))]),_:2},1024),o(v,{density:"compact",color:"primary",variant:"text",class:"ms-2",onClick:B=>g(s)},{default:t(()=>e[10]||(e[10]=[c(" seleccionar ")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1}))]),_:1},8,["loading"])]),_:1})]),_:1},8,["modelValue"])}}}),ie=L({__name:"PersonField",props:{title:{},modelValue:{},family:{type:Boolean}},emits:["modelValue","onFamily","onRemove","onSelected"],setup(S,{emit:f}){const p=f,r=S,n=y(null),u=j({get:()=>(r.modelValue.personId?(i(r.modelValue.personId),p("onSelected",r.modelValue.personId)):n.value=null,r.modelValue),set:l=>p("modelValue",l)}),i=async l=>{let e=await G(l);n.value=e},d=()=>{u.value.personId=null,r.family&&u.value.family.map(l=>{l.personId=null}),p("modelValue",u.value)},g=async l=>{if(n.value=l,u.value.personId=l.id,r.family){let e=await M(l.id);u.value.family.map(m=>{e.map(v=>{v.role==m.role&&(m.personId=v.personId)}),e.length==0&&(m.personId=null)})}p("modelValue",{personId:l.id})};return(l,e)=>{const m=a("v-btn"),v=a("v-icon"),C=a("v-card-text"),N=a("v-card-item"),I=a("v-list-item-title"),w=a("v-list-item-subtitle"),$=a("v-list-item"),P=a("v-spacer"),V=a("v-card-actions"),k=a("v-card"),O=X("tooltip");return _(),b(k,{"data-value":u.value.personId,rounded:"0",elevation:"0",class:"border"},{default:t(()=>[o(m,{rounded:"0",variant:"text","prepend-icon":n.value?"mdi-account-edit":"mdi-account-search",block:"",class:"text-start justify-start"},{default:t(()=>[o(oe,{onOnSelect:g}),c(" "+x(l.title?l.title:"Persona"),1)]),_:1},8,["prepend-icon"]),n.value?R("",!0):(_(),b(N,{key:0,class:"text-center"},{default:t(()=>[o(v,{size:"large",class:"text-secondary"},{default:t(()=>e[2]||(e[2]=[c(" mdi-account-search ")])),_:1}),o(C,{class:"text-secondary"},{default:t(()=>e[3]||(e[3]=[c(" Seleccione una persona ")])),_:1})]),_:1})),n.value?(_(),b($,{key:1},{default:t(()=>[o(I,null,{default:t(()=>{var s,B,U,A,D,E;return[c(x((B=(s=n.value)==null?void 0:s.documentType)==null?void 0:B.title)+" - "+x((U=n.value)==null?void 0:U.documentNumber)+" | "+x((A=n.value)==null?void 0:A.name)+" "+x((D=n.value)==null?void 0:D.paternalLastName)+" "+x((E=n.value)==null?void 0:E.maternalLastName),1)]}),_:1}),o(w,{class:"my-2"},{default:t(()=>{var s;return[o(v,{size:"small"},{default:t(()=>e[4]||(e[4]=[c(" mdi-calendar ")])),_:1}),c(" "+x((s=n.value)==null?void 0:s.birthDate),1)]}),_:1}),o(w,{class:"my-2"},{default:t(()=>{var s,B,U,A,D;return[o(v,{size:"small"},{default:t(()=>e[5]||(e[5]=[c(" mdi-map-marker ")])),_:1}),c(" "+x((B=(s=n.value)==null?void 0:s.birthCountry)==null?void 0:B.title)+" - "+x((A=(U=n.value)==null?void 0:U.birthLocation)==null?void 0:A.title)+", "+x((D=n.value)==null?void 0:D.birthLocationDetail),1)]}),_:1})]),_:1})):R("",!0),n.value?(_(),b(V,{key:2,class:"py-1"},{default:t(()=>[o(P),T((_(),b(m,{density:"comfortable",variant:"tonal","prepend-icon":"mdi-account-edit",color:"info"},{default:t(()=>[o(z,{formState:n.value,onOnSuccess:e[0]||(e[0]=s=>i(n.value.id))},null,8,["formState"]),e[6]||(e[6]=c(" Editar "))]),_:1})),[[O,"Remover"]]),T(o(m,{density:"compact",variant:"tonal",icon:"mdi-delete",color:"error",onClick:e[1]||(e[1]=s=>d())},null,512),[[O,"Remover"]])]),_:1})):R("",!0)]),_:1},8,["data-value"])}}}),ae=L({__name:"LnxAutocompleteServer",props:{modelValue:{},service:{type:Function},minChars:{}},emits:["update:modelValue"],setup(S,{emit:f}){const p=f,r=S,n=y([]),u=j({get:()=>r.modelValue,set:d=>p("update:modelValue",d)}),i=q(async d=>{d=d.trim();const g=r.minChars||3;if(d.length<g)return;let l=await r.service(d);n.value=l},350);return(d,g)=>{const l=a("v-autocomplete");return _(),b(l,{modelValue:u.value,"onUpdate:modelValue":g[0]||(g[0]=e=>u.value=e),items:n.value,noDataText:"No se encontraron resultados, escribe al menos 3 caracteres","onUpdate:search":F(i),"return-object":"",clearable:""},null,8,["modelValue","items","onUpdate:search"])}}}),de=L({__name:"DefineParameters",props:{type:{}},setup(S){const f=y(!1),p=y(!1),r=S,n=y({defaultBook:null}),u=async l=>await h(r.type,l),i={1:"baptismParameters",2:"confirmationParameters",4:"marriageParameters"},d=async()=>{p.value=!0;let l={defaultBook:n.value.defaultBook};const e=i[r.type];localStorage.setItem(e,JSON.stringify(l)),p.value=!1,f.value=!1};return(()=>{const l=i[r.type];let e=localStorage.getItem(l);if(e){let m=JSON.parse(e);n.value.defaultBook=m.defaultBook}})(),(l,e)=>{const m=a("v-alert"),v=a("v-col"),C=a("v-row"),N=a("v-card-item"),I=a("v-btn"),w=a("v-spacer"),$=a("v-card-actions"),P=a("v-card"),V=a("v-dialog");return _(),b(V,{"max-width":"400",modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=k=>f.value=k),activator:"parent"},{default:t(()=>[o(P,{title:"Definir parámetros"},{default:t(()=>[o(m,{density:"compact",variant:"tonal",color:"info",icon:"mdi-information",class:"text-subtitle-2"},{default:t(()=>e[3]||(e[3]=[c(" Estos valores se guardarán en tu navegador y se usarán como predeterminados al crear un acta. ")])),_:1}),o(N,{class:"border-t border-b"},{default:t(()=>[o(C,null,{default:t(()=>[o(v,{cols:"12"},{default:t(()=>[o(ae,{modelValue:n.value.defaultBook,"onUpdate:modelValue":e[0]||(e[0]=k=>n.value.defaultBook=k),service:u,label:"Libro predeterminado",autocomplete:"off",minChars:1},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),o($,null,{default:t(()=>[o(I,{type:"button",variant:"text",color:"secondary",onClick:e[1]||(e[1]=k=>f.value=!1)},{default:t(()=>e[4]||(e[4]=[c(" Cancelar ")])),_:1}),o(w),o(I,{text:"Guardar",color:"primary",type:"button",onClick:d,loading:p.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}}),ce=L({__name:"AnnularActForm",props:{record:{}},emits:["onSuccess"],setup(S,{emit:f}){const p=f,r=S,n=y({id:r.record.id,observation:r.record.observation}),u=y(!1),i=y(!1),d=async()=>{u.value=!0,await ee(n.value)&&(p("onSuccess"),i.value=!1),u.value=!1};return(async()=>{})(),(l,e)=>{const m=a("v-textarea"),v=a("v-card-item"),C=a("v-btn"),N=a("v-spacer"),I=a("v-card-actions"),w=a("v-card"),$=a("v-form"),P=a("v-dialog");return _(),b(P,{"max-width":"500",modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=V=>i.value=V),activator:"parent",persistent:""},{default:t(()=>[o($,{ref:"formRef",onSubmit:Z(d,["prevent"])},{default:t(()=>[o(w,{title:"Anular Acta"},{default:t(()=>[o(v,{class:"pa-0 border-t border-b"},{default:t(()=>[o(m,{modelValue:n.value.observation,"onUpdate:modelValue":e[0]||(e[0]=V=>n.value.observation=V),class:"pa-3",label:"Razón de anulación",rows:"2",rules:[F(te)]},null,8,["modelValue","rules"])]),_:1}),o(I,null,{default:t(()=>[o(C,{type:"button",variant:"text",color:"secondary",onClick:e[1]||(e[1]=V=>i.value=!1)},{default:t(()=>e[3]||(e[3]=[c(" Cancelar ")])),_:1}),o(N),o(C,{disabled:!n.value.observation,color:"error",type:"button",loading:u.value},{default:t(()=>[o(Y,{onOnConfirm:d,title:"Anular Acta",message:"¿Estás seguro de anular el acta?"}),e[4]||(e[4]=c(" Anular "))]),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"])}}});export{ie as _,ae as a,de as b,ce as c};
