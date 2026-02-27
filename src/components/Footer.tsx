export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">SERENDALE</h3>
          <p className="text-slate-400 max-w-sm">
            AI-based Blockchain Hero Exploration. The future of the decentralized world is in your hands.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Navigation</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="#" className="hover:text-cyan-400">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400">Whitepaper</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Contacts</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li>Email: <a href="" className="hover:text-cyan-400">hello@serendale.ai</a></li>
            <li>Discord: <a href="" className="hover:text-cyan-400">Serendale Community</a></li>
            <li>Twitter: <a href="" className="hover:text-cyan-400">@SerendaleAI</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
        © 2026 Serendale AI. All rights reserved.
      </div>
    </footer>
  );
}