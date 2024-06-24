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
        <div className="d-flex flex-column align-items-center">
                <h1 className=" d-flex display-1 justify-content-center text-light pb-5">
                    Effettua il login
                </h1>
            <div className="card p-5 rounded-4">
                <div>
                    <form className="d-flex flex-wrap justify-content-center p-3">
                        <div className=" w-100">
                            <label className="d-flex align-items-center py-3">
                                <span className="fs-3 pe-5 me-3">Email</span>
                                <input
                                className="form-control w-50"
                                type="email"
                                />
                            </label>
                            <label className="d-flex align-items-center py-3">
                                <span className="fs-3 pe-2 me-3">Password</span>
                                <input
                                
                                className="form-control w-50"
                                type="password"
                                />
                            </label>
                        </div>
                        <button onClick={handleLogin} className=" btn btn-primary fs-4 mt-3">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </>
    );
};
  
export default Login;