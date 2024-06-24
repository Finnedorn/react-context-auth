import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
// importo il provider di posts
import { PostProvider } from "./contexts/PostContext";
// importo il provider di autenticazione
import { AuthProvider } from "./contexts/AuthContext";
// importo il middleware di autenticazione
import LogChecker from "./middlewares/logChecker";
// importo la pagina di login 
import Login from "./pages/Login/Login";



// import le rotte alle varie pagine
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/notFound";
// import le routes di posts
import PostIndex from "./pages/Posts/postIndex";
import PostShow from "./pages/Posts/postShow";
import PostCreate from "./pages/Posts/postCreate";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <PostProvider>
          <AuthProvider>
            <Routes>
              {/* essendo / la route base la uso per estendere
              il layout "nav +footer" a tutte le pagine */}
              <Route path="/" element={<Layout />}>
                {/* creo la route per il Not Found */}
                <Route path="*" element={<NotFound />} />
                <Route index element={<Home />} />
                <Route path="login" element={<Login/>} />
                
                {/* Rotte protette dal middleware di autenticazione */}
                
                  <Route path="posts">
                    <Route index element={<LogChecker><PostIndex /></LogChecker>} />
                    <Route path=":id">
                      <Route index element={<PostShow />} />
                    </Route>
                    <Route path="create" element={<PostCreate />} />
                  </Route>
                
              </Route>



            </Routes>
          </AuthProvider>
        </PostProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
