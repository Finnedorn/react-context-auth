// import i moduli di react-router
import { NavLink } from "react-router-dom";
// importo l'hook di autenticazione
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {

    const navPages = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Posts",
            path: "/posts",
        },
    ];

    const { isLogged, logOut } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className=" w-100">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between">
                    <div className=" d-flex">
                        {navPages.map((page, index) => (
                            <li key={index} className="nav-item fs-3 p-2">
                                {/* il componente NavLink è simile al componente Link,
                                quindi fronisce la possibilità di navigare attraverso le pagine,
                                 ma in questo caso applica al link attivo la classe .active */}
                                <NavLink to={page.path} className="nav-link active" aria-current="page">
                                    {page.label}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                    <div>
                        {/* se isLogged è false l'utente vedrà un linkbutton per la login page */}
                        {!isLogged &&
                            <li className=" nav-item fs-3 p-2">
                                <NavLink to={`/login`} className=" nav-link active" aria-current="page">
                                    Login
                                </NavLink>
                            </li>
                        }
                        {/* altrimenti vedrà un pulsante di logout */}
                        {isLogged &&
                            <li onClick={logOut} style={{cursor: "pointer"}} className=" nav-item fs-3 p-2">
                                <span className=" nav-link active" aria-current="page">
                                    Logout
                                </span>
                            </li>
                        }
                    </div>
                </ul>
            </div>
        </div>
        </nav>
    </>
  );
}

export default Navbar;