import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';

// Card data with activities
const letsGetCloserCards = [
    "What's your favorite memory of us together?",
    "What part of my body do you like the most right now?",
    "Give me a compliment — nothing about looks.",
    "What's one thing you'd like us to try together?",
    "What makes you feel most loved by me?",
    "Tell me a memory of a time you were really turned on by me.",
    "Describe your perfect date night — end it with something steamy.",
    "Where would you love for us to travel together, just the two of us?",
    "Kiss me somewhere unexpected — no words, just lips.",
    "What's your favorite way to spend time with me?",
    "What’s one thing you admire about who I am — not what I look like?",
    "Whisper in my ear what you want to do to me… later.",
    "What’s your favorite date we’ve had so far — and why?",
    "What’s one thing that always makes you smile about me?",
    "Tell me something I don’t know about you yet — no holding back.",
    "What’s your favorite way I show you love or affection?",
    "What’s a small gesture I’ve done that meant a lot to you?",
    "Choose: undress one piece of my clothing OR let me undress one of yours.",
    "Show me how you want to be touched — using my hand.",
    "What’s your favorite way to relax with me after a long day?",
    "Describe how I make you feel — without using the word 'love'.",
    "What’s something you’ve always wanted to say to me but haven’t yet?",
    "Tell me one thing that made you fall for me — even just a little.",
    "What’s one song that makes you think of me? Why?",
    "What is your safe word",
    "Tell me what part of your body feels the most sensitive right now.",
    "If we were meeting for the first time tonight — how would you flirt with me?",
    "Look me in the eyes for 30 seconds. Then tell me what you feel.",
    "What would our dream weekend away look like — and how would it end?",
].map(text => ({ text, type: 'closer' }));

const letsGetWildCards = [
    "Blindfold me, tie my hands behind my back, and do whatever you want.",
  "You have to eat my колбаса — no hands allowed.",
  "Tame that doggy... but do it in style.",
  "Get in the shower. We're reenacting *The Bodyguard* — clothes optional.",
  "Ride me on the sofa, cowboy. Hat optional, attitude required.",
  "Ride me like that horse, Mr. Jockey — and don't hold back.",
  "Turn up the heat — it's time for a slow, messy 69.",
  "Unleash your inner Warrior and take full control. I won't stop you.",
  "Tie or hold my hands behind my back — and get to work.",
  "Spin the Body: it's You Go, I Go — we each pick a new position every 3 minutes. No repeats.",
  "Pick the chair. Lie back. Slide it in — slow and deep.",
  "Give each other filthy pet names and use them for the next hour.",
  "You choose the position we start with — act it out like you've waited all day for it.",
  "The Melted Candle — lie flat with legs raised while the other kneels and takes their time.",
  "The X Marks the Spot — legs crossed, mouth open, mind blank.",
  "Strip tease for each other for 3 minutes — only eye contact and hands allowed.",
  "Role play: strangers with instant chemistry. Don't break character.",
  "Use only your mouth for the next 10 minutes — make it count.",
  "Describe your wildest fantasy — leave nothing out.",
  "Let's try something we've never done before. You pick. I surrender.",
  "Bend me over something sturdy and make me feel wanted.",
  "Pretend I'm your dirty little secret. How would you act if no one could ever know?",
  "Tease me with something cold… then heat things up.",
  "Send me a filthy voice note right now. I want to hear it in your voice.",
  "Put on a show — you're the star, I'm just watching. For now.",
  "Tell me exactly how you want me tonight — then make it happen.",
  "Make a rule: for the next 15 minutes, one of us can only moan. No words.",
  "Touch yourself while I watch — no shame, just show.",
  "Command me. Whatever you say, I'll do it — but only for 5 minutes. Use them well."
].map(text => ({ text, type: 'wild' }));

