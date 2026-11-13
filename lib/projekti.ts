
export interface Projekat{
    slug:string;
    naslov:string;
    opis:string;
    tehnologije: string [];
    godina:number,


}

  export const projekti: Projekat[] = [
       {
       slug: "web-prodavnica",
        naslov: "Web prodavnica",
        opis: "Online prodavnica sa korpom, nalozima i administracijom.", 
        tehnologije: ["PHP", "MySQL", "Twig","laravel","boostrap","blade"],
        godina: 2025,
        
      },
     {
      slug: "lista-zadataka",
      naslov: "Lista zadataka",
      opis: "Aplikacija za zadatke sa dodavanjem, brisanjem i filtriranjem.",
      tehnologije: ["JavaScript", "HTML", "CSS"],
      godina: 2025,
     },
    {
      slug: "portfolio-sajt",
      naslov: "Portfolio sajt",
      opis: "Ovaj sajt, napravljen u Next.js-u tokom prakse.",      
      tehnologije: ["Next.js", "TypeScript", "Tailwind"],
      godina: 2026,
    },
  ];
 
  export function nadjiProjekat(slug: string): Projekat | undefined {
    return projekti.find((p) => p.slug === slug);
  }