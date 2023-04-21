import React from 'react';
import PropTypes from 'prop-types';
import DistanceModel from '../../models/Distance';
import StepsHeader from './StepsHeader';
import StepsPanelList from './list/StepsPanelList';

export default function StepsPanel({items, onChangeDistance}) {
  const titles = ['Дата (ДД.ММ.ГГ)', 'Пройдено км' , 'Действия'];

  return (
    <div className="workout-tracking-panel">
      <StepsHeader titles={titles} />
      <StepsPanelList items={items} onChangeDistance={onChangeDistance} />
    </div>
  )
}

StepsPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(DistanceModel))
};