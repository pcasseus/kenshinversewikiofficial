export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: ['animate-blink'], // ✅ THIS IS CRUCIAL
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn 0.8s ease-in-out',
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 2s infinite',
        scrollMatrix: 'scrollMatrix 60s linear infinite',
        glowPulse: 'glowPulse 2.5s ease-in-out infinite',
        scan: 'scan 3s linear infinite',
        blink: 'blink 1.2s infinite', // 👈 already good
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scrollMatrix: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 12px rgba(255, 234, 0, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 24px rgba(255, 234, 0, 0.9)',
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
