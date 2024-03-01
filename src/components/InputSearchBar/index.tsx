import React from "react";
import chroma from "chroma-js";
import Select, { StylesConfig, ValueType } from "react-select";

export type ColourOption = {
  label: string;
  value: number; // Agora o valor é do tipo number
  color: string;
  number: number;
};

export const colourOptions: ColourOption[] = [
  { label: "Todos", value: 4, color: "#000", number: 4 },
  { label: "Finalizado", value: 1, color: "#00FF00", number: 1 },
  { label: "Atuando", value: 2, color: "#FFFF00", number: 2 },
  { label: "Parado", value: 3, color: "#FF0000", number: 3 },
];

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#000000", // Alterando o background para preto
    border: "1px solid #ccc", // Adicionando borda cinza
    color: "#ccc", // Alterando a cor do texto para cinza
  }),
  option: (styles, { data, isDisabled, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isSelected ? "#c0c0c0" : undefined, // Alterando o background para preto quando selecionado
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "#000000" // Alterando o background para preto ao clicar
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

interface SelectProps {
  onChange: (value: number) => void; // Mudamos o tipo de TaskStatus para number
}

const CustomSelect: React.FC<SelectProps> = ({ onChange }) => (
  <Select
    onChange={(selectedOption: ValueType<ColourOption>) => {
      if (selectedOption) {
        const selectedValue = (selectedOption as ColourOption).value;
        onChange(selectedValue);
      }
    }}
    options={colourOptions}
    styles={colourStyles}
  />
);

export default CustomSelect;
