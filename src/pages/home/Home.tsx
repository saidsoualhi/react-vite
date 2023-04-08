import useTheme from 'hooks/useTheme';

import { Theme } from 'store/slices/appSlice';

const Home = () => {
   const { theme, setCurrentTheme } = useTheme();

   const setDarkTheme = () => {
    console.log('setDarkTheme')
      setCurrentTheme(Theme.Dark);
   };

   return (
      <div>
         <div> Current theme is {theme}</div>
         <button onClick={setDarkTheme}>Set Dark Theme</button>
      </div>
   );
};

export default Home;