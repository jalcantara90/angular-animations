import { animate, animateChild, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';

export const ROUTE_ANIMATIONS_INTRO_RIGHT = 'route-animations-intro-right';
export const ROUTE_ANIMATIONS_INTRO_LEFT = 'route-animations-intro-left';
export const ROUTE_ANIMATIONS_INTRO_BOTTOM = 'route-animations-intro-bottom';
export const ROUTE_ANIMATIONS_INTRO_TOP = 'route-animations-intro-up';

export const routeAnimations = trigger('routeAnimation', [
  transition(() => true, [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%'
      }),
    ], { optional: true }),
    query(
      ':enter > *',
      style({ opacity: 0 }),
      { optional: true}
    ),
    query(
      `:enter .${ROUTE_ANIMATIONS_INTRO_RIGHT},
       :enter .${ROUTE_ANIMATIONS_INTRO_LEFT},
       :enter .${ROUTE_ANIMATIONS_INTRO_BOTTOM},
       :enter .${ROUTE_ANIMATIONS_INTRO_TOP}`,
      style({ opacity: 0 }), {
      optional: true
    }),
    query(':enter', style({ right: '-100%', opacity: 0 }), { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        animate('.2s ease-out', style({ right: '100%', opacity: 0 })),
        { optional: true }
      ),
      query(
        ':enter',
        animate('.5s ease-out', style({ right: '0%', opacity: 1 })),
        { optional: true }
      )
    ]),
    sequence([
      query(
        ':leave > *',
        [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate(
            '0.2s ease-in-out',
            style({ transform: 'translateX(-100%)', opacity: 0 })
          ),
          style({ position: 'fixed' })
        ],
        { optional: true }
      ),
      query(
        ':enter > *',
        [
          style({
            transform: 'translateX(100%)',
            opacity: 0,
            position: 'static'
          }),
          animate(
            '0.5s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 })
          )
        ],
        { optional: true }
      )
    ]),
    query(
      ':enter .' + ROUTE_ANIMATIONS_INTRO_RIGHT,
      stagger(75, [
        style({ transform: 'translateX(10%)', opacity: 0 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        )
      ]),
      { optional: true }
    ),
    query(
      ':enter .' + ROUTE_ANIMATIONS_INTRO_LEFT,
      stagger(75, [
        style({ transform: 'translateX(-10%)', opacity: 0 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        )
      ]),
      { optional: true }
    ),
    query(
      ':enter .' + ROUTE_ANIMATIONS_INTRO_BOTTOM,
      stagger(75, [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(0px)', opacity: 1 })
        )
      ]),
      { optional: true }
    ),
    query(
      ':enter .' + ROUTE_ANIMATIONS_INTRO_TOP,
      stagger(75, [
        style({ transform: 'translateY(-50px)', opacity: 0 }),
        animate(
          '0.2s ease-in-out',
          style({ transform: 'translateY(0px)', opacity: 1 })
        )
      ]),
      { optional: true }
    )
  ]),
]);
