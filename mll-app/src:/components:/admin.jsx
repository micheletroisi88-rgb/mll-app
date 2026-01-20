{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const Admin = () => \{\
  const [stats, setStats] = useState(\{ users: 0, points: 0 \});\
\
  useEffect(() => \{\
    const fetchStats = async () => \{\
      const \{ data \} = await window.mllSupabase.from('profiles').select('punti');\
      setStats(\{\
        users: data.length,\
        points: data.reduce((acc, curr) => acc + (curr.punti || 0), 0)\
      \});\
    \};\
    fetchStats();\
  \}, []);\
\
  return (\
    <div className="p-4 space-y-4">\
      <h2 className="text-2xl font-black">Admin \uc0\u55357 \u57057 \u65039 </h2>\
      <div className="grid grid-cols-2 gap-4">\
        <div className="bg-blue-500 text-white p-4 rounded-3xl shadow-lg">\
          <p className="text-xs opacity-80 uppercase font-bold">Utenti</p>\
          <p className="text-2xl font-black">\{stats.users\}</p>\
        </div>\
        <div className="bg-purple-500 text-white p-4 rounded-3xl shadow-lg">\
          <p className="text-xs opacity-80 uppercase font-bold">Punti Totali</p>\
          <p className="text-2xl font-black">\{stats.points\}</p>\
        </div>\
      </div>\
      <div className="bg-white border p-4 rounded-2xl">\
        <h3 className="font-bold mb-2">Azioni Rapide</h3>\
        <button className="w-full text-left py-3 border-b text-sm">\uc0\u55357 \u56546  Invia Notifica Broadcast</button>\
        <button className="w-full text-left py-3 text-sm">\uc0\u55356 \u57217  Gestisci Catalogo Premi</button>\
      </div>\
    </div>\
  );\
\};\
\
window.Admin = Admin;}