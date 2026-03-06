
"use client"
import {useEffect,useState} from "react"

export default function PacketSniffer(){

const [packets,setPackets]=useState([])

useEffect(()=>{

const interval=setInterval(()=>{

const protocols=["TCP","UDP","HTTP","HTTPS","DNS"]

const packet={
time:new Date().toLocaleTimeString(),
src:"192.168.1."+Math.floor(Math.random()*255),
dst:"10.0.0."+Math.floor(Math.random()*255),
protocol:protocols[Math.floor(Math.random()*protocols.length)]
}

setPackets(p=>[packet,...p.slice(0,10)])

},1000)

return()=>clearInterval(interval)

},[])

return(

<section className="max-w-5xl mx-auto py-20">

<h2 className="text-2xl mb-6">Interactive Packet Sniffer Demo</h2>

<div className="card text-sm">

{packets.map((p,i)=>(
<div key={i}>
[{p.time}] {p.src} → {p.dst} ({p.protocol})
</div>
))}

</div>

</section>

)

}
