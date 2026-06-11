import Image from "next/image";
import Header from './header'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="">
        <section>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Le jardinier chez vous</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
                        Basés à Igny, nous accompagnons les particuliers dans la création, l’entretien et l’élagage de jardin, avec des prestations adaptées à chaque besoin.
                    </p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                        Contactez-nous
                    </a> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="/jardin-1.jpg"
                        width={500}
                        height={500}
                        loading="eager"
                        alt="Jardin"
                    />
                </div>                
            </div>
        </section>
      </main>
    </div>
  );
}
