import {projekti}from "@/lib/projekti";

export async function GET() {
    return Response.json(projekti);
    
}