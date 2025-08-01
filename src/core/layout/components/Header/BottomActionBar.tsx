import useTheme from '@/core/context/Theme/usage';

const BottomActionBar = () => {
  const { colorScheme, setColorScheme } = useTheme();
  console.log('Color scheme:', colorScheme);
  return (
    <div>
      <div>Bottom Action Bar</div>
      <button onClick={() => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')}>Theme: {colorScheme}</button>
    </div>
  );
};

export default BottomActionBar;
