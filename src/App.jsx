import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
// importo il provider di posts
import { PostProvider } from "./contexts/PostContext";


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
          <Routes>
            {/* essendo / la route base la uso per estendere
            il layout "nav +footer" a tutte le pagine */}
            <Route path="/" element={<Layout/>}>
                {/* creo la route per il Not Found */}
                <Route path="*" element={<NotFound/>}/>
                <Route index element={<Home/>} />
                {/* includo tutte le rotte con cui voglio sharare posts */}
                <Route path="posts">
                  <Route index element={<PostIndex/>} />
                  <Route path=":id">
                    <Route index element={<PostShow/>}/>
                  </Route>
                  <Route path="create" element={<PostCreate/>}/>
                </Route>
            </Route>
          </Routes>
        </PostProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
