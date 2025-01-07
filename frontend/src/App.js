// Hooks
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

// Page / Routes
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// import CustomerSupport from './components/policy/CustomerSupport';
// import EmailInquiry from './components/policy/EmailInquiry';
// import TermsOfService from './components/policy/TermsOfService';

// import StoreRegistrationForm from './pages/store/StoreRegistrationForm';

/**
 * Header, Footer가 포함된 기본 레이아웃입니다.
 *
 * @param {JSX.Element} children 리액트 컴포넌트입니다.
 * @returns
 */
const DefaultLayout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

/**
 * Header, Footer가 없는 레이아웃입니다.
 *
 * @param {JSX.Element} children 리액트 컴포넌트입니다.
 * @returns
 */
const MinimalLayout = () => (
  <>
    <main>
      <Outlet />
    </main>
  </>
);

/**
 * App 전체 라우팅을 관리하는 컴포넌트입니다.
 * @returns {JSX.Element} - 전체 라우팅 구성
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header, Footer가 포함되는 컴포넌트 */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/support" element={<CustomerSupport />} />
          <Route path="/email" element={<EmailInquiry />} />
          <Route path="/terms" element={<TermsOfService />} />

          <Route path="/store/new" element={<StoreRegistrationForm />} /> */}
        </Route>

        {/* Header, Footer가 포함되지 않는 컴포넌트 */}
        <Route element={<MinimalLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
