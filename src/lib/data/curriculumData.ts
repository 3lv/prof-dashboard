type GeneralCompetenceId = "1" | "2" | "3" | "4" | "5" | "6"

interface CurriculumData {
	[key: string]: CurriculumDataPerGrade,
}
interface CurriculumDataPerGrade {
	units: Unit[],
	competences: {
		[key: string]: GeneralCompetence,
	},
}
interface Unit {
	title: string,
	contents: Content[],
}
interface Content {
	name: string,
	competences: CompetenceId[],
}

interface GeneralCompetence {
	title: string,
	items: SpecificCompetence[]
	
}
interface SpecificCompetence {
	title: string,
	items: Competence[],
}

type Competence = string;

type CompetenceId = string;


const curriculumData5: CurriculumDataPerGrade = {
  units: [
    {
      title: "Operaţii cu numere naturale",
      contents: [
        {
          name: "Scrierea şi citirea numerelor naturale; reprezentarea pe axa numerelor; compararea şi ordonarea; aproximări, estimări",
          competences: ["3.1"]
        },
        {
          name: "Adunarea, scăderea, înmulţirea, împărţirea și proprietăţile numerelor naturale",
          competences: ["3.1"]
        },
        {
          name: "Calculul puterii cu exponent natural, pătrate perfecte și scrierea în baze diferite",
          competences: ["3.1"]
        },
        {
          name: "Ordinea efectuării operațiilor și utilizarea parantezelor",
          competences: ["3.1"]
        },
        {
          name: "Metode aritmetice de rezolvare a problemelor",
          competences: ["3.1"]
        }
      ]
    },
    {
      title: "Divizibilitatea numerelor naturale",
      contents: [
        {
          name: "Divizibilitatea numerelor: divizor, multiplu, divizori și multipli comuni",
          competences: ["3.1"]
        },
        {
          name: "Criterii de divizibilitate (2, 5, 10, 3, 9), numere prime și compuse",
          competences: ["3.1"]
        }
      ]
    },
    {
      title: "Fracţii ordinare",
      contents: [
        {
          name: "Fracţii ordinare: subunitare, echiunitare, supraunitare; procente; echivalenţe",
          competences: ["2.2"]
        },
        {
          name: "Compararea fracţiilor și reprezentarea pe axă",
          competences: ["2.2"]
        },
        {
          name: "Introducerea și scoaterea întregilor din fracţie",
          competences: ["2.2"]
        },
        {
          name: "Cel mai mare divizor comun și fracţii ireductibile",
          competences: ["2.2"]
        },
        {
          name: "Cel mai mic multiplu comun și aducerea la un numitor comun",
          competences: ["2.2"]
        },
        {
          name: "Adunarea, scăderea, înmulţirea și împărţirea fracţiilor",
          competences: ["2.2"]
        },
        {
          name: "Fracţii/procente dintr-un număr natural sau dintr-o fracţie",
          competences: ["2.2"]
        }
      ]
    },
    {
      title: "Fracţii zecimale",
      contents: [
        {
          name: "Fracţii zecimale și transformarea fracţiilor ordinare în fracţii zecimale",
          competences: ["2.3"]
        },
        {
          name: "Aproximări, comparări și reprezentarea pe axa numerelor",
          competences: ["2.3"]
        },
        {
          name: "Operații cu fracţii zecimale: adunare și scădere",
          competences: ["2.3"]
        },
        {
          name: "Înmulţirea fracţiilor zecimale și puteri cu exponent natural",
          competences: ["2.3"]
        },
        {
          name: "Împărţirea numerelor naturale cu rezultat fracţie zecimală și periodicitate",
          competences: ["2.3"]
        },
        {
          name: "Împărţirea fracţiei zecimale la un număr natural și între fracţii zecimale",
          competences: ["2.3"]
        },
        {
          name: "Transformarea unei fracţii zecimale periodice în fracţie ordinara",
          competences: ["2.3"]
        },
        {
          name: "Calcularea operațiilor cu numere raționale pozitive",
          competences: ["2.3"]
        },
        {
          name: "Metode aritmetice pentru probleme cu fracţii și unități de măsură",
          competences: ["2.3"]
        },
        {
          name: "Probleme de organizare a datelor și reprezentări statistice",
          competences: ["2.3"]
        }
      ]
    },
    {
      title: "Geometrie",
      contents: [
        {
          name: "Punct, dreaptă, plan, semiplan, semidreaptă, segment",
          competences: ["1.3", "4.3"]
        },
        {
          name: "Poziţiile relative: puncte coliniare, drepte concurente și paralele",
          competences: ["1.3", "4.3"]
        },
        {
          name: "Măsurarea distanţei, lungimea segmentelor și simetria punctelor",
          competences: ["1.3", "4.3"]
        },
        {
          name: "Unghiuri: definiţie, notaţii, măsurare și clasificare",
          competences: ["1.3", "4.3"]
        },
        {
          name: "Calculul măsurilor de unghiuri și figuri congruente",
          competences: ["1.3", "4.3"]
        },
        {
          name: "Unităţi de măsură pentru lungime, arie și volum; aplicaţii practice",
          competences: ["1.3", "4.3"]
        }
      ]
    }
  ],

  // Secțiunea de competențe generale, organizate pe capitole (cheile "1", "2", etc.)
  // Fiecare capitol are un titlu și un array de itemi (subcapitole) – fiecare cu titlu și o listă de itemi.
  competences: {
    "1": {
      title: "Identificarea unor date, mărimi și relații matematice în contexte",
      items: [
        {
          title: "Identificarea numerelor naturale în contexte variate",
          items: [
            "Scrierea şi citirea numerelor naturale în sistemul de numeraţie zecimal",
            "Identificarea numerelor naturale din diagrame, grafice sau tabele",
            "Determinarea unui număr natural pe baza condiţiilor impuse cifrelor sale",
            "Alegerea metodei aritmetice adecvate pentru rezolvarea unei probleme"
          ]
        },
        {
          title: "Identificarea fracţiilor ordinare sau zecimale în contexte variate",
          items: [
            "Utilizarea reprezentărilor grafice pentru fracţii (echiunitare, subunitare, supraunitare)",
            "Verificarea echivalenţei fracţiilor prin diverse reprezentări",
            "Scrierea unui procent ca fracţie ordinară (ex. 20% = 20/100)",
            "Identificarea datelor statistice din diagrame, tabele sau grafice"
          ]
        },
        {
          title: "Identificarea noţiunilor geometrice elementare şi a unităţilor de măsură",
          items: [
            "Observarea și identificarea figurilor geometrice din modele sau desene",
            "Descrierea elementelor din figurile și corpurile geometrice",
            "Identificarea segmentelor sau unghiurilor congruente în configuraţii simetrice",
            "Alegerea unităţii de măsură potrivite pentru estimarea dimensiunilor"
          ]
        }
      ]
    },
    "2": {
      title: "Prelucrarea unor date matematice de tip cantitativ și calitativ",
      items: [
        {
          title: "Efectuarea de calcule cu numere naturale",
          items: [
            "Realizarea operaţiilor aritmetice cu numere naturale",
            "Calcularea folosind factorul comun și puteri",
            "Reprezentarea datelor pentru aplicarea metodelor aritmetice"
          ]
        },
        {
          title: "Efectuarea de calcule cu fracţii",
          items: [
            "Introducerea și scoaterea întregilor din fracţii",
            "Înmulţirea, împărţirea și simplificarea fracţiilor",
            "Calcularea fracţiilor echivalente prin amplificare sau simplificare"
          ]
        },
        {
          title: "Utilizarea instrumentelor geometrice pentru măsurare și construcţie",
          items: [
            "Construirea figurilor geometrice cu dimensiuni date",
            "Măsurarea lungimilor folosind instrumente adecvate",
            "Aplicarea metodelor practice pentru măsurarea perimetrelor și ariilor"
          ]
        }
      ]
    },
    "3": {
      title: "Utilizarea conceptelor și a algoritmilor specifici în contexte matematice",
      items: [
        {
          title: "Utilizarea regulilor de calcul pentru operaţii cu numere naturale și divizibilitate",
          items: [
            "Aplicarea algoritmului de împărţire (cu/sau fără rest)",
            "Aproximarea rezultatelor și calculul expresiilor cu paranteze",
            "Determinarea unui număr natural pe baza unor condiţii impuse cifrelor"
          ]
        },
        {
          title: "Utilizarea algoritmilor pentru operaţii cu fracţii",
          items: [
            "Transformarea fracţiilor ordinare în fracţii zecimale și invers",
            "Aplicarea metodelor aritmetice pentru rezolvarea problemelor cu fracţii"
          ]
        },
        {
          title: "Determinarea perimetrelor, ariilor și volumelor",
          items: [
            "Calcularea perimetrului, ariei și volumului folosind metode practice",
            "Utilizarea unităţilor de măsură standard și a transformărilor între ele"
          ]
        }
      ]
    },
    "4": {
      title: "Exprimarea în limbajul specific matematicii a informaţiilor și demersurilor de rezolvare",
      items: [
        {
          title: "Exprimarea proprietăţilor operaţiilor cu numere naturale",
          items: [
            "Reprezentarea pe axa numerelor și justificarea estimărilor",
            "Exprimarea numerelor naturale sub formă de puteri și ca produs de numere prime"
          ]
        },
        {
          title: "Utilizarea limbajului specific fracţiilor/procentelor",
          items: [
            "Încadrarea unei fracţii între două numere naturale consecutive",
            "Determinarea unei fracţii dintr-un număr natural",
            "Exprimarea transformărilor monetare în limbaj specific"
          ]
        },
        {
          title: "Transpunerea în limbaj specific a problemelor practice",
          items: [
            "Compararea măsurătorilor exprimate în unităţi diferite",
            "Descrierea metodelor de verificare a coliniarităţii unor puncte"
          ]
        }
      ]
    },
    "5": {
      title: "Analizarea caracteristicilor matematice ale unei situaţii date",
      items: [
        {
          title: "Analizarea situaţiilor cu numere naturale",
          items: [
            "Evidenţierea avantajelor operaţiilor cu numere naturale",
            "Analiza numerelor ca pătrate perfecte și determinarea condiţiilor specifice",
            "Compararea numerelor naturale scrise sub formă de puteri",
            "Estimarea procentuală în contexte practice"
          ]
        },
        {
          title: "Analizarea situaţiilor cu fracţii",
          items: [
            "Reprezentarea fracţiilor pe axă și compararea acestora",
            "Analiza schemelor și algoritmilor pentru probleme practice cu fracţii",
            "Determinarea mediei unui set de date"
          ]
        },
        {
          title: "Interpretarea configuraţiilor geometrice",
          items: [
            "Estimarea ariilor suprafeţelor din contexte reale",
            "Determinarea axelor de simetrie și estimarea capacităţii unui vas"
          ]
        }
      ]
    },
    "6": {
      title: "Modelarea matematică a unei situaţii date",
      items: [
        {
          title: "Modelarea situaţiilor cu numere naturale",
          items: [
            "Formularea și rezolvarea problemelor practice folosind metode aritmetice",
            "Identificarea situaţiilor cu date insuficiente sau contradictorii"
          ]
        },
        {
          title: "Reprezentarea situaţiilor cu fracţii",
          items: [
            "Transformarea și aplicarea metodelor aritmetice pentru fracţii în contexte interdisciplinare"
          ]
        },
        {
          title: "Analizarea problemelor practice cu elemente de geometrie",
          items: [
            "Aplicarea unităţilor de măsură pentru determinarea lungimilor, ariilor și volumelor",
            "Modelarea figurilor pe suprafeţe mari și deducerea formulelor de calcul"
          ]
        }
      ]
    }
  }
};

