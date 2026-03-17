/** @jsx jsx */
import { jsx } from 'theme-ui';
import NextLink from 'next/link';

export function NavLink({ path, label, children, ...rest }) {
  return (
    <NextLink href={path} {...rest}>
      {children ? children : label}
    </NextLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
    <NextLink href={path} {...rest}>
      {children ? children : label}
    </NextLink>
  );
}
