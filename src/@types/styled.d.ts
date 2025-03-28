import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// ✅ Força a interface a ter pelo menos uma propriedade
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    _dummy?: never
  }
}
