
import LoginForma from "@/components/LoginForma";

export default function LoginPage() {
  return (
    <section className="container-main flex min-h-[75vh] items-center justify-center py-20">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#18181b] p-8 shadow-2xl sm:p-10">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl">
            🔐
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            Admin panel
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Dobrodošli nazad
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            Prijavite se na svoj nalog.
          </p>
        </div>

        <div className="mt-8">
          <LoginForma />
        </div>
      </div>
    </section>
  );
}
