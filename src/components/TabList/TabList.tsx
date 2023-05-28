import { ButtonTheme, HeaderButton } from '../common/HeaderButton';
import DeleteIcon from '../common/icons/DeleteIcon';

interface TabListProps {
  tabValues: string[] | undefined;
  currentTab: number;
  setCurrentTab(tab: number): void;
  setTabValues: (tabValues: string[]) => void;
}

const TabList = ({
  currentTab,
  tabValues,
  setCurrentTab,
  setTabValues,
}: TabListProps) => {
  const onClick = (index: number) => {
    setCurrentTab(index);
    localStorage.setItem('CURRENT_TAB', JSON.stringify(index));
  };

  const deleteTab = () => {
    if (currentTab === 0) return;

    if (tabValues) {
      const newTabValues = tabValues.filter((_, index) => index !== currentTab);
      setTabValues(newTabValues);
      localStorage.setItem('TAB_VALUES', JSON.stringify(newTabValues));
      if (newTabValues.length === 1) {
        setCurrentTab(0);
        localStorage.setItem('CURRENT_TAB', JSON.stringify(0));
        return;
      }

      const newTab = currentTab !== 0 ? currentTab - 1 : currentTab;
      setCurrentTab(newTab);
      localStorage.setItem('CURRENT_TAB', JSON.stringify(newTab));
    }
  };

  return (
    <div className="flex flex-row overflow-x-scroll max-h-96 max-w-[50%] sm:flex-col sm:w-auto sm:overflow-y-scroll">
      {tabValues
        ? tabValues.map((_, index) => {
            return (
              <div className="flex items-baseline">
                <HeaderButton
                  text={'tab'}
                  theme={
                    currentTab === index
                      ? ButtonTheme.ACTIVE
                      : ButtonTheme.SECONDARY
                  }
                  onClick={() => onClick(index)}
                  key={index}
                ></HeaderButton>
                <HeaderButton
                  onClick={deleteTab}
                  text=""
                  theme={ButtonTheme.SECONDARY}
                >
                  <DeleteIcon />
                </HeaderButton>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TabList;
