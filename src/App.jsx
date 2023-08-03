
import './App.css'
import RouterConfigComp from './RouterConfig'
import AuthProvider from './context'

function App() {


  return (
    <>
        <AuthProvider>
          <RouterConfigComp />  
        </AuthProvider>
    </>
  )
}

export default App
