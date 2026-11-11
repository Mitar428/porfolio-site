"use server";
import { redirect } from "next/navigation";

export async function posaljiporuku(formData:FormData) {
    const ime=formData.get("ime");
    const email=formData.get("email");
    const poruka=formData.get("poruka");

    console.log("nova poruka",{ime,email,poruka});
    redirect("/kontakt/hvala");
    
}