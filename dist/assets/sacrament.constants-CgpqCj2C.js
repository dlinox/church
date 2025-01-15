import{y as a,z as s}from"./index-CVCjnSgw.js";import{i as l}from"./DataTable.types-CX4v7_jN.js";const o="https://church-api.linox.net.pe/api/sacraments",c=async(t,e)=>{try{const i=a();return(await s(i,o).post("/load-data-table/"+e,t)).data.data}catch{return l()}},b=async t=>{try{const e=a();return await s(e,o).post("/save",t),!0}catch{return!1}},k=async t=>{try{const e=a();return(await s(e,o).get(`/get-sacrament-by-id/${t}`)).data.data}catch{return null}},y=async t=>{try{const e=a();return await s(e,o).delete(`/delete/${t}`),!0}catch{return!1}},d=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Fecha de celebración",key:"sacraments.date",value:"dateFormatted"},{title:"Celebrante",key:"minister.name",value:"minister.name",sortable:!1},{title:"Parroquia",key:"parish.name",value:"parish.name",sortable:!1},{title:"Participantes",key:"participants",value:"participants",sortable:!1}],v=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Bautizando",key:"fellow",value:"fellow"},{title:"Padres",key:"fellowParents",value:"fellowParents"},{title:"Padrinos",key:"godparents",value:"godparents"},{title:"Libro",key:"bookNumber",value:"bookNumber"},{title:"Folio",key:"folioNumber",value:"folioNumber"},{title:"Acta",key:"actNumber",value:"actNumber"},{title:"Emisión",key:"issueDate",value:"issueDate"},{title:"Observación",key:"observation",value:"observation"},{title:"Estado",key:"status",value:"status"}],m=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Confirmado",key:"fellow",value:"fellow"},{title:"Padres",key:"fellowParents",value:"fellowParents"},{title:"Padrinos",key:"godparents",value:"godparents"},{title:"Libro",key:"bookNumber",value:"bookNumber"},{title:"Folio",key:"folioNumber",value:"folioNumber"},{title:"Acta",key:"actNumber",value:"actNumber"},{title:"Emisión",key:"issueDate",value:"issueDate"},{title:"Observación",key:"observation",value:"observation"},{title:"Estado",key:"status",value:"status"}],p=[{title:"Op.",key:"actions",value:"actions",fixed:!0,width:"50px",sortable:!1},{title:"Esposo",key:"husband",value:"husband"},{title:"Esposa",key:"wife",value:"wife"},{title:"Libro",key:"bookNumber",value:"bookNumber"},{title:"Folio",key:"folioNumber",value:"folioNumber"},{title:"Acta",key:"actNumber",value:"actNumber"},{title:"Emisión",key:"issueDate",value:"issueDate"},{title:"Anotaciones marginales",key:"observation",value:"observation"},{title:"Estado",key:"status",value:"status"}];export{y as _,c as a,k as b,v as c,m as d,b as e,p as f,d as h};
