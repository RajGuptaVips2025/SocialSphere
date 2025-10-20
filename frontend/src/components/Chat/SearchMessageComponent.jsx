import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestedUser } from '@/features/userDetail/userDetailsSlice';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '@/api/api';

function SearchMessageComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const dispatch = useDispatch();
  const followingUsers = useSelector((state) => state.counter.followingUsers);

  // Load recent searches from memory on mount
  useEffect(() => {
    const saved = [];
    setRecentSearches(saved);
  }, []);

  // Search users as user types
  useEffect(() => {
    const searchUsers = async () => {
      if (query.trim().length > 0) {
        setLoading(true);
        try {
          const response = await api.get(`/search/users?query=${query}`);
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
      }
    };

    const debounceTimer = setTimeout(searchUsers, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSelectUser = (user) => {
    // Check if user already exists in followingUsers
    const existingUser = Array.isArray(followingUsers) 
      ? followingUsers.find(u => u._id === user._id)
      : null;

    if (existingUser) {
      // If user exists, just select them
      dispatch(setSuggestedUser(existingUser));
    } else {
      // If new user, add to suggested user
      dispatch(setSuggestedUser(user));
    }

    // Add to recent searches (keep only last 5)
    setRecentSearches(prev => {
      const filtered = prev.filter(u => u._id !== user._id);
      return [user, ...filtered].slice(0, 5);
    });

    // Close dialog
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const removeRecentSearch = (userId) => {
    setRecentSearches(prev => prev.filter(u => u._id !== userId));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="dark:text-white hover:text-white hover:bg-slate-700 dark:hover:bg-slate-700">
          <Search className="h-5 w-5 " />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b dark:border-gray-700">
          <DialogTitle className="text-xl font-semibold">New Message</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="px-6 py-3 border-b dark:border-gray-700">
          <div className="relative">
            <Input
              placeholder="Search users..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 dark:bg-neutral-800 dark:text-white dark:border-gray-700"
              autoFocus
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            {query && (
              <button
                onClick={() => {
                  setQuery('');
                  setResults([]);
                }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Area */}
        <ScrollArea className="flex-1 px-6">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center items-center py-8"
              >
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </motion.div>
            ) : query && results.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-2"
              >
                {results.map((user, index) => (
                  <motion.div
                    key={user._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleSelectUser(user)}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer rounded-lg transition-colors"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage
                        src={user.profilePicture || '/placeholder.svg'}
                        alt={user.username}
                        className="object-cover object-top"
                      />
                      <AvatarFallback className="bg-blue-500 text-white">
                        {user.username?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm dark:text-white truncate">
                        {user.username}
                      </p>
                      {user.fullName && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {user.fullName}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : query && results.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 text-gray-500 dark:text-gray-400"
              >
                <p>No users found for {query}</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-4"
              >
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-sm font-semibold dark:text-white">Recent</h3>
                      <button
                        onClick={clearRecentSearches}
                        className="text-xs text-blue-500 hover:text-blue-600"
                      >
                        Clear all
                      </button>
                    </div>
                    {recentSearches.map((user) => (
                      <div
                        key={user._id}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg group"
                      >
                        <div
                          onClick={() => handleSelectUser(user)}
                          className="flex items-center space-x-3 flex-1 cursor-pointer"
                        >
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={user.profilePicture || '/placeholder.svg'}
                              alt={user.username}
                              className="object-cover object-top"
                            />
                            <AvatarFallback className="bg-blue-500 text-white">
                              {user.username?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm dark:text-white truncate">
                              {user.username}
                            </p>
                            {user.fullName && (
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {user.fullName}
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeRecentSearch(user._id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-full"
                        >
                          <X className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Suggestions from Following Users */}
                {followingUsers && followingUsers.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold dark:text-white mb-3">
                      Suggested
                    </h3>
                    {followingUsers.slice(0, 5).map((user) => (
                      <div
                        key={user._id}
                        onClick={() => handleSelectUser(user)}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer rounded-lg"
                      >
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={
                              'groupName' in user
                                ? `http://localhost:5000/${user?.groupImage}`
                                : user?.profilePicture || '/placeholder.svg'
                            }
                            alt={user?.username}
                            className="object-cover object-top"
                          />
                          <AvatarFallback className="bg-blue-500 text-white">
                            {('groupName' in user ? user.groupName : user.username)
                              ?.charAt(0)
                              .toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm dark:text-white truncate">
                            {'groupName' in user ? user.groupName : user.username}
                          </p>
                          {user.lastMessage?.text && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                              {user.lastMessage.text}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default SearchMessageComponent;