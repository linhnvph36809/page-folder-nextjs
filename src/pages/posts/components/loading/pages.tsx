import { Spin } from "antd";

const Loading = ({ loading }: { loading: boolean }) => {
  return (
    loading && (
      <div className="fixed inset-0 flex justify-center items-center bg-[#ffffffa3]">
        <Spin />
      </div>
    )
  );
};

export default Loading;
