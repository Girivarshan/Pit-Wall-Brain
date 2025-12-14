// F1 Strategy Hub - Professional Racing Analysis Platform
class F1StrategyHub {
    constructor() {
        // Complete F1 circuit database
        this.circuits = {
            bahrain: {
                name: "Bahrain International Circuit",
                location: "Sakhir, Bahrain",
                length: 5.412,
                corners: 15,
                drsZones: 3,
                lapRecord: "1:31.447",
                tireWear: "High",
                overtaking: "Medium",
                safetyCarProb: 25,
                firstGP: 2004,
                strategy: "Desert circuit with high tire degradation. Multiple pit strategies viable."
            },
            saudi: {
                name: "Jeddah Corniche Circuit",
                location: "Jeddah, Saudi Arabia",
                length: 6.174,
                corners: 27,
                drsZones: 3,
                lapRecord: "1:28.200",
                tireWear: "Medium",
                overtaking: "Medium",
                safetyCarProb: 45,
                firstGP: 2021,
                strategy: "High-speed street circuit with wall-lined sections."
            },
            australia: {
                name: "Albert Park Circuit",
                location: "Melbourne, Australia",
                length: 5.278,
                corners: 14,
                drsZones: 4,
                lapRecord: "1:20.235",
                tireWear: "Medium",
                overtaking: "Medium",
                safetyCarProb: 30,
                firstGP: 1996,
                strategy: "Parkland circuit with good overtaking opportunities."
            },
            china: {
                name: "Shanghai International Circuit",
                location: "Shanghai, China",
                length: 5.451,
                corners: 16,
                drsZones: 2,
                lapRecord: "1:32.238",
                tireWear: "Medium",
                overtaking: "Easy",
                safetyCarProb: 20,
                firstGP: 2004,
                strategy: "Long straight allows for slipstream battles."
            },
            miami: {
                name: "Miami International Autodrome",
                location: "Miami, USA",
                length: 5.41,
                corners: 19,
                drsZones: 3,
                lapRecord: "1:31.361",
                tireWear: "High",
                overtaking: "Medium",
                safetyCarProb: 35,
                firstGP: 2022,
                strategy: "Street circuit with high temperatures."
            },
            monaco: {
                name: "Circuit de Monaco",
                location: "Monte Carlo, Monaco",
                length: 3.337,
                corners: 19,
                drsZones: 1,
                lapRecord: "1:12.909",
                tireWear: "Low",
                overtaking: "Very Difficult",
                safetyCarProb: 65,
                firstGP: 1950,
                strategy: "Track position is everything. One-stop typical."
            },
            canada: {
                name: "Circuit Gilles Villeneuve",
                location: "Montreal, Canada",
                length: 4.361,
                corners: 14,
                drsZones: 3,
                lapRecord: "1:13.078",
                tireWear: "Medium",
                overtaking: "Easy",
                safetyCarProb: 40,
                firstGP: 1978,
                strategy: "Semi-permanent circuit with good overtaking."
            },
            silverstone: {
                name: "Silverstone Circuit",
                location: "Silverstone, UK",
                length: 5.891,
                corners: 18,
                drsZones: 2,
                lapRecord: "1:27.097",
                tireWear: "High",
                overtaking: "Medium",
                safetyCarProb: 20,
                firstGP: 1950,
                strategy: "High-speed corners demand tire management."
            },
            hungary: {
                name: "Hungaroring",
                location: "Budapest, Hungary",
                length: 4.381,
                corners: 14,
                drsZones: 2,
                lapRecord: "1:16.627",
                tireWear: "High",
                overtaking: "Very Difficult",
                safetyCarProb: 25,
                firstGP: 1986,
                strategy: "Monaco without walls - track position crucial."
            },
            spa: {
                name: "Circuit de Spa-Francorchamps",
                location: "Spa-Francorchamps, Belgium",
                length: 7.004,
                corners: 19,
                drsZones: 2,
                lapRecord: "1:41.252",
                tireWear: "Medium",
                overtaking: "Easy",
                safetyCarProb: 35,
                firstGP: 1950,
                strategy: "Longest circuit with varying weather."
            },
            monza: {
                name: "Autodromo Nazionale Monza",
                location: "Monza, Italy",
                length: 5.793,
                corners: 11,
                drsZones: 3,
                lapRecord: "1:21.046",
                tireWear: "Low",
                overtaking: "Easy",
                safetyCarProb: 20,
                firstGP: 1950,
                strategy: "Temple of Speed with slipstream battles."
            },
            singapore: {
                name: "Marina Bay Street Circuit",
                location: "Singapore",
                length: 4.94,
                corners: 19,
                drsZones: 3,
                lapRecord: "1:41.905",
                tireWear: "High",
                overtaking: "Difficult",
                safetyCarProb: 45,
                firstGP: 2008,
                strategy: "Night race with high humidity affecting tires."
            }
        };

        // Tire compound data
        this.tireCompounds = {
            C5: { name: "Soft", color: "#FF0000", degradationRate: 0.048, optimalStint: "10-20 laps" },
            C4: { name: "Soft", color: "#FF0000", degradationRate: 0.038, optimalStint: "15-25 laps" },
            C3: { name: "Medium", color: "#FFD700", degradationRate: 0.028, optimalStint: "20-30 laps" },
            C2: { name: "Hard", color: "#FFFFFF", degradationRate: 0.022, optimalStint: "25-35 laps" },
            C1: { name: "Hard", color: "#FFFFFF", degradationRate: 0.018, optimalStint: "30-40 laps" },
            Intermediate: { name: "Intermediate", color: "#00FF00", degradationRate: 0.025, optimalStint: "15-25 laps" },
            Wet: { name: "Full Wet", color: "#0066FF", degradationRate: 0.020, optimalStint: "10-20 laps" }
        };

        // Race history data
        this.raceHistory = {
            2025: {
                champion: { driver: "Lando Norris", team: "McLaren" },
                summary: "McLaren dominance with Norris claiming his first championship",
                races: [
                    { round: 1, grandPrix: "Australian Grand Prix", winner: "Lando Norris", team: "McLaren" },
                    { round: 2, grandPrix: "Chinese Grand Prix", winner: "Oscar Piastri", team: "McLaren" },
                    { round: 3, grandPrix: "Japanese Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" },
                    { round: 4, grandPrix: "Bahrain Grand Prix", winner: "Lando Norris", team: "McLaren" },
                    { round: 5, grandPrix: "Monaco Grand Prix", winner: "Charles Leclerc", team: "Ferrari" },
                    { round: 6, grandPrix: "Spanish Grand Prix", winner: "Oscar Piastri", team: "McLaren" }
                ]
            },
            2024: {
                champion: { driver: "Max Verstappen", team: "Red Bull Racing" },
                summary: "Verstappen's fourth consecutive championship with Red Bull dominance",
                races: [
                    { round: 1, grandPrix: "Bahrain Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" },
                    { round: 2, grandPrix: "Saudi Arabian Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" },
                    { round: 3, grandPrix: "Australian Grand Prix", winner: "Carlos Sainz", team: "Ferrari" },
                    { round: 4, grandPrix: "Japanese Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" },
                    { round: 5, grandPrix: "Chinese Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" },
                    { round: 6, grandPrix: "Miami Grand Prix", winner: "Lando Norris", team: "McLaren" }
                ]
            },
            2023: {
                champion: { driver: "Max Verstappen", team: "Red Bull Racing" },
                summary: "Record-breaking season with Verstappen winning 19 out of 22 races",
                races: [
                    { round: 1, grandPrix: "Bahrain Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" },
                    { round: 2, grandPrix: "Saudi Arabian Grand Prix", winner: "Sergio Perez", team: "Red Bull Racing" },
                    { round: 3, grandPrix: "Australian Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" }
                ]
            },
            2022: {
                champion: { driver: "Max Verstappen", team: "Red Bull Racing" },
                summary: "Verstappen's second title with Ferrari challenge from Leclerc",
                races: [
                    { round: 1, grandPrix: "Bahrain Grand Prix", winner: "Charles Leclerc", team: "Ferrari" },
                    { round: 2, grandPrix: "Saudi Arabian Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" }
                ]
            },
            2021: {
                champion: { driver: "Max Verstappen", team: "Red Bull Racing" },
                summary: "Verstappen's breakthrough championship in controversial Abu Dhabi finale",
                races: [
                    { round: 22, grandPrix: "Abu Dhabi Grand Prix", winner: "Max Verstappen", team: "Red Bull Racing" }
                ]
            },
            2020: {
                champion: { driver: "Lewis Hamilton", team: "Mercedes" },
                summary: "Hamilton's seventh world championship during COVID-19 season",
                races: [
                    { round: 15, grandPrix: "Bahrain Grand Prix", winner: "Lewis Hamilton", team: "Mercedes" }
                ]
            }
        };

        this.currentTab = 'dashboard';
        this.charts = {};
        
        this.init();
    }

