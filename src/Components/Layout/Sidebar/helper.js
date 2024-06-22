import { useLocation, useNavigate } from "react-router-dom";


const useSidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const sidebarRoutes = [
        {
            url: '/about',
            heading: 'About',
        },
        {
            url: '/disclaimer',
            heading: 'Disclaimer',
        },
        {
            url: '/policies',
            heading: 'Policies',
        },
        {
            url: '/essential-points',
            heading: 'Essential Points',
        },
        {
            url: '/feedback',
            heading: 'Feedback',
        },
        {
            url: '/faq',
            heading: 'FAQ',
        },
        {
            url: '/contact-us',
            heading: 'Contact Us',
        },
    ]

    // handle link click
    const handleLinkClick = (itm) => {
        navigate(itm?.url)
    }

    const is_active_route = (url) => {
        if (
            location.pathname.includes(`${url}`)
        ) {
            return true;
        }else{
            return false;
        }
    };
    return {
        navigate, sidebarRoutes, handleLinkClick, is_active_route
    }
}

export default useSidebar