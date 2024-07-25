import { Dispatch,SetStateAction , createContext} from 'react';


// Dispatch:

// Dispatch is a type representing a function that takes an action and dispatches it. In the context of React, this is typically used with state updating functions returned by useState or useReducer.
// SetStateAction<boolean>:
// dispatch_funciton(Action)
// SetStateAction is a type representing an action that can be passed to a state updater function. It can be either the new state itself or a function that takes the current state and returns the new state.
// boolean here indicates that the state being set is of type boolean.
// Action -> update function that need to perform to update the state

type ThemeContextType={
    darkTheme:boolean;
    setDarkTheme:Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType>({
    darkTheme: false,
    setDarkTheme: () => null,
})

export default ThemeContext;