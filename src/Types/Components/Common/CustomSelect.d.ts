import { GroupBase, OptionsOrGroups } from "react-select";

export interface ICustomSelectProps {
  onChange?:
    | ((
        newValue: SingleValue<{
          value: any;
          label: any;
        }>,
        actionMeta: ActionMeta<{
          value: any;
          label: any;
        }>
      ) => void)
    | undefined;
  options:
    | OptionsOrGroups<
        {
          value: any;
          label: any;
        },
        GroupBase<{
          value: any;
          label: any;
        }>
      >
    | undefined;
}
