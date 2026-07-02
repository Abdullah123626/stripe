// Responsive Navbar.tsx
"use client";
import { useState,useEffect } from "react";
import { Menu,X } from "lucide-react";

const navItems=[{label:"Products",hasDropdown:true},{label:"Solutions",hasDropdown:true},{label:"Developers",hasDropdown:true},{label:"Resources",hasDropdown:true},{label:"Pricing",hasDropdown:false}];

export default function Navbar(){
const [activeItem,setActiveItem]=useState<string|null>(null);
const [isHovered,setIsHovered]=useState(false);
const [scrolled,setScrolled]=useState(false);
const [mobileOpen,setMobileOpen]=useState(false);
useEffect(()=>{const f=()=>setScrolled(window.scrollY>10);window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
return (
<nav onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>{setIsHovered(false);setActiveItem(null);}}
className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isHovered||scrolled?"bg-white border-black/[0.06] shadow-[0_1px_12px_rgba(0,0,0,.04)]":"bg-white/0 backdrop-blur-lg border-black/[.04]"}`}>
<div className="max-w-[1250px] mx-auto h-16 px-4 md:px-8 flex items-center">
<a href="#" className="text-[#0A2540] text-[1.2rem] font-extrabold">stripe</a>

<div className="hidden md:flex items-center w-full">
<ul className="flex gap-1 ml-5">
{navItems.map(i=><li key={i.label} onMouseEnter={()=>i.hasDropdown&&setActiveItem(i.label)}>
<a href="#" className={`flex items-center gap-1 px-2 py-2 text-[11px] rounded ${activeItem===i.label?"text-[#0055de] bg-gray-100":"hover:bg-gray-100"}`}>{i.label}{i.hasDropdown&&<span>v</span>}</a>
</li>)}
</ul>
<div className="flex items-center ml-2"><span className="w-px h-4 bg-black/25 mx-2"/><a href="#" className="text-[11px]">Guide me</a></div>
<div className="ml-auto flex gap-2">
<a href="#" className="px-4 py-2 text-[11px] border rounded">Sign in</a>
<a href="#" className="px-4 py-2 text-[11px] rounded bg-[#635bff] text-white">Contact sales</a>
</div>
</div>

<button className="md:hidden ml-auto" onClick={()=>setMobileOpen(!mobileOpen)}>
{mobileOpen?<X size={24}/>:<Menu size={24}/>}
</button>
</div>

{mobileOpen&&<div className="md:hidden bg-white border-t px-4 py-4">
{navItems.map(i=><a key={i.label} href="#" className="block py-3 border-b text-sm">{i.label}</a>)}
<a href="#" className="block py-3 text-sm">Guide me</a>
<div className="flex flex-col gap-3 mt-4">
<a href="#" className="border rounded py-3 text-center">Sign in</a>
<a href="#" className="bg-[#635bff] text-white rounded py-3 text-center">Contact sales</a>
</div>
</div>}
</nav>
)}
