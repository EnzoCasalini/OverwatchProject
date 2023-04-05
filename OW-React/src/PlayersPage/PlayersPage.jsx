import React, { useState } from 'react';
import './PlayerPage.css';

const PlayerPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [playerInfo, setPlayerInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`https://overfast-api.tekrop.fr/players/${searchTerm}`);
            const data = await response.json();
            setPlayerInfo(data);

        } catch (err) {
            setError(err.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Search for a player (ex: Brutus-22331)</h1>
            <div className="search-bar">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button onClick={handleSearch} disabled={!searchTerm || loading}>
                    Search
                </button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {playerInfo && (
                <div className="profile-container">
                    <div className="summary-container">
                        <img src={playerInfo.summary.avatar} alt={`${playerInfo.summary.username} avatar`} className="avatar"/>
                        <div className="summary-details">
                            <h2>{playerInfo.summary.username}</h2>
                            <img src={playerInfo.summary.namecard} alt={`${playerInfo.summary.username} namecard`} className="namecard"/>
                            <div className="endorsement-details">
                                <p>Endorsement level: {playerInfo.summary.endorsement.level}</p>
                                <img src={playerInfo.summary.endorsement.frame} alt="Endorsement frame" className="frame"/>
                            </div>
                        </div>
                    </div>
                    <div className="competitive-container">
                        <h3>Competitive</h3>
                        <div className="competitive-details">
                            {playerInfo.summary.competitive.pc.tank && (
                                <div className="role-details">
                                    <p>Tank:</p>
                                    <img src={playerInfo.summary.competitive.pc.tank.rank_icon} alt="Rank icon" className="rank-icon"/>
                                    <p>{playerInfo.summary.competitive.pc.tank.division} {playerInfo.summary.competitive.pc.tank.tier}</p>
                                </div>
                            )}
                            {playerInfo.summary.competitive.pc.support && (
                                <div className="role-details">
                                    <p>Support:</p>
                                    <img src={playerInfo.summary.competitive.pc.support.rank_icon} alt="Rank icon" className="rank-icon"/>
                                    <p>{playerInfo.summary.competitive.pc.support.division} {playerInfo.summary.competitive.pc.support.tier}</p>
                                </div>
                            )}
                            {playerInfo.summary.competitive.pc.damage && (
                                <div className="role-details">
                                    <p>Damage:</p>
                                    <img src={playerInfo.summary.competitive.pc.damage.rank_icon} alt="Rank icon" className="rank-icon"/>
                                    <p>{playerInfo.summary.competitive.pc.damage.division} {playerInfo.summary.competitive.pc.damage.tier}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="heroes-container">
                        <h3>Heroes played the most in quick play</h3>
                        <div className="hero-details">
                            {playerInfo &&
                                playerInfo.stats.pc.quickplay.heroes_comparisons.time_played.values.slice(0, 5).map((hero, index) => (
                                    <div key={index} className="hero-card">
                                        <div className="hero-progress">
                                            <div className="hero-name">{hero.hero}</div>
                                            <div className="hero-bar">
                                                <div className="hero-bar-fill" style={{ width: `${(hero.value / playerInfo.stats.pc.quickplay.heroes_comparisons.time_played.values[0].value) * 100}%` }}></div>
                                            </div>
                                            <div className="hero-time">{(hero.value / 3600).toFixed(2)} hours</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default PlayerPage;
