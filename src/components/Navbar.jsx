import { useEffect, memo, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.webp";
import Chat from "./Chat.jsx";
import Cart from "./Cart.jsx";
import Notification from "./Notification.jsx";
import UserProfile from "./UserProfile.jsx";
import { useStateContext } from "../context/ContextProvider.jsx";

const NavButton = memo(({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray cursor-pointer"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 top-1.5 right-2"
      />
      {icon}
    </button>
  </TooltipComponent>
));

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    // setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, [setScreenSize]);

  useEffect(() => {
    let timer;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(handleResize, 150);
    };
    window.addEventListener("resize", debounced);
    handleResize();
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", debounced);
    };
  }, [handleResize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        className=" "
        title="Menu"
        customFunc={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div>
        <NavButton
          title="Cart"
          customFunc={() => {
            handleClick("cart");
          }}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
      </div>
      <div>
        <NavButton
          title="Chat"
          dotColor={currentColor}
          customFunc={() => {
            handleClick("chat");
          }}
          color={currentColor}
          icon={<BsChatLeft />}
        />
      </div>
      <div className="flex items-center ">
        <NavButton
          title="Notifications"
          dotColor={currentColor}
          customFunc={() => {
            handleClick("notification");
          }}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            //  onClick={()=>()}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-sm">Hi, </span>
              <span className="text-sm font-bold text-gray-400"> Ashraf</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-sm" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
