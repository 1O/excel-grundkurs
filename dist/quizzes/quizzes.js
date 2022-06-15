quiz_bezuege = {
    "info": {
        "name":    "",
        "main":    "",
        "level1":  "Level 1",
        "level2":  "Level 2",
        "level3":  "Level 3",
        "level4":  "Level 4",
        "level5":  "Level 5" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
	    "q": "Welche drei Zellformeln liefern den Wert von Zelle <strong>B23</strong>?",
            "a": [
                {"option": "=BEZUG(B23)",      "correct": false},
		{"option": "=B23",      "correct": true},
                {"option": "=B:23",     "correct": false},
		{"option": "=$B$23",     "correct": true},
                {"option": "=[B:B][23]",     "correct": false},
		{"option": "=INDIREKT(\"B23\")",     "correct": true}
            ],

            "correct": "Richtig!",
            "incorrect": "Nicht ganz richtig. Viele Wege führen nach Rom. Bezüge können z. B. relativ (B23), absolut ($B$23), gemischt relativ/absolut oder über die Formel =INDIREKT(...) hergestellt werden."
        },
        // more questions here

	{ // Question 1 - Multiple Choice, Single True Answer
	    "q": "Welche drei Zellformeln liefern die Summe aller Werte in Zeile 7?<br/><small>Die letzte Spalte rechts lautet XFD. </small>",
            "a": [
                {"option": "=SUMME(7:7)",      "correct": true},
		{"option": "=ZÄHLEN(7:7)",      "correct": false},
		{"option": "=SUMME(A7:XFD7)",     "correct": true},
                {"option": "=ZEILENSUMME(7)",     "correct": false},
		{"option": "=SUMME(BEREICH.VERSCHIEBEN(8:8;-1;0))",     "correct": true}
            ],

            "correct": "Richtig!",
            "incorrect": "Leider falsch &hellip; Nicht alle Möglichkeiten erkannt - oder einmal danebengetippt? Egal: Excel würde im Fall des Falles mit einer spezifischen Meldung auf die Fehlerquelle hinweisen."

        },



	
    ]
}
