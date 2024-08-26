/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        md: "768px",
        lg: "1024px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        danger: "rgba(220,53,69)",
        "black-like": "#333333",
        "brownish-creamy": "#B88E2F",
        "grey-sub-header": "#666666",
        "section-header-txt": "#3A3A3A",
        "prod-card-bg": "#F4F5F7",
        "add-cart-btn-txt": "#B88E2F",
        "discount-badge-bg": "#E97171",
        "new-badge-bg": "#2EC1AC",
        "old-price-txt": "#B0B0B0",
        "prod-des-txt": "#898989",
        "VIOLETE": "#816DFA",
        "prod-color-two": "#000000",
        "prod-color-three": "B88E2F",
        "address-txt": "#9F9F9F",
        "input-label-txt": "#666666",
        "grey-page": "#d1d5db",
        creamy: "#FFF3E3",
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
      width: {
        '23px':'23px',
        '50px': '50px',
        '60px': '60px',
        '75px': '75px',
        '77px': '77px',
        '78px': '78px',
        '105px': '105px',
        '108px': '108px',
        '237px': '237px',
        '377px': '377px',
        '393px': '393px',
        '423px': '423px',
        '424px': '424px',
        '450px': '450px',
        '528px': '528px',
        '600px': '600px',
        '700px': '700px',
        '817px': '817px',
        '1026px': '1026px',
      },
      height: {
        '23px':'23px',
        '55px': '55px',
        '60px': '60px',
        '77px': '77px',
        '105px': '105px',
        '120px': '120px',
        '270px': '270px',
        '316px': '316px',
        '390px': '390px',
        '500px': '500px',
      },
      minWidth: {
        '222px': '222px',
      },
      minHeight: {
        '58px': '58px',
      },
      gridTemplateRows: {
        '2-row-footer': '180px 350px',
      },
      margin: {
        '137px': '137px',
        '20%': '20%',
      },
      fontSize: {
        "size-32": ['32px', '34px'],
      },
      gridTemplateColumns: {
        '2-column-footer': '280px 320px',
        '2-columnlg-footer': '350px 450px',
        '3-column-footer': '100px 130px 350px',
        '2-image-product': '80px 240px',
        '3-details-product': '80px 20px 245px',
        '2-cart-main': '817px 393px',
        '2-contact-main': '23px 212px'
      },
      gap: {
        '50': '50px',
      },
      font:{
        'font-family': "Poppins",
      },
      aspectRatio: {
        '360/79': '360/79',
      },
      backgroundImage: {
        'headerbg': "url('../assets/cartbg.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
