import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import ContentArea from "./ContentArea.jsx";
import { topics } from "./data/topics.js";

function App() {
    const [currentPath, setCurrentPath] = useState([]);

    return (
        <div className="app-container">
            <Sidebar topics={topics} onNavigate= {(pathArr) => setCurrentPath(pathArr)}/>

            <div className="main">
                <Breadcrumb path={currentPath} />
                <ContentArea path={currentPath} topics={topics} />
            </div>
        </div>
    );
}

export default App;