const curriculumData6 = {
  units: [
    {
      title: "Mulţimi. mulțimea numerelor naturale",
      contents: [
        {
          name: "Descriere, notaţii, reprezentări; mulţimi numerice/nenumerice; relaţia dintre un element şi o mulţime; relaţii între mulţimi",
          competences: []
        },
        {
          name: "Mulţimi finite, cardinalul unei mulţimi finite; mulţimi infinite, mulțimea numerelor naturale",
          competences: []
        },
        {
          name: "Operaţii cu mulţimi: reuniune, intersecţie, diferenţă",
          competences: []
        },
        {
          name: "Descompunerea numerelor naturale în produs de puteri de numere prime; aplicaţie: determinarea c.m.m.d.c. şi c.m.m.m.c.; numere prime între ele",
          competences: []
        },
        {
          name: "Proprietăţi ale divizibilităţii în ℕ (exemple de relaţii și condiţii)",
          competences: []
        }
      ]
    },
    {
      title: "Rapoarte. Proporţii",
      contents: [
        {
          name: "Rapoarte; proporţii; proprietatea fundamentală a proporţiilor; determinarea unui termen necunoscut dintr-o proporţie; proporţii derivate",
          competences: []
        },
        {
          name: "Şir de rapoarte egale; mărimi direct proporţionale; mărimi invers proporţionale; regula de trei simplă",
          competences: []
        },
        {
          name: "Elemente de organizare a datelor și reprezentarea lor prin grafice, tabele sau diagrame (inclusiv probabilităţi – aplicaţie la rapoarte)",
          competences: []
        }
      ]
    },
    {
      title: "Mulţimea numerelor întregi",
      contents: [
        {
          name: "Mulţimea numerelor întregi; opusul unui număr întreg; reprezentarea pe axa numerelor; modulul unui număr; compararea şi ordonarea numerelor întregi",
          competences: []
        },
        {
          name: "Adunarea și scăderea numerelor întregi, cu evidenţierea proprietăţilor",
          competences: []
        },
        {
          name: "Înmulţirea numerelor întregi, evidenţierea proprietăţilor",
          competences: []
        },
        {
          name: "Împărţirea numerelor întregi (când deîmpărţitul este multiplu al împărţitorului)",
          competences: []
        },
        {
          name: "Ridicarea la putere cu exponent natural a numerelor întregi; reguli de calcul cu puteri",
          competences: []
        },
        {
          name: "Ordinea efectuării operaţiilor și folosirea parantezelor",
          competences: []
        },
        {
          name: "Ecuaţii, inecuaţii și probleme rezolvate cu ajutorul acestora în ℤ",
          competences: []
        }
      ]
    },
    {
      title: "Mulţimea numerelor raţionale",
      contents: [
        {
          name: "Noţiunea de număr raţional; mulţimea numerelor raţionale; reprezentarea pe axa numerelor; opusul și modulul unui număr raţional; compararea şi ordonarea",
          competences: []
        },
        {
          name: "Adunarea numerelor raţionale și proprietăţile operaţiilor; scăderea numerelor raţionale",
          competences: []
        },
        {
          name: "Înmulţirea numerelor raţionale; împărţirea numerelor raţionale; ridicarea la putere cu exponent întreg; reguli de calcul",
          competences: []
        },
        {
          name: "Ordinea efectuării operaţiilor şi folosirea parantezelor în ℚ",
          competences: []
        },
        {
          name: "Ecuaţii de tipul (ex.: x + a = b, x·a = b, etc.) rezolvate în ℚ",
          competences: []
        }
      ]
    },
    {
      title: "Noţiuni geometrice fundamentale",
      contents: [
        {
          name: "Unghiuri opuse la vârf, congruenţa, unghiurile din jurul unui punct, unghiuri suplementare și complementare",
          competences: []
        },
        {
          name: "Unghiuri adiacente; construcţia bisectoarei unui unghi",
          competences: []
        },
        {
          name: "Drepte paralele: definiţie, notaţie, construcţie intuitivă; criterii de paralelism; aplicaţii în poligoane și corpuri geometrice",
          competences: []
        },
        {
          name: "Drepte perpendiculare în plan, oblice; distanţa de la un punct la o dreaptă; mediatoarea unui segment; simetria faţă de o dreaptă",
          competences: []
        },
        {
          name: "Cercul: definiţie, construcţie; elemente (centru, rază, coardă, diametru, arc, unghi la centru) și măsuri",
          competences: []
        },
        {
          name: "Poziţiile relative ale unei drepte faţă de un cerc și ale a două cercuri",
          competences: []
        }
      ]
    },
    {
      title: "Triunghiul",
      contents: [
        {
          name: "Triunghiul: definiţie, elemente, clasificare, perimetru, suma unghiurilor, unghi exterior și teorema unghiului exterior",
          competences: []
        },
        {
          name: "Construcţia triunghiurilor: cazurile LUL, ULU, LLL; inegalităţi între elementele triunghiului",
          competences: []
        },
        {
          name: "Linii importante în triunghi: bisectoare, mediatoare, înălţimi, mediane și cercurile înscris și circumscris",
          competences: []
        },
        {
          name: "Congruenţa triunghiurilor: criterii (LUL, ULU, LLL, precum și criteriile pentru triunghiurile dreptunghice)",
          competences: []
        },
        {
          name: "Metoda triunghiurilor congruente – aplicaţii și proprietăţi ale triunghiurilor isoscel, echilateral și dreptunghic (inclusiv teorema lui Pitagora)",
          competences: []
        }
      ]
    }
  ],

  competences: {
    "1": {
      title: "Identificarea unor concepte și relaţii în contexte variate",
      items: [
        {
          title: "Identificarea unor noţiuni specifice mulţimilor și relației de divizibilitate în ℕ",
          items: [
            "Recunoaşterea unor mulţimi finite sau infinite (ex.: mulţimea numerelor naturale, numerele pare/impare, cifrele unui număr, divizorii/multiplii unui număr)",
            "Definirea unor mulţimi prin diagrame și/sau enumerare de elemente",
            "Recunoaşterea numerelor prime",
            "Identificarea unui număr compus dintr-o mulțime",
            "Identificarea unui divizor al unui număr dat",
            "Scrierea unui număr natural de două cifre ca produs de puteri de numere prime",
            "Scrierea mulțimii divizorilor unui număr prin descompunerea în factori primi",
            "Recunoașterea perechilor de numere prime între ele"
          ]
        },
        {
          title: "Identificarea rapoartelor, proporţiilor şi mărimilor direct sau invers proporţionale",
          items: [
            "Identificarea, citirea și scrierea de rapoarte și procente",
            "Exemplificarea de proporţii și mărimi direct/invers proporţionale (ex.: scara unei hărţi, concentraţia unei soluţii)",
            "Identificarea mărimilor direct proporţionale în reprezentări grafice"
          ]
        },
        {
          title: "Identificarea caracteristicilor numerelor întregi în contexte variate",
          items: [
            "Identificarea unui număr întreg în situaţii practice (ex.: temperaturi, altitudini, debit/credit)",
            "Reprezentarea pe axa numerelor a opusului unui număr întreg și definirea modulului",
            "Identificarea contextelor care folosesc ecuaţii sau inecuaţii în ℤ"
          ]
        },
        {
          title: "Recunoaşterea fracţiilor echivalente, ireductibile și a formelor de scriere a unui număr raţional",
          items: [
            "Identificarea unui număr raţional în situaţii practice (ex.: temperatura corpului, înălţime, preț)",
            "Reprezentarea numerelor raţionale pe axa numerelor, incluzând noţiunile de opus și modul",
            "Recunoaşterea contextelor ce folosesc numere raționale"
          ]
        },
        {
          title: "Recunoaşterea figurilor geometrice plane în configuraţii date",
          items: [
            "Identificarea dreptei sau unghiului într-o configuraţie geometrică din realitate",
            "Identificarea cercurilor și a arcelor de cerc în contexte practice",
            "Recunoaşterea relaţiilor între elemente geometrice (apartenenţă, incluziune, egalitate, concurenţă, paralelism, perpendicularitate, simetrie)"
          ]
        },
        {
          title: "Recunoaşterea elementelor de geometrie plană asociate noţiunii de triunghi",
          items: [
            "Recunoașterea triunghiurilor (isoscel, echilateral, ascuțitunghic, dreptunghic, obtuzunghic) în configuraţii",
            "Observarea elementelor caracteristice triunghiurilor în desene sau modele",
            "Descrierea caracteristicilor triunghiului prin observaţie și utilizarea instrumentelor geometrice",
            "Recunoașterea triunghiurilor congruente într-o configuraţie"
          ]
        }
      ]
    },
    "2": {
      title: "Prelucrarea datelor și rezolvarea ecuaţiilor/inecuaţiilor",
      items: [
        {
          title: "Evidenţierea relaţiilor de apartenenţă, incluziune, egalitate și criteriile de divizibilitate în ℕ",
          items: [
            "Recunoaşterea și exemplificarea elementelor care aparţin sau nu aparţin unei mulţimi (prin diagrame sau enumerare)",
            "Identificarea mulţimilor în relaţie de incluziune sau excludere",
            "Determinarea numerelor naturale divizibile cu 2, 5, 10, 3 sau 9 conform criteriilor",
            "Scrierea unui număr natural ca produs de puteri de numere prime (descompunere în factori)",
            "Selectarea numerelor prime sau compuse dintr-o enumerare"
          ]
        },
        {
          title: "Prelucrarea cantitativă a datelor utilizând rapoarte și proporţii",
          items: [
            "Determinarea unui procent dintr-un număr; calculul unui număr cunoscând un procent (ex.: reducere/creştere de preț, concentraţie)",
            "Calcularea unui termen necunoscut dintr-o proporţie",
            "Calcularea numerelor folosind un şir de rapoarte egale",
            "Determinarea valorii unui raport dintr-un şir de rapoarte (ex.: raportul sumelor sau produselor)",
            "Organizarea și reprezentarea datelor prin grafice, tabele sau diagrame statistice"
          ]
        },
        {
          title: "Utilizarea operațiilor cu numere întregi pentru ecuaţii și inecuaţii",
          items: [
            "Compararea numerelor întregi pe baza reprezentărilor pe axă",
            "Ordonarea elementelor unei mulțimi finite de numere întregi",
            "Aplicarea regulilor pentru adunare, scădere, înmulţire, împărţire și ridicare la putere în ℤ",
            "Validarea soluţiei unei ecuaţii sau inecuaţii prin probă"
          ]
        },
        {
          title: "Aplicarea regulilor de calcul cu numere raţionale pentru ecuaţii",
          items: [
            "Utilizarea operaţiilor cu numere raționale (adunare, scădere, înmulţire, împărţire – cu maximum două operaţii)",
            "Estimarea rezultatelor înainte de efectuarea calculelor",
            "Validarea soluţiei unei ecuaţii cu coeficienţi raționali prin probă",
            "Rezolvarea ecuaţiilor folosind regulile de calcul studiate"
          ]
        },
        {
          title: "Recunoașterea coliniarităţii și relaţiilor dintre unghiuri",
          items: [
            "Determinarea coliniarităţii punctelor din informaţii privind distanţe, segmente sau unghiuri/arce",
            "Verificarea dacă două unghiuri sunt suplementare, complementare sau congruente",
            "Aplicarea proprietăţii unghiurilor opuse la vârf și a celor din jurul unui punct pentru măsurare"
          ]
        },
        {
          title: "Calcularea lungimilor de segmente și măsurilor de unghiuri în geometria triunghiului",
          items: [
            "Determinarea tipului de triunghi prin calcule numerice cu segmente și unghiuri",
            "Calcularea liniilor importante într-un triunghi",
            "Măsurarea cu riglă și raportor pentru unghiurile exterioare ale unui triunghi"
          ]
        }
      ]
    },
    "3": {
      title: "Utilizarea conceptelor și algoritmilor matematici",
      items: [
        {
          title: "Reprezentarea mulţimilor și determinarea c.m.m.d.c. și c.m.m.m.c.",
          items: [
            "Reprezentarea mulţimilor prin diagrame și enumerare",
            "Efectuarea operaţiilor cu mulţimi (reuniune, intersecţie, diferenţă)",
            "Determinarea c.m.m.d.c./c.m.m.m.c. prin descompunere în factori primi",
            "Verificarea proprietăţii operaționale (prin exemple)",
            "Deducerea proprietăților relaţiei de divizibilitate în ℕ"
          ]
        },
        {
          title: "Rezolvarea problemelor cu rapoarte, proporţii și mărimi direct/invers proporţionale",
          items: [
            "Determinarea unui termen necunoscut dintr-o proporţie",
            "Rezolvarea problemelor cu rapoarte, procente sau proporţii",
            "Stabilirea proporționalităţii între mărimi în contexte aplicative",
            "Utilizarea regulilor pentru obţinerea de proporţii derivate",
            "Calcularea probabilităţii ca raport între cazuri favorabile și posibile"
          ]
        },
        {
          title: "Aplicarea regulilor de calcul și folosirea parantezelor în ℤ",
          items: [
            "Optimizarea calculelor cu numere întregi prin proprietăţi operaționale",
            "Utilizarea regulilor de calcul cu puteri",
            "Aplicarea metodelor (mersul invers, balanţa, transformări) pentru determinarea necunoscutei"
          ]
        },
        {
          title: "Compararea și calculul cu numere raţionale",
          items: [
            "Compararea numerelor raţionale pe axă",
            "Ordonarea numerelor dintr-o mulțime finită de numere raţionale",
            "Optimizarea calculelor în ℚ prin proprietăţi operaționale și reguli de puteri",
            "Determinarea necunoscutei din ecuaţii raţionale"
          ]
        },
        {
          title: "Construcţii geometrice folosind proprietăţi ale distanţelor, drepte, unghiuri și cerc",
          items: [
            "Utilizarea instrumentelor geometrice (raportor, riglă, compas) pentru construcţii",
            "Construcţia bisectoarei unui unghi",
            "Realizarea construcţiilor de drepte paralele, perpendiculare și mediatoare",
            "Construirea simetricei unei figuri faţă de o dreaptă",
            "Determinarea lungimilor și măsurilor unghiurilor/arcelor din reprezentări geometrice"
          ]
        },
        {
          title: "Determinarea caracteristicilor unei configuraţii geometrice prin criterii de congruenţă",
          items: [
            "Stabilirea congruenţei triunghiurilor prin criterii adecvate",
            "Utilizarea relaţiei de congruenţă pentru segmente și unghiuri",
            "Aplicarea proprietăţilor triunghiurilor isoscele, echilaterale și dreptunghice"
          ]
        }
      ]
    },
    "4": {
      title: "Exprimarea în limbajul matematic a informaţiilor și a rezolvărilor",
      items: [
        {
          title: "Exprimarea situaţiilor cu mulţimi și divizibilitate în ℕ",
          items: [
            "Redactarea caracteristicilor elementelor din mulţimi finite (ex.: mulţimea cifrelor pare)",
            "Formularea enunţurilor simple folosind „şi”, „sau”, „nu” în contextul operaţiilor cu mulţimi",
            "Utilizarea terminologiei specifice divizibilităţii",
            "Redactarea rezolvării problemelor legate de divizibilitate în ℕ"
          ]
        },
        {
          title: "Exprimarea relaţiilor și mărimilor din probleme cu rapoarte și proporţii",
          items: [
            "Exprimarea relaţiei de proporţionalitate sub formă de proporţie sau egalitate de produse",
            "Redactarea datelor problemei rezolvabile cu regula de trei simplă",
            "Determinarea valorilor minime, maxime și medii dintr-un set de date",
            "Organizarea informaţiilor prin sortare, clasificare și reprezentare grafică"
          ]
        },
        {
          title: "Redactarea etapelor de rezolvare a ecuaţiilor/inecuaţiilor în ℤ",
          items: [
            "Formularea unui răspuns logic în raport cu cerinţele (ex.: apartenenţa rezultatului la o mulţime, estimare, folosirea lui 0)",
            "Scrierea unei ecuaţii/inecuaţii echivalente",
            "Redactarea paşilor de rezolvare a ecuaţiilor/inecuaţiilor, inclusiv verificarea soluţiilor",
            "Transpunerea unei probleme într-o ecuaţie în ℤ",
            "Exprimarea caracteristicilor modulului conform definiţiei"
          ]
        },
        {
          title: "Redactarea etapelor de rezolvare a problemelor cu numere raţionale",
          items: [
            "Formularea unui răspuns logic în raport cu cerinţele (ex.: apartenenţa rezultatului la o mulţime, estimare)",
            "Transpunerea unei probleme într-o ecuaţie în ℚ",
            "Redactarea paşilor de rezolvare și validarea soluţiilor prin probă"
          ]
        },
        {
          title: "Exprimarea noţiunilor legate de dreaptă, unghi și cerc prin reprezentări geometrice",
          items: [
            "Descrierea configuraţiilor geometrice ce conţin drepte, unghiuri și cercuri în limbaj matematic",
            "Transpunerea informaţiilor (din matematică sau din context practic) în configuraţii geometrice",
            "Justificarea paralelismului a două drepte folosind unghiuri formate cu o secantă"
          ]
        },
        {
          title: "Exprimarea caracteristicilor triunghiurilor și ale liniilor importante",
          items: [
            "Transcrierea, în limbaj simbolic, a caracteristicilor triunghiurilor din figuri geometrice",
            "Redactarea caracteristicilor liniilor importante dintr-un triunghi",
            "Formularea ipotezelor și concluziilor într-o problemă referitoare la triunghi",
            "Evidențierea relaţiilor: unghi exterior, inegalităţi între laturi și relaţii între laturi și unghiuri"
          ]
        }
      ]
    },
    "5": {
      title: "Analizarea caracteristicilor situaţiilor date",
      items: [
        {
          title: "Analizarea situaţiilor în contextul mulţimilor și divizibilităţii în ℕ",
          items: [
            "Asocierea unu-la-unu a elementelor a două mulţimi finite cu acelaşi cardinal",
            "Estimarea cardinalului unei mulţimi în contexte aplicative (ex.: numărul elevilor, notele unui elev, numărul orașelor)",
            "Compararea metodelor de rezolvare a unei probleme de divizibilitate",
            "Aplicarea proprietăților divizibilităţii în ℕ pentru exerciții"
          ]
        },
        {
          title: "Analizarea situaţiilor practice cu rapoarte, proporţii și colecţii de date",
          items: [
            "Justificarea proporţionalităţii pentru aplicarea regulii de trei simplă",
            "Interpretarea datelor din tabele, grafice sau diagrame; realizarea estimărilor",
            "Analizarea unui set de date pentru identificarea proporționalităţii (ex.: economie, cotidian)",
            "Interpretarea mediei unui set de date",
            "Exprimarea semnificaţiei elementelor dintr-un grafic"
          ]
        },
        {
          title: "Interpretarea datelor din probleme cu numere întregi",
          items: [
            "Analizarea situaţiilor practice care implică numere întregi",
            "Examinarea consecințelor modificării ipotezelor într-o problemă cu numere întregi",
            "Încadrarea soluţiei unei ecuaţii într-o mulţime de numere întregi fără calcule"
          ]
        },
        {
          title: "Determinarea metodelor eficiente pentru calcule cu numere raţionale",
          items: [
            "Analizarea situaţiilor practice care folosesc numere raţionale",
            "Alegerea metodei optime pentru efectuarea calculelor prin proprietăţi ale operaţiilor",
            "Interpretarea rezultatelor din ecuaţii și identificarea mulţimii soluţiilor"
          ]
        },
        {
          title: "Analizarea reprezentărilor geometrice pentru optimizarea calculelor",
          items: [
            "Determinarea numărului minim/maxim de drepte dintr-un set de puncte",
            "Verificarea proprietăților bisectoarelor într-o configuraţie geometrică",
            "Analizarea lungimilor (ordonarea punctelor pe dreaptă, compararea lungimii coardei cu diametrul)",
            "Verificarea simetriei față de un punct sau o dreaptă"
          ]
        }
      ]
    },
    "6": {
      title: "Modelarea matematică a situaţiilor date",
      items: [
        {
          title: "Transpunerea în limbaj matematic a situaţiilor date cu mulţimi și divizibilitate în ℕ",
          items: [
            "Deducerea consecinţelor imediate din analiza unui set de date asociat mulţimilor (ex.: A\\B ≠ B\\A)",
            "Interpretarea situaţiilor practice sau interdisciplinare (ex.: numeral cardinal/ordinal) folosind limbajul specific",
            "Transpunerea noţiunilor de bază din geometrie (punct, segment, semidreaptă, dreaptă; relaţii punct-dreaptă, dreaptă-dreaptă) prin limbajul mulţimilor",
            "Identificarea intersecţiilor, reuniunilor sau diferenţelor de mulţimi (ex.: criterii de divizibilitate, numere de două cifre)",
            "Rezolvarea problemelor practice prin proprietăţile divizibilităţii în ℕ"
          ]
        },
        {
          title: "Modelarea situaţiilor cu rapoarte, proporţii și mărimi direct/invers proporţionale",
          items: [
            "Modelarea dependenţelor direct sau invers proporţionale",
            "Interpretarea unui set de date descris grafic sau numeric (ex.: relaţia dintre viteză, distanţă și timp)",
            "Interpretarea unui raport ca procent sau probabilitate"
          ]
        },
        {
          title: "Transpunerea în limbaj algebric a unei situaţii și rezolvarea ecuaţiei/inecuaţiei",
          items: [
            "Transpunerea unei situaţii date în limbaj matematic folosind ecuaţii sau inecuaţii",
            "Formularea problemelor cu numere întregi pe baza unei scheme date",
            "Formularea unor probleme echivalente cu o problemă dată în contextul numerelor întregi"
          ]
        },
        {
          title: "Interpretarea problemelor prin operaţii cu numere raţionale",
          items: [
            "Împărţirea unei cantităţi în părţi direct sau invers proporţionale",
            "Interpretarea unei proporţionalităţi referitoare la segmente (ex.: aplicarea regulilor din șirul lui Fibonacci în construcţii)",
            "Transpunerea unei situaţii în limbaj matematic folosind ecuaţii în ℚ",
            "Formularea problemelor cu numere raţionale pe baza unei scheme sau exerciţiu dat"
          ]
        },
        {
          title: "Interpretarea reprezentărilor geometrice pentru determinarea măsurilor",
          items: [
            "Descrierea unei situaţii-problemă și transpunerea acesteia din limbaj curent în limbaj simbolic și figurativ",
            "Estimarea lungimii unui segment, a unei distanţe sau a unui unghi folosind diverse date, reguli și relaţii",
            "Validarea rezultatelor prin estimări, măsurători și comparaţii"
          ]
        },
        {
          title: "Transpunerea situaţiilor din geometria triunghiului și interpretarea rezultatului",
          items: [
            "Modelarea geometrică a unei situaţii concrete asociate unui desen (ex.: traseu acasă-şcoală – teren de sport reprezentat printr-un triunghi)",
            "Argumentarea demersului de rezolvare a unei probleme de geometrie",
            "Realizarea conexiunilor interdisciplinare sau aplicative (ex.: plan înclinat, traseu de lungime minimă, reflexia)"
          ]
        }
      ]
    }
  }
};

