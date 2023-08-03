//funzioni Memory
function giraCarte () {
	primaCarta.setAttribute("src", COPERTINA_CARTA);
	primaCarta = null;
	secondaCarta.setAttribute("src", COPERTINA_CARTA);
	secondaCarta = null;
}
function gestoreClickCarta () {
	try {
		if (this.getAttribute("carta") == "scoperta") {
			return;
		}			
		if (this == primaCarta) {
			return;
		}
		if (primaCarta == null) {
			primaCarta = this;
		    this.setAttribute("src", this.getAttribute("src1"));
			return;	
		}
		if (secondaCarta == null) {
			secondaCarta = this;
			this.setAttribute("src", this.getAttribute("src1"));
			if (primaCarta.getAttribute("src") ==
			    secondaCarta.getAttribute("src")) {
			   primaCarta.setAttribute("carta", "scoperta");
			   primaCarta = null;
			   secondaCarta.setAttribute("carta", "scoperta");
			   secondaCarta = null;
			} else {
                setTimeout(giraCarte, RITARDO);
	        }
        }
    } catch ( e ) {
       alert ("gestoreClickCarta " + e);
    }
}
function uniformeRandom (k) {
     return Math.trunc(Math.random() * k);
}
function calcolaIndiceCarta () {
	var i = uniformeRandom(NUMERO_CARTE);
	while (carte[i] == null) {
	     i = (i + uniformeRandom(NUMERO_CARTE)) % NUMERO_CARTE;
	}
    return i;
}
//funzione CONSIGLI A SCOMPARSA
function gestoreComparsa(event) {
	try{
		var contatore = 1; //cambia l'ultimo numero di divRisposta
		while (contatore < 7) { //verifica tutti i divisori
			if (document.getElementById("divRisposta"+(contatore)).childElementCount>0)	{ //se un divRisposta ha già un figlio
				document.getElementById("divRisposta"+(contatore)).removeChild(document.getElementById("divRisposta"+(contatore)).firstChild); //lo toglie		
			}    
			contatore++;
		}
		var nodoRisposta = document.createElement ("p"); //creo un paragrafo
		document.getElementById("divRisposta"+(divisori[this.id])).appendChild(nodoRisposta); //attacco il paragrafo al divisorio risposta relativo alla domanda cliccata
		var testo = document.createTextNode(tabella[this.id]); //creo il testo
		nodoRisposta.appendChild(testo); //lo appendo al paragrafo
	}catch (e) {
		alert ("gestoreComparsa " + e);	
	}
}
//memory 
const NUMERO_IMMAGINI = 8;
const NUMERO_CARTE = NUMERO_IMMAGINI * 2;
const RITARDO = 800;
const COPERTINA_CARTA = "copertina.png";
var carte;
var primaCarta;
var secondaCarta;
var nodoNuovaPartita;
//var consigli a scomparsa
var Domanda1;
var Domanda2;
var Domanda3;
var Domanda4;
var Domanda5;
var Domanda6;
var divRisposta1;
var divRisposta2;
var divRisposta3;
var divRisposta4;
var divRisposta5;
var divRisposta6;
var tabella;

