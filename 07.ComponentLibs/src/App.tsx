import NavbarFlow from "./components/NavbarFlow";
import FormFlow from "./components/FormFlow";
import FooterFlow from "./components/FooterFlow";


const App = () => {
  return (
      <div className="w-full bg-slate-800">
        <div>
          <NavbarFlow />
        </div>
        <div className="h-151 flex items-center justify-center">
          <FormFlow />
        </div>
        <div>
          <FooterFlow />
        </div>
      </div>
  )
}

export default App