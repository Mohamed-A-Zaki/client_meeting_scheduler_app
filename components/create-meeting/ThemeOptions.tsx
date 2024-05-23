import { theme_atom } from "@/atoms/theme_atom";
import theme_options from "@/utils/theme_options";

export default function ThemeOptions() {
  const theme = theme_atom.useValue();

  return (
    <div className="flex items-center justify-between px-5">
      {theme_options.map(({ id, color }) => {
        return (
          <div
            key={id}
            className={`w-7 h-7 rounded-full cursor-pointer ${
              theme === color && "border-2 border-black"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => theme_atom.update(color)}
          />
        );
      })}
    </div>
  );
}
