import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faServer, faNetworkWired, faLaptop, faGlobe, faPlug, faChartLine, faSyncAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import './App.css';  // Assuming your CSS file is named App.css


const App = () => {
 
  const [isConnected, setIsConnected] = useState(false);
  const [wifiStatus, setWifiStatus] = useState({
    text: "Not Connected",
    className: "status-red",
  });
  const [statusBar, setStatusBar] = useState({
    text: "Not Active",
    className: "status-red",
  });
  const [imageSrc, setImageSrc] = useState("/images/notconnected.png");
  const [imageClass, setImageClass] = useState("image-default"); 
  const [password, setPassword] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleWifiToggle = () => {
    if (!isConnected) {
      // Ensure password is entered before connecting
      if (password.trim() === "") {
        alert("Please enter a Wi-Fi password before connecting.");
        return;
      }

      // **Connecting...**
      setWifiStatus({ text: "Connecting...", className: "status-yellow" });
      setStatusBar({ text: "Activating...", className: "status-yellow" });
      setImageSrc("/images/connecting.gif");
      setImageClass("image-connecting");

      // **After 5 seconds → Connected**
      setTimeout(() => {
        setWifiStatus({ text: "Connected", className: "status-black" });
        setStatusBar({ text: "Activated", className: "status-black" });
        setImageSrc("/images/tic1.gif");
        setImageClass("image-connected");
        setIsConnected(true); // Update state
      }, 5000);
    } else {
      // **Disconnecting...**
      setWifiStatus({ text: "Disconnecting...", className: "status-yellow" });
      setStatusBar({ text: "Deactivating...", className: "status-yellow" });
      setImageSrc("/images/connecting.gif" );
      setImageClass("image-connecting");
     

      // **After 5 seconds → Not Connected**
      setTimeout(() => {
        setWifiStatus({ text: "Not Connected", className: "status-red" });
        setStatusBar({ text: "Not Active", className: "status-red" });
        setImageSrc("/images/notconnected.png");
        setImageClass("image-default");

        setIsConnected(false); // Reset state
      }, 5000);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000); // Rotate for 1 second
  };


 
  return (
    <div className="container">
      {/* Header */}
      <header>
        <div className="img">
          <img src="\images\Seconnecttfinal (1).png" alt="" width="880px" />
        </div>
      </header>

      {/* Wi-Fi Section */}
      <div className="one">
        <div className="wifi-section">
          <h2><FontAwesomeIcon icon={faWifi} /> WI-FI</h2>
          <div className="align">
            <div className="wifi">
            <p>Status&nbsp;: <span className={wifiStatus.className}>{wifiStatus.text}</span></p>
              <p>&nbsp;IP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className={wifiStatus.className}>{wifiStatus.text}</span></p>
              <p>&nbsp;SSID&nbsp;&nbsp;: <span className={wifiStatus.className}>{wifiStatus.text}</span></p>
            </div>
            <div className="inp">
            <input 
                type="password" 
                className="input-value" 
                placeholder="Enter Wi-Fi Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <select className="select-option">
                <option>Select a Network</option>
                <option>Home Network</option>
                <option>Fiber Network</option>
              </select>
            </div>
          </div>
          <button className="wifi-btn" onClick={handleWifiToggle}><FontAwesomeIcon icon={faWifi} /> {isConnected ? "Disconnect" : "Connect Wi-Fi"}</button><br />
          <button className="refresh-btn" onClick={handleRefresh}><strong><FontAwesomeIcon icon={faSyncAlt} className={isRefreshing ? "rotate-icon" : ""}/> Refresh</strong></button>
        </div>

         {/* Image Box (Changes after 5 seconds) */}
         <div className="card empty-box">
          <img src={imageSrc}  className={imageClass} alt="Wi-Fi Status" width="500" height="400" />
        </div>
      </div><br /><br /><br /><br />

      <div className="sevlan">
        {/* Server IP */}
        <div className="server-ip">
          <h3><FontAwesomeIcon icon={faServer} /> Server IP</h3><br />
          <input type="text" placeholder="Server IP" /><br /><br />
          <button className="save-btn"><FontAwesomeIcon icon={faSave} /> Save</button>
        </div>

        {/* LAN Section */}
        <div className="lan-section">
          <h3><FontAwesomeIcon icon={faNetworkWired} /> LAN</h3><br />
          <p>IP:<span className={wifiStatus.className}>{wifiStatus.text}</span></p>
        </div>
      </div><br /><br /><br />

     {/* Status Bar (Changes after 5 seconds) */}
      <div className="status-bar">
        <div className="status onea"><FontAwesomeIcon icon={faLaptop}  />&nbsp; LAN : <span className={statusBar.className}>{statusBar.text}</span></div>
        <div className="status two"><FontAwesomeIcon icon={faWifi} /> &nbsp;Wi-Fi : <span className={statusBar.className}>{statusBar.text}</span></div>
        <div className="status three"><FontAwesomeIcon icon={faGlobe} />&nbsp; Internet Connectivity : <span className={statusBar.className}>{statusBar.text}</span></div>
        <div className="status four"><FontAwesomeIcon icon={faPlug} />&nbsp; Seckonnect Status : <span className={statusBar.className}>{statusBar.text}</span></div>
      </div>

      {/* Graph Status */}
      <div className="graph">
        <h3><FontAwesomeIcon icon={faChartLine} /> GRAPH STATUS</h3>
        <p>Speed: 0.00</p>
      </div>
      <div className="graph-box"></div>

    </div>
  );
};

export default App;
