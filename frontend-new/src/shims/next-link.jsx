function Link({ href, children, ...rest }) {
  const url = typeof href === "string" ? href : href?.pathname || "#";
  return <a href={url} {...rest}>{children}</a>;
}
export {
  Link as default
};
