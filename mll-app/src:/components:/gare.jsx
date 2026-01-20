{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const Gare = () => \{\
  const [gare, setGare] = useState([]);\
\
  useEffect(() => \{\
    window.mllSupabase.from('gare_partner').select('*, profiles(nome, livello_bachata_sensual)')\
      .then((\{ data \}) => setGare(data || []));\
  \}, []);\
\
  return (\
    <div className="space-y-4">\
      <h3 className="font-bold text-lg">Cerca Partner di Ballo \uc0\u55356 \u57286 </h3>\
      \{gare.map(g => (\
        <div key=\{g.id\} className="bg-white p-4 rounded-2xl border shadow-sm">\
          <div className="flex justify-between items-start">\
             <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase">\
               Cerca \{g.ruolo_cercato\}\
             </span>\
             <span className="text-[10px] text-gray-400">Livello min: \{g.livello_minimo_richiesto\} \uc0\u11088 </span>\
          </div>\
          <p className="mt-2 text-sm italic">"\{g.messaggio\}"</p>\
          <div className="mt-3 text-xs font-bold">\'97 \{g.profiles?.nome\}</div>\
        </div>\
      ))\}\
    </div>\
  );\
\};\
\
window.Gare = Gare;}