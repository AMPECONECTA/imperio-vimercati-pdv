/**
 * Exemplo didático de backend serverless para GitHub Sync Seguro.
 * NÃO hospede este arquivo no GitHub Pages como segredo: use Vercel, Netlify Functions,
 * Cloudflare Workers ou outro backend com variáveis de ambiente protegidas.
 * Env necessárias: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH.
 * Endpoints sugeridos: GET /api/db/:file, POST /api/db/:file, POST /api/upload, POST /api/backup.
 */
const token=process.env.GITHUB_TOKEN, owner=process.env.GITHUB_OWNER, repo=process.env.GITHUB_REPO, branch=process.env.GITHUB_BRANCH||'main';
async function github(path,method='GET',body){const r=await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`,{method,headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json','User-Agent':'imperio-vimercati-pdv'},body:body&&JSON.stringify(body)}); if(!r.ok) throw new Error(await r.text()); return r.json()}
export default async function handler(req,res){try{if(!token) return res.status(500).json({error:'GITHUB_TOKEN ausente no backend'}); if(req.method==='POST'&&req.url.includes('/api/backup')){const name=`database/backups/backup-${new Date().toISOString().replace(/[:T]/g,'-').slice(0,16)}.json`; const content=Buffer.from(JSON.stringify(req.body,null,2)).toString('base64'); const out=await github(name,'PUT',{message:`backup PDV ${name}`,content,branch}); return res.json({ok:true,path:name,out})} return res.status(404).json({error:'Endpoint exemplo. Implemente /api/db/:file e /api/upload conforme seu provedor.'})}catch(e){res.status(500).json({error:e.message})}}
