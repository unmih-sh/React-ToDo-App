import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PageChangeContainer from './PageChangeContainer';
import '../styles/stylesheet.css';

class Page extends Component {
  render() {
    const {
      isEmpty,
      totalItems,
      deleteToDo,
      changeStatus,
      isPreviousDisabled,
      isNextDisabled,
      setToNextPage,
      setToPreviousPage,
      pageItems
    } = this.props;
    const pageContent = isEmpty ? (
      <div className="emptyPage">
        {`No To-Do items to show on this page, ${
          totalItems > 0 ? 'Check previous page' : 'Start adding To-Dos'
        }`}
      </div>
    ) : (
      pageItems.map(toDoItem => {
        return (
          <ToDoItem
            toDoItem={toDoItem}
            deleteToDo={deleteToDo}
            changeStatus={changeStatus}
            key={toDoItem.id}
          />
        );
      })
    );

    let pageChangeContent;
    if (isEmpty) {
      if (totalItems > 0) {
        pageChangeContent = (
          <PageChangeContainer
            isPreviousDisabled={isPreviousDisabled}
            isNextDisabled={isNextDisabled}
            setToNextPage={setToNextPage}
            setToPreviousPage={setToPreviousPage}
          />
        );
      } else {
        pageChangeContent = null;
      }
    } else {
      pageChangeContent = (
        <PageChangeContainer
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
          setToNextPage={setToNextPage}
          setToPreviousPage={setToPreviousPage}
        />
      );
    }

    return [
      <div className="toDoContainer">{pageContent}</div>,
      pageChangeContent
    ];
  }
}
export default Page;
