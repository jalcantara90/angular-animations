
import { Component } from '@angular/core';
import { ROUTE_ANIMATIONS_INTRO_RIGHT } from '../shared/animations/route.animations';
import { slideInRightList } from '../shared/animations/slide-right.animation';

interface AnimationInfo {
  title: string;
  description: string;
  link?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInRightList
  ]
})
export class HomeComponent {
  public animationInfo: AnimationInfo[] = [
    {
      title: 'Cambios de estado',
      description: 'Transiciones entre los diferentes estados de los componentes.',
      link: 'state-animation'
    },
    {
      title: 'Cambios de estado con parámetros',
      description: 'Transiciones entre los diferentes estados de los componentes, utilizando parámetros.',
      link: 'state-animation/with-params'
    },
    {
      title: 'Entrada y salida',
      description: 'Aplicar transiciones a la entrada y salida de componentes.',
      link: 'enter-exit'
    },
    {
      title: 'Animaciones con varias fases',
      description: 'Animaciones con diferentes fases (keyframes).',
      link: 'keyframes'
    },
    {
      title: 'Animación entre rutas',
      description: 'Utilizar animaciones durante el cambio de rutas.'
    },
    {
      title: 'Animaciones secuenciales',
      description: 'Encadenar animaciones de forma secuencial.',
      link: 'sequences'
    },
    {
      title: 'Seleccionar multiples elementos',
      description: 'Asignar transiciones a varios elementos.',
      link: 'query'
    },
    {
      title: 'Animar hijos',
      description: 'Aplicar animaciones a componentes hijos.'
    }
  ];

  introRight = ROUTE_ANIMATIONS_INTRO_RIGHT;
  constructor() { }
}
