const Profilo = ({ profile, onLogout }) => {
    return (
        <div className="animate__animated animate__fadeIn text-center">
            <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                👤
            </div>
            <h2 className="text-2xl font-black text-gray-800">{profile?.nome || 'Utente MLL'}</h2>
            <p className="text-gray-400 text-sm mb-6">Membro Gold MLL</p>
            
            <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-2xl flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Punti Totali</span>
                    <span className="font-black text-pink-500">🪙 {profile?.punti || 0}</span>
                </div>
                <button 
                    onClick={onLogout}
                    className="w-full py-4 text-red-500 font-bold border-2 border-red-50 rounded-2xl hover:bg-red-50 transition-colors"
                >
                    ESCI DALL'APP
                </button>
            </div>
        </div>
    );
};
window.Profilo = Profilo;
