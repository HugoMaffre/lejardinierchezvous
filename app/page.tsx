import Image from "next/image";
import Header from './header'

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
            <main className="">
                <section>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto mt-12 lg:mt-24 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl text-gray-800 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Le jardinier chez vous</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">
                                Vous recherchez un jardinier à domicile dans les Yvelines (78), l’Essonne (91) ou les Hauts-de-Seine (92) pour un service fiable et professionnel ?
                                Basés à Igny, nous accompagnons les particuliers dans la création, l’entretien et l’élagage de jardin, avec des prestations adaptées à chaque besoin.
                            </p>
                            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
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
                <section className="">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="max-w-screen-md mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Notre équipe intervient pour tous vos travaux extérieurs</h2>
                            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Faire appel à un jardinier près de chez vous, c’est garantir un extérieur propre, esthétique et agréable à vivre toute l’année, sans contrainte.</p>
                        </div>
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-200 lg:h-12 lg:w-12">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Entretien régulier</h3>
                                <p className="text-gray-500 dark:text-gray-400">Tonte de pelouse, taille de haie, désherbage, contactez nous et reçevez des propositions de forfaits d'entretien sur mesure.</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-200 lg:h-12 lg:w-12">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Intervention ponctuelle</h3>
                                <p className="text-gray-500 dark:text-gray-400">Élagage d’arbres, rafraichissement saisonnier, notre objectif est simple : valoriser votre jardin et vous faire gagner du temps.</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-200 lg:h-12 lg:w-12">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Création de jardin</h3>
                                <p className="text-gray-500 dark:text-gray-400">Vos envies prennent forme avec nos prestations, n'hésitez pas à nous contacter pour un service réactif, soigné et adapté à votre projet.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-6 lg:py-12">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <Image
                                src="/jardin-3.jpg"
                                width={500}
                                height={500}
                                loading="eager"
                                alt="Jardin"
                            />
                        </div>
                        <div className="place-self-center lg:col-span-7 lg:ml-12">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Des tarifs adaptés à tous les profils</h2>
                            <p className="text-gray-500 sm:text-xl dark:text-gray-400">Les prestations de jardinage à domicile permettent également de bénéficier d’un crédit d’impôt de 50 %, réduisant ainsi le coût réel de vos travaux.</p>
                        </div>
                    </div>
                </section>
                <section className="bg-white">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contactez nous</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-600 sm:text-xl">Joignez nous par mail pour un devis rapide et redonnez vie à vos extérieurs. 🌿</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Votre adresse mail</label>
                                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="nom@domaine.com" required />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Sujet</label>
                                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Votre message</label>
                                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Écrivez votre message..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-lime-700 sm:w-fit hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-primary-300 cursor-pointer">Envoyer le message</button>
                        </form>
                    </div>
                    </section>
            </main>
        </div>
    );
}
