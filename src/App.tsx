import "./i18n";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import { LeaguesPage } from "./router/routes";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <Suspense fallback={<div>{t("loading")}</div>}>
        <Routes>
          <Route path="/" element={<LeaguesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
