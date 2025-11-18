/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      gray: {
        50: "#F5F5F5",
        200: "#E5E5E5",
        400: "#9CA3AF",
        900: "#1F1F1F"
      },
      transparent: "transparent",
      current: "currentColor"
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      mono: ['SF Mono', 'Consolas', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          md: '24px'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px'
        }
      },
      spacing: {
        0: '0px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
      },
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '8px'
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.1)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both'
      }
    }
  },
  plugins: [],
}
