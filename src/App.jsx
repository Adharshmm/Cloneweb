import { Route, Routes } from "react-router-dom"
import Minlayout from "./Minlayout"
import Sublayout from "./Sublayout"
import Login from "./components/Login"
import IntroContent from "./pages/IntroContent"
import Cards from "./pages/Cards"
import EndContent from "./pages/EndContent"
import Signup from "./components/Signup"

function App() {

  return (
    <>
      <Routes>
        {/* Routes that include Header and Footer */}
        <Route element={<Minlayout />}>
          <Route
            path="/"
            element={
              <>
                <IntroContent />
                <Cards />
                <EndContent />
              </>
            }
          />
        </Route>

        {/* Route without Header and Footer */}
        <Route element={<Sublayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
