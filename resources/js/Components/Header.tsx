
import { Link } from "@inertiajs/react";
import { Home, BarChart2, Users, Settings } from "lucide-react";

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <Link
                href="/dashboard"
                className="text-white flex items-center space-x-2 px-4"
            >
                <BarChart2 className="w-8 h-8" />
                <span className="text-2xl font-extrabold">Admin</span>
            </Link>
            <nav>
                <Link
                    href="/dashboard"
                    className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
                >
                    <Home className="inline-block mr-2" /> Dashboard
                </Link>
                <Link
                    href="/dashboard/users"
                    className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
                >
                    <Users className="inline-block mr-2" /> Users
                </Link>
                <Link
                    href="/dashboard/settings"
                    className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white"
                >
                    <Settings className="inline-block mr-2" /> Settings
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
