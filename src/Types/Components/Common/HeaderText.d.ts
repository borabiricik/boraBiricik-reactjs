export interface IHeaderTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
    fontWeight?: "thin" | "normal" | "semibold" | "bold"
  }
