import React from 'react';
import PropTypes from 'prop-types';
import StepsPanelListItem from './StepsPanelListItem';
import DistanceModel from '../../../models/Distance';

export default function StepsPanelList({items, onChangeDistance}) {
  items.sort((a, b) => b.date_obj - a.date_obj);

  return (
    <div className="workout-tracking-panel-list">
      {items.map(item => <StepsPanelListItem key={item.id} item={item} onChangeDistance={onChangeDistance} />)}
    </div>
  )
}

StepsPanelList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(DistanceModel))
};