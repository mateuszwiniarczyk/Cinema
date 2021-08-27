import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';
import { useSelect, UseSelectStateChange } from 'downshift';

import { Button, List, ListItem, Wrapper } from './index.styles';

type Props = {
  items: string[];
  handleSelectedItemChange?: ((changes: UseSelectStateChange<string>) => void) | undefined;
  label: string;
};

const Select = ({ items, handleSelectedItemChange, label }: Props): JSX.Element => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items,
    onSelectedItemChange: handleSelectedItemChange
  });

  return (
    <Wrapper>
      <Button type="button" {...getToggleButtonProps()}>
        {selectedItem || label}
        <ArrowDownIcon />
      </Button>
      <List {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <ListItem
              highlighted={highlightedIndex === index}
              key={item}
              {...getItemProps({ item, index })}>
              {item}
            </ListItem>
          ))}
      </List>
    </Wrapper>
  );
};

export default Select;
