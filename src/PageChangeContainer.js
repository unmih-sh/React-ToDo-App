import React, { PureComponent } from 'react';
import '../styles/stylesheet.css';

class PageChangeContainer extends PureComponent {
  render() {
    const {
      isPreviousDisabled,
      isNextDisabled,
      setToNextPage,
      setToPreviousPage,
      currentPage,
      totalPages,
      goToAnyPage
    } = this.props;
    let pageNumbersToDisplay = [];
    for (
      var i = Math.max(0, currentPage - 2);
      i <= Math.min(currentPage + 2, totalPages);
      i++
    ) {
      pageNumbersToDisplay.push(i + 1);
      console.log('display', i + 1);
    }
    return (
      <div className="prevAndNextButtons">
        <div className="fastPrevButtonDiv">
          <img
            className={'icons'}
            src="https://image.flaticon.com/icons/svg/8/8742.svg"
            onClick={() => goToAnyPage(0)}
            alt=""
          />
        </div>
        <div className="prevButtonDiv">
          <img
            className={isPreviousDisabled ? 'icons iconsDisabled' : 'icons'}
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            onClick={setToPreviousPage}
            alt=""
          />
        </div>
        <div className="numberPane">
          {pageNumbersToDisplay.map(pageNumber => (
            <div
              className={
                pageNumber === currentPage + 1
                  ? 'numberPaneItems numberPaneItemActive'
                  : 'numberPaneItems'
              }
              onClick={() => goToAnyPage(pageNumber - 1)}
            >
              <span>{pageNumber}</span>
            </div>
          ))}
        </div>
        <div className="nextButtonDiv">
          <img
            className={isNextDisabled ? 'icons iconsDisabled' : 'icons'}
            src="https://image.flaticon.com/icons/svg/118/118740.svg"
            onClick={setToNextPage}
            alt=""
          />
        </div>
        <div className="fastNextButtonDiv">
          <img
            className={'icons'}
            src="https://image.flaticon.com/icons/svg/8/8740.svg"
            onClick={() => goToAnyPage(totalPages)}
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default PageChangeContainer;
