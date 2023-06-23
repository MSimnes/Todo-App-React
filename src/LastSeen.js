import React from 'react';
import TimeAgo from 'react-timeago';

export default function LastSeen({ date }) {
  return (
    <div>
      <TimeAgo
        date={Date.now()}
        formatter={(value, unit, suffix) => {
          if (value < 1 && unit === 'second') {
            return 'just now';
          } else {
            return value + ' ' + unit + (value > 1 ? 's' : '') + ' ' + suffix;
          }
        }}
      />
    </div>
  );
}
