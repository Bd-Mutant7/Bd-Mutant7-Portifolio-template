
export default function Blog(){

const posts=[
{title:"Understanding Packet Sniffing",date:"2025"},
{title:"Modern Cybersecurity Threats",date:"2025"},
{title:"Privacy Tools Guide",date:"2024"}
]

return(
<section id="blog" className="max-w-4xl mx-auto py-20">

<h2 className="text-2xl mb-8">Cybersecurity Blog</h2>

<div className="space-y-6">

{posts.map((p,i)=>(
<div key={i} className="card">
<h3>{p.title}</h3>
<p className="text-sm text-gray-400">{p.date}</p>
</div>
))}

</div>

</section>
)
}
