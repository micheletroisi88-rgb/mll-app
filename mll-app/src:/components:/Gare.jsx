const Gare = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <h2 className="text-xl font-black text-gray-800 mb-4">🏆 Classifica Gare</h2>
            <div className="bg-white rounded-2xl border-2 border-pink-50 overflow-hidden shadow-sm">
                <div className="p-4 border-b bg-pink-50 flex justify-between text-[10px] font-black text-pink-400 uppercase tracking-widest">
                    <span>Ballerino</span>
                    <span>Punti</span>
                </div>
                <div className="p-4 flex justify-between items-center border-b last:border-0">
                    <div className="flex items-center gap-3">
                        <span className="text-lg">🥇</span>
                        <span className="font-bold text-gray-700">Michele Troisi</span>
                    </div>
                    <span className="text-pink-500 font-black">1250</span>
                </div>
                <div className="p-8 text-center">
                    <p className="text-gray-400 text-xs italic">Le classifiche ufficiali vengono aggiornate ogni lunedì.</p>
                </div>
            </div>
        </div>
    );
};
window.Gare = Gare;
