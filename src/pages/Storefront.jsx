import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// const footerNavigation = {
//   shop: [
//     { name: "Bags", href: "#" },
//     { name: "Tees", href: "#" },
//     { name: "Objects", href: "#" },
//     { name: "Home Goods", href: "#" },
//     { name: "Accessories", href: "#" },
//   ],
//   company: [
//     { name: "Who we are", href: "#" },
//     { name: "Sustainability", href: "#" },
//     { name: "Press", href: "#" },
//     { name: "Careers", href: "#" },
//     { name: "Terms & Conditions", href: "#" },
//     { name: "Privacy", href: "#" },
//   ],
//   account: [
//     { name: "Manage Account", href: "#" },
//     { name: "Returns & Exchanges", href: "#" },
//     { name: "Redeem a Gift Card", href: "#" },
//   ],
//   connect: [
//     { name: "Contact Us", href: "#" },
//     { name: "Twitter", href: "#" },
//     { name: "Instagram", href: "#" },
//     { name: "Pinterest", href: "#" },
//   ],
// };

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StoreFront() {
  return (
    <div className="bg-primary">
      <header className="relative overflow-hidden">
        {/* Hero section */}
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Perfume Mixology
              </h1>
              <p className="mt-4 animate-topslide text-xl text-gray-100">
                Create your own signature scent with our top rated combos. You
                can never go wrong when you mix these scents together.
              </p>

              <div className="flex justify-center relative z-[100] mt-24 hover:px-10">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                >
                  <span class="w-48 h-48 rounded rotate-[-40deg] bg-secondary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span class="relative w-full text-left text-black transition-colors duration-400 ease-in-out group-hover:text-white">
                    Shop collections
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 animate-slide w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="/assets/img1.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 animate-topslide overflow-hidden rounded-lg">
                          <img
                            src="/assets/img2.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 animate-leftslide overflow-hidden rounded-lg">
                          <img
                            src="/assets/img3.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 animate-bottomslide overflow-hidden rounded-lg">
                          <img
                            src="/assets/img4.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 animate-topslide overflow-hidden rounded-lg">
                          <img
                            src="/assets/img5.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 animate-topslide overflow-hidden rounded-lg">
                          <img
                            src="/assets/img6.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 animate-rightslide overflow-hidden rounded-lg">
                          <img
                            src="/assets/img7.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Category section */}
        <section
          aria-labelledby="category-heading"
          className="bg-primary border-t border-secondary mt-4"
        >
          <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="category-heading"
                className="text-2xl font-bold tracking-tight text-white"
              >
                Create your signature scent
              </h2>
              <Link
                to="/mixshop"
                className="hidden text-sm font-semibold text-white hover:underline sm:block"
              >
                Go to mix shop
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
            <p className="text-start my-3 text-lg font-medium text-gray-700">
              Select products you would like to mix together to make one single
              scent. Have fun mixing them all up together to create your
              signature scent.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
              <div className=" aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
                <img
                  src="/assets/img8.png"
                  alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                  className="object-cover w-[500px] object-center group-hover:opacity-75"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50"
                />
                <div className="flex items-end mt-6">
                  <div>
                    <Link
                      to="/mixshop"
                      class="relative inline-block px-4 py-2 font-medium group"
                    >
                      <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-[4px] translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                      <span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                      <span class="relative text-gray-800 group-hover:text-white">
                        Create scents now
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group hidden sm:block aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="/assets/img6.png"
                  alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
              </div>
              <div className="group hidden sm:block aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
                <img
                  src="/assets/img5.png"
                  alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                  className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
                />
                <div
                  aria-hidden="true"
                  className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section aria-labelledby="cause-heading">
          <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/assets/img7.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gray-900 bg-opacity-50"
            />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="cause-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Shop for perfumes in our single store
              </h2>
              <p className="mt-3 text-xl text-white">
                You can select any perfume of your preference in our store
              </p>
            </div>
          </div>
        </section>

        {/* Favorites section */}

        <div className="bg-primary">
          <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
            <h2 className="text-center text-[40px] text-gray-100 font-bold py-8">
              Our Perfumes
            </h2>

            <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product) => (
                <Link
                to='/perfume'
                  key={product.id}
                  className="group relative border-r border-b border-gray-200 p-4 sm:p-6"
                >
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-800 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pt-10 pb-4 text-center">
                    <h3 className="text-sm font-medium text-gray-200">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              product.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-200",
                              "flex-shrink-0 h-5 w-5"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-100">
                        {product.reviewCount} reviews
                      </p>
                    </div>
                    <p className="mt-4 text-base font-medium text-gray-200">
                      {product.price}
                    </p>
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                    >
                      <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-gray-700 rounded-full blur-md ease"></span>
                      <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-gray-800 rounded-full blur-md"></span>
                        <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-gray-900 rounded-full blur-md"></span>
                      </span>
                 
                      <span class="relative text-white flex items-center hover:px-4 duration-300 transition-all">
                     
                        <ShoppingBagIcon className="pr-3 h-8" />
                        Add to cart
                      </span>
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* <footer aria-labelledby="footer-heading" className="bg-white">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Shop</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.shop.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Company</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-16 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                <div>
                  <h3 className="text-sm font-medium text-white">Account</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.account.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Connect</h3>
                  <ul className="mt-6 space-y-6">
                    {footerNavigation.connect.map((item) => (
                      <li key={item.name} className="text-sm">
                        <a
                          href={item.href}
                          className="text-gray-500 hover:text-gray-600"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-16 md:mt-16 xl:mt-0">
              <h3 className="text-sm font-medium text-white">
                Sign up for our newsletter
              </h3>
              <p className="mt-6 text-sm text-gray-500">
                The latest deals and savings, sent to your inbox weekly.
              </p>
              <form className="mt-2 flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="text"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-indigo-500 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <div className="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-200 py-10">
            <p className="text-sm text-gray-500">
              Copyright &copy; 2021 Your Company, Inc.
            </p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
