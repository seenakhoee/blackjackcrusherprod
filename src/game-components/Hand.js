import Card from './Card.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Hand: any = ({ hand, owner, inProgress, coverDealerCard, busted, handClassName }) => {

  // showingFace = (card) => {
  //   // if true - return rank and suit
  //   // if false - return hidden card
  //   if(card.showingFace) {
  //     return card
  //   } else {
  //     return {}
  //   }
  // }

  const dataAttributes = {
    'data-dealing': inProgress,
    'data-owner': owner,
  };



  const showAfterSplit = (showCard) => {
    return !showCard ? "dontShowCard" : "showCard"
  }

  const bustedStyle = busted ? 'bustedHand' : ''

  return (
    <div className={`hand ${bustedStyle}`} {...dataAttributes}>
      <div className="cards">
        <TransitionGroup exit={false}>
          {hand.cards.map((card) => {
            return (
              <CSSTransition
                key={card.id}
                timeout={{
                  appear: 2000,
                  enter: 2000,
                  exit: 0,
                }}
                classNames="list"
              >
                <Card
                  busted={busted}
                  rank={card.rank}
                  suit={card.suit}
                  isPrivate={!card.showingFace}
                  key={card.id}
                  showAfterSplit={showAfterSplit(card.showAfterSplit)}
                />
              </CSSTransition>
            )
          }
          )}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Hand;
