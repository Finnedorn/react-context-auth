import { useNavigate } from "react-router-dom";
// importo la funzione di hook
import { useAuth } from "../contexts/AuthContext";

// creo un middleware che controlli se isLogged è settato su true o false
// e quindi se l'utente abbia effettuato o meno il login
export default function ({ children }) {
  // estrapolo isLogged dai valori di useAuth
  const { isLogged } = useAuth();

  // se isLogged è false l'utente non avrà effettuato il login
  // di conseguenza verrà redirezionato sulla pagina di login
  if (!isLogged) {
    useNavigate("login");
    return;
  }

  return children;
}
