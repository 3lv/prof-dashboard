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

const curriculumData: CurriculumData = {
	"V": curriculumData5
}

export default curriculumData;
