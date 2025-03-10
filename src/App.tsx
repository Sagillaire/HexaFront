import { routes } from "./ui/navigation/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProviderGlobal } from "./ui/providers/QueryProvider";

const App = () => (
  <QueryClientProviderGlobal>
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children?.map((child, childIndex) => (
              <Route
                key={childIndex}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  </QueryClientProviderGlobal>
);

export default App;
