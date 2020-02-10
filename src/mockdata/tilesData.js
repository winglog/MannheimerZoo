import React from 'react';
import AccessibilityNewSharpIcon from '@material-ui/icons/AccessibilityNewSharp';
import AccessAlarmSharpIcon from '@material-ui/icons/AccessAlarmSharp';

const aCards = [{
  "title": "Zebra",
  "displayIcon": () => {
    return (<AccessibilityNewSharpIcon />);
  },
  "visible": true
},{
  "title": "Tiger",
  "displayIcon": () => {
    return (<AccessAlarmSharpIcon />);
  },
  "visible": true
},{
  "title": "Adler",
  "displayIcon": () => {
    return (<AccessibilityNewSharpIcon />);
  },
  "visible": true
},{
  "title": "Papagei",
  "displayIcon": () => {
    return (<AccessAlarmSharpIcon />);
  },
  "visible": true
},{
  "title": "Hund",
  "displayIcon": () => {
    return (<AccessibilityNewSharpIcon />);
  },
  "visible": true
},{
  "title": "Nashorn",
  "displayIcon": () => {
    return (<AccessAlarmSharpIcon />);
  },
  "visible": true
},{
  "title": "Kobra",
  "displayIcon": () => {
    return (<AccessAlarmSharpIcon />);
  },
  "visible": true
}];

export default aCards;