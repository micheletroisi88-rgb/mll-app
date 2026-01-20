const { useState, useEffect } = React;

function App() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [activeTab, setActiveTab] = useState('home');
    const [loading, setLoading] = useState(true);

    // 1. GESTIONE AUTENTICAZIONE E SESSIONE
    useEffect(() => {
        // Controlla se esiste già una sessione attiva al caricamento
        const getInitialSession = async () => {
            const { data: { session } } = await window.mllSupabase.auth.getSession();
            if (session) {
                setUser(session.user);
                await fetchProfile(session.user.id);
            }
            setLoading(false);
        };
        getInitialSession();

        // Ascolta in tempo reale login e logout
        const { data: authListener } = window.mllSupabase.auth.onAuthStateChange(async (_event, session) => {
            if (session) {
                setUser(session.user);
                await fetchProfile(session.user.id);
            } else {
                setUser(null);
                setProfile(null);
            }
            setLoading(false);
        });

        return () => {
            if (authListener && authListener.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, []);

    // 2. FUNZIONE PER CARICARE IL PROFILO DAL DB
    const fetchProfile = async (userId) => {
        try {
            const { data, error } = await window.mllSupabase
                .from('profiles')
                .select('*')
                .eq('id', userId)
                .single();
            
            if (error) throw error;
            setProfile(data);
        } catch (error) {
            console.error("Errore caricamento profilo:", error.message);
        }
    };

    // Schermata di caricamento iniziale
    if (loading) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-pink-500 font-bold animate-pulse">MLL PASSAGGI...</p>
            </div>
        );
    }

    // 3. SE L'UTENTE NON È LOGGATO, MOSTRA LA PAGINA DI LOGIN
    if (!user) {
        return <window.AuthPage />;
    }

    // 4. LAYOUT PRINCIPALE (DOPO IL LOGIN)
    return (
        <div className="max-w-md mx-auto bg-white min-h-screen pb-24 shadow-2xl relative">
            
            {/* Header Superiore */}
            <header className="p-4 border-b flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-sm z-50">
                <div>
                    <h1 className="text-xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                        MLL APP
                    </h1>
                    <p className="text-[10px] text-gray-400 font-bold tracking-tighter uppercase">
                        {profile?.zona_riferimento || 'Milano'}
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-pink-50 px-3 py-1.5 rounded-full">
                    <span className="text-sm">🪙</span>
                    <span className="text-xs font-black text-pink-600">{profile?.punti || 0}</span>
                </div>
            </header>
            
            {/* Area Contenuto Dinamico */}
            <main className="p-4 min-h-[calc(100vh-140px)]">
                {activeTab === 'home' && <window.Home />}
                {activeTab === 'passaggi' && <window.Passaggi profile={profile} refreshProfile={() => fetchProfile(user.id)} />}
                {activeTab === 'gare' && <window.Gare />}
                {activeTab === 'profilo' && <window.Profilo profile={profile} onLogout={() => window.mllSupabase.auth.signOut()} />}
                {activeTab === 'admin' && profile?.is_admin && <window.Admin />}
            </main>

            {/* Navbar Inferiore (Menu) */}
            <nav className="fixed bottom-0 w-full max-w-md bg-white border-t flex justify-around p-3 pb-8 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50">
                <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon="🏠" label="Home" />
                <NavButton active={activeTab === 'passaggi'} onClick={() => setActiveTab('passaggi')} icon="🚗" label="Passaggi" />
                <NavButton active={activeTab === 'gare'} onClick={() => setActiveTab('gare')} icon="🏆" label="Gare" />
                <NavButton active={activeTab === 'profilo'} onClick={() => setActiveTab('profilo')} icon="👤" label="Profilo" />
                {profile?.is_admin && (
                    <NavButton active={activeTab === 'admin'} onClick={() => setActiveTab('admin')} icon="🛡️" label="Admin" />
                )}
            </nav>
        </div>
    );
}

// Sotto-componente per i pulsanti della navigazione
function NavButton({ active, onClick, icon, label }) {
    return (
        <button 
            onClick={onClick} 
            className={`flex flex-col items-center transition-all duration-300 ${active ? 'text-pink-500 scale-110' : 'text-gray-300'}`}
        >
            <span className="text-2xl mb-1">{icon}</span>
            <span className="text-[9px] font-black uppercase tracking-widest">{label}</span>
        </button>
    );
}

// Rendering dell'app nel DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);