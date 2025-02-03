import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomeScreen } from '@screens/Home';
import { QuizDetailsScreen } from '@screens/QuizDetails';

function AppRoutes() {
  return (
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
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
