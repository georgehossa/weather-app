import { render } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  it('Renders correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Splash Screen')).toBeTruthy();
  });
});
