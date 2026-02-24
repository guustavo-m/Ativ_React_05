import './App.css'
import frontend from './assets/img/frontend.jfif';
import responsive from './assets/img/responsive.jpg';
import performance from './assets/img/performance.jfif';
import acessibility from './assets/img/acessibility.jfif';
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import Topper from './components/Topper/Topper'
import Phrase from './components/Phrase/Phrase'
import Bluebox from './components/Bluebox/Bluebox'

function App() {
  return (
    <>
      <Titulo/>
      <Topper/>
      <Phrase/>
      <section class="cards">
        <Card image={frontend} title="Desenvolvimento FrontEnd" text="Criação de interfaces modernas e responsivas utilizando as mais recentes tecnologias web."/>
        <Card image={responsive} title="Design Responsivo" text="Layouts que se adaptam perfeitamente a qualquer dispositivo, desde smartphones até desktops."/>
        <Card image={performance} title="Performance e SEO" text="Otimização avançada para garantir carregamento rápido e melhor posicionamento nos buscadores."/>
        <Card image={acessibility} title="Acessibilidade Web" text="Desenvolvimento inclusivo seguindo as diretrizes WCAG para atender todos os usuários."/>
      </section>
      <Bluebox/>
      <Footer/>
    </>
  )
}

export default App
