{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const \{ useState, useEffect \} = React;\
\
const Home = () => \{\
  const [eventi, setEventi] = useState([]);\
\
  useEffect(() => \{\
    const fetchEventi = async () => \{\
      const \{ data \} = await window.mllSupabase\
        .from('eventi')\
        .select('*')\
        .order('data_evento', \{ ascending: true \});\
      if (data) setEventi(data);\
    \};\
    fetchEventi();\
  \}, []);\
\
  return (\
    <div className="space-y-6 animate__animated animate__fadeIn">\
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-[2rem] text-white shadow-lg">\
        <h2 className="text-2xl font-bold">Prossime Serate \uc0\u55357 \u56451 </h2>\
        <p className="text-sm opacity-90">Scopri dove si balla e trova un passaggio.</p>\
      </div>\
\
      <div className="space-y-4">\
        \{eventi.map(ev => (\
          <div key=\{ev.id\} className="bg-white border p-4 rounded-2xl shadow-sm flex items-center justify-between">\
            <div>\
              <p className="font-bold text-gray-800">\{ev.titolo\}</p>\
              <p className="text-xs text-pink-600 font-semibold">\{ev.locale_nome\}</p>\
              <p className="text-[10px] text-gray-400">\uc0\u55357 \u56517  \{new Date(ev.data_evento).toLocaleDateString()\}</p>\
            </div>\
            \{ev.mll_presente && (\
              <span className="bg-pink-100 text-pink-600 text-[10px] px-2 py-1 rounded-full font-bold">MLL STAFF</span>\
            )\}\
          </div>\
        ))\}\
      </div>\
    </div>\
  );\
\};\
\
window.Home = Home; // Lo rendiamo disponibile a App.jsx}