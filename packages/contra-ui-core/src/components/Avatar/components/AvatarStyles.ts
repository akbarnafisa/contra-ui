import { AvatarBaseProps } from './AvatarTypes'
import { css } from 'styled-components';
import { DefaultTheme as theme } from '~/core/theme'

import { variant } from 'styled-system';

const avatarAppearance =  {
  blue: {
    backgroundColor: 'blue03',
  },
  pink: {
    backgroundColor: 'pink03',
  },
  yellow: {
    backgroundColor: 'yellow03',
  },
  green: {
    backgroundColor: 'green03',
  },
  red: {
    backgroundColor: 'red03',
  },
}

export const AvatarBaseStyle = (props : AvatarBaseProps) =>
  css`
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: 50%;
    line-height: 1;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    ${variant({
      prop: 'appearance',
      variants: avatarAppearance,
    })}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: ${theme.borders.md};
    border-radius: ${theme.radii.round};

    img: {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  `;
