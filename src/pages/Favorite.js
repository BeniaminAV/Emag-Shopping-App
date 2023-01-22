import React from "react";
import { useSelector } from "react-redux";
import { selectItem } from "../slices/favoriteSlice";
import EmptyFavorite from "../components/Favorite/EmptyFavorite";
import { MyFavorite, Header, BgNav, Footer } from "../components/index";

function favorite() {
  const item = useSelector(selectItem);

  return (
    <div>
      <div className="sticky top-0 z-40 bg-white">
        <Header />
        <BgNav />
      </div>

      <div className="bg-[#f2f2f2]">
        {item.length === 0 ? <EmptyFavorite /> : <MyFavorite />}
      </div>

      <Footer />
    </div>
  );
}

export default favorite;
