import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

function Navber() {
  const [menu, setMenu] = useState(true);

  const handleWidth = () => {
    const width = window.innerWidth;
    if( width > 768){
      setMenu(true)
    }
    else{
      setMenu(false)
    }
  }

  useEffect(() => { 
    handleWidth();

    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth)
    }

  },[])

  return (
    <nav className="container px-5 m-auto flex justify-between items-center gap-5 py-2 text-white">
      <div className="font-bold text-xl">Logo</div>

      {menu ? (
        <AiOutlineMenu
          onClick={() => setMenu(!menu)}
          className={`cursor-pointer text-xl z-10 transition-all duration-200 md:hidden hover:text-white`}
        />
      ) : (
        <CgClose
          onClick={() => setMenu(!menu)}
          className={`cursor-pointer text-xl transition-all duration-200 z-10 md:hidden hover:text-white`}
        />
      )}

      <ul
        className={` md:flex  gap-5
         ${
           menu
             ? "  hidden"
             : "absolute z-[1] transition-all ease-in duration-300  right-0 w-[180px] h-screen bg-gray-900 p-8 pt-12  top-0"
         } 
         
         `}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contct</li>
      </ul>
    </nav>
  );
}

export default Navber;
