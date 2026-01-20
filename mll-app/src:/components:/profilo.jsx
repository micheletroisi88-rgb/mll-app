{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const Profilo = (\{ profile \}) => \{\
  const saveProfile = async (e) => \{\
    e.preventDefault();\
    const formData = new FormData(e.target);\
    const updates = Object.fromEntries(formData);\
    \
    const \{ error \} = await window.mllSupabase\
      .from('profiles')\
      .update(updates)\
      .eq('id', profile.id);\
      \
    if (!error) alert("Profilo aggiornato!");\
  \};\
\
  return (\
    <form onSubmit=\{saveProfile\} className="space-y-6 pb-10">\
      <div className="text-center">\
        <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto border-4 border-white shadow-lg overflow-hidden">\
          <img src=\{profile?.foto_url || 'https://via.placeholder.com/150'\} />\
        </div>\
        <h2 className="text-xl font-bold mt-2">\{profile?.nome\}</h2>\
      </div>\
\
      <div className="space-y-4">\
        <label className="block text-xs font-bold text-gray-400 uppercase">Dati Ballo</label>\
        <select name="livello_bachata_sensual" className="w-full bg-gray-100 p-4 rounded-2xl outline-none" defaultValue=\{profile?.livello_bachata_sensual\}>\
          <option value="1">Principiante \uc0\u11088 </option>\
          <option value="2">Intermedio 1 \uc0\u11088 \u11088 </option>\
          <option value="3">Intermedio 2 \uc0\u11088 \u11088 \u11088 </option>\
          <option value="4">Avanzato \uc0\u11088 \u11088 \u11088 \u11088 </option>\
        </select>\
\
        <label className="block text-xs font-bold text-gray-400 uppercase">Dati Auto</label>\
        <input name="auto_modello" placeholder="Modello Auto" defaultValue=\{profile?.auto_modello\} className="w-full bg-gray-100 p-4 rounded-2xl outline-none" />\
        <input name="zona_riferimento" placeholder="Tua Zona (es. Bovisa)" defaultValue=\{profile?.zona_riferimento\} className="w-full bg-gray-100 p-4 rounded-2xl outline-none" />\
      </div>\
\
      <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-bold">Salva Modifiche</button>\
    </form>\
  );\
\};\
\
window.Profilo = Profilo;}