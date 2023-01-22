import React from "react";
import { useRouter } from "next/router";

function EmptyOrder() {
  const router = useRouter();

  return (
    <div className="mx-2 flex h-[500px] items-center justify-center bg-[#f2f2f2]">
      <div className="mb-10 w-[250px]">
        <h2 className="flex items-center justify-center py-3 text-3xl">
          Ne pare rau ! 
        </h2>
        <p className="text-center">
          Dar nu ai nici o comanda plasata pana acum.
        </p>
        <div
          onClick={() => router.push("/")}
          className="flex items-center justify-center py-3"
        >
          <button className="h-[36px] w-[181px] rounded-sm bg-[#005BC3] text-white hover:bg-[#004485] hover:underline">
            Intoarce-te la magazin
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyOrder;
