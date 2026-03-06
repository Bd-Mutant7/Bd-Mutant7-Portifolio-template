
"use client"
import {useEffect,useState} from "react"

export default function Projects(){

const [repos,setRepos]=useState([])

useEffect(()=>{
fetch("https://api.github.com/users/Bd-Mutant7/repos")
.then(r=>r.json())
.then(data=>{
data.sort((a,b)=>b.stargazers_count-a.stargazers_count)
setRepos(data)
})
},[])

return(
<section id="projects" className="max-w-6xl mx-auto py-20">
<h2 className="text-2xl mb-8">Projects</h2>
<div className="grid md:grid-cols-3 gap-6">
{repos.map((repo,i)=>(
<a key={i} href={repo.html_url} target="_blank" className="card">
<h3>{repo.name}</h3>
<p className="text-sm text-gray-400 mt-2">
{repo.description || "GitHub repository"}
</p>
</a>
))}
</div>
</section>
)
}
