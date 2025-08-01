import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"
import { CurrentUserProvider } from "./contexts/CurrentUserContext"
import { ProfileDataProvider } from "./contexts/ProfileDataContext"
import { DeptCategoryProvider } from "./contexts/DeptCategoryContext"
import { ActProvider } from "./contexts/ActContext"
import { ScenesCharactersLocationsProvider } from "./contexts/Scene_chars_locs"
import { CharacterLocationProvider } from "./contexts/CharLocatContex"
import { CrewInfoProvider } from "./contexts/BaseCallContext"
import { MantineProvider } from "@mantine/core"
import { Toaster } from "react-hot-toast"

ReactDOM.render(
  <Router>
    <CurrentUserProvider>
      <ProfileDataProvider>
        <ActProvider>
          <DeptCategoryProvider>
            <ScenesCharactersLocationsProvider>
              <CharacterLocationProvider>
                <CrewInfoProvider>
                  <MantineProvider withGlobalStyles withNormalizeCSS>
                    <Toaster />
                    <App />
                  </MantineProvider>
                </CrewInfoProvider>
              </CharacterLocationProvider>
            </ScenesCharactersLocationsProvider>
          </DeptCategoryProvider>
        </ActProvider>
      </ProfileDataProvider>
    </CurrentUserProvider>
  </Router>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
