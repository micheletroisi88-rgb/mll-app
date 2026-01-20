<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">// Configurazione Supabase</p>
<p class="p1">const SUPABASE_URL = https://pcbdehqhkgufdlbtgscf.supabase.co;</p>
<p class="p1">const SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjYmRlaHFoa2d1ZmRsYnRnc2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MjczNDEsImV4cCI6MjA4NDAwMzM0MX0.3Mh6in0Z81QYzqUb3l9UZnXmlI3iV1QfhXIlOAmj2uM;<span class="Apple-converted-space"> </span></p>
<p class="p2"><br></p>
<p class="p1">const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);</p>
<p class="p2"><br></p>
<p class="p1">// Lo esportiamo globalmente per i componenti React</p>
<p class="p1">window.mllSupabase = supabase;</p>
</body>
</html>
