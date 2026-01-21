const { useState, useEffect } = React;

function App() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [activeTab, setActiveTab] = useState('home');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await window.mllSupabase.auth.getSession();
            if (session) {
                setUser(session.user);
                fetchProfile(session.user.id);
            }
            setLoading(false);
        };
        checkUser();

        const { data: authListener } = window.mllSupabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            if (session) fetchProfile(session.user.id);
        });

        return () => authListener.subscription.unsubscribe();
    }, []);

    const fetchProfile = async (userId) => {
        const { data } = await window.mllSupabase.from('profiles').select('*').eq('id', userId).single();
        setProfile(data);
    };

    if (loading) return <div className="p-10 text-pink-500 font-bold">CARICAMENTO MLL...</div>;
    if (!user) return <window.AuthPage />; 

    return (
        <div className="max-w-md mx-auto bg-white min-h-screen pb-24 shadow-xl relative">
            <header className="p-4 border-b flex justify-between items-center bg-white sticky top-0 z-50">
                <h1 className="text-xl font-black text-pink-500">MLL APP</h1>
                <div className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-xs font-bold">
                    🪙 {profile?.punti || 0} pt
                </div>
            </header>
            
            <main className="p-4">
                {activeTab === 'home' && <window.Home />}
                {activeTab === 'passaggi' && <window.Passaggi profile={profile} />}
                {activeTab === 'gare' && <window.Gare />}
                {activeTab === 'profilo' && <window.Profilo profile={profile} onLogout={() => window.mllSupabase.auth.signOut()} />}
                {activeTab === 'admin' && profile?.is_admin && <window.Admin />}
            </main>

            <nav className="fixed bottom-0 w-full max-w-md bg-white border-t flex justify-around p-3 pb-8 shadow-lg z-50">
                <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-pink-500' : 'text-gray-300'}>🏠</button>
                <button onClick={() => setActiveTab('passaggi')} className={activeTab === 'passaggi' ? 'text-pink-500' : 'text-gray-300'}>🚗</button>
                <button onClick={() => setActiveTab('gare')} className={activeTab === 'gare' ? 'text-pink-500' : 'text-gray-300'}>🏆</button>
                <button onClick={() => setActiveTab('profilo')} className={activeTab === 'profilo' ? 'text-pink-500' : 'text-gray-300'}>👤</button>
            </nav>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
