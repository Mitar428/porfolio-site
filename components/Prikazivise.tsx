
"use client";

import { useState } from "react";

export default function Prikazivise() {
  const [otvoreno, setOtvoreno] = useState(false);

  return (
    <div className="mt-8 max-w-xl">
      <div
        className={`overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-500 ${
          otvoreno ? "p-6" : "p-5"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              O meni
            </p>

            <h3 className="mt-1 text-xl font-bold text-zinc-900">
              Upoznaj moj rad
            </h3>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
            💻
          </div>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out ${
            otvoreno
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm leading-7 text-zinc-600">
              Volim da pravim aplikacije od nule i da razumem svaki deo koda.
              Posebno me zanimaju moderan web dizajn, razvoj aplikacija i
              stvaranje praktičnih digitalnih rešenja.
            </p>
          </div>
        </div>

        <button
          onClick={() => setOtvoreno(!otvoreno)}
          aria-expanded={otvoreno}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/20 active:scale-[0.98]"
        >
          {otvoreno ? "Sakrij sadržaj" : "Prikaži više"}

          <span
            className={`transition-transform duration-300 ${
              otvoreno ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>
      </div>
    </div>
  );
}
