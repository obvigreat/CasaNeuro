import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

type PluginFunction = {
  addUtilities: (utilities: Record<string, Record<string, string>>) => void;
  theme: (path: string) => Record<string, any>;
};

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function({ addUtilities, theme }: PluginFunction) {
      const colors = theme('colors');
      const utilities: Record<string, Record<string, string>> = {};
      
      Object.entries(colors).forEach(([colorName, color]) => {
        if (typeof color === 'object' && color !== null) {
          Object.entries(color).forEach(([shade, value]) => {
            if (shade === 'DEFAULT') {
              utilities[`.bg-${colorName}`] = { backgroundColor: value as string };
              utilities[`.text-${colorName}`] = { color: value as string };
            } else {
              utilities[`.bg-${colorName}-${shade}`] = { backgroundColor: value as string };
              utilities[`.text-${colorName}-${shade}`] = { color: value as string };
            }
          });
        } else {
          utilities[`.bg-${colorName}`] = { backgroundColor: color as string };
          utilities[`.text-${colorName}`] = { color: color as string };
        }
      });
      
      addUtilities(utilities);
    },
  ],
} satisfies Config;

export default config;
