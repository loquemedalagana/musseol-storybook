import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import SearchBar, {IProps as SearchbarProps} from "./SearchBar";

export default {
  title: 'Musiclab/SearchBar',
  component: SearchBar,
} as Meta;

const Templete: Story<SearchbarProps> = (args) => <SearchBar {...args} />;

export const SearchbarBasic = Templete.bind({});

