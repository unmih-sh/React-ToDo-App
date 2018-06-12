import React, { PureComponent } from 'react';
import '../styles/stylesheet.css';

class PageChangeContainer extends PureComponent {
  render() {
    const {
      isPreviousDisabled,
      isNextDisabled,
      setToNextPage,
      setToPreviousPage
    } = this.props;
    return (
      <div className="prevAndNextButtons">
        <div className="prevButtonDiv">
          <img
            className={isPreviousDisabled ? 'icons iconsDisabled' : 'icons'}
            src="https://image.flaticon.com/icons/svg/118/118739.svg"
            onClick={setToPreviousPage}
            alt=""
          />
        </div>
        <div className="nextButtonDiv">
          <img
            className={isNextDisabled ? 'icons iconsDisabled' : 'icons'}
            src="https://image.flaticon.com/icons/svg/118/118740.svg"
            onClick={setToNextPage}
            alt=""
          />
        </div>
      </div>
    );
  }
}
export default PageChangeContainer;
