import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({
                            user,
                            redirectPath = '/login',
                            children,
                        }) => {
    if (!user) {
        return <Navigate to={redirectPath}  = {true}/>;
    }

    return children ? children : <Outlet/>;
};

export default ProtectedRoute;