const curriculumData7 = {
  units: [
    {
      title: "Mulţimea numerelor reale",
      contents: [
        {
          name: "Rădăcina pătrată a unui număr natural pătrat perfect; estimarea rădăcinii pătrate dintr-un număr raţional",
          competences: []
        },
        {
          name: "Scoaterea factorilor de sub radical; introducerea factorilor sub radical",
          competences: []
        },
        {
          name: "Numere iraţionale, exemple; mulţimea numerelor reale; incluziunile ⊂ ⊂ ⊂ℕ ℤ ℚ ℝ; modulul unui număr real (definiţie, proprietăţi); compararea şi ordonarea numerelor reale; reprezentarea pe axa numerelor prin aproximări",
          competences: []
        },
        {
          name: "Operaţii cu numere reale (adunare, scădere, înmulţire, împărţire, puteri cu exponent întreg); raţionalizarea numitorului de forma a/b",
          competences: []
        },
        {
          name: "Media aritmetică ponderată a n numere reale și media geometrică a două numere reale pozitive",
          competences: []
        },
        {
          name: "Ecuaţia de forma 2^x = a, unde a ∈ ℝ",
          competences: []
        }
      ]
    },
    {
      title: "Ecuaţii şi sisteme de ecuaţii liniare",
      contents: [
        {
          name: "Transformarea unei egalităţi într-o egalitate echivalentă; identităţi",
          competences: []
        },
        {
          name: "Ecuaţii de forma 0ax + b = , unde a, b ∈ ℝ; mulţimea soluţiilor unei ecuaţii; ecuaţii echivalente",
          competences: []
        },
        {
          name: "Sisteme de două ecuaţii liniare cu două necunoscute; rezolvare prin metoda substituţiei și/sau a reducerii",
          competences: []
        },
        {
          name: "Probleme rezolvate cu ajutorul ecuaţiilor sau sistemelor de ecuaţii liniare",
          competences: []
        }
      ]
    },
    {
      title: "Elemente de organizare a datelor",
      contents: [
        {
          name: "Produsul cartezian a două mulţimi nevide; sistem de axe ortogonale în plan; reprezentarea perechilor de numere reale și a punctelor; distanţa dintre două puncte",
          competences: []
        },
        {
          name: "Reprezentarea și interpretarea dependenţelor funcţionale prin tabele, diagrame și grafice; poligonul frecvenţelor",
          competences: []
        }
      ]
    },
    {
      title: "PATRULATERUL",
      contents: [
        {
          name: "Patrulaterul convex; suma măsurilor unghiurilor unui patrulater convex",
          competences: []
        },
        {
          name: "Paralelogramul: proprietăţi; linia mijlocie în triunghi, centrul de greutate al unui triunghi",
          competences: []
        },
        {
          name: "Paralelograme particulare: dreptunghi, romb, pătrat; proprietăţi",
          competences: []
        },
        {
          name: "Trapezul: clasificare, proprietăţi; linia mijlocie în trapez; trapezul isoscel sau dreptunghic",
          competences: []
        },
        {
          name: "Perimetre și arii: paralelogram, patrulatere particulare, triunghi, trapez",
          competences: []
        }
      ]
    },
    {
      title: "Cercul",
      contents: [
        {
          name: "Unghi înscris în cerc; coarde şi arce în cerc, proprietăţi (de ex.: la arce congruente corespund coarde congruente, diametru perpendicular pe o coardă, arce între coarde paralele, coarde egal depărtate de centru; tangente dintr-un punct exterior)",
          competences: []
        },
        {
          name: "Poligoane regulate înscrise într-un cerc (construcţie și măsuri de unghiuri)",
          competences: []
        },
        {
          name: "Lungimea cercului și aria discului",
          competences: []
        }
      ]
    },
    {
      title: "Asemănarea triunghiurilor",
      contents: [
        {
          name: "Segmente proporţionale; teorema paralelelor echidistante (fără demonstraţie)",
          competences: []
        },
        {
          name: "Teorema lui Thales (fără demonstraţie); reciproca teoremei lui Thales; împărţirea unui segment în părţi proporţionale",
          competences: []
        },
        {
          name: "Triunghiuri asemenea; criterii de asemănare; teorema fundamentală a asemănării și aplicaţii (raportul ariilor, aproximarea distanţelor)",
          competences: []
        }
      ]
    },
    {
      title: "Relaţii metrice în triunghiul dreptunghic",
      contents: [
        {
          name: "Proiecţii ortogonale pe o dreaptă; teorema înălţimii; teorema catetei",
          competences: []
        },
        {
          name: "Teorema lui Pitagora și reciproca sa",
          competences: []
        },
        {
          name: "Noţiuni de trigonometrie în triunghiul dreptunghic: sinus, cosinus, tangentă și cotangentă pentru un unghi ascuţit",
          competences: []
        },
        {
          name: "Rezolvarea triunghiului dreptunghic; aplicaţii: calculul elementelor (latură, apotemă, arie, perimetru) în triunghiul echilateral, pătrat și hexagon regulat; aproximarea distanţelor",
          competences: []
        }
      ]
    }
  ],
  competences: {
    "1": {
      title: "Identificarea unor date, mărimi și relații matematice în contextul în care acestea apar",
      items: [
        {
          title: "Identificarea numerelor aparținând diferitelor submulțimi ale lui ℝ",
          items: [
            "Identificarea numerelor naturale pătrate perfecte dintr-o enumerare de numere",
            "Identificarea relaţiei dintre puterea cu exponent 2 și rădăcina pătrată a unui număr natural pătrat perfect",
            "Identificarea rădăcinii pătrate folosind scrierea sub formă de putere cu exponent 2",
            "Recunoaşterea numerelor naturale, întregi și raţionale",
            "Recunoaşterea unui număr iraţional dintr-o mulțime de numere",
            "Identificarea unei forme convenabile de scriere a unui număr real în funcţie de context"
          ]
        },
        {
          title: "Identificarea unei situații rezolvabile prin ecuaţii sau sisteme de ecuaţii liniare",
          items: [
            "Recunoaşterea relaţiilor matematice care reprezintă ecuaţii",
            "Identificarea necunoscutei, coeficienților și termenilor liberi ai unei ecuații",
            "Furnizarea de exemple de ecuaţii sau sisteme liniare",
            "Notarea datelor cunoscute și necunoscute în probleme rezolvate cu ecuaţii"
          ]
        },
        {
          title: "Identificarea informaţiilor din tabele, grafice și diagrame",
          items: [
            "Extragerea unei informaţii dintr-un tabel, grafic sau diagramă",
            "Identificarea modului adecvat de reprezentare a datelor",
            "Recunoaşterea exemplarelor de corespondenţe matematice în contexte variate"
          ]
        },
        {
          title: "Identificarea patrulaterelor particulare în configurații geometrice",
          items: [
            "Identificarea patrulaterelor pe corpuri geometrice sau pe desfăşurări",
            "Recunoaşterea patrulaterelor din cotidian",
            "Identificarea patrulaterelor particulare în mediul înconjurător",
            "Identificarea paralelogramelor particulare din reprezentări geometrice",
            "Identificarea pătratelor dintr-o mulțime de dreptunghiuri și romburi"
          ]
        },
        {
          title: "Identificarea elementelor cercului și poligoanelor regulate",
          items: [
            "Recunoaşterea elementelor unui cerc în configuraţii geometrice",
            "Identificarea proprietăţilor arcelor, coardelor și a diametrului perpendicular pe o coardă",
            "Identificarea poligoanelor regulate înscrise într-un cerc"
          ]
        },
        {
          title: "Identificarea triunghiurilor asemenea în configurații geometrice",
          items: [
            "Identificarea imaginilor care își păstrează forma prin mărire sau micșorare",
            "Recunoaşterea proporţionalităţii laturilor în triunghiuri",
            "Identificarea laturilor omoloage ale triunghiurilor",
            "Identificarea vârfurilor omoloage ale triunghiurilor"
          ]
        },
        {
          title: "Recunoașterea elementelor unui triunghi dreptunghic",
          items: [
            "Identificarea triunghiurilor dreptunghice",
            "Identificarea catetelor și ipotenuzei",
            "Folosirea instrumentelor geometrice pentru a identifica proiecţia unui punct sau segment",
            "Identificarea proiecţiei unui segment în diverse configurații",
            "Realizarea decupajelor conform indicaţiilor"
          ]
        }
      ]
    },
    "2": {
      title: "Prelucrarea datelor matematice de tip cantitativ, calitativ și structural",
      items: [
        {
          title: "Estimarea și aproximarea numerelor reale",
          items: [
            "Scrierea unui număr real în diverse forme",
            "Aproximarea unui număr real și reprezentarea pe axa numerelor",
            "Determinarea opusului, modulului și inversului unui număr real",
            "Compararea numerelor reale prin utilizarea modulului, aproximărilor și încadrarea între întregi, precum și scoaterea/introducerea factorilor sub radical"
          ]
        },
        {
          title: "Verificarea soluţiilor ecuaţiilor și sistemelor liniare",
          items: [
            "Verificarea prin calcul că un număr este soluţie a unei ecuaţii",
            "Verificarea prin calcul a soluţiei unui sistem de ecuaţii liniare",
            "Verificarea că un număr real este soluție comună a mai multor ecuaţii"
          ]
        },
        {
          title: "Prelucrarea datelor sub formă de tabele, grafice sau diagrame",
          items: [
            "Prelucrarea statistică a datelor dintr-un tabel",
            "Reprezentarea datelor prin diagrame, grafice circulare sau grafice cu bare",
            "Reprezentarea datelor în tabele cu una sau două intrări"
          ]
        },
        {
          title: "Descrierea patrulaterelor în configuraţii geometrice",
          items: [
            "Recunoaşterea patrulaterelor convexe în configuraţii geometrice",
            "Descrierea proprietăţilor laturilor, unghiurilor și diagonalelor patrulaterelor particulare",
            "Recunoaşterea paralelogramelor particulare pe baza proprietăţilor precizate",
            "Recunoașterea trapezului isoscel sau dreptunghic"
          ]
        },
        {
          title: "Descrierea proprietăților cercului și poligoanelor regulate",
          items: [
            "Calcularea măsurii unghiurilor unui poligon regulat",
            "Reprezentarea prin desen a configuraţiilor care conţin un cerc și elementele sale",
            "Utilizarea instrumentelor geometrice pentru a desena poligoane regulate înscrise într-un cerc"
          ]
        },
        {
          title: "Stabilirea relaţiei de asemănare între triunghiuri",
          items: [
            "Stabilirea asemănării între două triunghiuri folosind măsura unghiurilor",
            "Stabilirea asemănării prin proporţionalitatea laturilor",
            "Utilizarea a două perechi de laturi și congruența unghiurilor",
            "Aplicarea teoremei fundamentale a asemănării"
          ]
        },
        {
          title: "Aplicarea relaţiilor metrice într-un triunghi dreptunghic",
          items: [
            "Calcularea lungimilor segmentelor folosind teorema înălţimii, a catetei sau a lui Pitagora",
            "Calcularea ariei unui triunghi prin descompunere în triunghiuri dreptunghice",
            "Calcularea valorilor sinus, cosinus, tangentă și cotangentă pentru un unghi ascuţit"
          ]
        }
      ]
    },
    "3": {
      title: "Utilizarea conceptelor și algoritmilor specifici în diverse contexte matematice",
      items: [
        {
          title: "Efectuarea calculelor cu numere reale",
          items: [
            "Utilizarea regulilor pentru produsul/raportul a doi radicali și raţionalizarea numitorului",
            "Introducerea sau scoaterea factorilor de sub radical pentru compararea numerelor iraţionale",
            "Calcularea modulului unor sume/diferenţe de numere iraţionale",
            "Calcularea puterii cu exponent întreg a unui număr real nenul",
            "Exersarea ordinii operaţiilor",
            "Utilizarea calculatorului pentru verificarea calculelor",
            "Aplicarea distributivităţii în desfacerea parantezelor"
          ]
        },
        {
          title: "Transformări echivalente în ecuaţii și sisteme liniare",
          items: [
            "Aducerea egalităţilor la o formă simplificată prin transformări echivalente",
            "Aplicarea transformărilor pentru obţinerea de sisteme de ecuaţii echivalente",
            "Utilizarea probei pentru justificarea rezultatelor"
          ]
        },
        {
          title: "Reprezentarea problemelor cu dependenţe funcţionale",
          items: [
            "Reprezentarea punctelor cu coordonate reale într-un sistem de axe ortogonale",
            "Analizarea seturilor de date pentru alegerea reprezentării grafice adecvate",
            "Interpretarea informaţiilor din tabele sau liste"
          ]
        },
        {
          title: "Utilizarea proprietăţilor patrulaterelor în rezolvarea problemelor",
          items: [
            "Demonstrarea proprietăţilor paralelogramelor particulare prin diverse metode",
            "Utilizarea definiţiei și proprietăţilor liniei mijlocii în trapez",
            "Demonstrarea paralelismului unor drepte folosind linia mijlocie",
            "Justificarea proprietăţilor patrulaterelor pe baza simetriei"
          ]
        },
        {
          title: "Utilizarea proprietăților cercului în rezolvarea problemelor",
          items: [
            "Aplicarea proprietăţilor arcelor, coardelor și diametrului perpendicular pentru rezolvarea problemelor",
            "Rezolvarea problemelor practice folosind raza cercului (ex.: numărul de rotaţii complete ale roții unui automobil)",
            "Rezolvarea problemelor folosind proprietăţile tangentelor dintr-un punct exterior"
          ]
        },
        {
          title: "Utilizarea asemănării triunghiurilor",
          items: [
            "Determinarea lungimilor segmentelor sau unghiurilor prin asemănare",
            "Aplicarea teoremei fundamentale a asemănării pentru calculul lungimilor",
            "Utilizarea teoremei paralelelor echidistante, a lui Thales sau a proporţiilor derivate",
            "Calcularea lungimilor segmentelor determinate de diagonalele unui trapez",
            "Calcularea perimetrelor și ariilor a două triunghiuri asemenea"
          ]
        },
        {
          title: "Deducerea relaţiilor metrice într-un triunghi dreptunghic",
          items: [
            "Aplicarea teoremei lui Pitagora, a teoremei înălţimii sau a catetei pentru determinarea elementelor unui triunghi dreptunghic",
            "Determinarea valorilor sinus, cosinus, tangentă și cotangentă pentru unghiuri de 30°, 45° sau 60°",
            "Utilizarea acestor valori pentru calculul lungimilor segmentelor",
            "Determinarea lungimilor, măsurilor unghiurilor și perimetrelor în configuraţii geometrice"
          ]
        }
      ]
    },
    "4": {
      title: "Exprimarea în limbajul specific matematicii a informațiilor, concluziilor și demersurilor de rezolvare",
      items: [
        {
          title: "Folosirea terminologiei noţiunii de număr real",
          items: [
            "Sortarea numerelor (naturale, întregi, raţionale, iraţionale) în funcţie de mulţimea din care fac parte",
            "Utilizarea terminologiei specifice în descrierea modului de rezolvare a unui exercițiu sau problemă",
            "Identificarea rezultatului corect dintr-o listă de opţiuni"
          ]
        },
        {
          title: "Redactarea rezolvării ecuaţiilor și sistemelor liniare",
          items: [
            "Rezolvarea ecuaţiilor de forma 0ax + b = , unde a, b ∈ ℝ",
            "Utilizarea metodelor de reducere și substituţie pentru sisteme liniare",
            "Verificarea validităţii soluţiilor ecuaţiilor sau sistemelor"
          ]
        },
        {
          title: "Descrierea elementelor de organizare a datelor",
          items: [
            "Reprezentarea produsului cartezian a două mulţimi finite",
            "Evidenţierea egalităţii dintre cardinalul produsului cartezian și produsul cardinalelor",
            "Exprimarea distanţei dintre două puncte ca lungimea ipotenuzei unui triunghi dreptunghic"
          ]
        },
        {
          title: "Exprimarea noţiunilor legate de patrulatere",
          items: [
            "Construcţia patrulaterelor folosind definiţia și proprietăţile acestora",
            "Transpunerea în desen a unei configuraţii patrulatere descrise matematic",
            "Evidenţierea liniei mijlocii în trapez",
            "Identificarea centrelor/axelor de simetrie ale patrulaterelor",
            "Caracterizarea tipurilor de simetrie"
          ]
        },
        {
          title: "Exprimarea proprietăţilor cercului și poligoanelor",
          items: [
            "Descrierea relaţiilor (congruenţă, paralelism, perpendicularitate) între elementele unei configuraţii",
            "Utilizarea instrumentelor geometrice pentru construirea configuraţiilor referitoare la cerc",
            "Identificarea cazurilor particulare și evidenţierea proprietăţilor în configuraţii cu cerc și poligoane regulate"
          ]
        },
        {
          title: "Exprimarea proprietăţilor figurilor prin asemănare",
          items: [
            "Argumentarea alegerii între teorema fundamentală a asemănării și teorema lui Thales",
            "Stabilirea paralelismului unor drepte prin reciproca teoremei lui Thales",
            "Construcţia configuraţiilor geometrice respectând condiţii de asemănare",
            "Identificarea cazurilor particulare privind asemănarea triunghiurilor"
          ]
        },
        {
          title: "Exprimarea relaţiilor dintre elementele unui triunghi dreptunghic",
          items: [
            "Utilizarea reciprocei teoremei lui Pitagora pentru stabilirea perpendicularităţii sau naturii unui triunghi",
            "Observarea diferenţei dintre condiţiile necesare și suficiente în relaţiile metrice",
            "Identificarea situaţiilor particulare cu relaţii metrice"
          ]
        }
      ]
    },
    "5": {
      title: "Analizarea caracteristicilor matematice ale unei situaţii date",
      items: [
        {
          title: "Elaborarea strategiilor pentru probleme cu numere reale",
          items: [
            "Determinarea mediei geometrice a două numere reale pozitive",
            "Determinarea mediei aritmetice ponderate a mai multor numere reale",
            "Raţionalizarea numitorilor de forma a/b, cu a + b ∈ ℚ",
            "Scrierea rapoartelor de numere reale ce necesită raţionalizare, factorizare și/sau simplificare",
            "Rezolvarea problemelor în care apar medii (aritmetică ponderată sau geometrică)"
          ]
        },
        {
          title: "Stabilirea metodelor de rezolvare a ecuaţiilor și sistemelor liniare",
          items: [
            "Utilizarea transformărilor echivalente pentru fundamentarea metodei de rezolvare",
            "Evidenţierea soluţiilor unei ecuaţii liniare într-un sistem",
            "Compararea metodelor de rezolvare a sistemelor liniare"
          ]
        },
        {
          title: "Analizarea situaţiilor prin organizarea datelor",
          items: [
            "Interpretarea informaţiilor din tabele, liste sau grafice",
            "Verificarea afirmaţiilor prin construirea de exemple sau contraexemple",
            "Interpretarea reprezentării punctelor într-un sistem de axe ortogonale"
          ]
        },
        {
          title: "Alegerea reprezentărilor geometrice pentru optimizarea calculelor",
          items: [
            "Rezolvarea problemelor folosind proprietăţile paralelogramelor și trapezului",
            "Analizarea metodelor alternative de rezolvare a problemelor de geometrie cu patrulatere",
            "Determinarea axei sau centrului de simetrie al unei figuri",
            "Construcţia figurilor cu simetrie axială sau centrală",
            "Deducerea formulei ariei unui paralelogram și a unui triunghi"
          ]
        },
        {
          title: "Interpretarea proprietăţilor cercului și poligoanelor prin reprezentări geometrice",
          items: [
            "Stabilirea metodelor de construcţie a poligoanelor regulate",
            "Analizarea poziţiei relative a unei drepte faţă de un cerc",
            "Interpretarea proprietăţilor cercului și poligoanelor în probleme de mişcare"
          ]
        },
        {
          title: "Interpretarea asemănării triunghiurilor",
          items: [
            "Deducerea relaţiei dintre raportul ariilor a două triunghiuri și raportul de asemănare",
            "Compararea metodelor de rezolvare a problemelor de asemănare",
            "Analizarea metodelor alternative de rezolvare a problemelor de geometrie cu triunghiuri"
          ]
        },
        {
          title: "Interpretarea relaţiilor metrice în triunghiul dreptunghic",
          items: [
            "Determinarea elementelor unui triunghi dreptunghic folosind relaţii metrice și trigonometrice",
            "Utilizarea valorilor pentru sinus, cosinus, tangentă sau cotangentă din tabele trigonometrice",
            "Aplicarea metodelor de calcul pentru aria unui triunghi sau a unui patrulater",
            "Analizarea metodelor alternative de rezolvare a problemelor cu relaţii metrice și trigonometrie"
          ]
        }
      ]
    },
    "6": {
      title: "Modelarea matematică a unei situaţii date, prin integrarea achiziţiilor din diferite domenii",
      items: [
        {
          title: "Modelarea situaţiilor practice cu numere reale",
          items: [
            "Formularea problemelor pornind de la informaţii din cotidian sau diverse domenii",
            "Verificarea validităţii afirmaţiilor prin exemple și contraexemple",
            "Rezolvarea problemelor practice folosind proprietăţile operaţiilor cu numere reale"
          ]
        },
        {
          title: "Transpunerea situaţiilor în ecuaţii și sisteme liniare",
          items: [
            "Transpunerea relaţiilor dintr-o situaţie dată sub formă de ecuaţii",
            "Rezolvarea problemelor practice cu ecuaţii sau sisteme liniare",
            "Utilizarea estimărilor pentru a încadra soluţia unei ecuaţii"
          ]
        },
        {
          title: "Transpunerea situaţiilor într-o reprezentare adecvată",
          items: [
            "Construirea și interpretarea diagramelor cu date din situaţii practice",
            "Determinarea mulţimilor finite din reprezentarea geometrică a produsului cartezian",
            "Rezolvarea problemelor de geometrie pornind de la reprezentarea punctelor într-un sistem de axe ortogonale"
          ]
        },
        {
          title: "Modelarea situaţiilor prin reprezentări geometrice cu patrulatere",
          items: [
            "Analizarea situaţiilor care necesită aplicarea proprietăţilor patrulaterelor particulare",
            "Observarea diferenţei între condiţiile necesare și cele suficiente pentru ca un paralelogram să fie particular",
            "Estimarea perimetrului sau ariei unui poligon prin descompunere în figuri cunoscute"
          ]
        },
        {
          title: "Modelarea situaţiilor cu poligoane regulate sau cercuri",
          items: [
            "Analizarea situaţiilor care implică proprietăţile cercului sau ale poligoanelor",
            "Optimizarea metodelor de rezolvare a problemelor de geometrie cu cerc sau poligoane",
            "Observarea diferenţei între condiţiile necesare și cele suficiente referitoare la cerc"
          ]
        },
        {
          title: "Implementarea unei strategii folosind asemănarea triunghiurilor",
          items: [
            "Analizarea situaţiilor, individual sau în grup, care necesită folosirea asemănării (ex.: schița clădirii școlii)",
            "Justificarea rezultatelor prin exemple, contraexemple sau demonstraţii",
            "Folosirea metodelor standardizate sau nestandardizate pentru modelarea situaţiilor practice"
          ]
        },
        {
          title: "Implementarea unei strategii folosind relaţii metrice în triunghiul dreptunghic",
          items: [
            "Analizarea situaţiilor, individual sau în grup, care implică relaţii metrice în triunghiul dreptunghic",
            "Compararea metodelor de rezolvare a problemelor cu relaţii metrice într-un triunghi dreptunghic",
            "Rezolvarea problemelor prin estimarea mărimilor folosind triunghiul dreptunghic"
          ]
        }
      ]
    }
  }
};

