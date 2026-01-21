const { useState, useEffect } = React;

function App() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [activeTab, setActiveTab] = useState('home');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initSession = async () => {
            const { data: { session } } = await window.mllSupabase.auth.getSession();
            if (session) {
                setUser(session.user);
                await fetchProfile(session.user.id);
            }
            setLoading(false);
        };
        initSession();

        const { data: authListener } = window.mllSupabase.auth.onAuthStateChange(async (_event, session) => {
            if (session) {
                setUser(session.user);
                await fetchProfile(session.user.id);
            } else {
                setUser(null);
                setProfile(null);
            }
        });

        return () => authListener.subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId) => {
        const { data, error } = await window.mllSupabase.from('profiles').select('*').eq('id', userId).single();
        if (!error) setProfile(data);
    };

    if (loading) return <div className="h-screen flex items-center justify-center text-pink-500 font-bold">CARICAMENTO MLL...</div>;
    if (!user) return <window.AuthPage />;

    return (
        <div className="max-w-md mx-auto bg-white min-h-screen pb-20 shadow-xl relative">
            <header className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-50">
                <h1 className="text-xl font-black text-pink-500 italic">MLL APP</h1>
                <div className="bg-pink-50 px-3 py-1 rounded-full text-xs font-bold text-pink-600">
                    🪙 {profile?.punti || 0}
                </div>
            </header>
            
            <main className="p-4">
                {activeTab === 'home' && <window.Home />}
                {activeTab === 'passaggi' && <window.Passaggi profile={profile} />}
                {activeTab === 'gare' && <window.Gare />}
                {activeTab === 'profilo' && <window.Profilo profile={profile} onLogout={() => window.mllSupabase.auth.signOut()} />}
                {activeTab === 'admin' && profile?.is_admin && <window.Admin />}
            </main>

            <nav className="fixed bottom-0 w-full max-w-md bg-white border-t flex justify-around p-4 shadow-lg z-50">
                <button onClick={() => setActiveTab('home')} className={`text-2xl ${activeTab === 'home' ? 'grayscale-0' : 'grayscale'}`}>🏠</button>
                <button onClick={() => setActiveTab('passaggi')} className={`text-2xl ${activeTab === 'passaggi' ? 'grayscale-0' : 'grayscale'}`}>🚗</button>
                <button onClick={() => setActiveTab('gare')} className={`text-2xl ${activeTab === 'gare' ? 'grayscale-0' : 'grayscale'}`}>🏆</button>
                <button onClick={() => setActiveTab('profilo')} className={`text-2xl ${activeTab === 'profilo' ? 'grayscale-0' : 'grayscale'}`}>👤</button>
            </nav>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
