window.SZLibrary={
  esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))},
  async readFile(file){const ext=(file.name.split(".").pop()||"").toLowerCase();let content="";if(["txt","md","csv"].includes(ext)){content=await file.text()}return {title:file.name,filename:file.name,fileType:ext.toUpperCase(),size:file.size,content,subject:"",source:"upload",status:content?"ready":"saved",url:""}},
  fileSize(n){if(n<1024)return n+" B";if(n<1048576)return (n/1024).toFixed(1)+" KB";return (n/1048576).toFixed(1)+" MB"},
  date(s){if(!s)return "Just added";return new Date(s).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"})}
};