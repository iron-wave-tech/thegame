import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';

// Card data with activities
const cardActivities = [
    "You have to eat my колбаса",
    "Tame that doggy with some style",
    "Head to the shower and do the Boadyguard",
    "Ride me on the sofa cowboy",
    "Ride me like that horse Mr Jockey",
    "Trun up the heat and get it on with 69",
    "It's time to unleash your inner Warrior",
    "Blindfold me,  tie my hands behind my back and play with me",
    "Pick a food cover me in it and lick it off",
    "Spin the Body – It's a YGIG we each pick a new position every 3 minutes—no repeats!",
    "Pick the chair lie back and let it slide in",
    "The Pillow Press – Elevate the hips with a pillow for deeper angles and extra stimulation",
    "Do your best impression of each other",
    "The Melted Candle – You lie flat with legs slightly raised while the other kneels between them—slow, deep, and perfect for eye contact.",
    "The X Marks the Spot – Lie on your back with legs crossed while I kneel—new angles, new sensations"
];

// Main App Component
const App = () => {
    const [cards, setCards] = useState([...cardActivities]);
    const [currentCard, setCurrentCard] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    // Fisher-Yates shuffle algorithm
    const shuffleCards = () => {
        setIsShuffling(true);
        const newCards = [...cards];
        for (let i = newCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
        }
        setCards(newCards);
        setCurrentCard(null);
        setIsFlipped(false);
        setTimeout(() => setIsShuffling(false), 500);
    };

    const drawCard = () => {
        if (cards.length === 0) {
            alert("No more cards! Shuffle to start over.");
            return;
        }
        setIsFlipped(false);
        setTimeout(() => {
            const newCard = cards[0];
            const remainingCards = cards.slice(1);
            setCurrentCard(newCard);
            setCards(remainingCards);
            setIsFlipped(true);
        }, 300);
    };

    return (
        <div className="container">
            <h1 className="text-4xl font-bold text-white mb-8">Naked Truths</h1>
            
            <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-face card-front">
                    <span style={{ fontSize: '4rem' }}>😈</span>
                </div>
                <div className="card-face card-back">
                    {currentCard || "Draw a card to start!"}
                </div>
            </div>

            <div className="mt-8">
                <button 
                    className="button"
                    onClick={shuffleCards}
                    disabled={isShuffling}
                >
                    {isShuffling ? 'Shuffling...' : 'Shuffle Cards'}
                </button>
                <button 
                    className="button"
                    onClick={drawCard}
                    disabled={isShuffling}
                >
                    Draw Card
                </button>
            </div>

            <p className="text-white mt-4">
                Cards remaining: {cards.length}
            </p>
        </div>
    );
};

// Make sure the DOM is loaded before rendering
window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('app')
    );
}); 