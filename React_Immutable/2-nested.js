import { fromJS } from "immutable";

export default function accessImmutableObject(obj, array) {
  return fromJS(obj).getIn(array, undefined);
}