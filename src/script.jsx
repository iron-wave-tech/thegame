import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';

// Card data with activities
const demonCards = [
    "You have to eat my колбаса",
    "Tame that doggy with some style",
    "Head to the shower and do the Boadyguard",
    "Ride me on the sofa cowboy",
    "Ride me like that horse Mr Jockey",
    "Turn up the heat and get it on with 69",
    "It's time to unleash your inner Warrior",
    "Blindfold me, tie my hands behind my back and play with me",
    "Pick a food cover me in it and lick it off",
    "Spin the Body – It's a YGIG we each pick a new position every 3 minutes—no repeats!",
    "Pick the chair lie back and let it slide in",
    "Give each other pet names for the next hour",
    "Do your best impression of each other",
    "The Melted Candle – You lie flat with legs slightly raised while the other kneels",
    "The X Marks the Spot – Lie on your back with legs crossed while I kneel"
].map(text => ({ text, type: 'demon' }));

const angelCards = [
    "What's your favorite memory of us together?",
    "What made you fall in love with me?",
    "What's your biggest dream for our future?",
    "What's one thing you'd like us to try together?",
    "What makes you feel most loved?",
    "What's your favorite physical feature of mine?",
    "What's the most thoughtful thing I've done for you?",
    "Where would you like us to travel together?",
    "What's one thing you'd like to improve in our relationship?",
    "What's your favorite way to spend time with me?",
    "What's one thing you admire about my personality?",
    "What's a new hobby you'd like us to try together?",
    "What's your favorite date we've had?",
    "What's one thing that always makes you smile about me?",
    "Tell me something I don't know about you yet"
].map(text => ({ text, type: 'angel' }));

// Main App Component
const App = () => {
    const [deck, setDeck] = useState([]);
    const [currentCard, setCurrentCard] = useState(null);
    const [isShuffling, setIsShuffling] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    // Function to shuffle the deck
    const shuffleDeck = () => {
        setIsShuffling(true);
        setAnimationClass('fade-out');
        
        setTimeout(() => {
            const allCards = [...angelCards, ...demonCards];
            const shuffled = [...allCards].sort(() => Math.random() - 0.5);
            setDeck(shuffled);
            setCurrentCard(null);
            setAnimationClass('fade-in');
            
            setTimeout(() => {
                setIsShuffling(false);
                setAnimationClass('');
            }, 600);
        }, 600);
    };

    // Function to draw a card
    const drawCard = () => {
        if (deck.length === 0) return;
        
        setIsDrawing(true);
        setAnimationClass('fade-out');
        
        setTimeout(() => {
            const newDeck = [...deck];
            const drawnCard = newDeck.pop();
            setDeck(newDeck);
            setCurrentCard(drawnCard);
            setAnimationClass('fade-in');
            
            setTimeout(() => {
                setIsDrawing(false);
                setAnimationClass('');
            }, 600);
        }, 600);
    };

    // Initialize deck on first load with animation
    useEffect(() => {
        setTimeout(() => {
            shuffleDeck();
        }, 500);
    }, []);

    return (
        <div className="container">
            <h1>Naked Truths</h1>
            
            <div className="controls">
                <button 
                    className="button"
                    onClick={shuffleDeck}
                    disabled={isShuffling || isDrawing}
                >
                    {isShuffling ? '✨ Shuffling...' : '🔄 Shuffle Deck'}
                </button>
                <button 
                    className="button"
                    onClick={drawCard}
                    disabled={isShuffling || isDrawing || deck.length === 0}
                >
                    {deck.length === 0 ? '🔄 Shuffle to Start' : `🎴 Draw Card (${deck.length})`}
                </button>
            </div>

            {currentCard && (
                <div className={`card ${currentCard.type} ${animationClass}`}>
                    <div className="card-content">
                        <div className="card-emoji">
                            {currentCard.type === 'angel' ? '👼' : '😈'}
                        </div>
                        <div className="card-text" role="text">
                            {currentCard.text}
                        </div>
                    </div>
                </div>
            )}
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