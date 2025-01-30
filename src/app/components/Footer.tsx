// components/Footer.js
export default function Footer() {
    return (
      <footer className="w-full py-12 bg-black text-white border-t-4 border-white text-center">
        <p className="text-sm sm:text-base font-light tracking-widest">
          © 2025 Pedro Oliveira | All Rights Reserved
        </p>
        <div className="mt-4 flex justify-center gap-6 text-white">
          <a href="https://github.com/Phomhado" className="hover:text-yellow-400 transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/pedro-henrique-de-oliveira-b4b984239/" className="hover:text-yellow-400 transition-colors">
            Twitter
          </a>
          <a href="mailto:pedro.he.oli10@gmail.com" className="hover:text-yellow-400 transition-colors">
            Email
          </a>
        </div>
      </footer>
    );
  }
  