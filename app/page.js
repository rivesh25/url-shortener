import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[calc(100vh-4rem)] px-8 py-12">
        <div className="flex flex-col gap-6 items-center justify-center animate-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-block animate-scale-in">
              <span className="text-6xl mb-4 block">🚀</span>
            </div>
            <h1 className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent ${poppins.className}`}>
              The Best URL Shortener
            </h1>
            <p className="text-xl text-purple-600 font-semibold">Fast • Simple • Privacy-Focused</p>
          </div>
          
          <p className="px-8 lg:px-16 text-center text-gray-700 text-lg leading-relaxed max-w-2xl">
            We are the most straightforward URL shortener in the world. Most URL shorteners will track you or ask you to give your details for login. We understand your needs and have created this URL shortener with <span className="font-bold text-purple-600">privacy</span> and <span className="font-bold text-purple-600">simplicity</span> in mind.
          </p>
          
          <div className='flex gap-4 justify-center mt-4 animate-slide-up'>
            <Link href="/shorten">
              <button className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl shadow-lg px-8 py-3 font-bold text-white hover:scale-105 transition-all duration-300 flex items-center gap-2'>
                <span>Try Now</span>
                <span>→</span>
              </button>
            </Link>
            <Link href="/github">
              <button className='bg-gray-800 hover:bg-gray-900 rounded-xl shadow-lg px-8 py-3 font-bold text-white hover:scale-105 transition-all duration-300 flex items-center gap-2'>
                <span>⭐</span>
                <span>GitHub</span>
              </button>
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mt-8 w-full max-w-xl">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold text-purple-600">Lightning Fast</div>
              <div className="text-sm text-gray-600">Instant short URLs</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-bold text-purple-600">Private</div>
              <div className="text-sm text-gray-600">No tracking</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold text-purple-600">Simple</div>
              <div className="text-sm text-gray-600">Easy to use</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center relative min-h-[400px] animate-fade-in">
          <Image 
            className="mix-blend-darken object-contain" 
            alt="an Image of a vector" 
            src={"/vector.jpg"} 
            fill={true} 
          />
        </div>
      </section>
    </main>
  );
}
