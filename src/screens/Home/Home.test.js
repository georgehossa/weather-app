import { render } from '@testing-library/react-native';

import Home from './Home';

describe('<Home />', () => {
  it('should render', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Home Screen')).toBeTruthy();
  });
});
