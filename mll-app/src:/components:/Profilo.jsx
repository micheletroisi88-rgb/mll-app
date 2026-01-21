const Profilo = ({ profile, onLogout }) => {
    return (
        <div className="animate__animated animate__fadeIn text-center">
            <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-tr from-pink-500 to-purple-500 rounded-full mx-auto flex items-center justify-center text-4xl shadow-lg border-4 border-white">
                    👤
                </div>
                <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
            </div>
            
            <h2 className="text-2xl font-black text-gray-800">{profile?.nome || 'Utente MLL'}</h2>
            <p className="text-pink-500 font-bold text-sm mb-8 tracking-tighter uppercase">Membro Ufficiale MLL</p>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
                <div className="bg-gray-50 p-5 rounded-3xl flex justify-between items-center border border-gray-100">
                    <span className="text-gray-500 font-bold">Punti Accumulati</span>
                    <span className="font-black text-2xl text-pink-600">🪙 {profile?.punti || 0}</span>
                </div>
            </div>
            
            <button 
                onClick={onLogout}
                className="w-full py-4 text-red-500 font-black text-sm tracking-widest border-2 border-red-50 rounded-2xl hover:bg-red-50 transition-all uppercase"
            >
                Log Out
            </button>
        </div>
    );
};
window.Profilo = Profilo;
