import { useState, useEffect } from 'react';
import { Rocket, Globe, Zap, Users, ChevronRight, Menu, X } from 'lucide-react';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleMouseMove = (e: any) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const parallaxStyle = {
        transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
    };

    return (
        <div className="bg-slate-950 text-white overflow-hidden">
            {/* Étoiles animées en arrière-plan */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            opacity: Math.random() * 0.7 + 0.3
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Rocket className="w-8 h-8 text-cyan-400" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                NovaStar
              </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#" className="hover:text-cyan-400 transition-colors">Accueil</a>
                            <a href="#features" className="hover:text-cyan-400 transition-colors">Fonctionnalités</a>
                            <a href="#about" className="hover:text-cyan-400 transition-colors">À propos</a>
                            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                                Commencer
                            </button>
                        </div>

                        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {menuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-4">
                            <a href="#" className="block hover:text-cyan-400 transition-colors">Accueil</a>
                            <a href="#features" className="block hover:text-cyan-400 transition-colors">Fonctionnalités</a>
                            <a href="#about" className="block hover:text-cyan-400 transition-colors">À propos</a>
                            <a href="#contact" className="block hover:text-cyan-400 transition-colors">Contact</a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-950" />

                <div className="relative max-w-6xl mx-auto text-center z-10">
                    <div style={parallaxStyle} className="transition-transform duration-200">
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                            Explorez l'Infini
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
                            Rejoignez la nouvelle ère de l'exploration spatiale. Découvrez des technologies révolutionnaires qui repoussent les limites de l'univers connu.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
                                Démarrer le voyage
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="border-2 border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105">
                                En savoir plus
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 relative">
                        <div className="w-64 h-64 mx-auto relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse" />
                            <Globe className="w-full h-full text-cyan-400 animate-spin" style={{ animationDuration: '20s' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Technologies Avancées
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Rocket, title: 'Propulsion Quantique', desc: 'Voyagez plus vite que la lumière grâce à notre système de propulsion révolutionnaire.' },
                            { icon: Zap, title: 'Énergie Illimitée', desc: 'Exploitez l\'énergie des étoiles avec nos réacteurs à fusion avancée.' },
                            { icon: Users, title: 'Communauté Galactique', desc: 'Rejoignez des milliers d\'explorateurs à travers la galaxie.' }
                        ].map((feature, i) => (
                            <div
                                key={i}
                                className="group relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <feature.icon className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-slate-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="relative py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/30">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Prêt pour l'Aventure ?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8">
                            Inscrivez-vous maintenant et recevez un accès exclusif à nos premières missions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="votre@email.com"
                                className="flex-1 px-6 py-4 rounded-full bg-slate-900 border border-slate-700 focus:border-cyan-500 focus:outline-none transition-colors"
                            />
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                                S'inscrire
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative border-t border-slate-800 py-12 px-6">
                <div className="max-w-7xl mx-auto text-center text-slate-400">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <Rocket className="w-6 h-6 text-cyan-400" />
                        <span className="text-xl font-bold text-white">NovaStar</span>
                    </div>
                    <p>© 2025 NovaStar. Tous droits réservés. Explorez l'univers avec nous.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;