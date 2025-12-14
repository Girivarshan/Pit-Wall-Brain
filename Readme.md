# F1 Pit Wall Brain

**The Race Beyond the Track**

## Project Overview

F1 Pit Wall Brain is a web-based Formula 1 strategy analysis platform that simulates race-day decision making from the perspective of a Formula 1 pit wall. The application combines circuit data, tire degradation logic, weather conditions, and grid position analysis to provide strategic insights similar to those used by professional race engineers.

The project focuses on visual clarity, realistic strategy modeling, and interactive user inputs to demonstrate how race outcomes are influenced beyond pure driving performance.


## Key Features

### Strategy Hub

A centralized dashboard that provides a high-level overview of the platform, including the number of circuits covered, tire compounds available, and seasons analyzed.

### Real-Time Strategy Analysis

An interactive analysis module where users can configure race parameters such as:

* Circuit selection
* Grid position
* Tire compound
* Laps completed
* Track temperature
* Weather conditions

Based on these inputs, the system dynamically calculates:

* Tire performance percentage
* Degradation rate per lap
* Estimated remaining tire life
* Optimal pit window
* Recommended next tire compound
* Strategy confidence level

All calculations update instantly to reflect real-time strategic changes.

### Race History Database (2005–2025)

A structured historical archive containing:

* Season champions
* Team dominance summaries
* Selected Grand Prix winners
* Championship progression visualized using charts

This section provides contextual understanding of Formula 1 trends over multiple seasons.

### Circuit Database

Detailed information for major Formula 1 circuits, including:

* Circuit length and corner count
* Number of DRS zones
* Tire wear characteristics
* Overtaking difficulty
* Safety car probability
* Strategic notes specific to each track


## Strategy Logic

The core strategy engine is built using rule-based logic that accounts for:

* Tire compound degradation rates
* Circuit-specific wear multipliers
* Weather impact on tire life
* Track temperature influence
* Grid position risk and reward balance

While not AI-driven, the logic closely mirrors real-world race engineering principles.


## Technology Stack

* HTML5 for semantic structure
* CSS3 for styling, theming, and responsiveness
* Vanilla JavaScript for application logic and interactivity
* Chart.js for data visualization


## Project Structure

```
F1-Pit-Wall-Brain
│
├── index.html      Main application layout
├── style.css       UI styling and design system
├── app.js          Strategy logic and data handling
└── README.md       Project documentation
```


## How to Run the Project

1. Download or clone the repository
2. Ensure all project files are in the same directory
3. Open `index.html` in a modern web browser
4. Navigate through the tabs and adjust race parameters to explore strategies

No additional setup or server configuration is required.


## Intended Use

* Academic mini or major project
* Frontend portfolio demonstration
* Formula 1 strategy visualization tool
* Motorsport analytics experimentation


## Future Scope

* Driver-specific performance modeling
* AI-based race outcome prediction
* Live Formula 1 data API integration
* Team-based strategy comparison
* Mobile-first optimization


## Conclusion

F1 Pit Wall Brain demonstrates how race strategy, data interpretation, and situational awareness shape modern Formula 1 racing. The project emphasizes analytical thinking, clean design, and realistic modeling to present the race beyond the track.