// Main App Component
const App = () => {
    const [closerDeck, setCloserDeck] = useState([]);
    const [wildDeck, setWildDeck] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [animationClass, setAnimationClass] = useState('');
    const [selectedDeck, setSelectedDeck] = useState(null);

    // Function to shuffle both decks
    const shuffleDecks = () => {
        setIsShuffling(true);
        setAnimationClass('fade-out');
        
        setTimeout(() => {
            const shuffledCloser = [...letsGetCloserCards].sort(() => Math.random() - 0.5);
            const shuffledWild = [...letsGetWildCards].sort(() => Math.random() - 0.5);
            setCloserDeck(shuffledCloser);
            setWildDeck(shuffledWild);
            setCurrentCard(null);
            setSelectedDeck(null);
            setAnimationClass('fade-in');
            
            setTimeout(() => {
                setIsShuffling(false);
                setAnimationClass('');
            }, 600);
        }, 600);
    };

    // Function to select a deck
    const selectDeck = (deckType) => {
        setSelectedDeck(deckType);
        setCurrentCard(null);
    };

    // Function to draw a card from selected deck
    const drawCard = () => {
        if (!selectedDeck) return;
        
        const currentDeck = selectedDeck === 'closer' ? closerDeck : wildDeck;
        if (currentDeck.length === 0) return;
        
        setIsDrawing(true);
        
        // Clear any existing card first
        setCurrentCard(null);
        setAnimationClass('fade-out');
        
        setTimeout(() => {
            const newDeck = [...currentDeck];
            const drawnCard = newDeck.pop();
            
            if (selectedDeck === 'closer') {
                setCloserDeck(newDeck);
            } else {
                setWildDeck(newDeck);
            }
            
            // Set the new card and start fade-in animation
            setCurrentCard(drawnCard);
            setAnimationClass('fade-in');
            
            setTimeout(() => {
                setIsDrawing(false);
                setAnimationClass('');
            }, 500);
        }, 300);
    };

    // Initialize decks on first load with animation
    useEffect(() => {
        setTimeout(() => {
            shuffleDecks();
        }, 500);
    }, []);

    return (
        <div className="container">
            <h1>The Game</h1>
            
            {/* Card Display Area - Always visible at top */}
            <div className="card-display-area">
                {currentCard && !isDrawing ? (
                    <div className={`card ${currentCard.type} ${animationClass}`}>
                        <div className="card-content">
                            <div className="card-emoji">
                                {currentCard.type === 'closer' ? '👼' : '😈'}
                            </div>
                            <div className="card-text" role="text">
                                {currentCard.text}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card-placeholder">
                        <div className="placeholder-icon">🎴</div>
                        <div className="placeholder-text">Select a deck and draw a card to start!</div>
                    </div>
                )}
            </div>

            {/* Selected Deck Info */}
            {selectedDeck && (
                <div className="selected-deck-info">
                    <div className={`selected-deck ${selectedDeck}-deck`}>
                        <div className="selected-deck-icon">
                            {selectedDeck === 'closer' ? '👼' : '😈'}
                        </div>
                        <div className="selected-deck-title">
                            {selectedDeck === 'closer' ? 'Let\'s Get Closer' : 'Let\'s Get Wild'}
                        </div>
                        <div className="selected-deck-count">
                            {selectedDeck === 'closer' ? closerDeck.length : wildDeck.length} cards remaining
                        </div>
                    </div>
                </div>
            )}

            {/* Controls */}
            <div className="controls">
                <button 
                    className="button shuffle-button"
                    onClick={shuffleDecks}
                    disabled={isShuffling || isDrawing}
                >
                    {isShuffling ? '✨ Shuffling...' : '🔄 Shuffle All Decks'}
                </button>
                <button 
                    className="button draw-button"
                    onClick={drawCard}
                    disabled={isShuffling || isDrawing || !selectedDeck || 
                             (selectedDeck === 'closer' ? closerDeck.length === 0 : wildDeck.length === 0)}
                >
                    {!selectedDeck ? '🎴 Select a Deck First' : 
                     (selectedDeck === 'closer' ? closerDeck.length === 0 ? '🔄 Shuffle to Continue' : `👼 Draw Closer Card (${closerDeck.length})` :
                      wildDeck.length === 0 ? '🔄 Shuffle to Continue' : `😈 Draw Wild Card (${wildDeck.length})`)}
                </button>
            </div>

            {/* Deck Selection - Moved to bottom */}
            <div className="deck-selection">
                <div className="deck-option closer-deck" onClick={() => selectDeck('closer')}>
                    <div className="deck-icon">👼</div>
                    <div className="deck-title">Let's Get Closer</div>
                    <div className="deck-count">{closerDeck.length} cards</div>
                    <div className="deck-description">Deepen your connection</div>
                </div>
                
                <div className="deck-option wild-deck" onClick={() => selectDeck('wild')}>
                    <div className="deck-icon">😈</div>
                    <div className="deck-title">Let's Get Wild</div>
                    <div className="deck-count">{wildDeck.length} cards</div>
                    <div className="deck-description">Spice things up</div>
                </div>
            </div>
        </div>
    );
};

// Create root and render
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); 