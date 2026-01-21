const Admin = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🛡️</span>
                <h2 className="text-xl font-black text-gray-800">Pannello Admin</h2>
            </div>
            
            <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-3xl border-2 border-red-100">
                    <h3 className="text-red-600 font-black mb-2 uppercase text-xs tracking-wider">Stato Sistema</h3>
                    <p className="text-red-800 text-sm leading-tight">Accesso amministratore verificato. Da qui puoi gestire i punti e approvare i passaggi.</p>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                    <button className="bg-white border-2 border-gray-100 p-4 rounded-2xl text-left font-bold text-gray-700 flex justify-between items-center">
                        Gestisci Utenti <span>➔</span>
                    </button>
                    <button className="bg-white border-2 border-gray-100 p-4 rounded-2xl text-left font-bold text-gray-700 flex justify-between items-center">
                        Reset Punti Stagionali <span>➔</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
window.Admin = Admin;
