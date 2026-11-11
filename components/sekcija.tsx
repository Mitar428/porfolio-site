import type { ReactNode } from "react";

interface SekcijaProps{
    naslov:string;
    children:ReactNode;
}

export default function sekcija({naslov,children}:SekcijaProps){
    return(
        <section className="mt-12">
            <h2 className="mt-12 font-semibold">{naslov}</h2>
            <div className="mt-4">{children}</div>
        </section>
    )
}