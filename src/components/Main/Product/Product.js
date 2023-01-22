import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../../slices/favoriteSlice";
import { addToCart } from "../../../slices/cartSlice";
import { useDispatch } from "react-redux";
import { Genius } from "../../../assets";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

const MAX_REVIEW = 200;
const MIN_REVIEW = 1;

function Product({ id, title, price, description, image }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState(0);
  const [rating, setRating] = useState(0);
  const [hasGenius, setIsGeniusEnabled] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Rating/Genius
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setIsGeniusEnabled(Math.random() < 0.5);
    setReview();
  }, []);

  // Add to Favorite/Remove
  const Favorite = () => {
    if (isActive) {
      dispatch(removeFromFavorite({ id }));
      setIsActive(false);
    } else {
      const product = {
        id,
        title,
        price,
        rating,
        review,
        description,
        image,
        hasGenius,
      };

      dispatch(addToFavorite(product));
      setIsActive(true);
    }
  };

  // Add to Cart
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      image,
      hasGenius,
    };

    dispatch(addToCart(product));
  };

  // HeartIcon
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="priority={true} relative z-30 my-2 mx-2 flex  flex-col items-center border bg-white  p-10 hover:shadow-lg">
      {hasGenius && (
        <div className=" absolute top-2 left-2">
          <Image width={55} height={55} src={Genius} alt="genius" className="w-auto h-auto" />
        </div>
      )}

      <div className="absolute top-1 right-2">
        <button
          onClick={() => {
            Favorite();
            handleClick();
          }}
          style={{
            color: isActive ? "red" : "black",
          }}
        >
          {isActive ? (
            <HeartIconSolid className="w-5 cursor-pointer text-red-600" />
          ) : (
            <HeartIconOutline className="w-5 cursor-pointer   text-red-600 hover:text-emag-blue " />
          )}
        </button>
      </div>

      <img
        src={image}
        alt="image"
        className="h-[100px] w-[100px] cursor-pointer object-contain sm:h-[200px] sm:w-[200px]"
      />

      <h4 className="my-6 -mx-7  cursor-pointer line-clamp-2">{title}</h4>

      <div className="absolute bottom-10 left-3 flex cursor-pointer items-center justify-center  text-emag-blue">
        {Array(rating)
          .fill()
          .map((_, i) => {
            return (
              <div key={i}>
                <StarIcon className="h-5 text-yellow-500" />
              </div>
            );
          })}

        {Array(review)
          .fill()
          .map((_, i) => {
            return (
              <p key={i} className="ml-1">
                (
                {Math.floor(Math.random() * (MAX_REVIEW - MIN_REVIEW + 1)) +
                  MIN_REVIEW}
                )
              </p>
            );
          })}
      </div>

      <div className="flex items-center">
        <div className="text-md absolute bottom-3 left-3 font-semibold text-red-600">
          <Currency quantity={price} currency="RON" />
        </div>

        <div className="absolute bottom-2 right-3 cursor-pointer rounded-xl bg-gradient-to-r from-[#4a60c1] to-emag-blue">
          <button onClick={addItemToCart} className="button">
            <ShoppingCartIcon className="mt-2 ml-2 mr-2 w-4 text-white sm:w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
