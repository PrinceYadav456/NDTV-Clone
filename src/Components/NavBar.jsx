import React, { useState } from "react";
import "./NavBar.css";

import loktvLogo from "../Assets/loktv-logo.svg";
import more from "../Assets/more.png";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import koo from "../Assets/koo.png";
import bell from "../Assets/bell.png";
import smartWatch from "../Assets/smartWatch.png";
import search from "../Assets/search.png";
import { useNavigate } from "react-router-dom";

const topLinks = [
  ["/", "NDTV"],
  ["/hindi", "हिन्दी"],
  ["/business", "BUSINESS"],
  ["/movies", "MOVIES"],
  ["/cricket", "CRICKET"],
  ["/tech", "TECH"],
  ["/food", "FOOD"],
  ["/crypto", "CRYPTO"],
  ["/webStories", "WEB STORIES"],
  ["/education", "EDUCATION"],
  ["/auto", "AUTO"],
  ["/swasth", "SWASTH"],
  ["/lifestyle", "LIFESTYLE"],
  ["/health", "HEALTH"],
  ["/shopping", "SHOPPING"],
  ["/art", "ART"]
];

const mainLinks = [
  ["/livetv", "LIVE TV"],
  ["/latest", "LATEST"],
  ["/covid", "COVID"],
  ["/india", "INDIA"],
  ["/opinion", "OPINION"],
  ["/video", "VIDEO"],
  ["/cities", "CITIES"],
  ["/world", "WORLD"],
  ["/offbeat", "OFFBEAT"],
  ["/trends", "TRENDS"],
  ["/photos", "PHOTOS"]
];

const moreLinks = [
  ["/south", "SOUTH"],
  ["/people", "PEOPLE"],
  ["/science", "SCIENCE"],
  ["/photos", "PHOTOS"],
  ["/jobs", "JOBS"],
  ["/weather", "WEATHER"],
  ["/tvSchedule", "TV SCHEDULE"],
  ["/trains", "TRAINS"]
];

const socialLinks = [
  ["https://twitter.com/ndtv", twitter, "Twitter"],
  ["https://www.facebook.com/campaign/landing.php?campaign_id=237467320636", facebook, "Facebook"],
  ["https://www.kooapp.com/profile/ndtv", koo, "Koo"]
];

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/Search/${searchValue}`);
    setSearchShow(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="upperDiv desktopOnly">
        {topLinks.map(([path, label]) => (
          <div key={path} onClick={() => navigate(path)} className="upperChildHover">
            {label}
          </div>
        ))}
      </div>

      <div className="stickyNav">
        <div className="navBrandBlock">
          <img onClick={() => navigate("/")} className="nav-logo" src={loktvLogo} alt="lok_tv_logo" />
        </div>

        <div className="desktopNavLinks">
          {mainLinks.map(([path, label]) => (
            <div key={path} onClick={() => navigate(path)} className="stickyItem">
              {label}
            </div>
          ))}

          <button type="button" className="iconButton moreButton" onClick={() => setShow((current) => !current)} aria-label="More">
            <img className="moreIcon" src={more} alt="more_icon" />
          </button>

          {socialLinks.map(([href, icon, title]) => (
            <a key={href} href={href} className="iconLink" title={title}>
              <img className="afterMoreIconImage" src={icon} alt={`${title.toLowerCase()}_icon`} />
            </a>
          ))}

          <button type="button" className="iconButton" title="New Story">
            <img className="afterMoreIconImage" src={smartWatch} alt="smart_watch_icon" />
          </button>
          <button type="button" className="iconButton" title="Notification">
            <img className="afterMoreIconImage" src={bell} alt="bell_icon" />
          </button>
          <button type="button" className="iconButton" onClick={() => setSearchShow((current) => !current)} title="Search">
            <img className="afterMoreIconImage" src={search} alt="search_icon" />
          </button>
        </div>

        <button
          type="button"
          className={`hamburgerButton ${mobileMenuOpen ? "isOpen" : ""}`}
          onClick={() => setMobileMenuOpen((current) => !current)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {searchShow ? (
        <div className="searchDiv">
          <input
            className="searchInput"
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            value={searchValue}
            placeholder="Search here..."
          />
          <button className="searchButton" onClick={handleSearch} type="button">
            Go
          </button>
        </div>
      ) : null}

      {show ? (
        <div className="moreSticky">
          {moreLinks.map(([path, label]) => (
            <div key={path} onClick={() => navigate(path)} className="stickyItem moreStickyItem">
              {label}
            </div>
          ))}
        </div>
      ) : null}

      {mobileMenuOpen ? (
        <div className="mobileMenuPanel">
          <div className="mobileMenuSection">
            {topLinks.map(([path, label]) => (
              <div key={path} onClick={() => { navigate(path); setMobileMenuOpen(false); }} className="mobileMenuLink">
                {label}
              </div>
            ))}
          </div>

          <div className="mobileMenuSection mobileMenuGrid">
            {mainLinks.map(([path, label]) => (
              <div key={path} onClick={() => { navigate(path); setMobileMenuOpen(false); }} className="mobileMenuLink">
                {label}
              </div>
            ))}
          </div>

          <div className="mobileMenuActions">
            {socialLinks.map(([href, icon, title]) => (
              <a key={href} href={href} className="iconLink" title={title}>
                <img className="afterMoreIconImage" src={icon} alt={`${title.toLowerCase()}_icon`} />
              </a>
            ))}
            <button type="button" className="iconButton" title="Search" onClick={() => setSearchShow((current) => !current)}>
              <img className="afterMoreIconImage" src={search} alt="search_icon" />
            </button>
          </div>

          <div className="mobileMenuSection">
            {moreLinks.map(([path, label]) => (
              <div key={path} onClick={() => { navigate(path); setMobileMenuOpen(false); }} className="mobileMenuLink">
                {label}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavBar;
