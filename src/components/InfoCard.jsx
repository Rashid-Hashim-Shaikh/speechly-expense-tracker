import React from 'react'

const InfoCard = () => {
    // is <0.5 round of to 0 or >0.5 round of to 1
  const isIncome = Math.round(Math.random());
    return (
    <div style={{textAlign:'center', padding: '0 10%'}}>
        Try saying: <br />
        Add {isIncome ? 'Income ' : 'Expense '} 
        for {isIncome ? <text>&#8377;100 </text> : <text>&#8377;50 </text> } 
        in Category {isIncome ? 'Business ' : 'House '} 
        for {isIncome ? 'Monday ' : 'Tuesday '} 
    </div>
  )
}

export default InfoCard