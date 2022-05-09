interface ITextOverflowParams {
  text?: string;
  characterCount: number;
}

export default ({ text, characterCount }: ITextOverflowParams) => {
  return text && text.length > characterCount
    ? text.substring(0, characterCount) + "..."
    : text;
};
