const { useState, useEffect } = React;

const Passaggi = ({ profile }) => {
    const [passaggi, setPassaggi] = useState([]);

    useEffect(() => {
        const fetchPassaggi = async () => {
            const { data } = await window.mllSupabase
                .from('passaggi')
                .select('*')
                .order('created_at', { ascending: false });
            setPassaggi(data || []);
        };
        fetchPassaggi();
    }, []);

    return (
        <div className="animate__animated animate__fadeIn space-y-4">
            <h2 className="text-xl font-black text-gray-800">Passaggi Disponibili</h2>
            {passaggi.length === 0 ? (
                <p className="text-gray-400 text-center py-10">Nessun passaggio attivo al momento...</p>
            ) : (
                passaggi.map(p => (
                    <div key={p.id} className="bg-white p-4 rounded-2xl border shadow-sm flex justify-between items-center">
                        <div>
                            <p className="font-bold text-pink-500">{p.partenza} ➔ {p.destinazione}</p>
                            <p className="text-xs text-gray-400">{p.orario}</p>
                        </div>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-xl text-xs font-bold">PRENOTA</button>
                    </div>
                ))
            )}
        </div>
    );
};
window.Passaggi = Passaggi;ssaggi;}
