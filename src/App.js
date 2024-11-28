import './App.css';
import { useState } from 'react';
import logo from './Black logo - no background.png';
import dashbord from './dashbord.png';
import liveStream from './live-stream.png';
import zone from './zones.png';
import transcode from './transcodes.png';
import account from './account.png';
import deploy from './deploy.png';
import pullZone from './pullZone.png'
import plus from './Icon awesome-plus (1).png'
import setting from './setting (1).png';
import toggle from './toggles.png';
import activeRules from './activeRules.jpg';
import zoneInfo from './zone Info.png';
import edge from './Edge Rules.png';
import deleteIcon from './deleteIcon.svg';
import wrapIcon from './wrapIcon.svg';


function App() {
  const [criteriaList, setCriteriaList] = useState([]); // List of criteria
  const [newCriteria, setNewCriteria] = useState(""); // Input value for new criteria
  const [toggles, setToggles] = useState({}); // Track toggle states
  // const [expandedComponents, setExpandedComponents] = useState({});
  // const [expandedCriteria, setExpandedComponents] = useState({})
  const [wrapStates, setWrapStates] = useState({});
  const [tags, setTags] = useState(["198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1", "198.62.1.1"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue) {
      if (!tags.includes(inputValue)) {
        setTags([...tags, inputValue]);
      }
      setInputValue(""); // Clear input
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  // Function to handle form submission for adding new criteria
  const handleAddCriteria = (e) => {
    e.preventDefault();
    if (newCriteria.trim() === " ") return;

    setCriteriaList([...criteriaList, newCriteria]);
    setNewCriteria(""); // Clear input field after submission
  };
  const handleWrapToggle = (index) => {
    setWrapStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const handleDelete = (index) => {
    // Remove criteria from the list
    const updatedList = criteriaList.filter((_, i) => i !== index);
    setCriteriaList(updatedList);

    // Remove toggle state for the deleted criteria
    const updatedToggles = { ...toggles };
    delete updatedToggles[index];
    setToggles(updatedToggles);
  };





  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000000", padding: "5pt" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} width={"70%"} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{ gap: "5pt", display: "flex", alignItems: "center" }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><img width={"60%"} src={dashbord} alt="" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><img width={"60%"} src={liveStream} alt="" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><img width={"60%"} src={zone} alt="" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><img width={"60%"} src={transcode} alt="" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><img width={"60%"} src={account} alt="" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/"><img width={"60%"} src={deploy} alt="" /></a>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className="pullZone">
        <img src={pullZone} alt="" />
      </div>

      <div className="pullZone">
        <img src={zoneInfo} alt="" />
      </div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid" style={{ display: "flex", gap: "8pt", alignItems: "center" }}>
          <img src={setting} alt="" height={"25pt"} width={"25pt"} /><img src={edge} alt="" />

          <div class="collapse navbar-collapse" id="navbarNav" style={{ display: "flex", justifyContent: "end" }} >
            <ul class="navbar-nav" style={{ width: "20%", display: "flex", justifyContent: "center" }}>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Rules</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Default Behaviours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Error Logs</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div className="criteriass">
        <div className="activeRule">
          <img src={activeRules} alt="" />
        </div>
        <div className="main">
          <div className="criteriaS">
            <div className="criteriaNav">
              <h2>Criteria</h2>
              <div className="nav2"><img onClick={handleAddCriteria} src={plus} alt="" /> <img src={toggle} alt="" /></div>
            </div>
            {/* <div className="container mt-5"> */}
            {/* Criteria List with Heading, Toggle, and Delete */}

            <div className="criteria-list mt-5" >
              {criteriaList.map((criteria, index) => {
                const isWrapped = wrapStates[index]; // Check if the content is wrapped
                const displayText = isWrapped
                  ? criteria
                  : criteria.length > 50
                    ? criteria.slice(0, 50) + "..."
                    : criteria;

                return (
                  <div key={index} className="criteria-item criteria-box d-flex flex-column mb-3 p-3 bg-light rounded shadow-sm">
                    {/* Heading and Actions */}
                    <div className="d-flex justify-content-between align-items-center mb-4 criteriaListHead">
                      <h5 className="mb-0">Criteria {index + 1}</h5>
                      <div className="d-flex align-items-center">
                        {/* Delete Button */}
                        <div className="form-check form-switch">
                          <button className="btn  btn-sm" onClick={() => handleDelete(index)} >
                            <img src={deleteIcon} height={"30pt"} alt="" />
                          </button>
                          <img style={{ cursor: "pointer" }} src={wrapIcon} height={"30pt"} onClick={() => handleWrapToggle(index)} alt="" />
                        </div>


                      </div>
                    </div>

                    {/* Criteria Content */}
                    {isWrapped && (
                      <>
                        <form
                          className="d-flex"
                          style={{ gap: "10pt", display: "flex", alignItems: "center" }}
                        >
                          <div className="dropdown">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              style={{ border: "1pt solid #C2C2C2", color: "#000000", width: "100pt", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                              Client IP
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="/">
                                  Content Type
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              style={{ border: "1pt solid #C2C2C2", color: "#000000", width: "100pt", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                            >
                              Is one to
                            </button>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item" href="/">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="/">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className=" form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={`checkbox-${index}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox-${index}`}
                              style={{ fontWeight: "400", fontSize: "17px", lineHeight: "23.44px" }}
                            >
                              Considered X Forward for p
                            </label>
                          </div>
                        </form>

                        <input
                          id="tag-input"
                          type="text"
                          className="form-control mt-4"
                          placeholder="Select Item"
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyDown={handleAddTag}
                        />
                        <div className=" p-2 rounded mt-4">
                          <div className="d-flex flex-wrap">
                            {tags.map((tag, index) => (
                              <div
                                key={index}
                                className="badge me-2 mb-2 d-flex align-items-center"
                                style={{ border: "1pt solid #d5e8ca", padding: "0.5rem 1rem", borderRadius: "5px", color: "#59A52C",fontSize:"15px" }}
                              >
                                {tag}
                                <button
                                  type="button"
                                  className="btn-close btn-sm ms-2"
                                  aria-label="Remove"
                                  onClick={() => handleRemoveTag(tag)}
                                  style={{ fontSize: "10px", color: "#59A52C", }}
                                ></button>
                              </div>
                            ))}
                          </div>

                        </div>

                      </>
                    )}
                  </div>
                );
              })}

            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
