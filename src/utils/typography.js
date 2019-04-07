import Typography from "typography"
import theme from "typography-theme-stow-lake"

theme.overrideThemeStyles = () => ({
  html: {
    backgroundImage: "linear-gradient(#FFFFFF, #F1F1F1)",
    minHeight: "100%",
  },
  body: {
    color: "#7D7F89",
  },
  a: {
    color: "#93517D",
  },
  "a:hover": {
    color: "#93517D",
  },
})

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
