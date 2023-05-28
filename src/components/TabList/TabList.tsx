import { ButtonTheme, HeaderButton } from '../common/HeaderButton';

interface TabListProps {
  tabs: string[] | undefined;
  currentTab: number;
  setCurrentTab(tab: number): void;
}

const TabList = ({ tabs, currentTab, setCurrentTab }: TabListProps) => {
  const onClick = (index: number) => {
    setCurrentTab(index);
    localStorage.setItem('CURRENT_TAB', JSON.stringify(index));
  };

  return (
    <div className="flex flex-row overflow-scroll max-h-96 max-w-[50%] sm:flex-col sm:w-auto">
      {tabs
        ? tabs.map((_, index) => {
            return (
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
            );
          })
        : null}
    </div>
  );
};

export default TabList;
