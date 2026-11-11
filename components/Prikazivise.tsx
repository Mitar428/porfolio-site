"use Client";

import { useState } from "react";

export default function prikazivise(){
    const [otvoreno,setotvoreno]=useState(false);

    return(
         <div className="mt-6">
        <button
          onClick={() => setotvoreno(!otvoreno)}
          className="rounded bg-black px-4 py-2 text-white"
        >
          {otvoreno ? "Sakrij" : "Prikaži više"}
        </button>
        {otvoreno && (
          <p className="mt-4 text-zinc-600">
            Volim da pravim aplikacije od nule i da razumem svaki deo koda.
          </p>
        )}
      </div>
    )
}