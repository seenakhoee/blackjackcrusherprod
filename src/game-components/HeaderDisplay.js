import { MyStopwatch } from './Timer.js'
import DiscardTray from './DiscardTray'
import styles from './HeaderDisplay.module.scss'

const HeaderDisplay: any = ({ pen, allowLateSurrender, allowDoubleAfterSplit, deckCount, hitSoft17, showRunningCount, cards, step}) => {

  function renderConditions(deckCount, hitSoft17, allowDoubleAfterSplit, allowLateSurrender){

    const h17 = hitSoft17 ? 'H17' : 'S17'
    const das = allowDoubleAfterSplit ? 'DAS' : 'NDAS'
    const ls = allowLateSurrender ? 'LS' : 'NLS'


    return `${deckCount.toString()} Decks ${h17} ${das} ${ls}`
  }

  function cardDelt() {
    return Array.from({length: Math.floor(cards.length * (pen/100))})
  }

  return (

    <div className={styles.headerInfo}>
      < DiscardTray cards={cardDelt()} currentPen={pen} step={step} />
      <div>
        <MyStopwatch />
        <p>{renderConditions(deckCount, hitSoft17, allowDoubleAfterSplit, allowLateSurrender)}</p>
        {/* <p>Penetration .75</p> */}
        {/* <p>Percentage of Shoe Dealt</p>
        <p className="penStat">{pen}%</p>
        {(showRunningCount || showRunningCount === 0) && <p>RC {showRunningCount}</p>} */}
      </div>
    </div>
  );
}

export default HeaderDisplay;
