const Home = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-[30px] text-white shadow-lg mb-6">
                <h2 className="text-2xl font-black mb-2">Ciao Ballerino! 💃</h2>
                <p className="text-pink-100 text-sm">Pronto per la prossima serata? Cerca un passaggio o offrine uno per guadagnare punti!</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border-2 border-pink-100 shadow-sm">
                    <span className="text-2xl">🚗</span>
                    <h3 className="font-bold mt-2 text-gray-800">Passaggi</h3>
                    <p className="text-[10px] text-gray-400">Trova o offri un auto</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border-2 border-purple-100 shadow-sm">
                    <span className="text-2xl">🏆</span>
                    <h3 className="font-bold mt-2 text-gray-800">Gare</h3>
                    <p className="text-[10px] text-gray-400">Classifiche MLL</p>
                </div>
            </div>
        </div>
    );
};
window.Home = Home;
