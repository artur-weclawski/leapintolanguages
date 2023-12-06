import {Navigate, Outlet} from "react-router-dom";

const NoProtectedRoute = ({
                            user,
                            redirectPath = '/account',
                            children,
                        }) => {
    if (user) {
        return <Navigate to={redirectPath} replace={true}/>;
    }

    return children ? children : <Outlet/>;
};

export default NoProtectedRoute;