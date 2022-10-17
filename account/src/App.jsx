import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages 
import Overview from "./pages/Overview";
import AccountDetails from "./pages/AccountDetails";
import Payment from "./pages/Payment";
import History from "./pages/History";

// import components
import BottomNavigation from "./components/navigation/BottomNavigation";
import ContextProvider from "./data/ContextProvider";

const appBasePath =
  window && window.__HERCULES__ && window.__HERCULES__.pagePath
    ? window.__HERCULES__.pagePath
    : '/';

const AccountOverviewPage = () => {
  return <Overview />;
};

const AccountDetailsPage = () => {
  return <AccountDetails />;
};

const PaymentPage = () => {
  return <Payment />;
};

const HistoryPage = () => {
  return <History />;
};

function App() {
  return (
    <ContextProvider>
      <Router basename={appBasePath}>
        <div className="app">
          <div className="grid">
            <div className="grid__inner">
              <Routes>
                <Route path="/" element={<AccountOverviewPage />} />
                <Route path="/details" element={<AccountDetailsPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/history/*" element={<HistoryPage />} />
              </Routes>
            </div>
          </div>
          <BottomNavigation />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
