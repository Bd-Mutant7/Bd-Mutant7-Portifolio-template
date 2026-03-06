
export default function Skills(){

const skills=[
"Wireshark","Nmap","Metasploit","Burp Suite",
"Linux","Python","Network Analysis","Threat Intelligence"
]

return(
<section className="max-w-5xl mx-auto py-20">
<h2 className="text-2xl mb-6">Security Tools</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{skills.map((s,i)=>(
<div key={i} className="card text-center">{s}</div>
))}
</div>
</section>
)
}
