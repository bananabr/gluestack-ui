export const config = {
  componentPath: '/components',
  theme: {
    aliases: {
      bg: 'backgroundColor',
      bgColor: 'backgroundColor',
      h: 'height',
      w: 'width',
      p: 'padding',
      px: 'paddingHorizontal',
      py: 'paddingVertical',
      pt: 'paddingTop',
      pb: 'paddingBottom',
      pr: 'paddingRight',
      pl: 'paddingLeft',
      m: 'margin',
      mx: 'marginHorizontal',
      my: 'marginVertical',
      mt: 'marginTop',
      mb: 'marginBottom',
      mr: 'marginRight',
      ml: 'marginLeft',
      rounded: 'borderRadius',
    } as const,
    tokens: {
      colors: {
        //
        'rose.50': '#fff1f2',
        'rose.100': '#ffe4e6',
        'rose.200': '#fecdd3',
        'rose.300': '#fda4af',
        'rose.400': '#fb7185',
        'rose.500': '#f43f5e',
        'rose.600': '#e11d48',
        'rose.700': '#be123c',
        'rose.800': '#9f1239',
        'rose.900': '#881337',
        'pink.50': '#fdf2f8',
        'pink.100': '#fce7f3',
        'pink.200': '#fbcfe8',
        'pink.300': '#f9a8d4',
        'pink.400': '#f472b6',
        'pink.500': '#ec4899',
        'pink.600': '#db2777',
        'pink.700': '#be185d',
        'pink.800': '#9d174d',
        'pink.900': '#831843',
        'fuchsia.50': '#fdf4ff',
        'fuchsia.100': '#fae8ff',
        'fuchsia.200': '#f5d0fe',
        'fuchsia.300': '#f0abfc',
        'fuchsia.400': '#e879f9',
        'fuchsia.500': '#d946ef',
        'fuchsia.600': '#c026d3',
        'fuchsia.700': '#a21caf',
        'fuchsia.800': '#86198f',
        'fuchsia.900': '#701a75',
        'purple.50': '#faf5ff',
        'purple.100': '#f3e8ff',
        'purple.200': '#e9d5ff',
        'purple.300': '#d8b4fe',
        'purple.400': '#c084fc',
        'purple.500': '#a855f7',
        'purple.600': '#9333ea',
        'purple.700': '#7e22ce',
        'purple.800': '#6b21a8',
        'purple.900': '#581c87',
        'violet.50': '#f5f3ff',
        'violet.100': '#ede9fe',
        'violet.200': '#ddd6fe',
        'violet.300': '#c4b5fd',
        'violet.400': '#a78bfa',
        'violet.500': '#8b5cf6',
        'violet.600': '#7c3aed',
        'violet.700': '#6d28d9',
        'violet.800': '#5b21b6',
        'violet.900': '#4c1d95',
        'indigo.50': '#eef2ff',
        'indigo.100': '#e0e7ff',
        'indigo.200': '#c7d2fe',
        'indigo.300': '#a5b4fc',
        'indigo.400': '#818cf8',
        'indigo.500': '#6366f1',
        'indigo.600': '#4f46e5',
        'indigo.700': '#4338ca',
        'indigo.800': '#3730a3',
        'indigo.900': '#312e81',
        'blue.50': '#eff6ff',
        'blue.100': '#dbeafe',
        'blue.200': '#bfdbfe',
        'blue.300': '#93c5fd',
        'blue.400': '#60a5fa',
        'blue.500': '#3b82f6',
        'blue.600': '#2563eb',
        'blue.700': '#1d4ed8',
        'blue.800': '#1e40af',
        'blue.900': '#1e3a8a',
        'lightBlue.50': '#f0f9ff',
        'lightBlue.100': '#e0f2fe',
        'lightBlue.200': '#bae6fd',
        'lightBlue.300': '#7dd3fc',
        'lightBlue.400': '#38bdf8',
        'lightBlue.500': '#0ea5e9',
        'lightBlue.600': '#0284c7',
        'lightBlue.700': '#0369a1',
        'lightBlue.800': '#075985',
        'lightBlue.900': '#0c4a6e',
        'darkBlue.50': '#dbf4ff',
        'darkBlue.100': '#addbff',
        'darkBlue.200': '#7cc2ff',
        'darkBlue.300': '#4aa9ff',
        'darkBlue.400': '#1a91ff',
        'darkBlue.500': '#0077e6',
        'darkBlue.600': '#005db4',
        'darkBlue.700': '#004282',
        'darkBlue.800': '#002851',
        'darkBlue.900': '#000e21',
        'cyan.50': '#ecfeff',
        'cyan.100': '#cffafe',
        'cyan.200': '#a5f3fc',
        'cyan.300': '#67e8f9',
        'cyan.400': '#22d3ee',
        'cyan.500': '#06b6d4',
        'cyan.600': '#0891b2',
        'cyan.700': '#0e7490',
        'cyan.800': '#155e75',
        'cyan.900': '#164e63',
        'teal.50': '#f0fdfa',
        'teal.100': '#ccfbf1',
        'teal.200': '#99f6e4',
        'teal.300': '#5eead4',
        'teal.400': '#2dd4bf',
        'teal.500': '#14b8a6',
        'teal.600': '#0d9488',
        'teal.700': '#0f766e',
        'teal.800': '#115e59',
        'teal.900': '#134e4a',
        'emerald.50': '#ecfdf5',
        'emerald.100': '#d1fae5',
        'emerald.200': '#a7f3d0',
        'emerald.300': '#6ee7b7',
        'emerald.400': '#34d399',
        'emerald.500': '#10b981',
        'emerald.600': '#059669',
        'emerald.700': '#047857',
        'emerald.800': '#065f46',
        'emerald.900': '#064e3b',
        'green.50': '#f0fdf4',
        'green.100': '#dcfce7',
        'green.200': '#bbf7d0',
        'green.300': '#86efac',
        'green.400': '#4ade80',
        'green.500': '#22c55e',
        'green.600': '#16a34a',
        'green.700': '#15803d',
        'green.800': '#166534',
        'green.900': '#14532d',
        'lime.50': '#f7fee7',
        'lime.100': '#ecfccb',
        'lime.200': '#d9f99d',
        'lime.300': '#bef264',
        'lime.400': '#a3e635',
        'lime.500': '#84cc16',
        'lime.600': '#65a30d',
        'lime.700': '#4d7c0f',
        'lime.800': '#3f6212',
        'lime.900': '#365314',
        'yellow.50': '#fefce8',
        'yellow.100': '#fef9c3',
        'yellow.200': '#fef08a',
        'yellow.300': '#fde047',
        'yellow.400': '#facc15',
        'yellow.500': '#eab308',
        'yellow.600': '#ca8a04',
        'yellow.700': '#a16207',
        'yellow.800': '#854d0e',
        'yellow.900': '#713f12',
        'amber.50': '#fffbeb',
        'amber.100': '#fef3c7',
        'amber.200': '#fde68a',
        'amber.300': '#fcd34d',
        'amber.400': '#fbbf24',
        'amber.500': '#f59e0b',
        'amber.600': '#d97706',
        'amber.700': '#b45309',
        'amber.800': '#92400e',
        'amber.900': '#78350f',
        'orange.50': '#fff7ed',
        'orange.100': '#ffedd5',
        'orange.200': '#fed7aa',
        'orange.300': '#fdba74',
        'orange.400': '#fb923c',
        'orange.500': '#f97316',
        'orange.600': '#ea580c',
        'orange.700': '#c2410c',
        'orange.800': '#9a3412',
        'orange.900': '#7c2d12',
        'red.50': '#fef2f2',
        'red.100': '#fee2e2',
        'red.200': '#fecaca',
        'red.300': '#fca5a5',
        'red.400': '#f87171',
        'red.500': '#ef4444',
        'red.600': '#dc2626',
        'red.700': '#b91c1c',
        'red.800': '#991b1b',
        'red.900': '#7f1d1d',
        'warmGray.50': '#fafaf9',
        'warmGray.100': '#f5f5f4',
        'warmGray.200': '#e7e5e4',
        'warmGray.300': '#d6d3d1',
        'warmGray.400': '#a8a29e',
        'warmGray.500': '#78716c',
        'warmGray.600': '#57534e',
        'warmGray.700': '#44403c',
        'warmGray.800': '#292524',
        'warmGray.900': '#1c1917',
        'trueGray.50': '#fafafa',
        'trueGray.100': '#f5f5f5',
        'trueGray.200': '#e5e5e5',
        'trueGray.300': '#d4d4d4',
        'trueGray.400': '#a3a3a3',
        'trueGray.500': '#737373',
        'trueGray.600': '#525252',
        'trueGray.700': '#404040',
        'trueGray.800': '#262626',
        'trueGray.900': '#171717',
        'gray.50': '#fafafa',
        'gray.100': '#f4f4f5',
        'gray.200': '#e4e4e7',
        'gray.300': '#d4d4d8',
        'gray.400': '#a1a1aa',
        'gray.500': '#71717a',
        'gray.600': '#52525b',
        'gray.700': '#3f3f46',
        'gray.800': '#27272a',
        'gray.900': '#18181b',
        'coolGray.50': '#f9fafb',
        'coolGray.100': '#f3f4f6',
        'coolGray.200': '#e5e7eb',
        'coolGray.300': '#d1d5db',
        'coolGray.400': '#9ca3af',
        'coolGray.500': '#6b7280',
        'coolGray.600': '#4b5563',
        'coolGray.700': '#374151',
        'coolGray.800': '#1f2937',
        'coolGray.900': '#111827',
        'blueGray.50': '#f8fafc',
        'blueGray.100': '#f1f5f9',
        'blueGray.200': '#e2e8f0',
        'blueGray.300': '#cbd5e1',
        'blueGray.400': '#94a3b8',
        'blueGray.500': '#64748b',
        'blueGray.600': '#475569',
        'blueGray.700': '#334155',
        'blueGray.800': '#1e293b',
        'blueGray.900': '#0f172a',
        'dark.50': '#18181b',
        'dark.100': '#27272a',
        'dark.200': '#3f3f46',
        'dark.300': '#52525b',
        'dark.400': '#71717a',
        'dark.500': '#a1a1aa',
        'dark.600': '#d4d4d8',
        'dark.700': '#e4e4e7',
        'dark.800': '#f4f4f5',
        'dark.900': '#fafafa',
        'text.50': '#fafafa',
        'text.100': '#f5f5f5',
        'text.200': '#e5e5e5',
        'text.300': '#d4d4d4',
        'text.400': '#a3a3a3',
        'text.500': '#737373',
        'text.600': '#525252',
        'text.700': '#404040',
        'text.800': '#262626',
        'text.900': '#171717',
        //

        'white': '#FFFFFF',
        'black': '#000000',
        'lightText': '#FFFFFF',
        'darkText': '#000000',

        //

        //

        'danger.50': '#fff1f2',
        'danger.100': '#ffe4e6',
        'danger.200': '#fecdd3',
        'danger.300': '#fda4af',
        'danger.400': '#fb7185',
        'danger.500': '#f43f5e',
        'danger.600': '#e11d48',
        'danger.700': '#be123c',
        'danger.800': '#9f1239',
        'danger.900': '#881337',

        'success.50': '#f0fdf4',
        'success.100': '#dcfce7',
        'success.200': '#bbf7d0',
        'success.300': '#86efac',
        'success.400': '#4ade80',
        'success.500': '#22c55e',
        'success.600': '#16a34a',
        'success.700': '#15803d',
        'success.800': '#166534',
        'success.900': '#14532d',

        'warning.50': '#fff7ed',
        'warning.100': '#ffedd5',
        'warning.200': '#fed7aa',
        'warning.300': '#fdba74',
        'warning.400': '#fb923c',
        'warning.500': '#f97316',
        'warning.600': '#ea580c',
        'warning.700': '#c2410c',
        'warning.800': '#9a3412',
        'warning.900': '#7c2d12',

        'muted.50': '#fafafa',
        'muted.100': '#f5f5f5',
        'muted.200': '#e5e5e5',
        'muted.300': '#d4d4d4',
        'muted.400': '#a3a3a3',
        'muted.500': '#737373',
        'muted.600': '#525252',
        'muted.700': '#404040',
        'muted.800': '#262626',
        'muted.900': '#171717',

        'primary.50': '#ecfeff',
        'primary.100': '#cffafe',
        'primary.200': '#a5f3fc',
        'primary.300': '#67e8f9',
        'primary.400': '#22d3ee',
        'primary.500': '#06b6d4',
        'primary.600': '#0891b2',
        'primary.700': '#0e7490',
        'primary.800': '#155e75',
        'primary.900': '#164e63',

        'secondary.50': '#fdf2f8',
        'secondary.100': '#fce7f3',
        'secondary.200': '#fbcfe8',
        'secondary.300': '#f9a8d4',
        'secondary.400': '#f472b6',
        'secondary.500': '#ec4899',
        'secondary.600': '#db2777',
        'secondary.700': '#be185d',
        'secondary.800': '#9d174d',
        'secondary.900': '#831843',

        'tertiary.50': '#ecfdf5',
        'tertiary.100': '#d1fae5',
        'tertiary.200': '#a7f3d0',
        'tertiary.300': '#6ee7b7',
        'tertiary.400': '#34d399',
        'tertiary.500': '#10b981',
        'tertiary.600': '#059669',
        'tertiary.700': '#047857',
        'tertiary.800': '#065f46',
        'tertiary.900': '#064e3b',

        'info.50': '#f0f9ff',
        'info.100': '#e0f2fe',
        'info.200': '#bae6fd',
        'info.300': '#7dd3fc',
        'info.400': '#38bdf8',
        'info.500': '#0ea5e9',
        'info.600': '#0284c7',
        'info.700': '#0369a1',
        'info.800': '#075985',
        'info.900': '#0c4a6e',

        'light.50': '#fafaf9',
        'light.100': '#f5f5f4',
        'light.200': '#e7e5e4',
        'light.300': '#d6d3d1',
        'light.400': '#a8a29e',
        'light.500': '#78716c',
        'light.600': '#57534e',
        'light.700': '#44403c',
        'light.800': '#292524',
        'light.900': '#1c1917',
      },
      space: {
        'px': '1px',
        '0': 0,
        '0.5': 2,
        '1': 4,
        '1.5': 6,
        '2': 8,
        '2.5': 10,
        '3': 12,
        '3.5': 14,
        '4': 16,
        '5': 20,
        '6': 24,
        '7': 28,
        '8': 32,
        '9': 36,
        '10': 40,
        '12': 48,
        '16': 64,
        '20': 80,
        '24': 96,
        '32': 128,
        '40': 160,
        '48': 192,
        '56': 224,
        '64': 256,
        '72': 288,
        '80': 320,
        '96': 384,
        '1/2': '50%',
        '1/3': '33.333%',
        '2/3': '66.666%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666%',
        '2/6': '33.333%',
        '3/6': '50%',
        '4/6': '66.666%',
        '5/6': '83.333%',
        'full': '100%',

        '3xs': 224,
        '2xs': 256,
        'xs': 320,
        'sm': 384,
        'md': 448,
        'lg': 512,
        'xl': 576,
        '2xl': 672,
      },
      borderWidths: {
        '0': 0,
        '1': 1,
        '2': 2,
        '4': 4,
        '8': 8,
      },
      radii: {
        'none': 0,
        'xs': 2,
        'sm': 4,
        'md': 6,
        'lg': 8,
        'xl': 12,
        '2xl': 16,
        '3xl': 24,
        'full': 9999,
      },
      breakpoints: {
        'base': 0,
        'sm': 480,
        'md': 768,
        'lg': 992,
        'xl': 1280,
        '2xl': 1536,
      },
      mediaQueries: {
        'base': '@media screen and (min-width: 0)',
        'xs': '@media screen and (min-width: 400px)',
        'sm': '@media screen and (min-width: 480px)',
        'md': '@media screen and (min-width: 768px)',
        'lg': '@media screen and (min-width: 992px)',
        'xl': '@media screen and (min-width: 1280px)',
        '2xl': '@media screen and (min-width: 1536px)',
      },
      letterSpacings: {
        'xs': -0.4,
        'sm': -0.2,
        'md': 0,
        'lg': 0.2,
        'xl': 0.4,
        '2xl': 1.6,
      },
      lineHeights: {
        '2xs': 16,
        'xs': 18,
        'sm': 20,
        'md': 22,
        'lg': 24,
        'xl': 28,
        '2xl': 32,
        '3xl': 40,
        '4xl': 48,
        '5xl': 56,
        '6xl': 72,
        '7xl': 90,
      },
      fontWeights: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
        extraBlack: '950',
      },
      fonts: {
        heading: undefined,
        body: undefined,
        mono: undefined,
      },
      fontSizes: {
        '2xs': 10,
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 18,
        'xl': 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
        '6xl': 60,
        '7xl': 72,
        '8xl': 96,
        '9xl': 128,
      },
      opacity: {
        0: 0,
        5: 0.05,
        10: 0.1,
        20: 0.2,
        25: 0.25,
        30: 0.3,
        40: 0.4,
        50: 0.5,
        60: 0.6,
        70: 0.7,
        75: 0.75,
        80: 0.8,
        90: 0.9,
        95: 0.95,
        100: 1,
      },
    } as const,
    globalStyle: {
      variants: {
        hardShadow: {
          '1': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: -2,
              height: 2,
            },
            shadowRadius: 8,
            shadowOpacity: 0.5,
            elevation: 10,
          },
          '2': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 8,
            shadowOpacity: 0.5,
            elevation: 10,
          },
          '3': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowRadius: 8,
            shadowOpacity: 0.5,
            elevation: 10,
          },
          '4': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: -3,
            },
            shadowRadius: 8,
            shadowOpacity: 0.5,
            elevation: 10,
          },
          // this 5th version is only for toast shadow
          // temporary
          '5': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 8,
            shadowOpacity: 0.2,
            elevation: 10,
          },
        },
        softShadow: {
          '1': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 10,
            shadowOpacity: 0.1,
            _android: {
              shadowColor: '$backgroundLight500',
              elevation: 5,
              shadowOpacity: 0.05,
            },
          },
          '2': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 20,
            elevation: 3,
            shadowOpacity: 0.1,
            _android: {
              shadowColor: '$backgroundLight500',
              elevation: 10,
              shadowOpacity: 0.1,
            },
          },
          '3': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 30,
            shadowOpacity: 0.1,
            elevation: 4,
            _android: {
              shadowColor: '$backgroundLight500',
              elevation: 15,
              shadowOpacity: 0.15,
            },
          },
          '4': {
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowRadius: 40,
            shadowOpacity: 0.1,
            elevation: 10,
            _android: {
              shadowColor: '$backgroundLight500',
              elevation: 20,
              shadowOpacity: 0.2,
            },
          },
        },
      },
    },
  },
} as const;
type Config = typeof config.theme;
declare module '@gluestack-style/react' {
  interface ICustomConfig extends Config {}
}
