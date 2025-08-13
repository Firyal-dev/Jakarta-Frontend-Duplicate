import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";

function Header() {
  return (
    <>
      <header className="w-full bg-white">
        <div className="flex justify-between px-4 md:px-20 py-3 items-center">
          {/* logo */}
          <div>
            <img src="/logo.png" alt="Logo Jakarta" className="w-32 md:w-45" />
          </div>

          {/* links */}
          <div className="">
            <ul className="flex space-x-3 md:space-x-4">
              <li>
                <a href="#">
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </li>
              <li>
                <a href="#">
                  <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
