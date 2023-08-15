import React from "react";

import Prof_Navbar from "@/components/Prof_Navbar"
export default function Layout({children}) {
  
    return (
        <main >
        <div className="max-w-3xl mx-auto p-4">
           <Prof_Navbar/>
           {children}
        </div>
           
        </main>
    )
}