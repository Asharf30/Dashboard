import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../components";
import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#03a9f4");

  const change = (args) => {
    setColor(args.currentValue.hex);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />

      <div className="text-center">
        {/* 👇 هنا استخدمنا اللون */}
        <div
          id="preview"
          style={{
            backgroundColor: color,
            width: "200px",
            height: "200px",
            margin: "20px auto",
            borderRadius: "10px",
          }}
        />

        <div className="flex justify-center items-center gap-6 md:gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
