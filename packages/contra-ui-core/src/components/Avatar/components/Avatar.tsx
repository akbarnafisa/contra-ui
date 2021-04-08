import React from 'react'
import styled from 'styled-components'

import { AvatarBaseProps } from './AvatarTypes'
import { AvatarBaseStyle } from './AvatarStyles'
import { Title } from '~/components/Typography'

export interface AvatarProps
  extends AvatarBaseProps,
  React.HTMLAttributes<HTMLDivElement> { }

const AvatarBase = styled('div')`
  ${AvatarBaseStyle};
  `

const Avatar: React.FC<AvatarProps> = ({ className, style, size, entityName, src, alt, appearance, ...rest }) => {
  const getInitials = (name: string): string => {
    return name.charAt(0).toUpperCase()
  }

  const renderChild = (): JSX.Element | null => {
    // TODO: if error, show initial name
    if (src) {
      return <img src={src} alt={alt} />
    }

    if (entityName) {
      const level = size === '144' ? '44' : '24'
      return <Title level={level}>{getInitials(entityName)}</Title>
    }

    return null
  }

  return (
    <AvatarBase
      className={className}
      style={style}
      size={size}
      entityName={entityName}
      src={src}
      alt={alt}
      appearance={appearance}
      {...rest}
    >
      {renderChild()}
    </AvatarBase>
  )
}

Avatar.defaultProps = {
  size: '48',
  appearance: 'yellow',
}

export default Avatar
