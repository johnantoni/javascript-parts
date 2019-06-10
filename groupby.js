var _ = require('./_vendor/lodash');

let people = [ { state: 'CA', name: 'Mitchell', hobby: 'skiing' },
  { state: 'CO', name: 'Samantha', hobby: 'skydiving' },
  { state: 'MA', name: 'Wilbur', hobby: 'kayaking' },
  { state: 'NY', name: 'Theo', hobby: 'reading' },
  { state: 'CA', name: 'Yvette', hobby: 'welding' },
  { state: 'MT', name: 'Ronny' } ]

function groupBy(data) {
  return data.reduce(function(row, i) {
    (row[i["state"]] = row[i["state"]] || []).push(i);
    return row;
  }, {});

  // return _.groupBy(data, 'state');
}

console.log(groupBy(people))

// { CA:
//    [ { state: 'CA', name: 'Mitchell', hobby: 'skiing' },
//      { state: 'CA', name: 'Yvette', hobby: 'welding' } ],
//   CO: [ { state: 'CO', name: 'Samantha', hobby: 'skydiving' } ],
//   MA: [ { state: 'MA', name: 'Wilbur', hobby: 'kayaking' } ],
//   NY: [ { state: 'NY', name: 'Theo', hobby: 'reading' } ],
//   MT: [ { state: 'MT', name: 'Ronny' } ]
// }
