import Image from "next/image";

export default function Pocetna() {
  return (
    <div>
      <Image
        src="/slike/profil.jpg"
        alt="Moja slika"
        width={500}
        height={400}
        className="rounded-2xl"
      />
    </div>
  );
}