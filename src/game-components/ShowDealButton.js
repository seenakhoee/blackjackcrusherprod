import React, { useEffect, useState } from "react"


export default function ShowButtonDeal(showDeal) {
  let [showDealButton, setShowDealButton] = useState(showDeal);

  console.log(showDeal, 'yo')

  useEffect(() => {
    setShowDealButton(showDeal)
  }, [showDeal])

  // You can use Hooks here!
  return showDealButton;
}