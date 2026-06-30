/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const getStoredValue = (key, fallback) => {
  if (typeof window === "undefined") {
    return fallback;
  }

  const value = localStorage.getItem(key);
  return value ?? fallback;
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState({ ...initalState });
  const [currentColor, setCurrentColor] = useState(() =>
    getStoredValue("colorMode", "#03a9f499"),
  );
  // #03a9f499
  const [currentMode, setCurrentMode] = useState(() =>
    getStoredValue("themeMode", "Light"),
  );
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
