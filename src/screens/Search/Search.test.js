import { render } from '@testing-library/react-native';

import Search from './Search';

describe('<Search />', () => {
  it('should render', () => {
    const { getByText } = render(<Search />);

    expect(getByText('Search Screen')).toBeTruthy();
  });
});
