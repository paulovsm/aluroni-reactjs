import { Navigate, useLocation } from 'react-router-dom';

export default function Admin() {
    const { search } = useLocation();

    // If the user in the query string is admin then redirect to the admin page
    if (search.includes('user=admin')) {
        return (<h1>Admin Page</h1>);
    } else {
        return <Navigate to="/" />;
    }

}