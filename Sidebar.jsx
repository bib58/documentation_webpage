import { useState } from "react";

function Sidebar({ topics, onNavigate }) {
    const [expandedItems, setExpandedItems] = useState({});

    // Toggle expand/collapse for any level
    const toggle = (path) => {
        setExpandedItems((prev) => ({
            ...prev,
            [path]: !prev[path],
        }));
    };

    const renderTopics = (items, parentPath = "") => {

        return (
            <ul className="sidebar-list">
                {items.map((item, index) => {
                    const currentPath = `${parentPath}/${item.title}`;

                    const hasSubtopics = item.subtopics && item.subtopics.length > 0;

                    return (
                        <li key={currentPath} className="sidebar-item">
                            <div className="sidebar-entry">
                                {hasSubtopics && (
                                    <button
                                        className="sidebar-button"
                                        onClick={() => toggle(currentPath)}
                                    >
                                        {expandedItems[currentPath] ? "▼" : "▶"} {item.title}
                                    </button>
                                )}
                                {!hasSubtopics && (
                                    <div
                                        className="subtopic"
                                        onClick={() => onNavigate(currentPath.split("/").filter(Boolean))}
                                    >
                                        {item.title}
                                    </div>
                                )}
                            </div>

                            {hasSubtopics && expandedItems[currentPath] && (
                                <div className="sidebar-subtopics">
                                    {renderTopics(item.subtopics, currentPath)}
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return  <div className="sidebar">{renderTopics(topics)}</div>;

}

export default Sidebar;