const curriculumData8 = {
  units: [
    {
      title: "Intervale de numere reale. inecuații în ℝ",
      contents: [
        {
          name: "Mulțimi definite printr-o proprietate a elementelor ei",
          competences: []
        },
        {
          name: "Intervale numerice și reprezentarea lor pe axa numerelor; intersecția și reuniunea intervalelor",
          competences: []
        },
        {
          name: "Inecuații de forma ( )0 , ,ax + b ≥, ≤, < sau >, unde a, b ∈ ℝ",
          competences: []
        }
      ]
    },
    {
      title: "Calcul algebric în ℝ",
      contents: [
        {
          name: "Operații cu numere reale reprezentate prin litere (adunare, scădere, înmulțire, împărțire, ridicare la putere) și reducerea termenilor asemenea",
          competences: []
        },
        {
          name: "Formule de calcul prescurtat (ex.: (a+b)², (a–b)², formula diferenței de pătrate)",
          competences: []
        },
        {
          name: "Descompuneri în factori utilizând reguli de calcul (factor comun, grupare, formule prescurtate)",
          competences: []
        },
        {
          name: "Fracții algebrice și operații cu acestea",
          competences: []
        },
        {
          name: "Ecuații de forma 0ax + bx + c = 0, unde a, b, c ∈ ℝ",
          competences: []
        }
      ]
    },
    {
      title: "Funcţii",
      contents: [
        {
          name: "Funcții definite pe mulțimi finite, exprimate prin diagrame, tabele, formule și reprezentarea grafică",
          competences: []
        },
        {
          name: "Funcții de forma f(x) = ax + b, unde a, b ∈ ℝ și D este o mulțime sau un interval; interpretare geometrică",
          competences: []
        },
        {
          name: "Elemente de statistică: indicatorii tendinței centrale (frecvență, medie, mediană, mod, amplitudine)",
          competences: []
        }
      ]
    },
    {
      title: "Elemente ale geometriei în spaţiu",
      contents: [
        {
          name: "Puncte, drepte, plane: convenții de notare, reprezentări, determinarea dreptei și a planului, relații între ele",
          competences: []
        },
        {
          name: "Corpuri geometrice: piramidă (și variantele ei), prismă, paralelipiped dreptunghic, cub, cilindru circular drept, con circular drept; reprezentare, elemente caracteristice, desfășurări",
          competences: []
        },
        {
          name: "Paralelism: drepte paralele, unghiul dintre două drepte, drepte paralele cu un plan, plane paralele; aplicații",
          competences: []
        },
        {
          name: "Perpendicularitate: drepte perpendiculare, dreaptă perpendiculară pe un plan; aplicații",
          competences: []
        },
        {
          name: "Proiecții: de puncte, segmente și drepte pe un plan; notații și reprezentări",
          competences: []
        },
        {
          name: "Teorema celor trei perpendiculare și calculul distanțelor (de la punct la dreaptă, de la punct la plan, între plane paralele)",
          competences: []
        }
      ]
    },
    {
      title: "ARII ŞI VOLUME ALE UNOR CORPURI GEOMETRICE",
      contents: [
        {
          name: "Calculul distanțelor și măsurilor de unghiuri pe fețele sau în interiorul corpurilor geometrice",
          competences: []
        },
        {
          name: "Arii și volume ale corpurilor geometrice: piramidă regulată, prismă, paralelipiped, cub, cilindru circular drept, con circular drept, trunchiuri etc.",
          competences: []
        },
        {
          name: "Sfera: arie și volum",
          competences: []
        }
      ]
    }
  ],

  competences: {
    "1": {
      title: "Identificarea unor date, mărimi și relații matematice în contextul în care acestea apar",
      items: [
        {
          title: "Recunoașterea apartenenței unui număr real la o mulțime",
          items: [
            "Reprezentarea pe axa numerelor a intervalelor de numere reale",
            "Legarea tipurilor de intervale cu submulțimile dreptei",
            "Identificarea apartenenței unui element la o mulțime definită prin proprietăți"
          ]
        },
        {
          title: "Identificarea componentelor unei expresii algebrice",
          items: [
            "Identificarea numerelor reprezentate prin litere în diverse contexte",
            "Identificarea termenilor asemenea dintr-o expresie algebrică",
            "Recunoașterea formulelor de calcul prescurtat",
            "Identificarea ecuațiilor de tipul 0ax + b = … sau 0ax + bx + c = … (a, b, c ∈ ℝ)"
          ]
        },
        {
          title: "Identificarea dependențelor funcționale",
          items: [
            "Completarea unui șir numeric când regula de construire este dată explicit",
            "Determinarea unei reguli de construire a unui șir pe baza câtorva termeni",
            "Identificarea dependențelor funcționale în situații concrete",
            "Exprimarea dependențelor funcționale în forme variate (tabele, grafice, formule)"
          ]
        },
        {
          title: "Identificarea figurilor plane și a elementelor caracteristice în configurații spațiale",
          items: [
            "Identificarea, construcția, notarea și citirea dreptei (concurente, paralele, necoplanare) în spațiu",
            "Identificarea pozițiilor relative ale unei drepte față de un plan și ale a două plane",
            "Recunoașterea figurilor obținute prin secționarea unei piramide sau prisme cu un plan paralel cu baza"
          ]
        },
        {
          title: "Identificarea corpurilor geometrice și a elementelor metrice pentru calcularea ariei/volumului",
          items: [
            "Identificarea și numirea corpurilor geometrice din cotidian (ex.: cub, paralelipiped, prismă, cilindru, con)",
            "Identificarea înălțimii și a altor elemente (diagonale, vârfuri, muchii, fețe)",
            "Construirea corpurilor geometrice din diverse materiale"
          ]
        }
      ]
    },
    "2": {
      title: "Prelucrarea unor date matematice de tip cantitativ, calitativ și structural",
      items: [
        {
          title: "Operații cu intervale și mulțimi",
          items: [
            "Reprezentarea pe axa numerelor a intersecției a două intervale",
            "Reprezentarea reuniunii a două intervale cu intersecția nevidă",
            "Verificarea soluției unei inecuații",
            "Verificarea apartenenței unui obiect la o mulțime pe baza proprietăților elementelor"
          ]
        },
        {
          title: "Calculul cu numere reale exprimate prin litere",
          items: [
            "Efectuarea operațiilor (adunare, scădere, înmulțire, împărțire, ridicare la putere) cu numere reale reprezentate prin litere",
            "Aplicarea regulilor și formulelor de calcul prescurtat în expresii algebrice",
            "Calcularea valorii unei expresii prin atribuirea de valori variabilelor",
            "Verificarea faptului că un număr real este soluție a unei ecuații"
          ]
        },
        {
          title: "Descrierea dependențelor funcționale",
          items: [
            "Determinarea elementelor unei funcții (domeniu, codomeniu, lege de corespondență)",
            "Corelarea elementelor funcției cu situații practice",
            "Sortarea și organizarea datelor după criterii de dependență funcțională"
          ]
        },
        {
          title: "Reprezentarea configurațiilor spațiale",
          items: [
            "Reprezentarea prin desen sau modele a configurațiilor spațiale din contexte reale",
            "Utilizarea instrumentelor geometrice și a softurilor matematice pentru realizarea desenelor",
            "Modelarea relațiilor de paralelism și perpendicularitate",
            "Reprezentarea proiecțiilor și a unghiurilor",
            "Clasificarea prismelor/piramidelor după forma bazei",
            "Construirea înălțimii unei prisme sau piramide"
          ]
        },
        {
          title: "Prelucrarea datelor privind corpurile geometrice",
          items: [
            "Desfășurarea unei piramide sau prisme și caracterizarea figurilor plane obținute",
            "Alegerea unității de măsură potrivite pentru un context dat",
            "Determinarea lungimii unui segment sau a unui unghi într-o situație practică"
          ]
        }
      ]
    },
    "3": {
      title: "Utilizarea conceptelor și a algoritmilor specifici în diverse contexte matematice",
      items: [
        {
          title: "Operații cu intervale și rezolvarea inecuațiilor în ℝ",
          items: [
            "Aproximarea numerelor reale pentru reprezentarea intervalelor",
            "Reprezentarea unui interval în forme echivalente (notație, reprezentare pe axa numerelor)",
            "Transformarea unei inecuații într-o inecuație echivalentă folosind proprietățile relației de ordine"
          ]
        },
        {
          title: "Utilizarea formulelor de calcul prescurtat și algoritmilor pentru ecuații și inecuații",
          items: [
            "Amplificarea și simplificarea unui raport de numere reale exprimate prin litere",
            "Efectuarea calculelor folosind formule prescurtate",
            "Respectarea semnificației parantezelor și a ordinii operațiilor"
          ]
        },
        {
          title: "Reprezentarea funcțiilor",
          items: [
            "Reprezentarea grafică a funcțiilor numerice",
            "Determinarea punctelor aparținând graficului unei funcții",
            "Determinarea intersecțiilor graficului cu axele de coordonate",
            "Determinarea indicatorilor tendinței centrale ai unui set de date"
          ]
        },
        {
          title: "Analiza pozițiilor relative ale dreptelor și planurilor",
          items: [
            "Utilizarea măsurilor unghiurilor și a distanțelor pentru stabilirea relațiilor între drepte și/sau plane",
            "Determinarea paralelismului și perpendicularității în spațiu"
          ]
        },
        {
          title: "Calcularea caracteristicilor numerice ale corpurilor geometrice",
          items: [
            "Calcularea ariei laterale și totale ale corpurilor geometrice folosind desfășurări",
            "Calcularea ariilor și volumelor prin decupări, descompuneri, pavaje sau rețele",
            "Determinarea elementelor (arie, volum) prin formule directe"
          ]
        }
      ]
    },
    "4": {
      title: "Exprimarea în limbajul specific matematicii a informațiilor, concluziilor și demersurilor de rezolvare",
      items: [
        {
          title: "Folosirea terminologiei privind mulțimi, intervale și inecuații",
          items: [
            "Utilizarea terminologiei specifice intervalelor de numere reale în contexte interdisciplinare",
            "Rezolvarea unei inecuații de forma specificată (cu a, b, c ∈ ℝ)",
            "Selectarea elementelor dintr-o mulțime care îndeplinesc o condiție suplimentară"
          ]
        },
        {
          title: "Exprimarea situațiilor concrete prin calcul algebric",
          items: [
            "Descrierea unei situații concrete folosind expresii algebrice (transpunerea datelor într-o ecuație)",
            "Precizarea mulțimii de definiție a unei expresii algebrice",
            "Determinarea soluțiilor unei ecuații prin aplicarea formulelor prescurtate"
          ]
        },
        {
          title: "Formularea opiniilor privind dependențele funcționale",
          items: [
            "Formularea presupunerilor matematice despre o funcție sau regula de construire a unui șir",
            "Utilizarea exemplelor și contraexemplor pentru a susține un argument",
            "Interpretarea grafică a dependențelor funcționale și a indicatorilor de tendință centrală"
          ]
        },
        {
          title: "Descrierea elementelor unei configurații geometrice",
          items: [
            "Construirea configurațiilor geometrice cu drepte și plane în relații de paralelism sau perpendicularitate",
            "Verificarea validității afirmațiilor privind pozițiile relative ale dreptelor și planurilor prin exemple",
            "Utilizarea axiomelor și teoremelor pentru rezolvarea problemelor în configurații spațiale simple"
          ]
        },
        {
          title: "Utilizarea termenilor specifici pentru descrierea figurilor și corpurilor geometrice",
          items: [
            "Precizarea proiecțiilor pe un plan ale punctelor, dreptei și segmentele din corpurile geometrice",
            "Calcularea distanței de la un punct la o dreaptă sau la un plan în corpurile geometrice",
            "Calcularea lungimii proiecției unui segment pe un plan"
          ]
        }
      ]
    },
    "5": {
      title: "Analizarea caracteristicilor matematice ale unei situații date",
      items: [
        {
          title: "Interpretarea situațiilor folosind intervale și inecuații",
          items: [
            "Rezolvarea inecuațiilor de forma specificată (cu a, b ∈ ℝ)",
            "Descrierea mulțimii soluțiilor unei probleme prin proprietăți caracteristice",
            "Rezolvarea altor tipuri de inecuații de forma 0a/bx + c < … (a, b ∈ ℝ, c ∈ ℝ)"
          ]
        },
        {
          title: "Interpretarea situațiilor prin calcul algebric",
          items: [
            "Efectuarea calculelor rapide folosind formulele studiate",
            "Descompunerea în factori prin scoaterea factorului comun și/sau folosirea formulelor prescurtate",
            "Restrângerea expresiilor algebrice utilizând formule de calcul prescurtat",
            "Rezolvarea exercițiilor care evidențiază avantajele formulelor prescurtate"
          ]
        },
        {
          title: "Analiza funcțiilor în context intra și interdisciplinar",
          items: [
            "Determinarea coordonatelor punctului de intersecție a graficelor a două funcții și interpretarea ca soluție a unui sistem de ecuații de gradul I",
            "Determinarea unei funcții care îndeplinește condiții date",
            "Verificarea coliniarității a trei sau mai multor puncte pe baza coordonatelor"
          ]
        },
        {
          title: "Alegerea reprezentărilor geometrice pentru descrierea configurațiilor spațiale și calcularea elementelor metrice",
          items: [
            "Argumentarea demersului de rezolvare a unei probleme de geometrie în spațiu",
            "Adaptarea reprezentărilor configurațiilor la cerințele problemei",
            "Utilizarea instrumentelor interactive pentru reprezentări geometrice",
            "Interpretarea situațiilor din realitate și transpunerea lor în probleme de geometrie"
          ]
        },
        {
          title: "Analiza condițiilor pentru ca o configurație geometrică spațială să îndeplinească anumite cerințe",
          items: [
            "Calcularea unghiurilor dintre plane în configurații spațiale",
            "Calcularea distanțelor și măsurilor de unghiuri în interiorul corpurilor geometrice",
            "Determinarea elementelor corpurilor geometrice pe baza altor mărimi (arie, volum etc.)"
          ]
        }
      ]
    },
    "6": {
      title: "Modelarea matematică a unei situații date, prin integrarea achizițiilor din diferite domenii",
      items: [
        {
          title: "Rezolvarea situațiilor utilizând intervale și inecuații",
          items: [
            "Estimarea erorii unui calcul aproximativ cu numere reale",
            "Utilizarea estimărilor pentru compararea și ordonarea numerelor reale",
            "Modelarea unei situații concrete utilizând inecuații",
            "Interpretarea soluțiilor unei inecuații în probleme practice"
          ]
        },
        {
          title: "Interpretarea problemelor prin ecuații și formule de calcul prescurtat",
          items: [
            "Modelarea unei situații concrete utilizând ecuații",
            "Folosirea formulelor de calcul prescurtat pentru modelarea situațiilor",
            "Interpretarea soluțiilor ecuațiilor în probleme practice"
          ]
        },
        {
          title: "Modelarea cu funcții a fenomenelor din viața reală",
          items: [
            "Rezolvarea problemelor din cotidian cu ajutorul funcțiilor",
            "Interpretarea fenomenelor din cotidian descrise prin funcții",
            "Interpretarea grafică a indicatorilor tendinței centrale a unui set de date"
          ]
        },
        {
          title: "Modelarea situațiilor în limbaj geometric, utilizând configurații spațiale",
          items: [
            "Formularea ipotezelor și concluziilor în probleme practice legate de proiecții pe plan",
            "Verificarea validității rezultatelor prin înlocuirea unor părți din ipoteză cu părți din concluzie",
            "Transpunerea situațiilor în limbajul specific geometriei și interpretarea rezultatelor"
          ]
        },
        {
          title: "Interpretarea informațiilor despre distanțe, arii și volume după modelare",
          items: [
            "Estimarea rezultatelor calculelor referitoare la distanțe, unghiuri, arii și volume",
            "Rezolvarea problemelor practice legate de proiecții în corpurile geometrice și din cotidian",
            "Argumentarea demersului de rezolvare a unei probleme de geometrie în spațiu"
          ]
        }
      ]
    }
  }
};



const curriculumData: CurriculumData = {
	"V": curriculumData5,
	"VI": curriculumData6,
	"VII": curriculumData7,
	"VIII": curriculumData8,
}

export default curriculumData;
