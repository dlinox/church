import{y as R,z as A,d as z,b as S,r as o,o as y,c as V,w as t,a as e,u as s,g as N,f as B,h as E,i as x,t as F}from"./index-Cg9yRFqc.js";import{i as $}from"./DataTable.types-CX4v7_jN.js";import{e as P,r as O,d as q}from"./ruleUtils-Dk9EfJu0.js";const j="https://church-api.linox.net.pe/api/ministers",H=async p=>{try{const u=R();return(await A(u,j).post("/load-data-table",p)).data.data}catch{return $()}},J=async p=>{try{const u=R();return await A(u,j).post("/save",p),!0}catch{return!1}},K=async p=>{try{const u=R();return await A(u,j).delete(`/delete/${p}`),!0}catch{return!1}},Q=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Núm. de Documento",key:"documentNumber",value:"documentNumber"},{title:"Nombre",key:"name",value:"name"},{title:"Ap. Paterno",key:"paternalLastName",value:"paternalLastName"},{title:"Ap. Materno",key:"maternalLastName",value:"maternalLastName"},{title:"Genero",key:"gender",value:"gender.title"},{title:"Celular",key:"phoneNumber",value:"phoneNumber"},{title:"Correo",key:"email",value:"email"},{title:"Tipo",key:"type",value:"type.title"},{title:"Estado",key:"status",value:"status"}],W=[{value:"001",title:"Parroco"},{value:"002",title:"Vicario"},{value:"003",title:"Diácono"},{value:"004",title:"Ministro"},{value:"006",title:"Sacristán"},{value:"007",title:"Secretario"},{value:"008",title:"Catequista"},{value:"011",title:"Acólito"},{value:"012",title:"Monaguillo"}],X=[{value:"1",title:"Masculino"},{value:"2",title:"Femenino"}],Y={phoneNumber:[],email:[P],type:[O],status:[],documentNumber:[O,q],name:[O],paternalLastName:[],maternalLastName:[],gender:[],birthDate:[]},Z=()=>({phoneNumber:null,email:null,type:null,status:!0,documentType:{value:"01",title:"DNI"},documentNumber:null,name:null,paternalLastName:null,maternalLastName:null,gender:null,birthDate:null}),h=z({__name:"Form",props:{formState:{type:Object,default:()=>({})}},emits:["onSuccess"],setup(p,{emit:u}){const i=u,M=p,r=Y,v=S(null),g=S(!1),_=S(!1),a=S({...Z(),...M.formState}),k=async()=>{const{valid:D}=await v.value.validate();if(!D)return;g.value=!0,await J(a.value)&&(a.value.id==null&&v.value.reset(),i("onSuccess"),_.value=!1),g.value=!1};return(D,l)=>{const c=o("v-text-field"),m=o("v-col"),C=o("v-select"),U=o("v-row"),f=o("v-card-item"),L=o("v-btn"),d=o("v-spacer"),b=o("v-card-actions"),w=o("v-card"),T=o("v-form"),I=o("v-dialog");return y(),V(I,{"max-width":"800",modelValue:_.value,"onUpdate:modelValue":l[10]||(l[10]=n=>_.value=n),activator:"parent"},{default:t(()=>[e(T,{ref_key:"formRef",ref:v,onSubmit:B(k,["prevent"])},{default:t(()=>[e(w,{title:a.value.id?"Editar Registro":"Nuevo Registro"},{default:t(()=>[e(f,{class:"border-t border-b"},{default:t(()=>[e(U,null,{default:t(()=>[e(m,{cols:"4"},{default:t(()=>[e(c,{modelValue:a.value.documentNumber,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.documentNumber=n),label:"Documento",rules:s(r).documentNumber},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"8"},{default:t(()=>[e(c,{label:"Nombre",modelValue:a.value.name,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value.name=n),modelModifiers:{number:!0},rules:s(r).name},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(c,{label:"Apellido paterno",modelValue:a.value.paternalLastName,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.paternalLastName=n),modelModifiers:{number:!0},rules:s(r).paternalLastName},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(c,{label:"Apellido materno",modelValue:a.value.maternalLastName,"onUpdate:modelValue":l[3]||(l[3]=n=>a.value.maternalLastName=n),modelModifiers:{number:!0},rules:s(r).maternalLastName},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"8"},{default:t(()=>[e(c,{label:"Fecha de nacimiento",modelValue:a.value.birthDate,"onUpdate:modelValue":l[4]||(l[4]=n=>a.value.birthDate=n),type:"date",rules:s(r).birthDate},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"4"},{default:t(()=>[e(C,{label:"Género",modelValue:a.value.gender,"onUpdate:modelValue":l[5]||(l[5]=n=>a.value.gender=n),items:s(X),rules:s(r).gender,"return-object":""},null,8,["modelValue","items","rules"])]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(c,{label:"Celular",modelValue:a.value.phoneNumber,"onUpdate:modelValue":l[6]||(l[6]=n=>a.value.phoneNumber=n),modelModifiers:{number:!0},rules:s(r).phoneNumber},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"6"},{default:t(()=>[e(c,{label:"Correo",modelValue:a.value.email,"onUpdate:modelValue":l[7]||(l[7]=n=>a.value.email=n),modelModifiers:{number:!0},rules:s(r).email},null,8,["modelValue","rules"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(C,{label:"Tipo de ministro",modelValue:a.value.type,"onUpdate:modelValue":l[8]||(l[8]=n=>a.value.type=n),items:s(W),rules:s(r).type,"return-object":""},null,8,["modelValue","items","rules"])]),_:1})]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(L,{type:"button",variant:"text",color:"secondary",onClick:l[9]||(l[9]=n=>_.value=!1)},{default:t(()=>l[11]||(l[11]=[N(" Cancelar ")])),_:1}),e(d),e(L,{text:"Guardar",color:"primary",type:"submit",loading:g.value},null,8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1},512)]),_:1},8,["modelValue"])}}}),ae=z({__name:"index",setup(p){return(u,i)=>{const M=o("v-text-field"),r=o("v-col"),v=o("v-btn"),g=o("v-row"),_=o("v-card-item"),a=o("v-icon"),k=o("v-list-item"),D=o("LnxDialogConfirm"),l=o("v-list"),c=o("v-menu"),m=o("v-chip"),C=o("LnxDataTable"),U=o("v-card"),f=E("permission"),L=E("tooltip");return y(),V(U,{title:"Ministros",subtitle:"Gestión de ministros"},{default:t(()=>[e(C,{loadDataTable:s(H),headers:s(Q)},{header:t(({request:d,loading:b,init:w,loadingTable:T,debouncedReload:I,reLoadDataTable:n})=>[e(_,{class:"border-t border-b"},{default:t(()=>[e(g,{class:"d-flex justify-space-between align-center"},{default:t(()=>[e(r,{cols:"12",md:"4"},{default:t(()=>[e(M,{modelValue:d.search,"onUpdate:modelValue":G=>d.search=G,label:"Buscar",clearable:"",onInput:I,"onClick:clear":n},null,8,["modelValue","onUpdate:modelValue","onInput","onClick:clear"])]),_:2},1024),e(r,{cols:"12",md:"4",class:"d-md-flex d-block justify-end text-end"},{default:t(()=>[x((y(),V(v,{class:"me-2",disabled:b},{default:t(()=>[i[0]||(i[0]=N(" nuevo ")),e(s(h),{onOnSuccess:w},null,8,["onOnSuccess"])]),_:2},1032,["disabled"])),[[f,["crear_ministro"]]]),x(e(v,{density:"comfortable",icon:"mdi-reload",onClick:w,loading:T},null,8,["onClick","loading"]),[[L,"Recargar registros"]])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),"item.actions":t(({item:d,loadDataTable:b})=>[x((y(),V(v,{icon:"",size:"small",variant:"text"},{default:t(()=>[e(a,null,{default:t(()=>i[1]||(i[1]=[N(" mdi-dots-vertical ")])),_:1}),e(c,{activator:"parent"},{default:t(()=>[e(l,{nav:""},{default:t(()=>[x((y(),V(k,{title:"Editar",density:"compact",value:"edit"},{prepend:t(()=>[e(a,{size:"small"},{default:t(()=>i[2]||(i[2]=[N(" mdi-pencil ")])),_:1})]),default:t(()=>[e(s(h),{formState:d,onOnSuccess:b},null,8,["formState","onOnSuccess"])]),_:2},1024)),[[f,["editar_ministro"]]]),x((y(),V(k,{title:"Eliminar",class:"text-red",density:"compact",value:"delete"},{prepend:t(()=>[e(a,{size:"small"},{default:t(()=>i[3]||(i[3]=[N(" mdi-delete ")])),_:1})]),default:t(()=>[e(D,{onOnConfirm:async()=>{await s(K)(d.id),b()},message:"¿Está seguro de eliminar este registro?"},null,8,["onOnConfirm"])]),_:2},1024)),[[f,["eliminar_ministro"]]])]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[f,["editar_ministro","eliminar_ministro"]]])]),"item.status":t(({item:d})=>[e(m,{small:"",color:d.status?"info":"error"},{default:t(()=>[N(F(d.status?"Activo":"Inactivo"),1)]),_:2},1032,["color"])]),_:1},8,["loadDataTable","headers"])]),_:1})}}});export{ae as default};