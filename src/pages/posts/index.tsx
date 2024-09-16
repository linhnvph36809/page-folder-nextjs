import { Table } from "antd";
import { columns } from "./column";
import usePosts from "../../hooks/usePosts";
import { useEffect } from "react";
import Loading from "./components/loading/pages";
import Layout from "./components/Layout";

const ListPost = () => {
  const { data, loading, error, fetchPosts } = usePosts();
  console.log(error);
  
  useEffect(() => {
    fetchPosts("posts", "GET");
  }, []);

  return (
    <>
      <Layout>
        <section>
          <h1 className="my-4 text-[40px] font-medium">List Post</h1>;
          <div>
            <Table columns={columns} dataSource={data?.posts} />
          </div>
        </section>
        <Loading loading={loading} />
      </Layout>
    </>
  );
};

export default ListPost;
