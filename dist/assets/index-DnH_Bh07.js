import{d as V,e as u,o as k,c as C,w as l,r as o,b as a,a as n,f as I,u as p,g as B,t as N,s as S}from"./index-CbSYrZ8Q.js";import{r as c}from"./ruleUtils-DaB-ACZt.js";const v={email:[c],password:[c]},U={class:"text-center"},A=V({__name:"index",setup(D){const t=u({email:"lnx.dvlpr@gmail.com",password:"linox123"}),r=u(!1),s=u(!1),f=async()=>{r.value=!0,await S(t.value),r.value=!1};return(F,e)=>{const m=o("v-text-field"),d=o("v-col"),_=o("v-btn"),w=o("v-row"),x=o("v-form"),g=o("v-card-item"),b=o("v-card"),y=o("v-container");return k(),C(y,{class:"h-100 d-flex justify-space-between align-center flex-column"},{default:l(()=>[e[5]||(e[5]=a("div",null,null,-1)),n(b,{class:"w-md-75 bg-transparent",elevation:"0"},{default:l(()=>[e[4]||(e[4]=a("div",{class:"pa-4"},[a("h3",{class:""},"Bienvenido de nuevo"),a("p",{class:""},"Ingrese sus credenciales para acceder al sistema.")],-1)),n(g,null,{default:l(()=>[n(x,{onSubmit:I(f,["prevent"])},{default:l(()=>[n(w,null,{default:l(()=>[n(d,{cols:"12"},{default:l(()=>[n(m,{label:"Usuario",modelValue:t.value.email,"onUpdate:modelValue":e[0]||(e[0]=i=>t.value.email=i),"prepend-inner-icon":"mdi-email",type:"text",rules:p(v).email},null,8,["modelValue","rules"])]),_:1}),n(d,{cols:"12"},{default:l(()=>[n(m,{autocomplete:"off",modelValue:t.value.password,"onUpdate:modelValue":e[1]||(e[1]=i=>t.value.password=i),"prepend-inner-icon":"mdi-lock","append-inner-icon":s.value?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[2]||(e[2]=()=>s.value=!s.value),label:"Contraseña",rules:p(v).password,type:s.value?"text":"password"},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),n(d,{cols:"12"},{default:l(()=>[n(_,{type:"submit",color:"primary",block:"",loading:r.value},{default:l(()=>e[3]||(e[3]=[B(" Ingresar ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a("div",U,[a("small",null," Lnx © "+N(new Date().getFullYear()),1)])]),_:1})}}});export{A as default};
