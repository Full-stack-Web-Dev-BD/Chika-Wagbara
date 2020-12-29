import { DefinedRange } from 'react-date-range';
import React, { useState, useEffect } from 'react';
import moment from 'moment'

export default function SelectDate(props) {
  const { setStartDate, setEndDate }=props
  const [state, setState] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection'
    }
  ]);

  useEffect(()=>{
    setStartDate(state[0].startDate)
    if(moment(state[0].startDate).format('L')==moment(state[0].endDate).format('L')){
      setEndDate('')
    }else{
      setEndDate(state[0].endDate)
    }
  }, [state])
    console.log((moment(state[0].startDate).format('L')-moment(state[0].endDate).format('L')))
    return (
      <DefinedRange
        onChange={item => setState([item.selection])}
        ranges={state}
      />
    );
}
