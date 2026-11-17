import { Resend } from "resend";

export async function POST(request: Request) {

  const { ime, email, poruka } = await request.json();

  // 2. Osnovna provera: sva polja moraju postojati
  if (!ime || !email || !poruka) {
    return Response.json({ error: "Popuni sva polja." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);


  const { data, error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [process.env.MAIL_TO as string],
    replyTo: email,
    subject: `Nova poruka sa sajta od ${ime}`,
    text: `Ime: ${ime}\nEmail: ${email}\n\n${poruka}`,
  });

 
  if (error) {
    console.error("Resend greška:", error);
    return Response.json({ error: "Slanje nije uspelo." }, { status: 500 });
  }


  return Response.json({ id: data?.id });
}