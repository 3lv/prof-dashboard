# prof-dashboard



## ! Requirements:
LaTeX and texlive-latexextra and texlive-langother on the server machine


### For tests

UI for generating tests


Grade: (V/VI/VII/VIII) dropdown
There should be different difficulty levels: remediere, consolidare, standard, performanta, olimpiada. (dropdown)
Content: (programa matematica pentru fiecare clasa). It must use a Combobox. Inside the combobox there should be listed all the contents from all the units of an object like this:

curriculumData[5] = { // grade 5
  units: [
    {
      title: "Operaţii cu numere naturale",
      contents: [
        {
          name: "Scrierea şi citirea numerelor naturale; reprezentarea pe axa numerelor; compararea şi ordonarea; aproximări, estimări",
          competences: ["3.1"]
        },
      ]
    }
  ]
}
Item types: (grid with 4 resp by default and/or complete solution). Multiple choice box inputs (because i may wont both grid and complete solution items). Enter how many of each item.

Additional description(optional): textarea
