// importo l'hook di autenticazione
import { useAuth } from "../../contexts/AuthContext";

// creo la pagina di login dell'utente 
const Login = () => {
    // estrapolo la funzione logIn 
    const { logIn } = useAuth();

    // al submit del form 
    // prendo l'evento ed effettuo un prevent default
    // attivo la funzione di login che cambia il valore di isLogged
    // peremttendo all'utente di bypassare il middleware
    const handleLogin = (e) => {
        e.preventDefault();
        logIn();
    }


    return (
      <>
        <div>
            <h1 className=" d-flex display-1 justify-content-center text-light">
                Effettua il login
            </h1>
            <div>
                <form>
                    <label>
                        Email 
                        <input 
                        type="email" 
                        />
                    </label>
                    <label>
                        Password 
                        <input 
                        type="password" 
                        />
                    </label>
                    <button onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
      </>
    );
};
  
export default Login;