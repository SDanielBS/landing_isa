import { Route, Routes } from "react-router-dom"
import './App.css'
import { Introduction } from "../Introduction/Introduction"
import { TextClousing } from "../TextClousing/TextClousing"
import { MembersTeam } from "../MembersTeam/MembersTeam"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

function App() {
  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Introduction/>}/>
        <Route path="/ensayo" element={<TextClousing/>}/>
        <Route path="/team" element={<MembersTeam/>}/>
      </Routes>
      <Footer/>
    </main>
  )
}

export { App } 