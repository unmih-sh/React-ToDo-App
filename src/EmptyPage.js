import React from 'react';
import PageChangeContainer from './PageChangeContainer';

import '../styles/stylesheet.css';

const EmptyPage = props => {
  const { totalItems } = props;
  const pageChangeContainer =
    totalItems > 0 ? (
      <PageChangeContainer
        isPreviousDisabled={props.isPreviousDisabled}
        isNextDisabled={props.isNextDisabled}
        setToNextPage={props.setToNextPage}
        setToPreviousPage={props.setToPreviousPage}
      />
    ) : null;
  return [
    <div className="toDoContainer">
      <div className="emptyPage">
        {`No To-Do items to show on this page, ${
          totalItems > 0 ? 'Check previous page' : 'Start adding To-Dos'
        }`}
      </div>
    </div>,
    pageChangeContainer
  ];
};
export default EmptyPage;
