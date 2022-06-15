<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <title>Excel-Kurs (MASTER)</title>

    <link rel="stylesheet" href="dist/reset.css">
    <link rel="stylesheet" href="dist/reveal.css">
    <link rel="stylesheet" href="dist/theme/simple.css">

    <!-- Theme used for syntax highlighted code -->
    <link rel="stylesheet" href="plugin/highlight/monokai.css">

    <style type="text/css">
      
      p { text-align: left; }
      k{ font-size:.8em; font-family:sans-serif; border:solid 1px grey;
	 background-color:#eee;border-radius:5px; padding:.1em;}
      l{font-size:2em;}
      m {background-color:#eee; border-width:thin thin 0px; border-color:black; border-style:solid;
	 padding: .1em; font-size:.8em; }
      uebung::before {content: "✒️";}
      quote{font-style:italic; border-left:solid 3px grey; padding-left:.5em; display:block}
      remark{display:block;width:10%;font-size:.8rem;float:right;background-color:#ff9;padding:1rem;margin-left:1rem;}
      .jumbo{font-size:5em}
      
    </style>
    
  </head>
  <body>
    <div class="reveal">
      <div class="slides">

	
	<section>
	  

	<section data-markdown><textarea data-template>
	    # Excel
	    ## Einstiegslevel
	    ----

	    <small><a href="./dist/media/Teil-1.xlsx">📥</a> Übungs-Excel</small>

<p>
	    <small><a href="mailto:ivo.offenthaler@umweltbundesamt.at">ivo.offenthaler@umweltbundesamt.at</a> &bull; Juni/Juli 2021
	    </small>
	    
	</textarea></section>


	  
	  
	  <section data-visibility="hidden" data-markdown data-background-color="#93b7ea"><textarea data-template>
	      Ein Wort zum Anfang &hellip;
	      <small>
		Ich habe so um 1993 intensiver mit Excel zu arbeiten begonnen. 2003 durfte ich das erste Mal eine Fortbildung (Excel Makros) am UBA anbieten, neben gelegentlichen Kurseinheiten am Österreichischen Controlling-Institut.
		Nach all den Jahren kenne ich die meisten Komponenten dieser eierlegenden Wollmilchsau auswendig. Andere nur oberflächlich, weil ich sie nicht benötige. Oder Excel dafür völlig ungeeignet halte.
		Ich bemühe mich, in diesem Kurs (auch) Kniffe und Konzepte zu vermitteln, die ich selbst erst nach Jahren zufällig oder auf die harte Tour entdeckt habe. Vieles lässt sich auch auf anderen Wegen lösen; auf den einen oder anderen Holzweg werde ich hinweisen.
	      </small>	      
	  </textarea></section>

	  <section data-markdown data-background-color="#93b7ea"><textarea data-template>

	      <small>Symbole</small>
	      
	      🌐 **globaler Tipp** Konzept oder Kniff, der auch außerhalb von Excel funktioniert. Oft nicht nur in MS-Office sondern auch anderen Anwendungen. Beispiel: Tastaturkürzel
	      
	      🔑 **Schlüsselkonzept**
	      
	      <uebung></uebung> **Übung**

	      🧭 **Orientierungshilfe** allgemeine (subjektive) Empfehlung meinerseits, für Excel oder darüberhinaus


	      
	      
	  </textarea></section>

	  
	</section>

	
	<section>
	  <section data-markdown><textarea data-template>
	      # Die Oberfläche
	      Menübereich (1), Arbeitsbereich (2), Statuszeile (3)	      
	      <img class="r-stretch" src="dist/media/gui.png">
	    </textarea>
	  </section>
	  <section data-markdown>
	    <textarea data-template>
	      ## Menübereich
	      <img class="r-stretch" src="dist/media/menuebereich.png">
	      (1) Menüband, (2) Bearbeitungsleiste, (3) Namenfeld, (4) Schnellzugriffsleiste
	    </textarea>
	  </section>
	  <section data-markdown data-background-image="dist/media/menuebereich.png" data-background-size="100%"
		   data-background-opacity=".2"><textarea data-template>
	      ### (1) Menüband
	      Das `Menüband` ist die breite Leiste mit Schaltflächen für die am häufigsten gebrauchten Funktionen.
	      <small>
		
		> *"Du kannst Text in Spalten verwenden, das ist im Menü unter Daten, ca. in der Mitte &hellip;"*

		&hellip; bedeutet: klick den Reiter/Tab/Register Daten im Menübereich, dann findest du die gesuchte Schaltfläche im Menüband (ca. in der Mitte, genauer gesagt: in der Gruppe |Datentools|).
	      </small>
	  </textarea></section>
	  <section data-markdown data-background-image="dist/media/menuebereich.png" data-background-size="100%" data-background-opacity=".2"><textarea data-template>
	      Das `Menüband` ist nach Aufgabenbereichen und Priorität sortiert.

	      Nicht alle vorhandenen Optionen sind von Haus aus eingeblendet. Für exotischere Funktionen empfiehlt sich die [Anpassung des Menübands](https://support.microsoft.com/de-de/topic/anpassen-des-men%C3%BCbands-in-office-00f24ca7-6021-48d3-9514-a31a460ecb31) über das `Kontextmenü`.

	      
	      <small>🌐 `Kontextmenü:` öffnet sich auf `Rechtsklick` oder über die [`Menütaste`](https://de.wikipedia.org/wiki/Men%C3%BC-Taste)<k>🗉</k>(meist zwischen <k>Leertaste</k> und <k>STRG</k>).
	      </small>
	  </textarea></section>
	  <section data-markdown data-background-image="dist/media/menuebereich.png" data-background-opacity=".2" data-background-size="100%"><textarea data-template>
	      ### (2) Bearbeitungsleiste
	      hauptsächlich für das *Bearbeiten* von umfangreicheren `Zellformeln`. Die Formel*eingabe* erfolgt schneller direkt in der Zelle).
	      
	      <small>🤓     Pro-Tipp: die Eingabeleiste kann mit der Maus auf Mehrzeilen-Ansicht vergrößert, und Formeln durch <k>ALT</k>+<k>ENTER</k> in mehrere Zeilen umgebrochen werden. So lassen sich verschachtelte Formeln leichter nachvollziehen.</small>      
	  </textarea></section>

	  <section data-markdown data-background-image="dist/media/menuebereich.png" data-background-opacity=".2" data-background-size="100%"><textarea data-template>
	      ### (3) Namenfeld
	      Das Benennen von `Bereichen` und das Arbeiten mit `Namen` gehört zu den wichtigsten Hilfsmitteln für übersichtliche und nachvollziehbare `Zellformeln`.
	      
	      <small> In diesem Feld können Namen bequem vergeben, oder zu `benannten Bereichen` gesprungen werden. (Für den vollen Funktionsumfang: <m>Formeln</m>(Namensmanager) bzw. <k>STRG</k>+<k>F3</k>.</small>
	  </textarea></section>
	  <section data-markdown data-background-image="dist/media/menuebereich.png" data-background-opacity=".2" data-background-size="100%"><textarea data-template>
	      ### (4) Schnellzugriffsleiste
	      Klein, aber fein: in dieser Mini-Leiste lassen sich Bedienelemente einrichten, die in den Tiefen des Menübands (falls überhaupt) verborgen sind.
	      
	      <small>🌐&nbsp; Dort kann z. B. der `Dokumentspeicherort` = *Dateiname samt vollständigem Pfad* angezeigt und in die Zwischenablage kopiert werden: praktisch, um die Datei als Attachment oder Link zu versenden, ohne in Outlook extra durch die Dateiauswahl zu müssen.</small>
	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      <uebung>Übung</uebung>	      
	      Erweitere deine `Schnellzugriffsleiste` um eine Funktion deiner Wahl!
	      
	      <img src="dist/media/schnellzugriff-anpassen.png">
	  </textarea></section>
	  
	  <section data-markdown><textarea data-template>
	      ## Arbeitsbereich
	      <img class="r-stretch" src="dist/media/gui.png">
	      
	      Im (2) `Arbeitsbereich` bewegst du dich besser mit Tasten als mit der Maus!
	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      Im Arbeitsbereich ist der Effizienz-Unterschied zwischen ⌨️ und 🖱️ ähnlich wie der zwischen Stenotypie und Zwei-Finger-System beim Schreiben eines Romanes.

	      Ohne Maus ersparst du dir hier  mittelfristig Zeit, Mühe und [Schulterprobleme](https://de.wikipedia.org/wiki/Repetitive-Strain-Injury-Syndrom)!
	  </textarea></section>

	  <section data-markdown><textarea data-template>

	      **Wieso ist das mühelose Bewegen im Arbeitsbereich so wichtig?**

	      <small>
		
		Ein `Tabellenblatt` umfasst 1.048.576 Zeilen &times; 16.384 Spalten.
		
		Bei umfangreichen Tabellen dauert das Scrollen mit der Maus lange, und man schießt leicht über den gewünschten Bereich hinaus.

		Oft stehen die interessantesten Zahlen aber an den Rändern, oder man möchte schnell eine Spaltensumme bilden oder &hellip;

		Je umständlicher die Bewegung in der Tabelle, desto eher verzichtet man auf Zwischendurch-Kontrollen oder zerstückelt die Daten in kleine Häppchen. Das erhöht die Fehleranfälligkeit.

	      </small>
	  </textarea></section>

	  <section data-markdown><textarea data-template>
	      **Wie funktioniert das?**
	      <small>
		1.  Die Pfeiltasten  verschieben die Auswahl in Einzelschritten in die gewünschte Richtung: <k>🡆</k> eine `Zelle` nach rechts etc. So weit, so gewohnt.
		
		2.&nbsp;   <k>STRG</k> (Steuerung) bzw. <k>Ctrl</k> ist der Turbo für die Navigation. Die Bewegung erfolgt nicht mehr zellweise, sondern bis an die nächstgelegene Kante eines `zusammenhängenden Bereiches`. <small>Will man z. B. in die letzte Zeile einer Tabelle mit 34.000 Zeilen, weil dort die Spaltensumme steht: <k>STRG</k>+<k>↓</k>. Zurück zur Spaltenüberschrift? <k>STRG</k>+<k>↑</k>.</small>
		
		3.&nbsp;Mit <k>&nbsp;⇧&nbsp;</k> kannst du die Zellen gleichzeitig markieren.
	      </small>
	  </textarea></section>

	  <section data-markdown><textarea data-template>
	      ### Tastatur-Ballett
	      #### die Grundposition
	      <img src="dist/media/navigate.png">
	      <small>
		- linke Hand am Rand, **Zeigefinger** für <k>&nbsp;⇧&nbsp;</k> und <k>⭾</k>, **Daumen** für <k>CTRL</k>, <k>ALT</k>, <k>⊞</k>
		- rechte Hand auf den Pfeiltasten, von dort ist es nicht weit zu `Nummernblock` & Co.
	      </small>	      
	  </textarea></section>

	  <section data-markdown data-background-image="dist/media/navigate.png" data-background-opacity=".2" data-background-size="100%"><textarea data-template>
	      <uebung>Übung: effizientes Bewegen via Tastatur</uebung>

	      
	      s. Anweisungen in
	      - Arbeitsmappe: Teil 1.xlsx
	      - Blatt: Bewegen

	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      ### Ansichtssache

	      <small>	      
		Excel kann seinen Arbeitsbereich unterschiedlich präsentieren. Bei hohen statt breiten Datentabellen (🌐 [eine gute Angewohnheit!](https://tidyr.tidyverse.org/articles/tidy-data.html#defining-tidy-data)) sorgt `Fenster fixieren` dafür, dass Spaltentitel, ID-Spalten etc. auch beim Scrollen sichtbar bleiben.

		`Fenster teilen` liefert unterschiedliche Ausschnitte der Arbeitsfläche, die simultan scrollen.

		Die `Umbruchvorschau` hilft, Layout und `Druckbereich` einzustellen.

		`Benutzerdefinierte Ansichten` hilft, verschiedenen Empfängern der Arbeitsmappe unterschiedliche Ansichten voreinzustellen.

		`Zoom` stellt die Vergrößerung ein. Wer auch immer das nicht schneller über Statusleiste oder <k>STRG</k> + Scrollrad erledigt &hellip;
		
	      </small>

	  </textarea></section>
	  
	</section>
	<section>
	  <section data-markdown><textarea data-template>
	      # Die Anatomie
	      <img  class="r-stretch" src="dist/media/anatomie.png">	    
	  </textarea></section>


	  <section data-markdown  data-background-image="dist/media/anatomie.png" data-background-opacity=".1" data-background-size="100%"><textarea data-template>
	      🔑 Jeder Bereich kann Werte aus jedem anderen "ziehen" - und jede Änderung in einer Vorgängerzelle pflanzt sich automatisch zu den Nachfolgerzellen fort.
	      
	      <img class="r-frame" src="dist/media/verweis-in-andere-tabelle.png" width="30%">

	      
	      <small>Das geht auch von einer Arbeitsmappe in die andere &hellip; wenn man sein Schicksal herausfordern will.</small>      
	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      ### Tastatur-Ballett (featuring 🐭)
	      #### Bereiche kopieren, verschieben, löschen
	      <small>
		<k>STRG</k> + <k>&nbsp;+&nbsp;</k> bzw. <k>&nbsp;-&nbsp;</k> fügt für die Markierung Zellen ein bzw. entfernt sie.
		<k>STRG</k> bzw. <k>&nbsp;⇧&nbsp;</k> + <k>Leertaste</k> markiert die ganze Spalte bzw. Zeile.

		<img class="r-stretch" src="dist/media/merkhilfe-zeilen-spalten.png">
		
	      </small>
	  </textarea></section>

	  <section data-markdown><textarea data-template>
	      <small>	      
		<k>STRG</k> + Drag (mit Maus ziehen) **kopiert** Auswahl an die gewünschte Stelle (auch ganze `Tabellenblätter`, Textteile in Word, Dateien im Explorer, Objekte in Powerpoint usw.)
		
		<img src="dist/media/drag-n-copy.png">
		
	      <k>&nbsp;⇧&nbsp;</k> + Drag: schiebt Auswahl zwischen bereits befüllte Bereiche ein, **ohne** die vorhandenen Inhalte zu überschreiben.
	      
	      <img src="dist/media/shift-n-drag.png">
	      </small>
	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      <uebung>Übung: Minecraft auf Excel</uebung>

	      s. Anweisungen in Arbeitsmappe **Teil 1.xlsx**, Blatt:&nbsp;Blöcke managen
	  </textarea></section>	  
	  <section data-markdown data-background-color="#93b7ea"><textarea data-template>
	      <quote>&ldquo;Gute Freunde sagen dir auch unangenehme Wahrheiten.</quote>


	      Weil Excel alles<small><sup>*eh irgendwie*</sup>
	      </small> kann und mitmacht, lässt es bei der Datenanalyse viele schlechte Angewohnheiten durchgehen oder erst entstehen.
	      <small>(Von der Datendarstellung ganz zu schweigen.)</small>
	      .
	      <small>
	      Kein Problem, wenn es um eine formatierte Telefonliste geht. Ein 😠, [mindestens](https://de.wikipedia.org/wiki/Kenneth_S._Rogoff#Fehlerhafte_Berechnungen_f%C3%BCr_Growth_in_a_time_of_debt), für die (Zusammen)Arbeit in der Datenauswertung.
	      </small>
	      
	  </textarea></section>
	  <section data-markdown data-background-color="#93b7ea">
	    <textarea data-template>
	      ### 🧭 Ein Level, ein Gegenüber, ein Blatt.

	      📄 **Originaldaten**, ggf. mit Schreibschutz. *Eingangsdaten werden nur hier geändert*.
		
		📄 optional: "Schmierzettel" für Notizen, Tests*

		📄 **Berechnungen** auf Ebene der Einzeldaten. Hier wird nicht mehr an den Originaldaten umgebessert!

		📄 **Zusammenfassungen**: Statistiken auf Gruppeneben (meistens Pivot-Tabellen)

		📄 **Präsentation** der Kernergebnisse (Dashboard und so). *Nur hier ist Platz für den Kreativpinsel.*  
		



	    </textarea></section>
	  



	</section>

	<section data-visibility="hidden" data-markdown><textarea data-template>
	    # Ende Teil 1
	</textarea></section>

	<section>
	  <section data-markdown><textarea data-template>
	      # Der Inhalt
	      > <strong>&ldquo;</strong> Wozu mit dem Kopf durch die Wand &ndash;
	      > was wollen Sie in der Nachbarzelle?
	      >
	      > <small>&mdash; Volksweisheit</small>
	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      ## lebendige Beziehung
	      <remark>* Außer man stellt die Berechnung automatisch auf manuell.</remark>
	      Das Um & Auf einer `Tabellenkalkulation` ist, dass alle `Zellen` miteinander Information austauschen können und jede Änderung eines Zellinhalts **unmittelbar** die nachfolgenden Zellen aktualisiert\*.
	  </textarea></section>
	  <section data-markdown><textarea data-template>
	      Um den Wert (oder die Werte) eines anderen `Bereiches` zu verwenden, fügt man einen `Bezug` in eine `Formel` ein.
	      
	  </textarea></section>                          

          <section data-markdown><textarea data-template>
	      Für Bezüge wird normalerweise die `Adresse` des Quellbereiches verwendet.
	      Das kann eine einzelne Quell-Zelle sein:
	      <img class="r-stretch" src="dist/media/bezug-1.png">
	  </textarea></section>
          <section data-markdown><textarea data-template>
	      &hellip; oder ein zusammenhängender Bereich
	      
	      - der von Start- und Zielzelle aufgespannt wird:
	      <img class="r-stretch" src="dist/media/bezug-2.png" width="50%">	      

	      - oder eine ganze Spalte / Zeile
	      <img class="r-stretch" src="dist/media/bezug-4.png" width="50%">
	      


	      
          </textarea></section>

          <section data-markdown>

	    <textarea data-template>
	      &hellip; aber auch ein zusammengesetzter Bereich:
	      
	      <remark style="font-size:2rem">:&nbsp;≠&nbsp;;</remark><img class="r-stretch" src="dist/media/bezug-3.png" width="50%">


	      <img class="r-stretch" src="dist/media/wirrwarr.jpg" alt="">
	      <small>Das Auftauchen solcher <strike>zerrupfter</strike> zusammengesetzter Bereiche in Formeln ist (meist) ein guter Zeitpunkt, sich noch einmal über die Struktur Gedanken zu machen.</small>
          </textarea></section>                          	  
	  
	</section>
	<section>
	  
	    <script data-quiz="quiz" src="dist/quizzes/quiz-bezuege.js"></script>
	</section>

        <section data-markdown><textarea data-template>
	    


	    
	    
          </textarea></section>                          	
      </div>
    </div>

    <script src="dist/reveal.js"></script>
    <script src="plugin/notes/notes.js"></script>
    <script src="plugin/markdown/markdown.js"></script>
    <script src="plugin/highlight/highlight.js"></script>
    <script>
      // More info about initialization & config:
      // - https://revealjs.com/initialization/
      // - https://revealjs.com/config/


      //multiplex token:
      // {"secret":"16249627042032235834","socketId":"9ada756d51337056"}
      // obtained from https://reveal-multiplex.glitch.me/token
      
      Reveal.initialize({
	  hash: true,

	  // Learn about plugins: https://revealjs.com/plugins/
	  plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ],


	  // multiplex for master
	  multiplex: {
	      // Example values. To generate your own, see the socket.io server instructions.
	      //	  {"secret":"16078823428945551972","socketId":"54e086f6ea0861b5"}

	      // secret: null, // uncomment for client presentation
	      secret: '16249627042032235834', // uncomment for master presentation
	      id: '9ada756d51337056', // id, obtained from socket.io server
	      url: 'https://reveal-multiplex.glitch.me/' // Location of socket.io server
	  },
	  dependencies: [
              { src: 'plugin/quiz/js/quiz.js', async: true, callback: function() { prepareQuizzes({}); }},
	      { src: 'https://reveal-multiplex.glitch.me/socket.io/socket.io.js', async: true },
	      { src: 'https://reveal-multiplex.glitch.me/master.js', async: true }
	  ]
  
      });
    </script>
  </body>
</html>
