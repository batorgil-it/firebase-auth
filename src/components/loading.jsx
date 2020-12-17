import { Spin } from "antd";

export default () => {
  return (
    <div className="main_loader">
      <div className="main_loader_wrapper">
        <Spin />
      </div>
    </div>
  );
};
