import React from 'react';
import AccessibilityNewSharpIcon from '@material-ui/icons/AccessibilityNewSharp';
import AccessAlarmSharpIcon from '@material-ui/icons/AccessAlarmSharp';

const aCards = [{
  "title": "Zebra",
  "description": "redux-form pur",
  "displayIcon": () => {
    return (<AccessibilityNewSharpIcon />);
  },
  "visible": true
},{
  "title": "Tiger",
  "description": "redux-form with Material-UI",
  "displayIcon": () => {
    return (<AccessAlarmSharpIcon />);
  },
  "visible": true
},{
  "title": "Adler",
  "description": "redux-form with Material-UI",
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