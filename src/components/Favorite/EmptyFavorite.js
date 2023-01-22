import React from "react";
import { useRouter } from "next/router";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

function EmptyFavorite() {
  const router = useRouter();

  return (
    <div className="mx-2 flex h-[500px] items-center justify-center">
      <div className="mb-10 w-[550px]">
        <h2 className="line flex items-center justify-center py-3 text-center text-2xl">
          Hmm, niciun produs in lista ta. <br /> Uite niste recomandari care
          te-ar putea inspira.
        </h2>
        <p className="text-center">
          Adauga acum la Favorite si fa-ti liste dupa preferinte. <br /> Le poti
          share-ui oricand cu prietenii si poti salva la Favorite
          <span className="flex items-center justify-center">
            produsele din cos ca sa le cumperi mai tarziu.
            <HeartIconSolid className="w-5 truncate text-red-600" />
          </span>
        </p>
        <div
          onClick={() => router.push("/")}
          className="flex items-center justify-center py-3"
        >
          <button className="h-[36px] w-[181px] rounded-sm bg-[#005BC3] text-white hover:bg-[#004485] hover:underline">
            Vezi Produse
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmptyFavorite;
