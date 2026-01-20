{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const Passaggi = (\{ profile \}) => \{\
  const [passaggi, setPassaggi] = useState([]);\
\
  useEffect(() => \{\
    const fetchPassaggi = async () => \{\
      const \{ data \} = await window.mllSupabase\
        .from('passaggi')\
        .select('*, profiles(nome, foto_url)')\
        .eq('stato', 'aperto');\
      if (data) setPassaggi(data);\
    \};\
    fetchPassaggi();\
  \}, []);\
\
  return (\
    <div className="space-y-4 animate__animated animate__fadeIn">\
      <button className="w-full bg-pink-500 text-white py-4 rounded-2xl font-bold shadow-lg">\
        + Offri un passaggio (Guadagna 10 PT)\
      </button>\
\
      \{passaggi.map(p => (\
        <div key=\{p.id\} className="bg-white border-2 border-gray-50 p-4 rounded-3xl shadow-sm">\
          <div className="flex items-center gap-3 mb-3">\
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">\
               <img src=\{p.profiles?.foto_url || 'https://via.placeholder.com/100'\} alt="Avatar" />\
            </div>\
            <div className="flex-1">\
              <p className="text-sm font-bold">\{p.profiles?.nome\}</p>\
              <p className="text-[10px] text-gray-400">Da: \{p.zona_partenza\}</p>\
            </div>\
            <div className="text-right">\
              <p className="text-pink-500 font-bold">\{p.orario_partenza\}</p>\
              <p className="text-[10px] text-gray-400">\{p.posti_totali\} posti</p>\
            </div>\
          </div>\
          <div className="bg-gray-50 p-3 rounded-xl text-xs">\
            Verso: <b>\{p.locale_nome || 'Locale'\}</b>\
          </div>\
        </div>\
      ))\}\
    </div>\
  );\
\};\
\
window.Passaggi = Passaggi;}