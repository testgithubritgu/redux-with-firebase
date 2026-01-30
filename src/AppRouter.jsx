
import { Route, Routes } from "react-router-dom";
import UserForm from "./components/login-form/UserForm";
import App from "./App";
// import DeliveryTrip from "./features/DeliveryTrip/DeliveryTrip.tsx";
// import NotFound from "./features/NotFound/NotFound.tsx";
// import { Page } from "./features/Page/Page.tsx";
// import TripDetails from "./features/TripDetails/TripDetails.tsx";
// import DeliveryStopDetails from "./features/DeliveryStopDetails/DeliveryStopDetails.tsx";
// import Login from "./features/login/Login.tsx";
// import { useFrappeAuth } from "frappe-react-sdk";
// import { useEffect } from "react";
// import SalesInvoice from "./features/SalesInvoice/SalesInvoice.tsx";

// type isRouteActive = boolean;

// type RouteConfig = Array<[string, JSX.Element, isRouteActive]>;

const pageRoutes = [
 
  [
    "/login",
    <UserForm />,
    true,
  ],
  [
    "/",
    <App/>,
    true
  ]
];

export default function AppRoutes() {
//   const { currentUser, isLoading } = useFrappeAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isLoading) return;
//     if (!currentUser) {
//       navigate("/vansale/login");
//     }
//   }, [isLoading, currentUser]);

  return (
    <Routes>
      <Route path="*" element={"not found"} />
      {pageRoutes.map(
        ([path, element, isRouteActive]) =>
          isRouteActive && (
            <Route
              key={path}
              path={path}
              element={element}
            />
          )
      )}
    </Routes>
  );
}