    init() {
        console.log('🏎️ Initializing F1 Strategy Hub...');
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApplication());
        } else {
            this.setupApplication();
        }
    }

    setupApplication() {
        console.log('Setting up F1 Strategy Hub application...');
        
        // Wait a moment for DOM to be fully ready
        setTimeout(() => {
            this.setupTabNavigation();
            this.setupDashboard();
            this.setupAnalysis();
            this.setupHistory();
            this.setupCircuits();
            
            // Initialize charts after everything else is set up
            setTimeout(() => {
                this.initializeCharts();
            }, 300);
            
            console.log('✅ F1 Strategy Hub initialized successfully');
        }, 100);
    }

    setupTabNavigation() {
        console.log('Setting up tab navigation...');
        
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        console.log(`Found ${tabButtons.length} tab buttons and ${tabContents.length} tab contents`);

        // Ensure dashboard is active by default
        this.switchTab('dashboard');

        tabButtons.forEach((button, index) => {
            console.log(`Setting up tab button ${index}: ${button.getAttribute('data-tab')}`);
            
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const targetTab = button.getAttribute('data-tab');
                console.log(`Tab button clicked: ${targetTab}`);
                
                if (targetTab) {
                    this.switchTab(targetTab);
                }
            });
        });
    }

    switchTab(tabName) {
        console.log(`Switching to tab: ${tabName}`);
        
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');

        // Remove active states from all tabs
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Activate the target tab
        const targetButton = document.querySelector(`[data-tab="${tabName}"]`);
        const targetContent = document.getElementById(tabName);

        if (targetButton && targetContent) {
            targetButton.classList.add('active');
            targetContent.classList.add('active');
            targetContent.style.display = 'block';
            
            this.currentTab = tabName;
            this.onTabChange(tabName);
            
            console.log(`✅ Successfully switched to tab: ${tabName}`);
        } else {
            console.error(`❌ Tab elements not found for: ${tabName}`);
            console.log('Available tab buttons:', document.querySelectorAll('[data-tab]'));
            console.log('Available tab contents:', document.querySelectorAll('[id]'));
        }
    }

    setupDashboard() {
        console.log('Setting up dashboard...');
        
        // Wait for DOM elements to be available
        setTimeout(() => {
            // Make feature cards clickable
            const featureCards = document.querySelectorAll('.feature-card');
            console.log(`Found ${featureCards.length} feature cards`);
            
            featureCards.forEach((card, index) => {
                const targetTab = card.getAttribute('data-target');
                console.log(`Setting up feature card ${index} with target: ${targetTab}`);
                
                if (targetTab) {
                    // Remove any existing event listeners
                    const newCard = card.cloneNode(true);
                    card.parentNode.replaceChild(newCard, card);
                    
                    newCard.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log(`Feature card clicked: ${targetTab}`);
                        this.switchTab(targetTab);
                    });
                }
            });

            // Make feature buttons work
            const featureButtons = document.querySelectorAll('.feature-card .btn');
            console.log(`Found ${featureButtons.length} feature buttons`);
            
            featureButtons.forEach((button, index) => {
                console.log(`Setting up feature button ${index}`);
                
                // Remove any existing event listeners
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);
                
                newButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const card = newButton.closest('.feature-card');
                    const targetTab = card?.getAttribute('data-target');
                    
                    console.log(`Feature button clicked with target: ${targetTab}`);
                    
                    if (targetTab) {
                        this.switchTab(targetTab);
                    }
                });
            });
        }, 50);
    }

    setupAnalysis() {
        console.log('Setting up analysis...');
        
        // Setup input event listeners
        const setupInputListeners = () => {
            const inputs = {
                circuitSelect: document.getElementById('circuitSelect'),
                positionSelect: document.getElementById('positionSelect'),
                tireSelect: document.getElementById('tireSelect'),
                lapsRange: document.getElementById('lapsRange'),
                lapsValue: document.getElementById('lapsValue'),
                temperatureRange: document.getElementById('temperatureRange'),
                temperatureValue: document.getElementById('temperatureValue'),
                weatherSelect: document.getElementById('weatherSelect')
            };

            // Log which inputs were found
            Object.keys(inputs).forEach(key => {
                if (inputs[key]) {
                    console.log(`✅ Found input: ${key}`);
                } else {
                    console.log(`❌ Missing input: ${key}`);
                }
            });

            // Circuit selection
            if (inputs.circuitSelect) {
                inputs.circuitSelect.addEventListener('change', () => {
                    console.log('Circuit changed:', inputs.circuitSelect.value);
                    this.updateAnalysis();
                });
            }

            // Position selection
            if (inputs.positionSelect) {
                inputs.positionSelect.addEventListener('change', () => {
                    console.log('Position changed:', inputs.positionSelect.value);
                    this.updateAnalysis();
                });
            }

            // Tire compound selection
            if (inputs.tireSelect) {
                inputs.tireSelect.addEventListener('change', () => {
                    console.log('Tire compound changed:', inputs.tireSelect.value);
                    this.updateAnalysis();
                });
            }

            // Laps slider
            if (inputs.lapsRange && inputs.lapsValue) {
                inputs.lapsRange.addEventListener('input', () => {
                    inputs.lapsValue.textContent = inputs.lapsRange.value;
                    console.log('Laps changed:', inputs.lapsRange.value);
                    this.updateAnalysis();
                });
            }

            // Temperature slider
            if (inputs.temperatureRange && inputs.temperatureValue) {
                inputs.temperatureRange.addEventListener('input', () => {
                    inputs.temperatureValue.textContent = inputs.temperatureRange.value;
                    console.log('Temperature changed:', inputs.temperatureRange.value);
                    this.updateAnalysis();
                });
            }

            // Weather selection
            if (inputs.weatherSelect) {
                inputs.weatherSelect.addEventListener('change', () => {
                    console.log('Weather changed:', inputs.weatherSelect.value);
                    this.updateAnalysis();
                });
            }

            // Initial analysis update
            setTimeout(() => {
                this.updateAnalysis();
            }, 100);
        };

        // Setup inputs when they become available
        setTimeout(setupInputListeners, 100);
    }

    updateAnalysis() {
        console.log('Updating analysis...');
        
        const circuitKey = document.getElementById('circuitSelect')?.value || 'bahrain';
        const position = parseInt(document.getElementById('positionSelect')?.value || '5');
        const tireCompound = document.getElementById('tireSelect')?.value || 'C3';
        const lapsCompleted = parseInt(document.getElementById('lapsRange')?.value || '15');
        const temperature = parseInt(document.getElementById('temperatureRange')?.value || '35');
        const weather = document.getElementById('weatherSelect')?.value || 'dry';

        console.log('Analysis inputs:', { circuitKey, position, tireCompound, lapsCompleted, temperature, weather });

        // Calculate tire degradation
        const degradationData = this.calculateTireDegradation(
            tireCompound, circuitKey, weather, lapsCompleted, temperature
        );

        // Update displays
        this.updateTireStatus(degradationData);
        this.updateStrategyRecommendations(circuitKey, position, tireCompound, lapsCompleted, degradationData);
        this.updateCircuitAnalysis(circuitKey);
    }

    calculateTireDegradation(compound, circuit, weather, laps, temperature) {
        const tireData = this.tireCompounds[compound];
        const circuitData = this.circuits[circuit];

        if (!tireData || !circuitData) {
            return { percentage: 85, rate: 0.025, remaining: '20-30 laps', compound: 'C3 Medium' };
        }

        console.log('Calculating degradation for:', { compound, circuit, weather, laps, temperature });

        // Base degradation rate
        let baseDegradationRate = tireData.degradationRate;

        // Circuit wear factor
        const wearMultipliers = {
            'Low': 0.8,
            'Medium': 1.0,
            'High': 1.3
        };
        const circuitMultiplier = wearMultipliers[circuitData.tireWear] || 1.0;

        // Weather multipliers
        const weatherMultipliers = {
            'dry': 1.0,
            'light-rain': 0.7,
            'heavy-rain': 0.5,
            'drying': 1.3
        };
        const weatherMultiplier = weatherMultipliers[weather] || 1.0;

        // Temperature effects
        let temperatureMultiplier = 1.0;
        if (temperature < 25) temperatureMultiplier = 1.1;
        else if (temperature > 45) temperatureMultiplier = 1.2;
        else if (temperature >= 30 && temperature <= 40) temperatureMultiplier = 0.95;

        // Calculate total degradation
        const totalDegradationRate = baseDegradationRate * circuitMultiplier * weatherMultiplier * temperatureMultiplier;
        const performanceLoss = laps * totalDegradationRate * 100;
        const currentPerformance = Math.max(20, 100 - performanceLoss);

        const result = {
            percentage: Math.round(currentPerformance),
            rate: totalDegradationRate,
            remaining: tireData.optimalStint,
            compound: `${compound} ${tireData.name}`
        };

        console.log('Degradation result:', result);
        return result;
    }

    updateTireStatus(degradationData) {
        console.log('Updating tire status:', degradationData);
        
        const performanceNumber = document.getElementById('performanceNumber');
        const performanceFill = document.getElementById('performanceFill');
        const currentCompound = document.getElementById('currentCompound');
        const degradationRate = document.getElementById('degradationRate');
        const remainingLife = document.getElementById('remainingLife');

        if (performanceNumber) {
            performanceNumber.textContent = degradationData.percentage;
            
            // Color coding
            performanceNumber.className = 'performance-number';
            if (degradationData.percentage < 40) {
                performanceNumber.classList.add('danger');
            } else if (degradationData.percentage < 70) {
                performanceNumber.classList.add('warning');
            }
        }

        if (performanceFill) {
            performanceFill.style.width = `${degradationData.percentage}%`;
            
            // Color coding for progress bar
            performanceFill.className = 'performance-fill';
            if (degradationData.percentage < 40) {
                performanceFill.classList.add('danger');
            } else if (degradationData.percentage < 70) {
                performanceFill.classList.add('warning');
            }
        }

        if (currentCompound) {
            currentCompound.textContent = degradationData.compound;
        }

        if (degradationRate) {
            degradationRate.textContent = `${(degradationData.rate * 100).toFixed(3)}% per lap`;
        }

        if (remainingLife) {
            remainingLife.textContent = degradationData.remaining;
        }
    }

    updateStrategyRecommendations(circuitKey, position, tireCompound, lapsCompleted, degradationData) {
        const circuit = this.circuits[circuitKey];
        const strategy = this.calculateStrategy(circuit, position, tireCompound, lapsCompleted, degradationData);

        const elements = {
            pitWindow: document.getElementById('pitWindow'),
            nextCompound: document.getElementById('nextCompound'),
            pitLoss: document.getElementById('pitLoss'),
            confidence: document.getElementById('confidence')
        };

        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                elements[key].textContent = strategy[key];
            }
        });
    }

    calculateStrategy(circuit, position, currentTire, lapsCompleted, degradationData) {
        let strategy = {
            pitWindow: "Laps 28-33",
            nextCompound: "C1 Hard",
            pitLoss: "23.2s",
            confidence: "91%"
        };

        if (!circuit) return strategy;

        // Position-based adjustments
        if (position <= 3) {
            strategy.pitWindow = `Laps ${Math.max(25, lapsCompleted + 15)}-${Math.max(30, lapsCompleted + 20)}`;
            strategy.nextCompound = "C1 Hard";
            strategy.confidence = "94%";
        } else if (position >= 11) {
            strategy.pitWindow = `Laps ${Math.max(20, lapsCompleted + 8)}-${Math.max(25, lapsCompleted + 12)}`;
            strategy.nextCompound = "C4 Soft";
            strategy.confidence = "87%";
        }

        // Circuit-specific adjustments
        if (circuit.overtaking === "Very Difficult") {
            strategy.nextCompound = "C1 Hard";
            strategy.confidence = "85%";
        }

        // Degradation-based adjustments
        if (degradationData.percentage < 50) {
            strategy.pitWindow = "Next 3-8 laps";
            strategy.confidence = "76%";
        }

        return strategy;
    }

    updateCircuitAnalysis(circuitKey) {
        const circuit = this.circuits[circuitKey];
        if (!circuit) return;

        const elements = {
            tireWear: document.getElementById('tireWear'),
            overtaking: document.getElementById('overtaking'),
            safetyCarProb: document.getElementById('safetyCarProb')
        };

        if (elements.tireWear) {
            elements.tireWear.textContent = circuit.tireWear;
            elements.tireWear.className = 'stat-value';
            if (circuit.tireWear === 'Low') elements.tireWear.classList.add('success');
            else if (circuit.tireWear === 'Medium') elements.tireWear.classList.add('warning');
            else elements.tireWear.classList.add('danger');
        }

        if (elements.overtaking) {
            elements.overtaking.textContent = circuit.overtaking;
            elements.overtaking.className = 'stat-value';
            if (circuit.overtaking === 'Easy') elements.overtaking.classList.add('success');
            else if (circuit.overtaking === 'Medium') elements.overtaking.classList.add('warning');
            else elements.overtaking.classList.add('danger');
        }

        if (elements.safetyCarProb) {
            elements.safetyCarProb.textContent = `${circuit.safetyCarProb}%`;
            elements.safetyCarProb.className = 'stat-value';
            if (circuit.safetyCarProb <= 25) elements.safetyCarProb.classList.add('success');
            else if (circuit.safetyCarProb <= 40) elements.safetyCarProb.classList.add('warning');
            else elements.safetyCarProb.classList.add('danger');
        }
    }

    setupHistory() {
        console.log('Setting up history...');
        
        setTimeout(() => {
            this.createHistoryAccordion();
            this.setupHistoryFilters();
        }, 100);
    }

    createHistoryAccordion() {
        const accordion = document.getElementById('historyAccordion');
        if (!accordion) {
            console.log('History accordion container not found');
            return;
        }

        console.log('Creating history accordion...');
        accordion.innerHTML = '';

        Object.keys(this.raceHistory).sort((a, b) => b - a).forEach(year => {
            const seasonData = this.raceHistory[year];
            
            const seasonItem = document.createElement('div');
            seasonItem.className = 'season-item';
            seasonItem.setAttribute('data-year', year);
            
            seasonItem.innerHTML = `
                <div class="season-header">
                    <div>
                        <div class="season-title">${year} Season</div>
                        <div class="season-summary">Champion: ${seasonData.champion.driver} (${seasonData.champion.team}) - ${seasonData.summary}</div>
                    </div>
                    <div class="season-toggle">▼</div>
                </div>
                <div class="season-content">
                    <div class="season-races">
                        ${seasonData.races.map(race => `
                            <div class="race-item">
                                <div class="race-round">R${race.round}</div>
                                <div class="race-name">${race.grandPrix}</div>
                                <div class="race-winner">${race.winner}</div>
                                <div class="race-team">${race.team}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            const header = seasonItem.querySelector('.season-header');
            header.addEventListener('click', () => {
                seasonItem.classList.toggle('expanded');
            });
            
            accordion.appendChild(seasonItem);
        });

        console.log(`✅ Created history accordion with ${Object.keys(this.raceHistory).length} seasons`);
    }

    setupHistoryFilters() {
        const searchInput = document.getElementById('searchInput');
        const seasonFilter = document.getElementById('seasonFilter');

        const filterHistory = () => {
            const searchTerm = searchInput?.value.toLowerCase() || '';
            const selectedSeason = seasonFilter?.value || '';
            
            const seasonItems = document.querySelectorAll('.season-item');
            
            seasonItems.forEach(seasonItem => {
                const year = seasonItem.getAttribute('data-year');
                const seasonText = seasonItem.textContent.toLowerCase();
                
                const matchesSearch = searchTerm === '' || seasonText.includes(searchTerm);
                const matchesSeason = selectedSeason === '' || year === selectedSeason;
                
                seasonItem.style.display = matchesSearch && matchesSeason ? 'block' : 'none';
            });
        };

        if (searchInput) {
            searchInput.addEventListener('input', filterHistory);
        }
        
        if (seasonFilter) {
            seasonFilter.addEventListener('change', filterHistory);
        }
    }

    setupCircuits() {
        console.log('Setting up circuits...');
        
        setTimeout(() => {
            const circuitDetailSelect = document.getElementById('circuitDetailSelect');
            
            if (circuitDetailSelect) {
                circuitDetailSelect.addEventListener('change', () => {
                    this.updateCircuitDetails();
                });
            }

            this.updateCircuitDetails();
            this.populateCircuitGrid();
        }, 100);
    }

    updateCircuitDetails() {
        const circuitDetailSelect = document.getElementById('circuitDetailSelect');
        if (!circuitDetailSelect) return;

        const circuitKey = circuitDetailSelect.value;
        const circuit = this.circuits[circuitKey];
        if (!circuit) return;

        console.log('Updating circuit details for:', circuitKey);

        const elements = {
            circuitName: circuit.name,
            circuitLength: `${circuit.length} km`,
            circuitCorners: circuit.corners.toString(),
            circuitDRS: circuit.drsZones.toString(),
            circuitRecord: circuit.lapRecord,
            circuitTireWear: circuit.tireWear,
            circuitOvertaking: circuit.overtaking
        };

        Object.keys(elements).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = elements[id];
                
                // Color coding for specific fields
                if (id === 'circuitTireWear') {
                    element.className = 'spec-value';
                    if (elements[id] === 'Low') element.classList.add('success');
                    else if (elements[id] === 'Medium') element.classList.add('warning');
                    else element.classList.add('danger');
                } else if (id === 'circuitOvertaking') {
                    element.className = 'spec-value';
                    if (elements[id] === 'Easy') element.classList.add('success');
                    else if (elements[id] === 'Medium') element.classList.add('warning');
                    else element.classList.add('danger');
                }
            }
        });

        this.updateCircuitRadarChart(circuitKey);
    }

    populateCircuitGrid() {
        const circuitGrid = document.getElementById('circuitGrid');
        if (!circuitGrid) return;

        console.log('Populating circuit grid...');
        circuitGrid.innerHTML = '';

        Object.keys(this.circuits).forEach(key => {
            const circuit = this.circuits[key];
            const card = document.createElement('div');
            card.className = 'circuit-overview-card';
            card.innerHTML = `
                <h4>${circuit.name}</h4>
                <div class="circuit-location">${circuit.location}</div>
                <div class="circuit-quick-stats">
                    <span>${circuit.length}km</span>
                    <span>${circuit.corners} corners</span>
                    <span>${circuit.tireWear} wear</span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                const circuitDetailSelect = document.getElementById('circuitDetailSelect');
                if (circuitDetailSelect) {
                    circuitDetailSelect.value = key;
                    this.updateCircuitDetails();
                }
            });
            
            circuitGrid.appendChild(card);
        });
    }

    initializeCharts() {
        console.log('Initializing charts...');
        
        try {
            this.initChampionshipChart();
            this.updateCircuitRadarChart('bahrain');
            console.log('✅ Charts initialized successfully');
        } catch (error) {
            console.error('Error initializing charts:', error);
        }
    }

    initChampionshipChart() {
        const ctx = document.getElementById('championshipChart');
        if (!ctx || this.charts.championship) return;

        const years = Object.keys(this.raceHistory).sort();
        const champions = years.map(year => this.raceHistory[year].champion.driver);
        
        const driverWins = {};
        champions.forEach(driver => {
            driverWins[driver] = (driverWins[driver] || 0) + 1;
        });

        this.charts.championship = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(driverWins),
                datasets: [{
                    label: 'Championship Titles (2005-2025)',
                    data: Object.values(driverWins),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
                    borderColor: '#E10600',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { 
                            color: '#2c3e50',
                            font: { size: 12, weight: 'bold' }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { 
                            color: '#2c3e50',
                            font: { size: 11 }
                        },
                        grid: { 
                            color: 'rgba(44, 62, 80, 0.1)'
                        }
                    },
                    x: {
                        ticks: { 
                            color: '#2c3e50',
                            font: { size: 11 }
                        },
                        grid: { 
                            color: 'rgba(44, 62, 80, 0.1)'
                        }
                    }
                }
            }
        });
    }

    updateCircuitRadarChart(circuitKey) {
        const ctx = document.getElementById('circuitRadarChart');
        if (!ctx) return;

        const circuit = this.circuits[circuitKey];
        if (!circuit) return;

        if (this.charts.circuitRadar) {
            this.charts.circuitRadar.destroy();
        }

        const radarData = {
            labels: ['Length', 'Corners', 'DRS Zones', 'Tire Wear', 'Safety Car %'],
            datasets: [{
                label: circuit.name,
                data: [
                    circuit.length / 7 * 10,
                    circuit.corners / 27 * 10,
                    circuit.drsZones / 4 * 10,
                    circuit.tireWear === 'Low' ? 3 : circuit.tireWear === 'Medium' ? 6 : 9,
                    circuit.safetyCarProb / 65 * 10
                ],
                backgroundColor: 'rgba(225, 6, 0, 0.2)',
                borderColor: '#E10600',
                borderWidth: 3,
                pointBackgroundColor: '#E10600',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        };

        this.charts.circuitRadar = new Chart(ctx, {
            type: 'radar',
            data: radarData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { 
                            color: '#2c3e50',
                            font: { size: 12, weight: 'bold' }
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: { 
                            color: '#2c3e50',
                            font: { size: 10 }
                        },
                        grid: { 
                            color: 'rgba(44, 62, 80, 0.2)'
                        },
                        angleLines: {
                            color: 'rgba(44, 62, 80, 0.3)'
                        },
                        pointLabels: {
                            color: '#2c3e50',
                            font: { size: 11, weight: 'bold' }
                        }
                    }
                }
            }
        });
    }

    onTabChange(tabName) {
        console.log(`Tab changed to: ${tabName}`);
        
        // Resize charts when tab changes
        if (this.charts && Object.keys(this.charts).length > 0) {
            setTimeout(() => {
                Object.values(this.charts).forEach(chart => {
                    if (chart && chart.resize) {
                        chart.resize();
                    }
                });
            }, 100);
        }

        // Tab-specific actions
        if (tabName === 'analysis') {
            setTimeout(() => this.updateAnalysis(), 200);
        } else if (tabName === 'circuits') {
            setTimeout(() => this.updateCircuitDetails(), 200);
        } else if (tabName === 'history') {
            setTimeout(() => this.createHistoryAccordion(), 200);
        }
    }
}

// Initialize the application with multiple fallbacks
let f1StrategyHub = null;

function initializeApp() {
    if (!f1StrategyHub) {
        console.log('🏎️ Starting F1 Strategy Hub initialization...');
        f1StrategyHub = new F1StrategyHub();
        window.f1StrategyHub = f1StrategyHub;
        console.log('✅ F1 Strategy Hub instance created');
    }
}

// Multiple initialization methods to ensure the app loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Backup initialization after a delay
setTimeout(initializeApp, 100);

// Additional backup
setTimeout(() => {
    if (!window.f1StrategyHub) {
        console.log('🔄 Backup initialization triggered');
        initializeApp();
    }
}, 500);

console.log('🏎️ F1 Strategy Hub - Professional Racing Analysis Platform Script Loaded!');