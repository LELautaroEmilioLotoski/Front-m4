"use client";
import React from "react";
import IProducts from "@/interfaces/IProducts";

const Card: React.FC<IProducts> = ({ image, name, price }) => {

  return (
    <div className="bg-slate-300 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300 transform flex flex-col h-full">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <hr className="m-2 bg-black" />

      <div className="p-4 flex justify-between">
        <h3 className="text-xl font-semibold text-gray-700">{name}</h3>
        <div className="flex justify-end items-end">
          <p className="text-lg font-bold text-gray-900">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
