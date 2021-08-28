/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import {
  ERROR_USER_EXIST,
  PERSIST_KEY_REGISTERED_USERS,
  PERSIST_KEY_ACTIVE_PROFILE,
} from './Constants';
import {
  // persistClear,
  persistStore,
  loadStateFromStore,
  setStateAndStore,
} from './AsyncStorageHandler';

const AppContext = createContext({});
const { Provider } = AppContext;

const AppContextProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState('EWaste');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [topNavigation, setTopNavigation] = useState({});

  const setHeaderTitleWrapper = (title) => setHeaderTitle(title);

  const addUser = (newUser) => {
    const userExists = registeredUsers.some((user) => user.name === newUser.name);

    if (userExists) {
      return ERROR_USER_EXIST;
    }
    setRegisteredUsers(() => {
      const updatedValue = [...registeredUsers, newUser];
      persistStore(PERSIST_KEY_REGISTERED_USERS, updatedValue);
      return updatedValue;
    });
  };

  const [activeProfile, setActiveProfile] = useState('');

  const setActiveProfileWithPersistStore = (value) =>
    setStateAndStore(PERSIST_KEY_ACTIVE_PROFILE, value, setActiveProfile);

  const deleteUser = (userToBeDeleted) => {
    if (activeProfile === userToBeDeleted) {
      setActiveProfileWithPersistStore('');
    }
    setRegisteredUsers(() => {
      const updatedValue = registeredUsers.filter((user) => user.name !== userToBeDeleted);
      persistStore(PERSIST_KEY_REGISTERED_USERS, updatedValue);
      return updatedValue;
    });
  };

  useEffect(() => {
    Promise.all([
      // persistClear(),
      loadStateFromStore(PERSIST_KEY_REGISTERED_USERS, setRegisteredUsers),
      loadStateFromStore(PERSIST_KEY_ACTIVE_PROFILE, setActiveProfile),
    ]);
  }, []);

  const contextValues = {
    registeredUsers,
    addUser,
    deleteUser,
    activeProfile,
    headerTitle,
    setActiveProfile: setActiveProfileWithPersistStore,
    setHeaderWrapper: setHeaderTitle,
    topNavigation,
    setTopNavigation,
  };

  return <Provider value={contextValues}>{children}</Provider>;
};

export default AppContext;
export { AppContextProvider };
