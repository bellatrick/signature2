import {
  MagnifyingGlassIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc: "/assets/img1.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc: "/assets/img1.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 3,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc: "/assets/img1.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 4,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc: "/assets/img1.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  {
    id: 5,
    name: "Zip Tote Basket",
    color: "White and black",
    href: "#",
    imageSrc: "/assets/img1.png",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    price: "$140",
  },
  // More products...
];
const MixShop = () => {
  const [Mix, setMix] = useState([]);
  console.log(Mix)
  return (
    <div>
      <div className="bg-primary flex justify-between divide-x divide-secondary">
        <div className="mx-auto transition-all duration-700 max-w-2xl basis-[5/6] py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-white">Products</h2>
            <div>
              <div className="relative mt-1 rounded-md shadow-sm border-secondary border px-2 py-2">
                <div className="pointer-events-none  bg-primary absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full text-white rounded-md bg-transparent border-gray-300 pl-10 focus:border-none outline-none focus:ring-none sm:text-sm"
                  placeholder="Search products"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative border border-secondary pb-4">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6" onClick={() => setMix([...Mix, product])}>
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-secondary py-2 px-8 text-sm font-medium text-white hover:bg-gray-700"
                  >
                    Add to mixure
                    <span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {Mix.length >= 1 && (
          <div className="mt-40 w-[400px] divide-y divide-gray-600 justify-self-center flex flex-col gap-3 basis-[1/6]">
            {Mix.map((item) => (
              <div key={item.id} className="text-white py-1 justify-start pl-4 flex gap-4 items-center">
                <img
                  className="h-12 w-12 rounded-sm cover"
                  src={item.imageSrc}
                  alt=""
                />
                <p>{item.name}</p>
                <TrashIcon
                  onClick={() =>
                    setMix(Mix.filter((mixture) => mixture.id !== item.id))
                  }
                  className="h-6 "
                />
              </div>
            ))}
             <a
                  href="#_"
                  class="relative mx-4 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-400 ease-in-out group-hover:text-white">
                    Add to cart
                  </span>
                </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default MixShop;
