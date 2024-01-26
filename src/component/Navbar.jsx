import React from "react";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/", current: false },
    { name: "Product", href: "/", current: false },
    { name: "About", href: "/", current: false },
  ];

  return (
    <>
      <nav>
        <div>
          <image src={""} art="" />
        </div>
        <div>
          {navigation.map((item) => {
            return (
              <div>
                <Link
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-lg max-sm:text-base font-medium hover:cursor-pointer"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
