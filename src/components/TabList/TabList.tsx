import uniqid from 'uniqid';
import { ButtonTheme, CustomButton } from '../common/CustomButton';
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

  const deleteTab = (tabNumber: number) => {
    if (tabValues) {
      const newTabValues = tabValues.filter((_, index) => index !== tabNumber);
      setTabValues(newTabValues);
      localStorage.setItem('TAB_VALUES', JSON.stringify(newTabValues));
      if (newTabValues.length === 1) {
        setCurrentTab(0);
        localStorage.setItem('CURRENT_TAB', JSON.stringify(0));
        return;
      }

      if (currentTab > tabNumber) {
        setCurrentTab(currentTab - 1);
        localStorage.setItem('CURRENT_TAB', JSON.stringify(currentTab - 1));
        return;
      }

      if (currentTab < tabNumber) {
        setCurrentTab(currentTab);
        localStorage.setItem('CURRENT_TAB', JSON.stringify(currentTab));
        return;
      }

      const newTab = currentTab !== 0 ? currentTab - 1 : currentTab;
      setCurrentTab(newTab);
      localStorage.setItem('CURRENT_TAB', JSON.stringify(newTab));
    }
  };

  return (
    <div className="flex flex-row overflow-x-scroll max-h-96 w-full sm:flex-col sm:w-auto sm:overflow-auto">
      {tabValues
        ? tabValues.map((_, index) => {
            return (
              <div className="flex items-baseline" key={uniqid()}>
                <CustomButton
                  theme={
                    currentTab === index
                      ? ButtonTheme.ACTIVE
                      : ButtonTheme.SECONDARY
                  }
                  onClick={() => onClick(index)}
                >
                  <span>tab</span>
                </CustomButton>
                <CustomButton
                  onClick={() => deleteTab(index)}
                  theme={ButtonTheme.SECONDARY}
                >
                  <DeleteIcon />
                </CustomButton>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default TabList;
