import { createContext, useContext, useState } from "react";
// importo useNavigate, un hook di react-router che mi permette di effettuare i redirects 
import { useNavigate } from "react-router-dom";

// apro il context
const AuthContext = createContext();

// setto il provider
const AuthProvider = ({children}) => {

    // setto lo state di login, di base su false 
    const [isLogged, setIsLogged] = useState(false);

    // appena effettuato il login redireziono su home
    // oppure sulla pagina a cui voleva accedere l'utente al momento della dovuta richiesta di login
    const logIn = (payload, redirect) => {
        setIsLogged(true);
        useNavigate(redirect || "/");
    }

    // premendo il tasto logout, setLogged passa a false
    // quindi si viene rispediti fuori dalle pagine private e alla pagina di login
    const logOut = () => {
        setIsLogged(false);
        useNavigate("/login");
    }

    // impacchetto tutto ciò che mi serve esportare 
    const logValue = {
        isLogged,
        logIn,
        logOut
    }

    return(
    <>
        <AuthContext.Provider value={logValue}>
            {children}
        </AuthContext.Provider>
    </>
    )
}

// setto la mia funzione di hook 
const useAuth = () => {
    const value = useContext(AuthContext);
    if(value === undefined){
        throw new Error('Non sei dentro al Auth Provider');
    }
    return value;
}


export {AuthProvider, useAuth};