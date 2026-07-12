function Image({
  src,
  alt = "",
  width,
  height,
  className,
  priority: _priority,
  fill,
  sizes: _sizes,
  style,
  ...rest
}) {
  const resolved = typeof src === "string" ? src : src?.src;
  const finalStyle = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style }
    : { maxWidth: "100%", ...style };
  return <img
    src={resolved}
    alt={alt}
    width={fill ? undefined : width}
    height={fill ? undefined : height}
    className={className}
    style={finalStyle}
    {...rest}
  />;
}
export {
  Image as default
};
