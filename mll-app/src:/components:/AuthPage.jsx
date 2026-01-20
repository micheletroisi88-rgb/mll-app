{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const \{ useState \} = React;\
\
const AuthPage = () => \{\
    const [loading, setLoading] = useState(false);\
    const [isLogin, setIsLogin] = useState(true);\
    const [email, setEmail] = useState('');\
    const [password, setPassword] = useState('');\
    const [nome, setNome] = useState('');\
\
    const handleAuth = async (e) => \{\
        e.preventDefault();\
        setLoading(true);\
\
        if (isLogin) \{\
            // LOGIN\
            const \{ error \} = await window.mllSupabase.auth.signInWithPassword(\{\
                email,\
                password,\
            \});\
            if (error) alert("Errore Login: " + error.message);\
        \} else \{\
            // REGISTRAZIONE\
            const \{ data, error \} = await window.mllSupabase.auth.signUp(\{\
                email,\
                password,\
            \});\
\
            if (error) \{\
                alert("Errore Registrazione: " + error.message);\
            \} else if (data.user) \{\
                // Crea il profilo nella tabella 'profiles' appena creata\
                const \{ error: profileError \} = await window.mllSupabase\
                    .from('profiles')\
                    .insert([\
                        \{ \
                            id: data.user.id, \
                            nome: nome, \
                            punti: 20 // Regalo di benvenuto\
                        \}\
                    ]);\
                \
                if (profileError) console.error("Errore profilo:", profileError);\
                alert("Registrazione effettuata! Controlla la mail per confermare.");\
            \}\
        \}\
        setLoading(false);\
    \};\
\
    return (\
        <div className="min-h-screen bg-pink-500 flex items-center justify-center p-6 animate__animated animate__fadeIn">\
            <div className="bg-white w-full max-w-sm rounded-[40px] p-8 shadow-2xl">\
                <div className="text-center mb-8">\
                    <h1 className="text-4xl font-black text-pink-500">MLL \uc0\u10084 \u65039 </h1>\
                    <p className="text-gray-400 text-sm font-medium mt-2">\
                        \{isLogin ? 'Bentornato nella community' : 'Unisciti ai ballerini di Milano'\}\
                    </p>\
                </div>\
\
                <form onSubmit=\{handleAuth\} className="space-y-4">\
                    \{!isLogin && (\
                        <input \
                            type="text" \
                            placeholder="Il tuo Nome" \
                            className="w-full p-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 ring-pink-300 transition-all"\
                            value=\{nome\}\
                            onChange=\{(e) => setNome(e.target.value)\}\
                            required\
                        />\
                    )\}\
                    <input \
                        type="email" \
                        placeholder="Email" \
                        className="w-full p-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 ring-pink-300 transition-all"\
                        value=\{email\}\
                        onChange=\{(e) => setEmail(e.target.value)\}\
                        required\
                    />\
                    <input \
                        type="password" \
                        placeholder="Password" \
                        className="w-full p-4 bg-gray-100 rounded-2xl outline-none focus:ring-2 ring-pink-300 transition-all"\
                        value=\{password\}\
                        onChange=\{(e) => setPassword(e.target.value)\}\
                        required\
                    />\
                    \
                    <button \
                        disabled=\{loading\}\
                        className="w-full bg-pink-500 text-white py-4 rounded-2xl font-black shadow-lg hover:bg-pink-600 active:scale-95 transition-all disabled:opacity-50"\
                    >\
                        \{loading ? 'CARICAMENTO...' : (isLogin ? 'ACCEDI' : 'CREA ACCOUNT')\}\
                    </button>\
                </form>\
\
                <div className="mt-8 text-center">\
                    <button \
                        onClick=\{() => setIsLogin(!isLogin)\}\
                        className="text-xs font-bold text-gray-400 hover:text-pink-500 transition-colors"\
                    >\
                        \{isLogin ? "Non hai un account? Registrati" : "Hai gi\'e0 un account? Accedi"\}\
                    </button>\
                </div>\
            </div>\
        </div>\
    );\
\};\
\
window.AuthPage = AuthPage;}