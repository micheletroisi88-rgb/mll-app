const Home = () => (
    <div className="animate__animated animate__fadeIn">
        <div className="bg-pink-500 p-6 rounded-3xl text-white mb-6">
            <h2 className="text-2xl font-black">Bentornato!</h2>
            <p className="text-sm opacity-90">Controlla i passaggi per stasera.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border-2 border-pink-100 rounded-2xl text-center">🚗 Passaggi</div>
            <div className="p-4 border-2 border-pink-100 rounded-2xl text-center">🏆 Classifiche</div>
        </div>
    </div>
);
window.Home = Home;
