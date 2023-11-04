import { render } from '@testing-library/react-native';

import Favorites from './Favorites';

describe('<Favorites />', () => {
  it('should render', () => {
    const { getByText } = render(<Favorites />);

    expect(getByText('Favorites Screen')).toBeTruthy();
  });
});
