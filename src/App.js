import Header from "./Header"
import Footer from "./Footer"
import Counter from "./Itemcount";
import ItemListContainer from "./itemListContainer";
import Main from "./main";



function App(props) {
  return (
    < BrowseRouter>
      <Header />
      <Navbar />
      <Counter stock={5} initial={1} />
      <itemListContainer />
      <Main />
      <Footer />
    </BrowseRouter>
  );
}

export default App;
