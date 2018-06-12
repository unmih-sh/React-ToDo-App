import React, { Component } from 'react';
import Notification from './Notification';
import Page from './Page';
import Greeter from './Greeter';
import AddToDoContainer from './AddToDoContainer';
import '../styles/stylesheet.css';

const PAGE_SIZE = 5;
class ToDo extends Component {
  constructor(props) {
    super(props);
    this.latestNotificationTimeoutId = undefined;
    this.currentPage = 0;
    this.counter = localStorage.getItem('counter') || 0;
    this.state = {
      latestNotificationMessage: '',
      byIdMap:
        new Map(JSON.parse(localStorage.getItem('byIdMap'))) || new Map(),
      currentPage: 0
    };
  }

  addToDo = toDoItemName => {
    if (toDoItemName === '') {
      return;
    }
    this.setState(({ byIdMap }) => {
      const toDoItemId = this.counter++;
      const toDoItemObject = {
        done: false,
        id: toDoItemId,
        itemName: toDoItemName
      };
      byIdMap.set(toDoItemId, toDoItemObject);
      localStorage.setItem('byIdMap', JSON.stringify([...byIdMap.entries()]));
      localStorage.setItem('counter', this.counter);
      return {
        byIdMap: byIdMap,
        latestNotificationMessage: `Added ToDo: ${toDoItemName}`
      };
    });
    this.removeNotification();
  };

  removeNotification = () => {
    if (this.latestNotificationTimeoutId) {
      clearTimeout(this.latestNotificationTimeoutId);
    }
    this.latestNotificationTimeoutId = setTimeout(() => {
      this.setState({ latestNotificationMessage: '' });
      this.latestNotificationTimeoutId = undefined;
    }, 1500);
  };

  deleteToDo = (toDoItemId, deletedToDoItemName) => {
    this.setState(({ byIdMap, currentPage }) => {
      const totalPages = parseInt(Math.ceil(byIdMap.size / PAGE_SIZE) - 1, 10);
      let newCurrentPage = currentPage;
      if (
        currentPage === totalPages &&
        byIdMap.size % PAGE_SIZE === 1 &&
        currentPage !== 0
      ) {
        newCurrentPage = currentPage - 1;
      }
      byIdMap.delete(toDoItemId);
      localStorage.setItem('byIdMap', JSON.stringify([...byIdMap.entries()]));
      return {
        latestNotificationMessage: `Removed ToDo: ${deletedToDoItemName}`,
        byIdMap: byIdMap,
        currentPage: newCurrentPage
      };
    });
    this.removeNotification();
  };

  changeStatus = toDoItemId => {
    this.setState(({ byIdMap }) => {
      const toDoToUpdate = byIdMap.get(toDoItemId);
      toDoToUpdate.done = !toDoToUpdate.done;
      localStorage.setItem('byIdMap', JSON.stringify([...byIdMap.entries()]));
      return {
        byIdMap: byIdMap
      };
    });
  };

  setToPreviousPage = () => {
    this.setState(({ byIdMap, currentPage }) => {
      let destinationPage;
      if (currentPage === 0) {
        destinationPage = currentPage;
      } else {
        destinationPage = currentPage - 1;
      }
      return { currentPage: destinationPage };
    });
  };

  setToNextPage = () => {
    this.setState(({ byIdMap, currentPage }) => {
      const totalPages = parseInt(Math.ceil(byIdMap.size / PAGE_SIZE) - 1, 10);
      if (currentPage >= totalPages) {
        return {};
      }
      console.log();
      return { currentPage: currentPage + 1 };
    });
  };

  goToAnyPage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { byIdMap, latestNotificationMessage, currentPage } = this.state;
    const totalItems = byIdMap.size;
    const totalPages = parseInt(Math.ceil(totalItems / PAGE_SIZE) - 1, 10);
    const startIndex = parseInt(currentPage * PAGE_SIZE, 10);
    const endIndex = parseInt((currentPage + 1) * PAGE_SIZE, 10);
    const isNextDisabled = currentPage >= totalPages;
    const isPreviousDisabled = currentPage === 0;

    return (
      <div>
        <Greeter name="Mihir" />
        <AddToDoContainer addToDo={this.addToDo} />
        <Page
          pageItems={[...byIdMap.values()]
            .reverse()
            .slice(startIndex, endIndex)}
          totalItems={totalItems}
          isEmpty={currentPage > totalPages}
          deleteToDo={this.deleteToDo}
          changeStatus={this.changeStatus}
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
          setToNextPage={this.setToNextPage}
          setToPreviousPage={this.setToPreviousPage}
          currentPage={currentPage}
          totalPages={totalPages}
          goToAnyPage={this.goToAnyPage}
        />
        <Notification latestNotificationMessage={latestNotificationMessage} />
      </div>
    );
  }
}

export default ToDo;
// Emoji {'\u2728'}
