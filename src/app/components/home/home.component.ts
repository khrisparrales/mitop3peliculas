import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imagenurl1 =
    ' https://www.themoviedb.org/t/p/original/yWILrVBRtwRztPw4ainftwtMCS2.jpg';
  objmovies = [
    {
      title: 'El club de la pelea (1999)',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg',
      description:
        'Un oficinista con insomnio y un vendedor de jabón despreocupado forman un club de lucha clandestino que se convierte en algo mucho, mucho más.',
    },
    {
      title: '(500) días con ella (2009)',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xziurNdvxWZkgonZ5ZaGRB9YdLt.jpg',
      description:
        'Tom aún sigue creyendo, incluso en este cínico mundo moderno, en la noción de un amor transformador, predestinado por el cosmos y que golpea como un rayo sólo una vez. Summer no cree lo mismo, para nada. La mecha se enciende desde el primer día, cuando Tom, un arquitecto en ciernes convertido en un sensiblero escritor de tarjetas de felicitación, se encuentra con Summer, la bella y fresca nueva secretaria de su jefe. Aunque aparentemente está fuera de su alcance, Tom pronto descubre que tienen un montón de cosas en común. La historia de Tom y Summer cubre desde el enamoramiento, las citas y el sexo hasta la separación, las recriminaciones y la redención, todo lo cual se suma al caleidoscópico retrato del porqué y el cómo seguimos esforzándonos de modo tan risible y rastrero para encontrar sentido al amor… y esperar convertirlo en realidad.',
    },
    {
      title: 'Trainspotting (1996)',
      image:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/enrGK4SWWhpdjiTeFMMG51eWGBV.jpg',
      description:
        'Mark Renton, un joven escocés de Edimburgo, y sus amigos son adictos a la heroína, lo que significa que viven fuera de la realidad, en un mundo aparte. Dentro del grupo hay un psicópata alcohólico y violento, un joven desesperado, un mujeriego con un conocimiento enciclopédico sobre Sean Connery y un entusiasta de las caminatas y de Iggy Pop.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
