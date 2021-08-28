import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrow-down.svg';
import { useSelect, UseSelectStateChange } from 'downshift';

import { Button, List, ListItem, Wrapper } from './index.styles';

type Props = {
  items: string[];
  handleSelectedItemChange?: ((changes: UseSelectStateChange<string>) => void) | undefined;
  label: string;
  selectedItem: null | string;
};

const Select = ({ items, handleSelectedItemChange, label, selectedItem }: Props): JSX.Element => {
  const {
    isOpen,

    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps
  } = useSelect({
    items,
    selectedItem,
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
