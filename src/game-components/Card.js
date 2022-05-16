import React from 'react';

const Card = ({ rank, suit, isPrivate, showAfterSplit }) => {

  const getSuit = (suit) => {
    switch (suit) {
      case 0:
        return 'H'
      case 1:
        return 'D'
      case 2:
        return 'C'
      case 3:
        return 'S'
    }
  }

  const getRank = (rank) => {
    switch (rank) {
      case 0:
        return 'A'
      case 1:
        return 2
      case 2:
        return 3
      case 3:
        return 4
      case 4:
        return 5
      case 5:
        return 6
      case 6:
        return 7
      case 7:
        return 8
      case 8:
        return 9
      case 9:
        return 10
      case 10:
        return 'J'
      case 11:
        return 'Q'
      case 12:
        return 'K'
    }
  }

  const renderContainer = () => {
    return (
      <div className="containers">
        <span className="rank">{getRank(rank)}</span>
        <span className="suit">{getSuit(suit)}</span>
      </div>
    );
  }

  const renderFront = () => {
    return (
      <div className="front">
        <div className="section top">
          {renderContainer()}
        </div>
        <div className="section center suit">{getSuit(suit)}</div>
        <div className="section bottom">
          {renderContainer()}
        </div>
      </div>
    );
  }

  return (
    // <div className={`card ${getSuit(suit)}`}>
    //   <div className="front">
    //     <div className="section top">
    //       <div className="container">
    //         <span className="rank">{getRank(rank)}</span>
    //         <span className="suit">{getSuit(suit)}</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="section center suit">{getSuit(suit)}</div>
    //   <div className="section bottom">
    //     <div className="container">
    //       <span className="rank">{getRank(rank)}</span>
    //       <span className="suit">{getSuit(suit)}</span>
    //     </div>
    //   </div>
    // </div>
    <div className={`cardz ${getSuit(suit)} ${showAfterSplit}`} data-private={isPrivate}>
      {!isPrivate && renderFront()}
      <div className="back"></div>
    </div>
  );
}


export default Card;
