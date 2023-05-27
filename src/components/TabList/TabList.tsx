import { ButtonTheme, HeaderButton } from '../common/HeaderButton';

interface TabListProps {
  tabs: string[] | undefined;
  currentTab: number;
  setCurrentTab(tab: number): void;
}

const TabList = ({ tabs, currentTab, setCurrentTab }: TabListProps) => {
  return (
    <div>
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
                onClick={() => setCurrentTab(index)}
                key={index}
              ></HeaderButton>
            );
          })
        : null}
    </div>
  );
};

export default TabList;