//gestoreLoad, prima parte memory
function gestoreLoad () {
 try {
	nodoNuovaPartita = document.getElementById("nuovaPartita");
	nodoNuovaPartita.onclick = gestoreLoad;
	carte = [];
	for (var i = 0; i < NUMERO_CARTE; i++) {
	   var idImmagine = "t" + String(i);
	   var nodoCarta = document.getElementById(idImmagine);
	   nodoCarta.setAttribute("src", COPERTINA_CARTA);
	   nodoCarta.setAttribute("carta", "coperta");
	   nodoCarta.onclick = gestoreClickCarta;
	   carte.push(nodoCarta);
	}
    for (var i = 0; i < NUMERO_IMMAGINI; i++) {
	   var fileImmagine = "carta" + i + ".png";
	   var i1 = calcolaIndiceCarta();
	   carte[i1].setAttribute("src1", fileImmagine);
	   carte[i1] = null;
	   var i2 = calcolaIndiceCarta();
	   carte[i2].setAttribute("src1", fileImmagine);
	   carte[i2] = null;
    }
	primaCarta = null;
	secondaCarta = null;
//parte consigli
	Domanda1 = document.getElementById("Domanda1");
	Domanda2 = document.getElementById("Domanda2");
	Domanda3 = document.getElementById("Domanda3");
	Domanda4 = document.getElementById("Domanda4");
	Domanda5 = document.getElementById("Domanda5");
	Domanda6 = document.getElementById("Domanda6");
	
	Domanda1.onclick = gestoreComparsa;
	Domanda2.onclick = gestoreComparsa;
	Domanda3.onclick = gestoreComparsa;
	Domanda4.onclick = gestoreComparsa;
	Domanda5.onclick = gestoreComparsa;
	Domanda6.onclick = gestoreComparsa;

	divRisposta1 = document.getElementById("divRisposta1");
	divRisposta2 = document.getElementById("divRisposta2");
	divRisposta3 = document.getElementById("divRisposta3");
	divRisposta4 = document.getElementById("divRisposta4");
	divRisposta5 = document.getElementById("divRisposta5");
	divRisposta6 = document.getElementById("divRisposta6");
	
	tabella = {
		Domanda1:"I DSA sono disturbi specifici dell’apprendimento, quindi coinvolgono specifiche aree. " +
                 "Non esistono terapie o cure, ma è possibile compensare le aree dell’apprendimento in cui uno studente DSA presenta defiance attraverso specifici strumenti, chiamati appunto “strumenti compensativi”. "+
                 "Ne esistono di varia natura, dai più strategici che riguardano i modi in cui uno studente può apprendere (modi diversi di leggere, estrapolare le parole chiave per costruire un discorso, associazioni auditive, visive, etc..) fino ad arrivare ai veri e propri strumenti informatici, quali software per realizzare mappe, penne registratori, block notes particolari, software che “leggono” qualsiasi testo scritto digitale. " +
                 "Gli strumenti compensativi sono la chiave del successo nello studio di un dislessico, in quanto permettono di risparmiare tempo, la risorsa più importante e spesso più compromessa. " +
                 "La chiave del vostro studio dovrà essere studiare in modo intelligente e con i supporti giusti, così da poter raggiungere gli stessi risultati dei vostri compagni con tempi che vi rendano giustizia."
                 ,
		Domanda2:"Ricevere una diagnosi firmata da medici e psicologi può far paura, tuttavia dovete sapere che quel documento non è solo lì per voi, ma soprattutto per chi avrà a che fare con voi. "+
				 "Non è un decalogo di insormontabili problemi che vi affliggeranno per il resto della vita, piuttosto un documento che dichiara la veridicità del vostro disturbo e cosa può comportare o no in base ai risultati che i vostri test evidenzieranno. "+
				 "Non siete malati e non siete condannati. "+
				 "Questo documento sarà vostro amico durante tutto il percorso di studi e aiuterà i vostri docenti a capire le ragioni per cui “eccelle e poi cade su delle banalità”, “ha svolto mezzo compito, ma tutto corretto”, e tanti di quei famosi cliché tipici dei ragazzi DSA. "+
				 "Soprattutto, aiuterà il vostro docente a capire il metodo d’insegnamento giusto per voi e come permettervi di raggiungere gli stessi risultati dei vostri compagni nel modo più equo possibile."
				 ,
		Domanda3:"Non è raro sentir raccontare storie di vessazioni, incomprensioni e cattiverie, quando si ascolta un ragazzo DSA. "+
				 "La dislessia è un disturbo la cui conoscenza sta piano piano aumentando, ma in Italia questo termine è comparso per le prime volte negli anni '90, e soltanto nel 2010 è stata emanata la legge 170, ovvero la prima vera tutela legale specifica nei confronti degli studenti DSA. "+
				 "Non tutti i docenti sono stati formati sull’argomento in modo esaustivo, e tra i “sentito dire”, le apparenze e i pregiudizi, non è improbabile che qualcuno abbia elaborato la cosa come un alibi. "+
				 "Questi giudizi partono da una conoscenza superficiale dei DSA, da un “ignorare” l’argomento. Il miglior atteggiamento che potete mostrare, non è odio o rabbia, ma comprensione e disponibilità. "+
				 "Parlate seriamente con i vostri docenti, cercate di far capire loro cosa siano realmente i DSA, la loro origine neurologica, i problemi che dovete affrontare nello studio. "+
				 "Nella maggior parte dei casi, saranno disponibili a comprendervi ed aiutarvi. "+
				 "Nel caso così non fosse, e vi troviate ad affrontare situazioni che vi arrecano pesante disagio, ricordate che in tutte le scuole secondarie esiste “lo statuto degli studenti e delle studentesse”, che vi protegge dai casi di accanimento, sabotaggio e bullismo da parte dei docenti. "+
				 "Se vi trovate a dover affrontate docenti non aperti al dialogo e alla comprensione, esiste la legge 170 entrata in vigore dal 2010, che mira a far riconoscere i tuoi diritti sull’uso di mezzi compensativi e il rispetto del Piano Didattico Personalizzato (PDP) stipulato insieme a loro. "+
				 "In quanto tali misure richiedono spesso azioni legali e inasprimento del rapporto docente-studente, si consiglia di provare qualsiasi altro approccio e arrivare a queste solo il caso di estrema necessità. "
				 ,
		Domanda4:"Chi vi ha diagnosticato vi avrà sicuramente parlato della necessità di consegnare la vostra diagnosi alla scuola e spiegare le singole necessità ai tuoi compagni in modo da poter usufruire dei cosiddetti “strumenti compensativi”. "+
				 "Apparentemente nessun problema, tutto burocraticamente semplice. "+
				 "Ma le domande che potreste porvi sono altre, domande scomode che avete probabilmente paura di esternare, per il timore che vengano congedate con risposte di rito e politicamente corrette quando la realtà potrebbe essere più complicata di quello che sembra. "+
				 "Ci saranno persone che, a prescindere da quanto voi possiate spiegarvi, vi giudicheranno. "+
				 "Il concetto di strumenti compensativi, che compensano delle mancanze, non risulta sempre chiaro a chi queste mancanze non le ha. Gli strumenti in mano ad uno studente non DSA, sarebbero un vantaggio, no? la dislessia, inoltre, non è evidente come un braccio ingessato o una sedia a rotelle. "+
				 "Questo potrebbe portare persone non realmente interessate ad obiettare, a criticarvi, per il semplice fatto di non poter vedere in modo palese il vostro disagio da compensare. "+
				 "Questo non deve spaventarvi e spingervi a non usarli. "+
				 "La dislessia esiste, è riconosciuta ufficialmente in quanto disturbo e necessita di mezzi compensativi per affrontarla. L’ignoranza non deve fermarvi, i diritti non si regalano e se vi sono stati riconosciuti e perché ne avete l’esigenza. " +
				 "Per quanto sia difficile sopportare la pressione sociale, le cattiverie e le critiche, ricordatevi che è vostro diritto e dovere utilizzarli e che anzi lo dovete a voi stessi. Le critiche non costruttive e gratuite non definiscono la vostra persona, ma chi ve le fa. "+ 
				 "Infine, la risposta alla vostra domanda è: No, non sarà sempre facile, dovrete spesso essere disponibili a spiegare i vostri problemi, con il rischio che non vengano compresi. "+
				 "Con il passare degli anni la consapevolezza dei docenti aumenterà sempre di più e questi fenomeni spiacevoli saranno sempre di meno, ciò nonostante, dovrete essere forti e difendervi quando sarà necessario. Le soddisfazioni arriveranno soprattutto da questo."
		          ,
		Domanda5:"Solitamente il compito di spiegare al nucleo classe cosa sei, viene lasciato ai docenti. Nella speranza che il compito venga ben assolto, non è raro che vi possano chiedere maggiori spiegazioni in privato. "+
				 "All’inizio è difficile sapere cosa dire, come affrontare l’argomento né in modo troppo superficiale né in modo troppo dispersivo. Far capire agli altri le proprie difficoltà nello svolgere compiti normalmente automatici per loro, non è mai facile. "+
				 "Però hai due motivi per gioire: il primo è che qualcuno sia sinceramente curioso riguardo l’argomento, il secondo è la sfida che ti pone, ovvero farti comprendere da chi non potrebbe. "+
				 "Spiegare i meccanismi scientifici che portano a determinate conseguenze è interessante entro un certo limite, l'ideale sarebbe poter far “provare” le vostre difficoltà agli altri, in modo che siano più predisposti all’empatia, piuttosto che alla mera comprensione di fatti. "+
				 "Sono stati realizzati vari progetti per far “provare cosa significa” agli altri, da siti particolari a piccoli esperimenti di gruppo. "+
				 "Essendo un settore di nicchia ce ne sono ancora pochi, ma nel tempo son destinati ad aumentare. "+
				 "Nel frattempo, usa la tua immaginazione e creatività e magari sarete proprio voi a idearne e crearne uno in futuro!"
		         ,
		Domanda6:"Qui vi parlerò della cura dei DSA, ma non nel senso in cui potreste averlo inteso. "+
				 "La cura è quella che dovrete avere nei vostri confronti. La dislessia infatti ha svariate conseguenze nello studio, nella vita privata, e in tanti altri aspetti non ipotizzabili. "+
				 "Impiegare 7 ore per svolgere i compiti al liceo, invece che 3, potrebbe comportare il non avere tempo per la vita sociale o attività secondarie; questo a sua volta potrebbe influenzare negativamente il rendimento e stato d’animo. "+
				 "Reazioni a catena, molto pericolose e apparentemente normali, devono diventare il vostro nemico. "+
				 "La dislessia non pone limiti veri e propri, ma vi pone nella situazione di dover attuare svariate strategie per non lasciarvi sopraffare dalle conseguenze che comporta. "+
				 "Questo discorso può valere per tutti, ma soprattutto per noi. Le conseguenze psicologiche della dislessia sui ragazzi sono diverse, dalla scarsa autostima,derivante da anni di insuccessi dovuti alla mancata diagnosi, ai disturbi d’ansia e, sia pure in rari casi, depressione. "+
				 "Dovete riconoscere a voi stessi gli sforzi che fate, il tempo in più che impiegate, la stanchezza maggiore che accumulate. Scegliendo di studiare, state sfidando il concetto stesso di disturbo d’apprendimento. "+
				 "Non è la dislessia il problema in sé, ma la mancata cura della stessa. Quando avrete fatto il giusto e subentranno la stanchezza e il malessere, avete il diritto e il dovere di prendervi una pausa, a prescindere dall’esito a cui vi porterà. "+
				 "Il vero riconoscimento deve partire da voi stessi, dalla consapevolezza di aver fatto il possibile e spesso anche di più. "+
				 "Dovete avere cura di voi e del vostro DSA, elaborare strategie per impiegare meno tempo e studiare con più efficienza. Unire strategia e convenienza per mantenere un equilibrio sano. E’ questa la vera e unica cura."
	}		
 }catch (e) {
		alert ("gestoreLoad " + e);	
 }	
}

window.onload = gestoreLoad;

var divisori = {
		Domanda1:"1",
		Domanda2:"2",
		Domanda3:"3",
		Domanda4:"4",
		Domanda5:"5",
		Domanda6:"6"
}