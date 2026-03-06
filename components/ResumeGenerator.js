
"use client"
import {useState} from "react"

export default function ResumeGenerator(){

const [resume,setResume]=useState("")

async function generate(){

const repos=await fetch("https://api.github.com/users/Bd-Mutant7/repos")
.then(r=>r.json())

const top=repos.slice(0,5)

let text="Peter Kariuki\nCybersecurity Developer\n\nKey Projects:\n"

top.forEach(r=>{
text+=`- ${r.name}: ${r.description || ""}\n`
})

setResume(text)

}

return(
<section id="resume" className="max-w-4xl mx-auto py-20">

<h2 className="text-2xl mb-6">Auto Generate Resume</h2>

<button
onClick={generate}
className="px-4 py-2 bg-white text-black rounded"
>
Generate Resume From GitHub
</button>

<pre className="card mt-6 whitespace-pre-wrap">
{resume}
</pre>

</section>
)
}
