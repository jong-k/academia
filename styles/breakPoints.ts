const breakPoints = {
  mobile: 768,
};

export const mediaQuery = (key: keyof typeof breakPoints) => {
  return (style: TemplateStringsArray | string) =>
    `@media (max-width: ${breakPoints[key]}px) { ${style} }`;
};
