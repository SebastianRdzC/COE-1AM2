import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss').ProcessorOptions} */
export default {
  plugins: {
    [tailwindcss]: {},
    autoprefixer: {},
  },
};
