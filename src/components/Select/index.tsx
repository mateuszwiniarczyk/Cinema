import { useSelect, UseSelectStateChange } from 'downshift';
import React from 'react';

import { Button, List, Wrapper } from './index.styles';

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
  } = useSelect({ items, onSelectedItemChange: handleSelectedItemChange });

  return (
    <Wrapper>
      <Button type="button" {...getToggleButtonProps()}>
        {selectedItem || label}
      </Button>
      <List {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}>
              {item}
            </li>
          ))}
      </List>
    </Wrapper>
  );
};

export default Select;
