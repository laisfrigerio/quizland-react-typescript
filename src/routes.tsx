import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QuizManagementProvider } from '@context/QuizManagement';
import { HomeScreen } from '@screens/Home';
import { QuizDetailsScreen } from '@screens/QuizDetails';
import { QuizResultScreen } from '@screens/QuizResult';

function AppRoutes() {
  return (
    <QuizManagementProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen />}
          />
          <Route
            path="/quiz"
            element={<QuizDetailsScreen />}
          />
          <Route
            path="/result"
            element={<QuizResultScreen />}
          />
        </Routes>
      </BrowserRouter>
    </QuizManagementProvider>
  );
}

export { AppRoutes };
