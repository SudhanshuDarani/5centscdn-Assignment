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
import toggle from './toggles.png';
import activeRules from './activeRules.jpg'

function App() {
  const [criteriaList, setCriteriaList] = useState([]); // List of criteria
  const [newCriteria, setNewCriteria] = useState(""); // Input value for new criteria
  const [toggles, setToggles] = useState({}); // Track toggle states
  // const [expandedComponents, setExpandedComponents] = useState({});
  // const [expandedCriteria, setExpandedComponents] = useState({})
  const [wrapStates, setWrapStates] = useState({});

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




  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const handleChange = (event) => {
    const value = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedOptions(value);
  };

  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter(selected => selected !== option));
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

            <div className="criteria-list mt-5">
              {criteriaList.map((criteria, index) => {
                const isWrapped = wrapStates[index]; // Check if the content is wrapped
                const displayText = isWrapped
                  ? criteria
                  : criteria.length > 50
                    ? criteria.slice(0, 50) + "..."
                    : criteria;

                return (
                  <div
                    key={index}
                    className="criteria-item criteria-box d-flex flex-column mb-3 p-3 bg-light rounded shadow-sm"
                  >
                    {/* Heading and Actions */}
                    <div className="d-flex justify-content-between align-items-center mb-4 criteriaListHead">
                      <h5 className="mb-0">Criteria {index + 1}</h5>
                      <div className="d-flex align-items-center gap-3">

                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`toggle-${index}`}
                            onChange={() => handleWrapToggle(index)}
                            checked={toggles[index] || false}
                          />
                          <label className="form-check-label" htmlFor={`toggle-${index}`}>
                            
                          </label>
                        </div>



                        {/* Delete Button */}
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
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
                              className="btn btn-outline-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
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
                              className="btn btn-outline-secondary dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
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

                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id={`checkbox-${index}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`checkbox-${index}`}
                            >
                              Considered X Forward for p
                            </label>
                          </div>
                        </form>
                        <select className="form-select" aria-label="Default select example">
                          <option selected>Select Items</option>
                          <option value="1">198.62.1.1</option>
                          <option value="2">198.62.1.2</option>
                          <option value="3">198.62.1.3</option>
                        </select>


                        
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
