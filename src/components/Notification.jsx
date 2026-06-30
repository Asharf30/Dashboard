import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { notificationData } from "../data/dummy";

import { useStateContext } from "../context/ContextProvider";

const Notification = () => {
  const { currentColor, setIsClicked } = useStateContext();

  return (
    <div className="nav-item absolute right-2 md:right-40 top-16 bg-white dark:bg-[#42464D] p-6 md:p-8 rounded-lg w-full max-w-sm md:max-w-none md:w-96 shadow-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          >
            {" "}
            5 New
          </button>
        </div>
        <button
          type="button"
          className="text-2xl text-gray-500 hover:bg-light-gray p-2 rounded-full cursor-pointer"
          onClick={() =>
            setIsClicked((prev) => ({ ...prev, notification: false }))
          }
          aria-label="Close notifications"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5 ">
        {notificationData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
