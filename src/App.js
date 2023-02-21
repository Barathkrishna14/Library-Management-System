import "./App.css";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import IssuedBooks from "./components/IssuedBooks";
import UserBooks from "./components/UserBooks";
import BookSection from "./components/BookSection";
import UserSection from "./components/UserSection";
import AddBook from "./components/AddBook";
import EditUser from "./components/EditUser";
import NotFound from "./components/NotFound";
import Search  from "./components/Search";
import UserSearch from "./components/UserSearch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/UserList";
import HistoryBook from "./components/HistroybookPage";
import EditBook from "./components/EditBook";
import AddUser from "./components/AddUser";
import ContactUs from "./components/SendEmail";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/admin-dashboard">
            <AdminDashboard />
          </Route>

          <Route path="/user-dashboard">
            < UserDashboard  />
          </Route>

          <Route path="/issued-books">
            <IssuedBooks />
          </Route>

          <Route path="/user-books">
            <UserBooks />
          </Route>

          <Route path="/book-section">
            <BookSection />
          </Route>

          <Route path="/user-section">
            <UserSection />
          </Route>

          <Route path="/edit-user">
            <EditUser />
          </Route>

          <Route path="/add-books">
            <AddBook />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/UserSearch:admin">
            <UserSearch />
          </Route>

          <Route path="/Userlist">
            <UserList />
          </Route>

          <Route path="/history">
            <HistoryBook />
          </Route>

          <Route path="/EditBook">
            <EditBook />
          </Route>

          <Route path="/AddUser">
            <AddUser />
          </Route>

          <Route path="/SendEmail">
            <ContactUs />
          </Route>
      

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
