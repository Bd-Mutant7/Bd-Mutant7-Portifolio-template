
"use client"
import {useState} from "react"

export default function Chatbot(){

const [messages,setMessages]=useState([])
const [input,setInput]=useState("")

function send(){

if(!input)return

const user={role:"user",text:input}

const bot={
role:"bot",
text:"AI assistant placeholder. Connect to OpenAI API to answer questions about Peter Kariuki's portfolio."
}

setMessages([...messages,user,bot])
setInput("")

}

return(

<section className="max-w-3xl mx-auto py-20">

<h2 className="text-2xl mb-6">AI Portfolio Assistant</h2>

<div className="card h-64 overflow-y-auto mb-4 text-sm">

{messages.map((m,i)=>(
<div key={i}>
<strong>{m.role}:</strong> {m.text}
</div>
))}

</div>

<div className="flex gap-2">

<input
value={input}
onChange={e=>setInput(e.target.value)}
className="flex-1 p-2 text-black"
placeholder="Ask about projects or skills"
/>

<button
onClick={send}
className="bg-white text-black px-4"
>
Send
</button>

</div>

</section>

)

}
