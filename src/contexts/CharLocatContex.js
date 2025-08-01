/* Context file to set the Character and Location for the Moodshots
 * This is read in App.js (lines 79, 80) and passed to the Moodshot
   page (line 237-265)) as a variable. This is then put in the 
   request */
import { createContext, useContext,  useState } from "react";

export const CharacterContext = createContext();
export const SetCharacterContext = createContext();
export const useCharacterContext = () => useContext(CharacterContext);
export const useSetCharacterContext = () => useContext(SetCharacterContext);

export const LocationContext = createContext();
export const SetLocationContext = createContext();
export const useLocationContext = () => useContext(LocationContext);
export const useSetLocationContext = () => useContext(SetLocationContext);

export const CharacterLocationProvider = ({ children }) => {
    const [character, setCharacter] = useState("");
    const [location, setLocation] = useState("");
  
    return (
      <CharacterContext.Provider value={character}>
        <SetCharacterContext.Provider value={setCharacter}>
          <LocationContext.Provider value={location}>
            <SetLocationContext.Provider value={setLocation}>
                {children}
            </SetLocationContext.Provider>
          </LocationContext.Provider>
        </SetCharacterContext.Provider>
      </CharacterContext.Provider>
    );
  };