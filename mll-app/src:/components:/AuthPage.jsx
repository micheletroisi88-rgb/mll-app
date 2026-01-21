const { useState } = React;
const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');

    const handleAuth = async (e) => {
        e.preventDefault();
        if (isLogin) {
            await window.mllSupabase.auth.signInWithPassword({ email, password });
        } else {
            const { data } = await window.mllSupabase.auth.signUp({ email, password });
            if (data?.user) {
                await window.mllSupabase.from('profiles').insert([{ id: data.user.id, nome, punti: 20 }]);
            }
        }
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center p-6 bg-pink-500 text-white">
            <h1 className="text-4xl font-black mb-8 animate__animated animate__bounceIn">MLL ❤️</h1>
            <form onSubmit={handleAuth} className="w-full max-w-sm space-y-4">
                {!isLogin && (
                    <input type="text" placeholder="Tuo Nome" className="w-full p-4 rounded-2xl text-black" onChange={e => setNome(e.target.value)} required />
                )}
                <input type="email" placeholder="Email" className="w-full p-4 rounded-2xl text-black" onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" className="w-full p-4 rounded-2xl text-black" onChange={e => setPassword(e.target.value)} required />
                <button className="w-full bg-black text-white p-4 rounded-2xl font-bold uppercase">
                    {isLogin ? 'Entra' : 'Crea Account'}
                </button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} className="mt-6 text-sm underline">
                {isLogin ? "Non hai un account? Registrati" : "Hai già un account? Accedi"}
            </button>
        </div>
    );
};
window.AuthPage = AuthPage;
