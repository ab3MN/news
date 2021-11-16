import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ns from "../redux/news/newsServices";

const Actions = { ...ns };

export const useDispatchAcions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
