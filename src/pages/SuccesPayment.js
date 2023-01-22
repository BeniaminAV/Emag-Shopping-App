import React from "react";
import { Header, BgNav, Footer } from "../components/index";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function SuccesPayment() {
  const router = useRouter();

  return (
    <>
      <div>
        <Header />
        <BgNav />

        <main className="mx-auto max-w-screen-lg bg-[#f2f2f2]">
          <div className="my-5 flex flex-col bg-white p-10">
            <div className="space-x-2 md:flex md:items-center md:justify-center">
              <h2 className="text-3xl">
                Multumesc frumos , achizitionarea ta a fost confirmata!
              </h2>
              <CheckCircleIcon className="h-10 text-green-500" />
            </div>
            <p className="my-2">
              Vă mulțumim că ați cumpărat de la noi. Vom trimite o confirmare
              pentru articol , a fost expediat, dacă doriți să verificați starea
              comenzilor vă rugăm să apăsați pe linkul de mai jos.
            </p>
            <button
              onClick={() => router.push("/Orders")}
              className="mt-8 h-[36px] bg-[#005BC3] text-white hover:bg-[#004485]"
            >
              Mergi catre "COMENZILE MELE"
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SuccesPayment;
