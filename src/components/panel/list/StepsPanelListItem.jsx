import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DistanceModel from '../../../models/Distance';

export default function StepsPanelListItem({item, onChangeDistance}) {
  const onDeleteDistance = () => {
    onChangeDistance('delete', item);
  };

  const onEditDistance = () => {
    onChangeDistance('edit', item);
  };

  return (
    <div className="workout-tracking-panel-item">
      <div>{moment(item.date).format('DD.MM.YYYY')}</div>
      <div>{item.distance}</div>
      <div>
        <button className="edit" onClick={onEditDistance} >✎</button>
        <button className="button-delete" onClick={onDeleteDistance} >✘</button>
      </div>
    </div>
    )
}

StepsPanelListItem.propTypes = {
  item: PropTypes.instanceOf(DistanceModel),
  onChangeDistance: PropTypes.func
};