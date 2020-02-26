import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  // const [state, setState] = useState({ isDarkMode: false });
  // const toggleTheme = () => {
  //   setState({ isDarkMode: !state.isDarkMode });
  // };
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
// state = {isDarkMode: true}

// export class ThemeProvider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDarkMode: false
//     };
//     this.toggleTheme = this.toggleTheme.bind(this);
//   }
//   toggleTheme() {
//     this.setState({ isDarkMode: !this.state.isDarkMode });
//   }
//   render() {
//     return (
//       <ThemeContext.Provider
//         value={{ ...this.state, toggleTheme: this.toggleTheme }}
//       >
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }
