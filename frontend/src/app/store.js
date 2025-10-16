import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userDetailReducer from '../features/userDetail/userDetailsSlice';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'socket',
    'userDetails',
    'following',
    'followers',
    'onlineUsers',
    'followingUsers',
    'watchHistory',
    'messages',
    'rtmNotification',
    'suggestedUser',
    'selectedPost',
    'savedPosts',
    'usrname' 
  ],

  serialize: (state) => {
    const clonedState = { ...state };
    delete clonedState.socket;
    return JSON.stringify(clonedState);
  },
  deserialize: (state) => JSON.parse(state),
};

const persistedReducer = persistReducer(persistConfig, userDetailReducer);

const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'socket/setSocket',
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
        ignoredPaths: ['counter.socket', 'socket'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;