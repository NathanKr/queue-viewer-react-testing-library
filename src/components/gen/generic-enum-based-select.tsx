import { FC } from "react";
import {
  getEnumKeyValues,
  getEnumKeyFromEnumValue,
  getEnumValueFromEnumKey,
} from "../../lib/utils";

interface IProps {
  _enum: object;
  changeHandler: (newOption: string) => void;
  defaultValue: string;
}

const GenericEnumBasedSelect: FC<IProps> = ({
  _enum,
  changeHandler,
  defaultValue,
}) => {
  const array = getEnumKeyValues(_enum);
  const defaultValueAsEnumKey = getEnumKeyFromEnumValue(_enum, defaultValue);
  const optionElems = array.map((it, i) => (
    <option key={i} value={it.key}>
      {it.value}
    </option>
  ));
  const selectElem = (
    <select
      defaultValue={defaultValueAsEnumKey}
      onChange={(evt) => {
        const enumKey = evt.target.value;
        const enumValue = getEnumValueFromEnumKey(_enum, enumKey);
        changeHandler(enumValue);
      }}
    >
      {optionElems}
    </select>
  );

  return <div>{selectElem}</div>;
};

export default GenericEnumBasedSelect;
